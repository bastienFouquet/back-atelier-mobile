/**
 * Ingredient.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'ingredient',
  primaryKey: 'id',
  attributes: {
    id: {
      type: 'number',
      autoIncrement: true
    },
    title: {
      type: 'string',
      unique: true
    },
    recipes: {
      collection: 'recipe',
      via: 'ingredient',
      through: 'ingredientrecipe'
    }
  },
};

