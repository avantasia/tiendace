<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function createCategory(Request $request){

        $category = Category::create($request->all());

        return response()->json($category)->setCallback($request->input('callback'));;
    }

    public function updateCategory(Request $request, $id){
        $category  = Category::find($id);
        $category->name = $request->input('name');
        $category->image = $request->input('coverimage');

        $category->save();

        return response()->json($category)->setCallback($request->input('callback'));;
    }
    public function deleteCategory(Request $request,$id){
        $category  = Category::find($id);
        $category->delete();

        return response()->json('Removed successfully.')->setCallback($request->input('callback'));;
    }
    public function index(Request $request){

        $category  = Category::all();

        return response()->json($category)->setCallback($request->input('callback'));

    }

    public function products(Request $request,$id){

        $products= Category::findOrFail($id)->products;

        return response()->json($products)->setCallback($request->input('callback'));

    }



    //
}
