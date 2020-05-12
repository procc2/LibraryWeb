<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Loan extends Model
{
    protected $fillable = ['loan_date', 'loan_is_active', 'user_id', 'book_id'];
}
