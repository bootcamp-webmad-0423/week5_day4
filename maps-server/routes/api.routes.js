const express = require('express');
const router = express.Router();

const Restaurant = require('./../models/Restaurant.model')

router.get("/restaurants", (req, res, next) => {

  Restaurant
    .find()
    .then(restaurants => res.json(restaurants))
    .catch(err => next(err))
});

module.exports = router