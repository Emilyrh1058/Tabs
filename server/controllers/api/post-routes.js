const router = require("express").Router();
const { Post, User } = require("../../models");

router.get('/', (req, res) => {
    Post.findAll({
        order: [[ 'created_at', 'DESC']],
        attributes: [
        'id',
        'firstName',
        'lastName',
        'note',
        'age',
        'city',
        'state',
        'phoneNumber',
        'user_id']
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
        'id',
        'firstName',
        'lastName',
        'note',
        'age',
        'city',
        'state',
        'phoneNumber',
        'user_id']
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.post('/', (req, res) => {
  console.log(req.body);
    Post.create({
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        notet: req.body.note,
        age: req.body.age,
        price: req.body.age,
        city: req.body.city,
        state: req.body.state,
        phoneNumber: req.body.phoneNumber,
        user_id: req.session.user_id
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {

      console.log(err);
      res.status(500).json(err);
    });
});

// PUT update a post 
router.put('/:id', (req, res) => {
  Post.update(
      {
        id: req.body.id,
        title: req.body.title,
        bootcampName: req.body.bootcampName,
        deliverFormat: req.body.deliverFormat,
        length: req.body.length,
        price: req.body.price,
        repeat: req.body.repeat,
        overallRating: req.body.overallRating,
        review_comments: req.body.review_comments,
        user_id: req.body.user_id
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id!' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
})

// DELETE a post 
router.delete('/:id', (req, res) => {
  Post.destroy({
      where: {
        id: req.params.id
      }
      })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id4' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
})

module.exports = router;