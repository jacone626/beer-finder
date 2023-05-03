//get route, get by id route, and create route
const router = require('express').Router();
const { Pairing, Activity, CannabisIndex} = require('../../models');
// const withAuth = require("../../utils/auth");

  
//Get
router.get("/", async (req, res) => {
    try {
    const pairingData = await Pairing.findAll({
    });
    res.status(200).json(pairingData);
    } catch (err) {
    res.status(500).json(err);
    }
});

//Find a specific pairing
router.get("/:id", async (req, res) => {
    try {
      const activityData = await Pairing.findByPk(req.params.id, {
        // include: [{ 
        //     model: Activity, 
        //     attributes: ["name"] },
        //   {
        //     model: CannabisIndex,
        //     attributes: ["name"] },
        // ],
      });
      if (!activityData) {
        res.status(404).json({ message: "No pairing found with that id!" });
        return;
      }
      res.status(200).json(activityData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//Add a pairing
router.post("/", async (req, res) => {
    try {    
      const review = await Pairing.create({
       activity_id: req.body.activity_id,
       cannabisIndex_id: req.body.cannabisIndex_id,
      });
      res.status(200).json(review);
    } catch (err) {
      res.status(400).json(err);
    }
  });
module.exports = router;