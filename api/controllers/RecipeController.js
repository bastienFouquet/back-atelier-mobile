/**
 * RecipeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  all: async (req, res) => {
    try {
      const recipes = await Recipe.find().populate('user').populate('category');
      for (const recipe of recipes) {
        delete recipe.user.password;
      }
      if (recipes) {
        return res.json(recipes);
      }
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },
  one: async (req, res) => {
    try {
      const recipe = await Recipe.findOne({id: req.params.recipe}).populateAll();
      delete recipe.user.password;
      if (recipe) {
        return res.json(recipe);
      }
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },
  create: async (req, res) => {
    try {
      if (req.body.title && req.body.level && req.body.servings && req.body.category &&
        req.body.ingredients && req.body.duration && req.body.steps) {
        const recipe = await Recipe.create({
          title: req.body.title,
          level: req.body.level,
          servings: req.body.servings,
          category: req.body.category,
          user: req.connection.user.id,
          image: req.body.image,
          duration: req.body.duration
        }).fetch();
        for (const item of req.body.ingredients) {
          const ingredient = await Ingredient.findOrCreate({title: item.title}, {title: item.title});
          await IngredientRecipe.create({
            ingredient: ingredient.id,
            recipe: recipe.id,
            quantity: item.quantity
          });
        }
        for (const item of req.body.steps) {
          await Step.create({
            description: item.description,
            position: item.position,
            recipe: recipe.id
          });
        }
        if (recipe) {
          return res.json(recipe);
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

