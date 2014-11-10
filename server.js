/*************************************************************************
  Portfolio RESTful API
*************************************************************************/
var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
// var Profile = require('./app/models/profile');
// var Exp = require('./app/models/exp');
// var Work = require('./app/models/work');

//app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser());

var port = process.env.PORT || 8080;
app.set('port', port);

var mongoose = require('mongoose');
var dbUser = 'aaronchuo';
var dbPwd = 'yesyes1008';
mongoose.connect('mongodb://' + dbUser + ':' + dbPwd + '@ds051640.mongolab.com:51640/heroku_app31347655');

var router = express.Router();
// var dbQuery = {

//   //getter: get all / specific data
//   get: function(dbInstance, id) {
//     var callback = function(err, data) {
//       var returnValue = {};
//       if(err) {
//         returnValue.status = 'error';
//         returnValue.message = err;
//       } else {
//         returnValue.status = 'success';
//         returnValue.message = data;
//       }
//       return returnValue;
//     };

//     if(id) {
//       dbName.findById(id, function(err, data) {
//         res.jcallback(err, data);
//       });
//     } else {
//       dbName.find(function(err, data) {
//         if(err) res.send(err);
//         res.json(data);
//       });
//     }
//   },

//   //setter: create / update / delete
//   set: function(id) {

//   }
// };

/*************************************************************************
  API Authentication
*************************************************************************/
router.use(function(req, res, next) {
  //TODO: HTTP BA
  console.log('Test breakpoint.')
  next();
});

/*************************************************************************
  Profile API
*************************************************************************/
router.route('/profile')

  // Create an profile field
  // POST http://portfolio-aaronchuo.rhcloud.com/api/profile
  .post(function(req, res) {
    var profile = new Profile();
    profile.field = req.body.field;
    profile.value = req.body.value;
    profile.save(function(err) {
      if(err) res.send(err);
      res.json({
        message: 'Profile field created.'
      });
    });
  })

  // Get all profile fields
  // GET http://portfolio-aaronchuo.rhcloud.com/api/profile
  .get(function(req, res) {
    Profile.find(function(err, profiles) {
      if(err) res.send(err);
      res.json(profiles);
    });
  });

router.route('/profile/:profile_id')

  // Get a specific profile field
  // GET http://portfolio-aaronchuo.rhcloud.com/api/profile/:profile_id
  .get(function(req, res) {
    Profile.findById(req.params.profile_id, function(err, profile) {
      if(err) res.send(err);
      res.json(profile);
    });
  })

  // Update a specific profile
  // PUT http://portfolio-aaronchuo.rhcloud.com/api/profile/:profile_id
  .put(function(req, res) {
    Profile.findById(req.params.profile_id, function(err, profile) {
      if(err) res.send(err);
      profile.field = req.body.field;
      profile.value = req.body.value;
      profile.save(function(err) {
        if(err) res.send(err);
        res.json({
          message: 'Profile updated.'
        });
      });
    });
  })

  // Delete a specific profile
  // DELETE http://portfolio-aaronchuo.rhcloud.com/api/profile/:profile_id
  .delete(function(req, res) {
    Profile.remove({
      _id: req.params.profile_id
    }, function(err, profile) {
      if(err) res.send(err);
      res.json({
        message: 'Profile deleted.'
      })
    });
  });

/*************************************************************************
  Exp API
*************************************************************************/
router.route('/exp')

  // Create an experience
  // POST http://portfolio-aaronchuo.rhcloud.com/api/exp
  .post(function(req, res) {
    var exp = new Exp();
    exp.title = req.body.title;
    exp.desc = req.body.desc;
    exp.date = req.body.date;
    for(var i=0; i<req.body.photo.length; i++) {
      exp.photo.push(req.body.photo[i]);
    }
    exp.save(function(err) {
      if(err) res.send(err);
      res.json({
        message: 'Experience created.'
      });
    });
  })

  // Get all experiences
  // GET http://portfolio-aaronchuo.rhcloud.com/api/exp
  .get(function(req, res) {
    Exp.find(function(err, exps) {
      if(err) res.send(err);
      res.json(exps);
    });
  });

router.route('/exp/:exp_id')

  // Get a specific experience
  // GET http://portfolio-aaronchuo.rhcloud.com/api/exp/:exp_id
  .get(function(req, res) {
    Exp.findById(req.params.exp_id, function(err, exp) {
      if(err) res.send(err);
      res.json(exp);
    });
  })

  // Update a specific experience
  // PUT http://portfolio-aaronchuo.rhcloud.com/api/exp/:exp_id
  .put(function(req, res) {
    Exp.findById(req.params.exp_id, function(err, exp) {
      if(err) res.send(err);
      exp.title = req.body.title;
      exp.desc = req.body.desc;
      exp.date = req.body.date;
      for(var i=0; i<req.body.photo.length; i++) {
        exp.photo.push(req.body.photo[i]);
      }
      exp.save(function(err) {
        if(err) res.send(err);
        res.json({
          message: 'Experience updated.'
        });
      });
    });
  })

  // Delete a specific experience
  // DELETE http://portfolio-aaronchuo.rhcloud.com/api/exp/:exp_id
  .delete(function(req, res) {
    Exp.remove({
      _id: req.params.exp_id
    }, function(err, exp) {
      if(err) res.send(err);
      res.json({
        message: 'Experience deleted.'
      })
    });
  });

/*************************************************************************
  Work API
*************************************************************************/
router.route('/work')

  // Create a work
  // POST http://portfolio-aaronchuo.rhcloud.com/api/work
  .post(function(req, res) {
    var work = new Work();
    work.name = req.body.name;
    work.desc = req.body.desc;
    work.tag = req.body.tag;
    work.save(function(err) {
      if(err) res.send(err);
      res.json({
        message: 'Work created.'
      });
    });
  })

  // Get all works
  // GET http://portfolio-aaronchuo.rhcloud.com/api/work
  .get(function(req, res) {
    Work.find(function(err, works) {
      if(err) res.send(err);
      res.json(works);
    });
  });

router.route('/work/:work_id')

  // Get a specific work
  // GET http://portfolio-aaronchuo.rhcloud.com/api/work/:work_id
  .get(function(req, res) {
    Work.findById(req.params.work_id, function(err, work) {
      if(err) res.send(err);
      res.json(work);
    });
  })

  // Update a specific work
  // PUT http://portfolio-aaronchuo.rhcloud.com/api/work/:work_id
  .put(function(req, res) {
    Work.findById(req.params.work_id, function(err, work) {
      if(err) res.send(err);
      work.name = req.body.name;
      work.desc = req.body.desc;
      work.tag = req.body.tag;
      work.save(function(err) {
        if(err) res.send(err);
        res.json({
          message: 'Work updated.'
        });
      });
    });
  })

  // Delete a specific work
  // DELETE http://portfolio-aaronchuo.rhcloud.com/api/work/:work_id
  .delete(function(req, res) {
    Work.remove({
      _id: req.params.work_id
    }, function(err, work) {
      if(err) res.send(err);
      res.json({
        message: 'Work deleted.'
      })
    });
  });


/*************************************************************************
  API Index
*************************************************************************/
router.get('/', function(req, res) {
  res.json({
    message: 'Hello !'
  });
});

app.use('/', router);

// app.get('/', function(req, res) {
//   res.send('hello world!');
// });

app.listen(app.get('port'), function() {
  console.log(port + ' port is running!');
});
