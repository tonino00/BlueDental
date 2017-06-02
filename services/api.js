// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://toninosdev0027:Developer00@ds161121.mlab.com:61121/bluedental", function(err, db) {
  if(!err) {
    console.log("conectado");
  }
});

