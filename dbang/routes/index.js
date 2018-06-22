var express = require('express');
var router = express.Router();
var car = require('../model/car.model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/',function(req,res,next){

  var newcustomer =new car(req.body);
  
  newcustomer.save(
  
  function (err,data) {
  
  if (err)return console.error(err);
  
  console.log("success")
  
  res.send("Postman success")
  }
  )
  });
  

  router.get('/call',function (req,res, next) {

    car.find({},function(err,results){
    
    if (err) {
    
    res.status(403).json({msg: "something bad",err })
    
    }
    
    else {
    
    res.status(200).json({msg: "user record fetched successfully",data:results
    })
    
    }
    
    })
    
    });
    

module.exports = router;
