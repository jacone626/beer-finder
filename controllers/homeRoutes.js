const router = require('express').Router();
const { User, Pairing, Activity, Review, BeerIndex } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, async (req, res) => {
    try {
      const reviewData = await Review.findAll({
        order: [['createdAt', 'DESC']],
        limit: 5,
        include: [{ 
          model: User, 
          attributes: ["name"] },
          {model: Pairing,
            include: [  
            {model: Activity},
            {model: BeerIndex}
            ]
            }
        ]
    });


    const reviews = reviewData.map((data) =>
    data.get({ plain: true }));

// Pass serialized data and session flag into template
  res.render('homepage', {
      reviews, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/logout'), (req, res) => {
  req.session.destroy((err) => {
    if (err) {
    console.log(err);
  }

  res.redirect('/login')
})};



module.exports = router;


router.get('/strains', withAuth, async (req, res) => {
    res.render("strains");
  
 });


router.get('/strain/:strainName', withAuth, async (req, res) => {
  try {
    const beerData = await BeerIndex.findAll({
      where: { strain: req.params.strainName}
    });
    if (!beerData) {
      res.status(404).json({ message: "No beer found with that strain" });
      return;
    }


    const beerSerialize = beerData.map((beer) => beer.get({ plain: true }));
    console.log(beerSerialize)
    res.render("findStrain", {
    beerSerialize,
    strainName: req.params.strainName,
    logged_in: req.session.logged_in  
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
 });

//Get Activity-Beer Pairings
 router.get('/activity/:id', withAuth, async (req, res) => {
  try {
    const activityData = await Activity.findByPk(req.params.id, {
      include: [{ model: BeerIndex}]
    });
  
  const activity = activityData.get({ plain: true });
  
  res.render('activity-pairings', {
    activity,
    logged_in: req.session.logged_in,
  });
} catch (err) {
  res.status(500).json(err);
}
});

router.get('/FindAnActivity', withAuth, async (req, res) => {
  res.render("FindAnActivity");
});