<?php

namespace App\Http\Controllers\Api\V1;

use App\Book;
use App\Cart;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CartsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $book = Book::findOrFail($request->book_id);
        if ($book->remaining_stock > 0) {
            $exist = Cart::where([
                'book_id'       => $request->book_id,
                'user_id'       => $request->user_id,
            ])->first();
            if ($exist) {
                return response()->json([
                    'message' => 'Duplicated'
                ], 409);
            }
            $cart = Cart::create($request->all());
            return $cart;
        }
        return response()->json([
            'message' => 'Out of stock'
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $carts = Book::with('cart', 'images:name,book_id')->whereHas('cart', function ($query) use ($id) {
            $query->where('user_id', '=', $id);
        })->get();
        return $carts;
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $cart = Cart::findOrFail($id);
        $cart->delete();
        return '';
    }

    public function destroyAll(Request $request)
    {
        Cart::where('user_id',$request->userId)->delete();
        return '';
    }
}
