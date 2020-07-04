<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::with('roles', 'permissions')->get();
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if (Auth::user()->can('view-user'))
            return User::with('roles')->findOrFail($id);
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
        if (Auth::user()->can('update-user') || intval(Auth::id()) === intval($id)) {
            $user = User::findOrFail($id);
            $roles = $request->input('roles');
            $user->update($request->all());
            $user->roles()->sync($roles);
            return response()->json([
                'message' => 'Successfully updated.'
            ], 200);
        }else {
            return response()->json([
                'message' => 'Not Authorized.'
            ], 403);
        }
    }

    public function updatePassword(Request $request)
    {
        if (Auth::user()->can('update-user') || intval(Auth::id()) === intval($request->input('id'))) {
        $user = User::findOrFail($request->input('id'));
        $currentPassword = $request->input("currentPassword");

        if (Hash::check($currentPassword, $user->password)) {
            $request->validate([
                'newPassword' => 'required|string|confirmed'
            ]);
            $newPassword = $request->input("newPassword");
            return $user->fill([
                'password' => Hash::make($newPassword)
            ])->save();
        } else {
            return response()->json([
                'message' => 'Wrong credential!!'
            ], 403);
        }}else{
            return response()->json([
                'message' => 'Not Authorized.'
            ], 403);
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
        if (Auth::user()->can('delete-user')) {
            $user = User::findOrFail($id);
            $user->delete();
            return '';
        }
    }
}
