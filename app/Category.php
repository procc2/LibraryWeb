<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $primaryKey = 'category_id';
    protected $fillable = ['category_name'];

    public function books()
    {
        return $this->belongsToMany(Book::class,null,'category_id','book_id');
    }
}
