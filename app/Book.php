<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $primaryKey = 'book_id';
    protected $fillable = ['book_name', 'book_summary', 'book_description','publisher_id','remaining_stock','is_special'];

    public function categories()
    {
        return $this->belongsToMany(Category::class,null,'book_id','category_id');
    }

    public function authors(){
        return $this->belongsToMany(Author::class,'book_author','book_id','author_id');
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
    public function comments()
    {
        return $this->hasMany(Comment::class,'book_id','book_id');
    }
}