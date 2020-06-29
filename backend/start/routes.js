"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

// Route.on('/').render('welcome')

// Funcions Routes
Route.group(() => {
  Route.post("new", "UserController.new");
  Route.post("login", "UserController.login");
  Route.get("getAll", "UserController.getAll");
  Route.get("get/:id", "UserController.get");
  Route.get("deleteUser/:id", "UserController.deleteUser");
  Route.post("edit/:id", "UserController.edit");
  Route.get("getByEmail/:email", "UserController.getByEmail");
  Route.post("changeAccess/:id", "UserController.changeAccess");
}).prefix("users");
