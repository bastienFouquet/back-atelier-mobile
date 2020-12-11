/**
 * NoteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
  all: async (req, res) => {
    try {
      const notes = await Note.find().populate('user');
      if (notes) {
        for (const note of notes) {
          delete note.user;
        }
        return res.json(notes);
      }
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  },
  one: async (req, res) => {
    try {
      const note = await Note.findOne({id: req.params.note}).populateAll();
      delete note.user.password;
      if (note) {
        return res.json(note);
      }
    } catch (e) {
      console.error(e);
      return res.serverError(e);
    }
  }/*,
    create: async (req, res) => {
    try {
        if (req.body.valeur) {
        const note = await Note.create({
            valeur: req.body.valeur,
            user: req.connection.user.id
        }).fetch();
        if (note) {
            return res.json(note);
        }
        } else {
        return res.badRequest('Fields required');
        }
    } catch (e) {
        console.error(e);
        return res.serverError(e);
    }
    }*/
};
