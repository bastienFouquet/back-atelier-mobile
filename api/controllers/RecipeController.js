/**
 * RecipeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  all: async (req, res) => {
    try {
      const recipes = await Recipe.find().populate('user').populate('category').populate('notes');
      for (const recipe of recipes) {
        let total = 0;
        for (const note of recipe.notes) {
          total += note.value;
        }
        recipe.average = total / recipe.notes.length;
      }
      for (const recipe of recipes) {
        delete recipe.user.password;
        delete recipe.user.email;
        delete recipe.user.role;
        delete recipe.user.id;
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
      for (const ingredient of recipe.ingredients) {
        const ingredientRecipe = (await IngredientRecipe.find({
          ingredient: ingredient.id,
          recipe: recipe.id
        }).limit(1))[0];
        ingredient.quantity = ingredientRecipe.quantity;
      }
      delete recipe.user.password;
      delete recipe.user.email;
      delete recipe.user.role;
      delete recipe.user.id;
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
      const recipe = await sails.helpers.createRecipe.with({
        title: req.body.title,
        level: req.body.level,
        categoryId: req.body.categoryId,
        servings: req.body.servings,
        duration: req.body.duration,
        ingredients: req.body.ingredients,
        steps: req.body.steps,
        userId: req.connection.user.id,
        image: req.body.image
      });
      return res.json(recipe);
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },
  allByUser: async (req, res) => {
    try {
      const recipes = await Recipe.find({user: req.connection.user.id}).populate('user').populate('category').populate('notes');
      for (const recipe of recipes) {
        let total = 0;
        for (const note of recipe.notes) {
          total += note.value;
        }
        recipe.average = total / recipe.notes.length;
      }
      for (const recipe of recipes) {
        delete recipe.user.password;
        delete recipe.user.email;
        delete recipe.user.role;
        delete recipe.user.id;
      }
      return res.json(recipes);
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },
  delete: async (req, res) => {
    try {
      await IngredientRecipe.destroy({recipe: req.params.id});
      await Step.destroy({recipe: req.params.id});
      const recipe = await Recipe.destroy({id: req.params.id}).fetch();
      return res.json(recipe);
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },
};

