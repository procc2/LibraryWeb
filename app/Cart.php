<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $fillable = ['user_id', 'book_id','quantity'];

    public function book()
    {
        return $this->hasOne(Book::class,'book_id','book_id');
    }
}
