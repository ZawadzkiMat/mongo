var express = require('express');
var app = express();


const header = ``;
const { generateMainPageBody } = require('./utils/generateMainPageBody');

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var url = 'mongodb+srv://admin:admin@cluster0.59vml.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


function buildHtml(req, header, body) {
    return '<!DOCTYPE html>'
        + '<html><head>' + header + '</head><body>' + body + '</body></html>';
};

var db;
MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true }, (error, database) => {
    if (error) return process.exit(1);
    console.log('Connection is okay');

    db = database.db('mongo');
});


app.get('/', function (req, res) {
    db.listCollections().toArray(function (error, result) {
        let collections = ''
        result.forEach(element => {
            collections += element.name + '&nbsp;&nbsp;&nbsp;'
        });
        const body = generateMainPageBody(collections);
        res.send(buildHtml(req, header, body))
    })
});




app.listen(8080, function () {
    console.log('Aplikacja została uruchomiona na porcie 8080!');
});