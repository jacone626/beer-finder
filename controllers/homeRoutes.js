const router = require('express').Router();
const { User, Pairing, Activity, Review, CannabisIndex } = require('../models');
const withAuth = require('../utils/auth');

const pairing = [
  {
    cannabis: {
      id: 1,
    name: "Chem De La Chem #5",
    description: "TBD",
    strain: "Indica",
    image: "assests/ChemDeLaChemNo5_INDICA.jpg"
    },

    activity: {
      id: 1,
      name: "Playing guitar",
      emoji: "🎸"
    },


  },

  {
    cannabis: {
      id: 2,
    name: "Double Afghan Chunk #24",
    description: "TBD",
    strain: "Indica",
    image:"assests/DoubleAfghanChunk24_INDICA.jpg"
    },

    activity: {
      id: 2,
      name: "Snowboarding",
      emoji: "🏂"
    }
  }
]

router.get('/', async (req, res) => {
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


const reviews = reviewData.map((review) => review.get({ plain: true }));

// Pass serialized data and session flag into template
  res.render('homepage', {
      reviews, 
      // logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/homepage');
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


router.get('/homepage', async (req, res) => {
  try {
  // const userData = await user.findAll({
  //   include: [{
  //     model: User,
  //     attributes: ["name"],
  //   },
  // ],
  // });
  
  res.render('homepage')
}
catch (err){
  res.status(500).json(err)
}
})
module.exports = router;



router.get('/strain/:strainName', async (req, res) => {
  try {
   res.render('findStrain', {
    // users,
    // logged_in: req.session.logged_in
   });
  } catch (err) {
   res.status(500).json(err);
  }
 });

//Get Activity-Weed Pairings
 router.get('/pairing/:id', async (req, res) => {
  try {
    const pairingData = await Pairing.findByPk(req.params.id, {
      include: [{
        all: true,
        nested: true,
      }]
  });
  
  const pairing = pairingData.get({ plain: true });
  
  res.render('activity-pairings', {
    pairing,
    logged_in: req.session.logged_in,
  });
} catch (err) {
  res.status(500).json(err);
}
});