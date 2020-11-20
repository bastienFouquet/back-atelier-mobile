/**
 * Step.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'step',
  primaryKey: 'id',
  attributes: {

    id: {
      type: 'number',
      autoIncrement: true,
    },
    description: {
      type: 'string'
    },
    position: {
      type: 'number'
    },
    recipe: {
      columnName: 'recipe_id',
      model: 'recipe'
    }

  },

};

