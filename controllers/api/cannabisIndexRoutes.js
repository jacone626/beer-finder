const router = require('express').Router();
const { CannabisIndex } = require('../../models');
// const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
      const cannabisData = await CannabisIndex.findAll({
        include: [
          {
            model: CannabisIndex,
            attributes: ['id', 'name', 'description', 'strain'],
          },
        ],
      });
  
      // Serialize data so the template can read it
      const cannabisIndexData = cannabisData.map((CannabisIndex) => CannabisIndex.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('homepage', { 
        cannabisIndexData, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
  module.exports = router;