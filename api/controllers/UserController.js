/**
 * @controller
 * UserController
 */

module.exports = {
  auth: async (req, res) => {
    try {
      const connection = await sails.helpers.authByCredentials.with({
        email: req.body.email,
        password: req.body.password
      });
      if (connection) {
        return res.json(connection);
      } else {
        return res.badRequest('Credentials not match');
      }
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },
  register: async (req, res) => {
    try {
      const user = await sails.helpers.registerUser.with({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        confirmationPassword: req.body.confirmationPassword
      });
      if (user) {
        return res.json(user);
      } else {
        return res.badRequest('Fields required');
      }
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  }
};

