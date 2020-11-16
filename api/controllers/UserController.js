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
  create: async (req, res) => {
    try {
      if (req.body.email && req.body.password) {
        const user = await User.create({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          password: req.body.password,
          role: 2,
          image: req.body.image
        }).fetch();
        if (user) {
          delete user.password;
          return res.json(user);
        }
      } else {
        return res.badRequest('Fields required');
      }
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  }
};

