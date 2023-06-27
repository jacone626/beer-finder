const router = require('express').Router();
const { BeerIndex, Pairing, Activity } = require('../../models');
const withAuth = require('../../utils/auth');

//Get all beer data
router.get('/', async (req, res) => {
    try {
      const beerData = await BeerIndex.findAll({
      });
      res.status(200).json(beerData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//Get beer by id
router.get("/:id", async (req, res) => {
    try {
      const beerData = await BeerIndex.findByPk(req.params.id, {
        include: [{ model: Activity, through: Pairing}],
      });
      if (!beerData) {
        res.status(404).json({ message: "No beer found with that id!" });
        return;
      }
      res.status(200).json(beerData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//get by strain
router.get("/strain/:strainName", async (req, res) => {
  try {
    const beerData = await BeerIndex.findAll({
      where: { strain: req.params.strainName}
    });
    if (!beerData) {
      res.status(404).json({ message: "No beer found with that strain" });
      return;
    }
    res.status(200).json(beerData);
  } catch (err) {
    res.status(500).json(err);
  }
});


//Add a beer (Future Dev)
router.post("/", withAuth, async (req, res) => {
  try {    
    const review = await BeerIndex.create({
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