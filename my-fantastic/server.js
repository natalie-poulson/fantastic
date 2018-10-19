// REQUIREMENTS
const express = require('express');
const app = express();


// MIDDLEWARE
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


// DATABASE
const db = require('./models');


// SERVE STATIC FILES
app.use(express.static('public'));


// HTML ENDPOINTS
app.get('/', function homepage(req, res) {
    res.sendFile(__dirname + '/views/index.html');
  });


  // JSON API ENDPOINTS
app.post('/api', (req, res) => {
    console.log(req.body);
    let newData = req.body;

    db.Data.create (newData, (err, savedData) => {
      if(err) {return console.log('error:', err)};
      res.json(savedData);
    });
});


app.get('/api', (req, res) => {
  db.Data.find( {}, (err, allData) => {
    if(err) {return console.log('error:', err)};
    // ADD CONDITION TO FILTER DATA TO PAST 5 MINUTES
    res.json({data: 'allData'});
  });
});




// SERVER START
app.listen(3000, () => {
    console.log("HTTP server listening at localhost:3000");
});