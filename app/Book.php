<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $primaryKey = 'book_id';
    protected $fillable = ['book_name', 'book_description', 'author_id','publisher_id','is_on_loan','is_special'];

    public function categories()
    {
        return $this->belongsToMany(Category::class,null,'book_id','category_id');
    }

    public function author()
    {
        return $this->belongsTo(Author::class,'author_id');
    }

    public function publisher()
    {
        return $this->belongsTo(Publisher::class,'publisher_id');
    }

    public function files()
    {
        return $this->hasMany(FileUpload::class,'book_id','book_id');
    }

    public function images(){
        return $this->files()->where('type','=','image');
    }

    public function ebooks(){
        return $this->files()->where('type','=','document');
    }

    public function favorites()
    {
        return $this->belongsToMany(User::class,'favorites','book_id','user_id');
    }
    public function cart(){
        return $this->belongsTo(Cart::class,'book_id','book_id');
    }
    
}