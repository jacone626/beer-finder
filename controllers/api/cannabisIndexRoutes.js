const router = require('express').Router();
const { CannabisIndex, Pairing, Activity } = require('../../models');
const withAuth = require('../../utils/auth');

//Get all cannabis data
router.get('/', async (req, res) => {
    try {
      const cannabisData = await CannabisIndex.findAll({
      });
      res.status(200).json(cannabisData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//Get cannabis by id
router.get("/:id", async (req, res) => {
    try {
      const cannabisData = await CannabisIndex.findByPk(req.params.id, {
        include: [{ model: Activity, through: Pairing}],
      });
      if (!cannabisData) {
        res.status(404).json({ message: "No cannabis found with that id!" });
        return;
      }
      res.status(200).json(cannabisData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//get by strain
router.get("/strain/:strainName", async (req, res) => {
  try {
    const cannabisData = await CannabisIndex.findAll({
      where: { strain: req.params.strainName}
    });
    if (!cannabisData) {
      res.status(404).json({ message: "No cannabis found with that strain" });
      return;
    }
    res.status(200).json(cannabisData);
  } catch (err) {
    res.status(500).json(err);
  }
});


//Add a cannabis (Future Dev)
router.post("/", withAuth, async (req, res) => {
  try {    
    const review = await CannabisIndex.create({
      name: req.body.name,
      description: req.body.description,
      strain: req.body.strain,
      user_id: req.session.user_id,
    });
    res.status(200).json(review);
  } catch (err) {
    res.status(400).json(err);
  }
}); 
  module.exports = router;