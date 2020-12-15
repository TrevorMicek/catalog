const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path');
const bodyParser = require("body-parser")
//need to install all of the above for the server to work properly


app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(cors({origin:true,credentials: true}));

app.use('/', express.static('build'));

app.use('/api', express.static(path.join(__dirname, '../jsonData')));

var listener = app.listen(4000, function() {
    console.log('Listening on port ' + listener.address().port);
});