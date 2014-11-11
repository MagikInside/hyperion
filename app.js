var express = require('express'),
    morgan = require('morgan'),
//    bodyParser = require('body-parser'),
//    methodOverride = require('method-override'),
    app = express(),
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ObjectID = require('mongodb').ObjectID;

var url_local = "mongodb://127.0.0.1/infojobs";
var url_cloud = "mongodb://client:mongo1184@127.0.0.1/test";

//The database
var db;

// Connect to the db and start server
MongoClient.connect(url_local, function(err, database) {
    if (err) throw err;
    db = database;
    app.listen(3000, function () {
        console.log('Express server running on port 3000..');
    });
});

// Configuration
app.use(express.static(__dirname + '/public')); 	// set the static files location
app.use(morgan('dev')); 					// log every request to the console
//    app.use(bodyParser()); 						// pull information from html in POST
//    app.use(methodOverride()); 					// simulate DELETE and PUT



//Routes
//GET -
app.get('/api/cities', function(req, res) {
    db.collection('jobs').aggregate([
        { $group:{ _id:"$city",num:{$sum:1}}},
        {$sort:{num:-1}},
        {$limit:10}
    ], function(err, cities) {
        if(err) throw err;
        res.json(cities);
    });
});
// Route to the page
app.get('*', function(req, res) {
    // res.sendFile('/home/luisma/workspace/pruebaMEAN/public/index.html');
    res.sendFile(__dirname + '/public/index.html');
});


