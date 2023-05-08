//get route, get by id route, and create route
const router = require('express').Router();
const { Activity, Pairing, CannabisIndex } = require('../../models');
const withAuth = require("../../utils/auth");

  
//Get
router.get("/", async (req, res) => {
    try {
        const activityData = await Activity.findAll({
    });
    res.status(200).json(activityData);
    } catch (err) {
    res.status(500).json(err);
    }
});

//Find a specific activity
router.get("/:id", async (req, res) => {
    try {
      const activityData = await Activity.findByPk(req.params.id, {
        include: [{ model: CannabisIndex}],
      });
      if (!activityData) {
        res.status(404).json({ message: "No activity found with that id!" });
        return;
      }
      res.status(200).json(activityData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


//Add an activity (Future Dev)
router.post("/", withAuth, async (req, res) => {
    try {    
      const review = await Activity.create({
        name: req.body.name,
        user_id: req.session.user_id,
      });
      res.status(200).json(review);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;