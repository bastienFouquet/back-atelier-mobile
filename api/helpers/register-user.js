const passwordValidator = require('password-validator');
const emailValidator = require('email-validator');
const passValidator = new passwordValidator();
passValidator.is().min(8)
  .has().uppercase()
  .has().lowercase()
  .has().digits(1)
  .has().not().spaces();

module.exports = {
  friendlyName: 'Register user',
  description: '',
  inputs: {
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
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    confirmationPassword: {
      type: 'string',
      required: true
    }
  },
  exits: {
    success: {
      description: 'All done.',
    },
    error: {
      description: 'An error occured',
    }
  },
  fn: async function (inputs, exits) {
    try {
      if (inputs.password === inputs.confirmationPassword) {
        if(passValidator.validate(inputs.password)) {
          if (emailValidator.validate(inputs.email)) {
            const user = await User.create({
              firstname: inputs.firstname,
              lastname: inputs.lastname,
              email: inputs.email,
              password: inputs.password,
              role: 2,
            }).fetch();
            if (user) {
              delete user.password;
              return exits.success(user);
            } else {
              return exits.error({register: false, message: 'Error'});
            }
          } else {
            return exits.error({register: false, message: 'Error'});
          }
        } else {
          return exits.error({register: false, message: 'Error'});
        }
      } else {
        return exits.error({register: false, message: 'Error'});
      }
    } catch (e) {
      console.error(e);
      return exits.error(e);
    }
  }
};

