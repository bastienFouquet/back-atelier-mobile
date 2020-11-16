/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName : 'user',
  primaryKey: 'id',


  attributes: { 

    id: {
      type: 'number',
      autoIncrement : true
    },
    firstname: {
      type: 'string',
      allowNull: true
    },
    lastname: {
      type: 'string',
      allowNull: true
    },
    email: {
      type: 'string',
    },
    password: {
      type: 'string'
    },
    role: {
      columnName: 'role_id',
      model: 'role'
    },
    image: {
      type: 'string',
      allowNull: true
    },

  },

};

