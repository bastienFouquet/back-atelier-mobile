/**
 * IngredientRecipe.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'ingredient_recipe',
  primaryKey: 'id',
  attributes: {
    id: {
      type: 'number',
      autoIncrement: true
    },
    ingredient: {
      columnName: 'ingredient_id',
      model: 'ingredient'
    },
    recipe: {
      columnName: 'recipe_id',
      model: 'recipe'
    },
    quantity: {
      type: 'string'
    }
  },
};

