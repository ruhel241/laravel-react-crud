<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Post;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $posts = Post::paginate(2);
       return $posts;
        //  return response()->json($posts);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function add(Request $request)
    {
       
        $addPost = new Post();
        $addPost->title       = $request->post_title;
        $addPost->description = $request->description;
        $addPost->save();
    }



    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $editPost = Post::find($id);
        return $editPost;
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
       
        $updatePost = Post::find($id);
        $updatePost->title = $request->post_title;
        $updatePost->description = $request->description;

        // return $updatePost;

        $updatePost->save();
        return $updatePost;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function delete($id)
    {
     
        $deletePost = Post::find($id);
        $deletePost->delete(); 
        //return redirect()->route('welcome');
    }
}
