const projectData = {}

const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var aylien = require("aylien_textapi");

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });

const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


app.post('/sentiment', function (req, res) {
    const urlHolder = req.body.url;
    textapi.sentiment({ url: urlHolder }, function(error, res) {
        if (error === null) {
            projectData.polarity = res.polarity;
            projectData.subjectivity = res.subjectivity;
            projectData.polarity_confidence = res.polarity_confidence;
            projectData.subjectivity_confidence = res.subjectivity_confidence;
            projectData.content = res.content;
            res.send(projectData);
    //add your code here for manipulating response 
        } else {
            console.log(error);
        }
    });
})