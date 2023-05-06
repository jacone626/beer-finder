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
    image: "assets/ChemDeLaChemNo5_INDICA.jpg"
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
    image:"assets/DoubleAfghanChunk24_INDICA.jpg"
    },

    activity: {
      id: 2,
      name: "Snowboarding",
      emoji: "🏂"
    }
  },

  {
    cannabis: {
      "id": 10,
    "name": "Marie Laveau #42",
    "description": "TBD",
    "strain": "Indica",
    "image":"assets/MarieLaveauNo42.png"
    },

    activity: {
      "id": 4,
      "name": "Photography",
      "emoji": "📷"
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


    const reviews = reviewData.map((data) =>
    data.get({ plain: true }));

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



router.get('/strain/:strainName', async (req, res) => {
  try {
    // if (req.session.logged_in) {
    //   res.redirect('/strain/:strainName');
    //   return;
    // }
  
    // res.render('login');

   res.render('findStrain', {
    // users,
    // logged_in: req.session.logged_in
   });
  } catch (err) {
   res.status(500).json(err);
  }
 });

//Get Activity-Weed Pairings
 router.get('/activity/:id', async (req, res) => {
  try {
    const activityData = await Activity.findByPk(req.params.id, {
      include: [{ model: CannabisIndex}]
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