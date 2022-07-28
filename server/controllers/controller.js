const { User } = require('../models/models');

const controller = {
  createUser: async (req, res, next) => {
    try {
      const { firstName, lastName, favFoods } = req.body;
      if (!firstName || !lastName || !favFoods) {
        return next({
          log: 'controller.createUser: ERROR: missing input(s)',
          message: { err: 'Missing input(s)' },
        });
      }
      res.locals.newUser = await User.create({
        firstName, lastName, favFoods,
      });
      console.log(res.locals.newUser);
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
