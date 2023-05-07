const router = require('express').Router();
const { Review, User, Pairing, Activity, CannabisIndex } = require('../../models');
const withAuth = require("../../utils/auth");

//Add a review
router.post("/",  async (req, res) => {
    try {    
      const review = await Review.create({
        content: req.body.content,
        emoji_starRating: req.body.emoji_starRating,
        pairing_id: req.body.pairing_id,
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
          include: [{ 
            model: User, 
            attributes: ["name"] },
            {model: Pairing,
              include: [  
              {model: Activity},
              {model: CannabisIndex}
              ]
              }
          ]
      });
        res.status(200).json(reviewData);
      } catch (err) {
        res.status(500).json(err);
      }
    });

//Find a specific review
router.get("/:id", async (req, res) => {
  try {
    const reviewData = await Review.findByPk(req.params.id, {
      include: [{ 
        model: User, 
        attributes: ["name"] },
        {model: Pairing,
          include: [  
          {model: Activity},
          {model: CannabisIndex}
          ]
          }
      ]
    });
    if (!reviewData) {
      res.status(404).json({ message: "No review found with that id!" });
      return;
    }
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(400).json(err);
  }
});
  
//Delete a review
  router.delete("/:id", withAuth, async (req, res) => {
      try {
        const deleteReview = await Review.destroy({
          where: { 
            id: req.params.id, 
            user_id: req.session.user_id,},
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