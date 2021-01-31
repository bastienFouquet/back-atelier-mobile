/**
 * Recipe.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'recipe',
  primaryKey: 'id',
  attributes: {
    id: {
      type: 'number',
      autoIncrement: true,
    },
    title: {
      type: 'string'
    },
    level: {
      type: 'number'
    },
    category: {
      columnName: 'category_id',
      model: 'category'
    },
    servings: {
      type: 'number'
    },
    user: {
      columnName: 'user_id',
      model: 'user'
    },
    image: {
      type: 'string',
      allowNull: true
    },
    ingredients: {
      collection: 'ingredient',
      via: 'recipe',
      through: 'ingredientrecipe'
    },
    steps: {
      collection: 'step',
      via: 'recipe'
    },
    notes: {
      collection: 'note',
      via: 'recipe'
    },
    duration: {
      type: 'string'
    }
  },
};

