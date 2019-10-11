const express = require('express');
const catsService = require('./cats-service');
const catsRouter = express.Router();

catsRouter
  .route('/')
  .get((req, res) => {
    res.status(200).json(catsService.getCat());
  })
  .delete((req, res, next) => {
    const cat = catsService.deleteCat();
    if (!cat) {
      return res.status(400).json({
        error: 'There are no cats left'
      });
    }
    return res.json(cat);
  });

module.exports = catsRouter;
