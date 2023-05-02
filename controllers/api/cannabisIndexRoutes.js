const router = require('express').Router();
const { User, CannabisIndex} = require('../../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const CannabisIndexData = await CannabisIndex.findAll({
        include: [
          {
            model: CannabisIndex,
            attributes: ['name', 'review', 'emoji_starRating', 'strain'],
          },
        ],
      });
  
      // Serialize data so the template can read it
      const CannabisIndex = CannabisIndexData.map((CannabisIndex) => CannabisIndex.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('homepage','indica','hybrid','sativa', { 
        CannabisIndex, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;