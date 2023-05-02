//get route, get by id route, and create route
const router = require('express').Router();
const { Pairing } = require('../../models');
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

module.exports = router;