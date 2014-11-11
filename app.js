var express = require('express'),
    app = express(),
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;

var db;

app.get('*', function (req, res) {
    db.collection('users').findOne({}, function(err, doc) {
        if(err) throw err;
        //res.send("Hola " + doc.user);

    });
});
// Connect to the db and start server
//MongoClient.connect("mongodb://root:S71AEkqlorN8@127.0.0.1/test", function(err, database) {
MongoClient.connect("mongodb://127.0.0.1/test", function(err, database) {
    if (err) throw err;
    db=database;
    app.listen(3000,function(){
        console.log('Express server running on port 3000..');
    });
});

