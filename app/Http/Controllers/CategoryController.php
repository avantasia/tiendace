<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\JsonResponse;
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

    /**
     * Create a new category
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function createCategory(Request $request)
    {

        $category = Category::create($request->all());

        return response()->json($category)->setCallback($request->input('callback'));;
    }

    /**
     * Update a category field
     *
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function updateCategory(Request $request, $id)
    {
        $category = Category::find($id);
        $category->name = $request->input('name');
        $category->image = $request->input('coverimage');

        $category->save();

        return response()->json($category)->setCallback($request->input('callback'));;
    }

    /**
     * Delete a category
     *
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function deleteCategory(Request $request, $id)
    {
        $category = Category::find($id);
        $category->delete();

        return response()->json('Removed successfully.')->setCallback($request->input('callback'));;
    }

    /**
     * Get all categories
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request)
    {

        $category = Category::all();

        return response()->json($category)->setCallback($request->input('callback'));

    }

    /**
     * Get all products given a category
     *
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function products(Request $request, $id)
    {

        $products = Category::findOrFail($id)->products;

        return response()->json($products)->setCallback($request->input('callback'));

    }


    //
}
