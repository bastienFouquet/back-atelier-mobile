/**
 * RecipeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    all: async function(req, res) {
        try {
            const recipes = await Recipe.find().populateAll();
            if (recipes) {
                return res.json(recipes);
            }
        } catch(e) {
            console.error(e);
            return res.status(500);
        }
    }

};

