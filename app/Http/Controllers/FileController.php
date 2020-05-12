<?php

namespace App\Http\Controllers;

use App\FileUpload;
use Illuminate\Http\Request;
use File;
use Illuminate\Support\Facades\Validator;

class FileController extends Controller
{
    private $image_ext = ['jpg', 'jpeg', 'png', 'gif'];
    private $audio_ext = ['mp3', 'ogg', 'mpga'];
    private $video_ext = ['mp4', 'mpeg'];
    private $document_ext = ['doc', 'docx', 'pdf', 'odt'];

    public function store(Request $request)
    {
        $max_size = (int) ini_get('upload_max_filesize') * 1000;
        $all_ext = implode(',', $this->allExtensions());
        $validator = Validator::make($request->all(), [
            'image' => 'required|image64:' . $all_ext . '|max:' . $max_size
        ]);
        //TODO: 
        if ($request->get('image') && $validator) {
            $imageUpload = $request->get('image');
            $image = new FileUpload();

            $name = time() . '.' . explode('/', explode(':', substr($imageUpload, 0, strpos($imageUpload, ';')))[1])[1];
            $ext = explode('/', mime_content_type($imageUpload))[1];
            $type = $this->getType($ext);
            \Image::make($request->get('image'))->save(config('const.book_asset_dir') . $type . '/' . $name);

            return $image::create([
                'name' => $name,
                'type' => $type,
                'extension' => $ext,
                'book_id' => $request->input('bookId')
            ]);
        }
        return response()->json(false);
    }

    /**
     * Edit specific file
     * @param  integer  $id      File Id
     * @param  Request $request  Request with form data: filename
     * @return boolean           True if success, otherwise - false
     */
    public function edit($id, Request $request)
    {
        $max_size = (int) ini_get('upload_max_filesize') * 1000;
        $all_ext = implode(',', $this->allExtensions());

        $file = FileUpload::where('book_id', $id)->first();

        $validator = Validator::make($request->all(), [
            'image' => 'required|image64:' . $all_ext . '|max:' . $max_size
        ]);

        if ($request->get('image') && $validator) {
            $imageUpload = $request->get('image');
            $name = time() . '.' . explode('/', explode(':', substr($imageUpload, 0, strpos($imageUpload, ';')))[1])[1];
            $ext = explode('/', mime_content_type($imageUpload))[1];
            $type = $this->getType($ext);
            
            $old_filename = config('const.book_asset_dir') . $file->type . '/' . $file->name;
            $new_filename = config('const.book_asset_dir') . $type . '/' . $name;
            File::delete($old_filename);
            \Image::make($request->get('image'))->save(config('const.book_asset_dir') . $type . '/' . $name);
            $file->name = $name;
            return response()->json($file->save());
            // if (Storage::disk('local')->exists($old_filename)) {
            //     if (Storage::disk('local')->move($old_filename, $new_filename)) {
            //         $file->name = $name;
            //         return response()->json($file->save());
            //     }
            // }
        }

        return response()->json(false);
    }

    /**
     * Get type by extension
     * @param  string $ext Specific extension
     * @return string      Type
     */
    private function getType($ext)
    {
        if (in_array($ext, $this->image_ext)) {
            return 'image';
        }

        if (in_array($ext, $this->audio_ext)) {
            return 'audio';
        }

        if (in_array($ext, $this->video_ext)) {
            return 'video';
        }

        if (in_array($ext, $this->document_ext)) {
            return 'document';
        }
    }

    /**
     * Get all extensions
     * @return array Extensions of all file types
     */
    private function allExtensions()
    {
        return array_merge($this->image_ext, $this->audio_ext, $this->video_ext, $this->document_ext);
    }
}
