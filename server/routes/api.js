const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

router.get('/', controller.getUsers, (req, res) => res.status(200).json(res.locals.users));

router.post('/user', controller.createUser, (req, res) => res.status(200).json(res.locals.newUser));

module.exports = router;
