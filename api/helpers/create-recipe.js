module.exports = {
  friendlyName: 'Create recipe',
  description: 'Create a recipe',
  inputs: {
    title: {
      type: 'string',
      required: true
    },
    level: {
      type: 'string',
      required: true
    },
    categoryId: {
      type: 'number',
      required: true
    },
    servings: {
      type: 'number',
      required: true
    },
    duration: {
      type: 'string',
      required: true
    },
    ingredients: {
      type: 'ref',
      required: true
    },
    steps: {
      type: 'ref',
      required: true
    },
    userId: {
      type: 'number',
      required: true
    },
    image: {
      type: 'string',
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
      const recipe = await Recipe.create({
        title: inputs.title,
        level: inputs.level,
        category: inputs.categoryId,
        servings: inputs.servings,
        user: inputs.userId,
        image: inputs.image,
        duration: inputs.duration
      }).fetch();
      if (recipe) {
        for (const ingredient of inputs.ingredients) {
          await IngredientRecipe.create({
            ingredient: ingredient.id,
            recipe: recipe.id,
            quantity: ingredient.quantity
          });
        }
        for (const step of inputs.steps) {
          await Step.create({
            description: step.description,
            position: step.position,
            recipe: recipe.id
          });
        }
        const result = await Recipe.findOne({id: recipe.id}).populateAll();
        if (result) {
          delete result.user.id;
          delete result.user.password;
          delete result.user.email;
          delete result.user.role;
          return exits.success(result);
        } else {
          return exits.error();
        }
      }
    } catch (e) {
      console.error(e);
      return exits.error(e);
    }
  }
};

