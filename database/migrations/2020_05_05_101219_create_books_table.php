<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->increments('book_id');
            $table->string('book_name',50)->nullable();
            $table->string('book_description')->nullable();
            $table->integer('author_id')->unsigned()->index();
            $table->integer('publisher_id')->unsigned()->index();
            $table->boolean('is_special')->default(false);
            $table->integer('remaining_stock')->default(1);
            $table->timestamps();

            $table->foreign('publisher_id')->references('publisher_id')->on('publishers');
            $table->foreign('author_id')->references('author_id')->on('authors');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('books');
    }
}
