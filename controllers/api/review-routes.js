const router = require('express').Router();
const { Review } = require('../../models/index');
const withAuth = require("../../utils/auth");

//Add a review
router.post("/", withAuth, async (req, res) => {
    try {    
      const review = await Review.create({
        content: req.body.comment,
        weed_id: req.body.weed_id,
        user_id: req.session.user_id,
      });
      res.status(200).json(review);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
//Find all reviews
  router.get("/", async (req, res) => {
      try {
        const reviewData = await Review.findAll({
      });
        res.status(200).json(reviewData);
      } catch (err) {
        res.status(500).json(err);
      }
    });
  
//Delete a review
  router.delete("/:id", withAuth, async (req, res) => {
      try {
        const deleteReview = await Review.destroy({
          where: { id: req.params.id },
        });
    
        if (!deleteReview) {
          res.status(404).json({ message: "No review found with that id!" });
          return;
        }
        res.status(200).json(deleteReview);
      } catch (err) {
        res.status(400).json(err);
      }
    });

  module.exports = router;