const { User } = require('../models/models');

const controller = {
  createUser: async (req, res, next) => {
    try {
      const { firstName, lastName, favFoods } = req.body;
      res.locals.newUser = await User.create({
        firstName, lastName, favFoods,
      });
      return next();
    } catch (err) {
      return next({
        log: `controller.createUser: ERROR: ${err}`,
        message: { err: 'Invalid database query' },
      });
    }
  },
  getUsers: async (req, res, next) => {
    try {
      res.locals.users = await User.find({});
      return next();
    } catch (err) {
      return next({
        log: `controller.getUsers: ERROR: ${err}`,
        message: { err: 'Invalid database query' },
      });
    }
  },
};

module.exports = controller;
