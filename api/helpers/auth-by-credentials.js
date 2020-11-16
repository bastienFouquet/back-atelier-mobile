/**
 * @helper
 * authByCredentials helper
 */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
module.exports = {
  friendlyName: 'Auth by credentials',
  description: 'authenticate user by credentials',
  inputs: {
    email: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    }
  },
  exits: {
    success: {
      description: 'All done.',
    },
    error: {
      description: 'An error occured'
    }
  },
  fn: async function (inputs, exits) {
    try {
      const user = await User.findOne({
        email: inputs.email
      }).populate('role');
      if (user) {
        if (bcrypt.compareSync(inputs.password, user.password)) {
          const token = jwt.sign({
            id: user.id,
            role: user.role
          }, sails.config.custom.secret);
          delete user.password;
          return exits.success({
            token: token,
            user: user
          });
        } else {
          return exits.success();
        }
      } else {
        return exits.success();
      }
    } catch (e) {
      console.error(e);
      return exits.error(e);
    }
  }
};

