/**
 * CategoryController
 */

module.exports = {
  all: async (req, res) => {
    try {
      const categories = await Category.find();
      if (categories) {
        return res.json(categories);
      } else {
        return res.json(null);
      }
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  }
};

