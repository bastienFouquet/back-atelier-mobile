/**
 * Note.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    tableName: 'note',
    primaryKey: 'id',
    attributes: {
      id: {
        type: 'number',
        autoIncrement: true
      },
      valeur: {
        columnName: 'valeur',
        type: 'number'
      },
      user: {
        columnName: 'user_id',
        model: 'user'
      }
    },
  };
