const express = require('express');
const store = require('../store');
const adoptersRouter = express.Router();

const jsonBodyParser = express.json();

adoptersRouter
  .route('/')
  .get((req, res, next) => {
    if (!store.adopters.isEmpty()) {
      res.status(200).json(store.adopters.display());
    } else {
      return res.status(204).json('no history');
    }
  })
  .post(jsonBodyParser, (req, res) => {
    if (!store.adopters.isEmpty()) {
      const duplicate = store.adopters.display().find(function(element) {
        return element === req.body.name;
      });
      if (duplicate === null) {
        store.adopters.enqueue(req.body.name);
        console.log('1');
        res.status(204).json('duplicate');
      } else {
        store.adopters.enqueue(req.body.name);
        console.log('2');
        res.status(201).json(store.adopters.peek());
      }
    }
  });

module.exports = adoptersRouter;
