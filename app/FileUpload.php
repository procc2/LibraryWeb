<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FileUpload extends Model
{
    protected $fillable =
    [
        'name','type','extension','book_id'
    ];
    
    public function book(){
        return $this->belongsTo(Book::class);
    }
}
