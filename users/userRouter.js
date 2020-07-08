const express = require('express');

const Users = require("./userDb")
const Posts = require("../posts/postDb")

const router = express.Router();

router.post('/', validateUser, (req, res) => {
  Users.insert({name: req.body.name})
    .then(result => {
      res.status(201)
    })
});

router.post('/:id/posts', validateUserId, (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
});

router.get('/:id', validateUserId, (req, res) => {
  // do your magic!
});

router.get('/:id/posts', validateUserId, (req, res) => {
  // do your magic!
});

router.delete('/:id', validateUserId, (req, res) => {
  // do your magic!
});

router.put('/:id', validateUserId, validateUser, (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  Users.getById(req.params.id)
    .then(resource => {
      if(resource){
        req.user = resource;
        next();
      } else {
        res.status(400).json({message: "invalid user id"})
      }
    })
    .catch(err => {
      console.log(err)
    })
}

function validateUser(req, res, next) {
  const body = req.body
  const name = req.body.name

  if(!body){
    res.status(400).json({message: "missing post data"})
  } else if (!name){
    res.status(400).json({message: " missing required text field"})
  } else {
    next()
  }

}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
