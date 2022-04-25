var express = require('express');
const dogs_controller= require('../controllers/dogs'); 
var router = express.Router();

// A little function to check if we have an authorized user and continue on or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET home page. */
router.get('/', dogs_controller.dogs_view_all_Page);

router.get('/detail', dogs_controller.dogs_view_one_Page); 

/* GET create costume page */ 
router.get('/create',secured, dogs_controller.dogs_create_Page); 

/* GET create update page */ 
router.get('/update',secured, dogs_controller.dogs_update_Page); 

/* GET delete costume page */ 
router.get('/delete',secured, dogs_controller.dogs_delete_Page); 
/* GET update costume page */ 

 

module.exports = router;
