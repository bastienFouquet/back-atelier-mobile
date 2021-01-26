/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  /**
   * UserController
   */
  'post /user/auth': {
    controller: 'UserController',
    action: 'auth'
  },
  'post /user/register': {
    controller: 'UserController',
    action: 'register'
  },

  /**
   * RecipeController
   */
  'get /recipes': {
    controller: 'RecipeController',
    action: 'all'
  },
  'get /recipes/:recipe': {
    controller: 'RecipeController',
    action: 'one'
  },
  'post /recipes/create': {
    controller: 'RecipeController',
    action: 'create'
  },

  'get /my/recipes': {
    controller: 'RecipeController',
    action: 'allByUser'
  },
  'delete /recipes/destroy/:id': {
    controller: 'RecipeController',
    action: 'destroy'
  },

  /**
   * NoteController
   */
  'get /note': {
    controller: 'NoteController',
    action: 'all'
  },
  'get /note/:note': {
    controller: 'NoteController',
    action: 'one'
  },
  'post /note/create': {
    controller: 'NoteController',
    action: 'create'
  },

  /**
   * CategoryController
   */
  'get /categories': {
    controller: 'CategoryController',
    action: 'all'
  },

  /**
   * IngredientController
   */
  'get /ingredients': {
    controller: 'IngredientController',
    action: 'all'
  },
  'post /ingredient/create': {
    controller: 'IngredientController',
    action: 'create'
  }



  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/


};
