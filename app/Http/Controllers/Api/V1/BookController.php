<?php

namespace App\Http\Controllers\Api\V1;

use App\Author;
use App\Book;
use App\Category;
use App\Http\Controllers\Controller;
use App\Publisher;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Book::with('author:author_id,author_name', 'publisher:publisher_id,publisher_name', 'images:book_id,name', 'categories:category_name')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    { }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (Auth::user()->can('update-book')) {
            $book = Book::create($request->all());
            $categoryIds = $request->input('categoryIds');
            foreach ($categoryIds as $categoryId) {
                $book->categories()->attach($categoryId);
            }
            return $book;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if (Auth::user()->can('view-book')) {
            $book = Book::with('author:author_id,author_name', 'publisher:publisher_id,publisher_name', 'images', 'ebooks', 'categories:category_name', 'comments', 'comments.user:name,user_id')->findOrFail($id);
            $book->setAttribute("categoryIds", $book->categories()->get());

            return $book;
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if (Auth::user()->can('update-book')) {
            $book = Book::findOrFail($id);
            $book->update($request->all());
            $categoryIds = $request->input('categoryIds');
            if (!is_array($categoryIds[0]) && (!$categoryIds[0] instanceof Traversable))
                $book->categories()->sync($categoryIds);
            return $book;
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (Auth::user()->can('delete-book')) {
            $book = Book::findOrFail($id);
            $book->delete();
            return '';
        }
    }

    public function getWithFilter(Request $request)
    {
        $books = [];
        $categoryId = $request->input('categoryId');
        if ($categoryId != NULL) {
            $category = Category::findOrFail($categoryId);
            return $category->books()->with('author:author_id,author_name', 'publisher:publisher_id,publisher_name', 'images:book_id,name','ebooks', 'categories:category_name')->get();
        }
        $authorId = $request->input('authorId');
        if ($authorId != NULL) {
            $author = Author::findOrFail($authorId);
            return $author->books()->with('author:author_id,author_name', 'publisher:publisher_id,publisher_name', 'images:book_id,name','ebooks', 'categories:category_name')->get();
        }
        $publisherId = $request->input('publisherId');
        if ($publisherId != NULL) {
            $publisher = Publisher::findOrFail($publisherId);
            return $publisher->books()->with('author:author_id,author_name', 'publisher:publisher_id,publisher_name', 'images:book_id,name','ebooks', 'categories:category_name')->get();
        }
        if ($request->exists('special')) {
            $books = Book::with('author:author_id,author_name', 'publisher:publisher_id,publisher_name', 'images:book_id,name','ebooks', 'categories:category_name')->where('is_special', 1)->limit(10)->get();
        }
        if ($request->exists('new')) {
            $books = Book::with('author:author_id,author_name', 'publisher:publisher_id,publisher_name', 'images:book_id,name','ebooks', 'categories:category_name')->orderBy('created_at', 'desc')->limit(10)->get();
        }

        // foreach ($books as $key => $book) {
        //     $author = $book->author()->pluck('author_name');
        //     $publisher = $book->publisher()->pluck('publisher_name');
        //     $books[$key]->setAttribute("author",$author);
        //     $books[$key]->setAttribute("publisher",$publisher);
        // }
        return $books;
    }

    public function like(Request $request)
    {
        $bookId = $request->input('book_id');
        $user_id = $request->input('user_id');
        if ($bookId && $user_id) {
            $book = Book::findOrFail($bookId);
            $book->favorites()->attach($user_id);
            return response()->json([
                'message' => 'Success Update'
            ], 201);
        }
        return response()->json([
            'message' => 'Nothing updated'
        ], 201);
    }

    public function dislike(Request $request)
    {
        $bookId = $request->input('book_id');
        $userId = $request->input('user_id');
        if ($bookId && $userId) {
            $book = Book::findOrFail($bookId);
            $book->favorites()->detach($userId);
            return response()->json([
                'message' => 'Success Update'
            ], 201);
        }
        return response()->json([
            'message' => 'Nothing updated'
        ], 201);
    }

    public function getLike(Request $request)
    {
        $bookId = $request->input('book_id');
        $userId = $request->input('user_id');
        $isFavorite = false;
        if ($bookId && $userId) {
            $book = Book::findOrFail($bookId);
            $isFavorite = $book->favorites()->where('favorites.user_id', $userId)->exists();
            return response()->json([
                'isFavorite' => $isFavorite
            ], 201);
        } else if ($userId && !$bookId) {
            $user = User::findOrFail($userId);
            return $user->favorites()->with('author:author_id,author_name', 'publisher:publisher_id,publisher_name', 'images:book_id,name', 'categories:category_name')->where('favorites.user_id', $userId)->get();
        }
    }
}
