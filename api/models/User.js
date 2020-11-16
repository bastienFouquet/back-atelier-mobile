/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'user',
  primaryKey: 'id',
  attributes: {
    id: {
      type: 'number',
      autoIncrement: true
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
      unique: true,
      allowNull: false
    },
    password: {
      type: 'string',
      allowNull: false
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

  beforeCreate: async function (recordToCreate, proceed) {
    recordToCreate.password = await sails.helpers.hashPassword.with({
      password: recordToCreate.password
    }).catch(e => proceed(e));
    proceed();
  },
};

