const { User } = require('../models/models');

const controller = {
  createUser: async (req, res, next) => {
    try {
      const { firstName, lastName, favFoods } = req.body;
      if (!firstName || !favFoods) {
        return next({
          log: 'controller.createUser: ERROR: missing input(s)',
          message: { err: 'Missing input(s)' },
        });
      }
      await User.create({
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
  deleteUser: async (req, res, next) => {
    try {
      const { _id } = req.params;
      await User.deleteOne({ _id });
      return next();
    } catch (err) {
      return next({
        log: `controller.deleteUser: ERROR: ${err}`,
        message: { err: 'Invalid database query' },
      });
    }
  },
  updateUser: async (req, res, next) => {
    try {
      const { _id } = req.params;
      const { favFoods } = req.body;

      await User.findOneAndUpdate({ _id }, { favFoods });
      return next();
    } catch (err) {
      return next({
        log: `controller.deleteUser: ERROR: ${err}`,
        message: { err: 'Invalid database query' },
      });
    }
  },
};

module.exports = controller;
