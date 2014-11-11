var express = require('express'),
    morgan = require('morgan'),
//    bodyParser = require('body-parser'),
//    methodOverride = require('method-override'),
    app = express(),
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ObjectID = require('mongodb').ObjectID;

var url_local = "mongodb://127.0.0.1/test";
var url_cloud = "mongodb://root:S71AEkqlorN8@127.0.0.1/test";

//The database
var db;

// Connect to the db and start server
MongoClient.connect(url_cloud, function(err, database) {
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




// Route to the page
app.get('*', function(req, res) {
    // res.sendFile('/home/luisma/workspace/pruebaMEAN/public/index.html');
    res.sendFile(__dirname + '/public/index.html');
});


