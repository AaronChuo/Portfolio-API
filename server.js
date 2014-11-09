/*************************************************************************
  Portfolio RESTful API
*************************************************************************/
//var express    = require('express');
//var app        = express();
//var bodyParser = require('body-parser');
//var mongoose = require('mongoose');
// var Profile = require('./app/models/profile');
// var Exp = require('./app/models/exp');
// var Work = require('./app/models/work');

//app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser());

//var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var port = process.env.PORT || 3000;

//mongoose.connect('mongodb://localhost:27017/portfolio'); //Dev
var dbUser = 'aaronchuo';
var dbPwd = 'yesyes1008';
//mongoose.connect('mongodb://dbUser:dbPwd@ds051640.mongolab.com:51640/heroku_app31347655');

//var router = express.Router();
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
  API Index
*************************************************************************/
// router.get('/', function(req, res) {
//   res.json({
//     message: 'Hello !'
//   });
// });

//app.use('/api', router);

//app.listen(port);
console.log(port + ' port is running!');