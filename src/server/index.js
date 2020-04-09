const projectData = {};

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

app.get('all', sendData);

function sendData (request, response) {
    response.send(projectData);
};

app.post('/addContent', addContent);

function addContent (request, response) {
    const body = request.body;
    projectData.polarity = body.polarity;
    projectData.subjectivity = body.subjectivity;
    projectData.generateText = body.generateText;
    projectData.polarityConfidence = body.polarityConfidence;
    projectData.subjectivityConfidence = body.subjectivityConfidence;
    console.log(projectData);
};