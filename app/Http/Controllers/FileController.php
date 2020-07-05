<?php

namespace App\Http\Controllers;

use App\FileUpload;
use Illuminate\Http\Request;
use File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class FileController extends Controller
{
    private $image_ext = ['jpg', 'jpeg', 'png', 'gif'];
    private $audio_ext = ['mp3', 'ogg', 'mpga'];
    private $video_ext = ['mp4', 'mpeg'];
    private $document_ext = ['doc', 'docx', 'pdf', 'odt'];

    public function store(Request $request)
    {
        $max_size = (int) ini_get('upload_max_filesize') * 1024;
        $all_ext = implode(',', $this->allExtensions());
        
        //TODO: 
        if ($request->get('image')) {
            $validator = Validator::make($request->all(), [
                'image' => 'required|image64:' . $all_ext . '|max:' . $max_size
            ]);
            if($validator){
            $imageUpload = $request->get('image');
            $image = new FileUpload();

            $name = time() . '.' . explode('/', explode(':', substr($imageUpload, 0, strpos($imageUpload, ';')))[1])[1];
            $ext = explode('/', mime_content_type($imageUpload))[1];
            $type = $this->getType($ext);
            $data = substr($imageUpload, strpos($imageUpload, ',') + 1);
            // \Image::make($request->get('image'))->save(config('const.book_asset_dir') . $type . '/' . $name);
            $this->addNewFile('book/'.$type.'/'.$name,$data);

            return $image::create([
                'name' => $name,
                'type' => $type,
                'extension' => $ext,
                'book_id' => $request->input('bookId')
            ]);
            }
        }
        if ($request->file('ebook')) {
            $ebookFile = $request->file('ebook');
            $ext = $ebookFile->getClientOriginalExtension();
            $size = $ebookFile->getSize()/1048576;
            if(in_array($ext,$this->document_ext) && $size < $max_size){
            $ebook = new FileUpload();

            $upload_path = config('const.book_ebook_dir');
            $generated_new_name = time() . '.' . $ext;
            $type = $this->getType($ext);

            $old_file = FileUpload::where([
                ['book_id', $request->input('bookId')],
                ['type','=',$type],
                ['extension','=',$ext]
            ])->first();
            if($old_file){
                // File::delete(config('const.book_ebook_dir').$old_file->name);
                $old_filePath = 'book/' . $type . '/' . $old_file->name;
                $this->removeOldFile($old_filePath);
                $old_file->delete();
            }
            // $ebookFile->move($upload_path, $generated_new_name);
            $this->addNewFile('book/' . $type . '/' . $generated_new_name,$ebookFile);
            return $ebook::create([
                'name' => $generated_new_name,
                'type' => $type,
                'extension' => $ext,
                'book_id' => $request->input('bookId')
            ]);
            }
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

        

        if ($request->get('image')) {
            $validator = Validator::make($request->all(), [
                'image' => 'required|image64:' . $all_ext . '|max:' . $max_size
            ]);
            if($validator){
            $imageUpload = $request->get('image');
            $ext = explode('/', mime_content_type($imageUpload))[1];
            $type = $this->getType($ext);
            
            //remove old file
            $file = FileUpload::where([
                    ['book_id', $id],
                    ['type','=',$type]
                ])->first();
                if($file)
            $old_filePath = 'book/' . $type . '/' . $file->name;
            $this->removeOldFile($old_filePath);

            $name = time() . '.' . explode('/', explode(':', substr($imageUpload, 0, strpos($imageUpload, ';')))[1])[1];
            // $data = substr($imageUpload, strpos($imageUpload, ',') + 1);
            $this->addNewFile('book/'.$type.'/'.$name,$imageUpload);
            // $old_filePath = config('const.book_asset_dir') . $file->type . '/' . $file->name;
            // $new_filePath = config('const.book_asset_dir') . $type . '/' . $name;
            // File::delete($old_filePath);
            // \Image::make($request->get('image'))->save(config('const.book_asset_dir') . $type . '/' . $name);
            $file->name = $name;
            return response()->json($file->save());


            // if (Storage::disk('local')->exists($old_filePath)) {
            //     if (Storage::disk('local')->move($old_filePath, $new_filePath)) {
            //         $file->name = $name;
            //         return response()->json($file->save());
            //     }
            }
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

    private function removeOldFile($path){
        if(Storage::disk('s3')->exists($path)){
            Storage::disk('s3')->delete($path);
        }
    }

    private function addNewFile($path,$data)
    {
        $base64Data = substr($data, strpos($data, ',') + 1);
        if ( base64_encode(base64_decode($base64Data, true)) === $base64Data){
            $base64Data = substr($data, strpos($data, ',') + 1);
            Storage::disk('s3')->put($path, base64_decode($base64Data), 'public');
        } else {
            Storage::disk('s3')->put($path, file_get_contents($data), 'public');
        }
    }
}
