const express = require('express');
const userRouter = express.Router();

const connection = require('../database');

/* GET users listing. */
userRouter.route('/')
  .get((req, res, next) => {
    connection.query('SELECT * FROM users;', (err, results) => {
      if (err) {
        next(err);
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(results);
      }
    });
  });

module.exports = userRouter;
