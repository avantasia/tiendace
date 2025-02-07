<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return view('index');
});

$router->group(['prefix' => 'api/v1'], function () use ($router) {


    // Product actions
    $router->group(['prefix' => 'products'], function () use ($router) {

        //Get all products
        $router->get('/', 'ProductController@index');

    });

    // Cart actions
    $router->group(['prefix' => 'cart'], function () use ($router) {

        //Get User cart
        $router->get('/', 'CartController@index');

        //Add product to cart
        $router->post('/addtocart', 'CartController@addToCart');

        //Remove a product from cart
        $router->post('/removefromcart', 'CartController@removeFromCart');

        //Create cart
        $router->post('/createcart', 'CartController@createCart');

        //View carts products
        $router->get('/myproducts', 'CartController@myProducts');




    });

    // Order actions
    $router->group(['prefix' => 'orders'], function () use ($router) {

        //Get all Orders
        $router->get('/', 'OrderController@index');

        //Get pending Orders
        $router->get('/pending', 'OrderController@pending');

        //Create a new order
        $router->post('/create', 'OrderController@createOrder');

        //Get products for an order
        $router->get('/{id}/products', 'OrderController@products');

        //Mark order as sent
        $router->get('/{id}/send','OrderController@markAsSent');

        //Mark order as received
        $router->get('/{id}/receive','OrderController@markAsReceived');

        //Cancel order
        $router->get('/{id}/cancel','OrderController@cancelOrder');

    });



    // Category actions
    $router->group(['prefix' => 'categories'], function () use ($router) {

        //Get all categories
        $router->get('/', 'CategoryController@index');

        //Get all products from a category
        $router->get('/{id}/products', 'CategoryController@products');

    });


    // User actions
    $router->group(['prefix' => 'users'], function () use ($router) {

        // Register user
        $router->post('register', 'AuthController@register');

        // Get JWT token
        $router->post('login', 'AuthController@login');

        // Get user profile for currently logged user
        $router->get('profile', 'UserController@profile');

        // Get groups for currently logged user
        $router->get('groups', 'UserController@roles');

        // Get one user by id
        $router->get('user/{id}', 'UserController@singleUser');

        // Get one user groups by id
        $router->get('user/{id}/roles', 'UserController@singleUserRoles');

        // Get all users
        $router->get('/', 'UserController@allUsers');

        // Get info about the currently authenticated user
        $router->get('/myuser', 'UserController@myUser');

        // Update the currently authenticated user
        $router->post('/update', 'UserController@updateUser');

        // Check if the user is admin
        $router->get('/isadmin', 'UserController@isAdmin');

    });


});


