const express = require('express');
const userRouter = express.Router();
const bodyParser = require('body-parser');
const connection = require('../database');

userRouter.use(bodyParser.json());

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
  })
  .post((req, res, next) => {
    const user = req.body;
    if (user && user.email && user.phone && user.name) {
      connection.query(
        'INSERT INTO users (name, email, phone) VALUES (?, ?, ?);',
        [user.name, user.email, user.phone],
        (err, results) => {
          if (err) {
            next(err);
          } else {
            connection.query(
              `SELECT * FROM users WHERE id = ${results.insertId};`, 
              (err, results) => {
                if (err) {
                  next (err);
                } else {
                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.json(results);
                }
              }
            )
          }
        }
      )
    } else {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Bad Request. Please provide all user data (name, email, phone)')
    }
  })
module.exports = userRouter;
