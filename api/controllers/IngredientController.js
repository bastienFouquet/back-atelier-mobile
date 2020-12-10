/**
 * IngredientController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  all: async (req, res) => {
    try {
      const ingredients = await Ingredient.find();
      return res.json(ingredients);
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },
  create: async (req, res) => {
    try {
      if (req.body.title) {
        const ingredient = await Ingredient.create({
          title: req.body.title
        }).fetch();
        return res.json(ingredient);
      } else {
        return res.badRequest('Fields required');
      }
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  }
};

