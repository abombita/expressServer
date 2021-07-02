const express = require('express');

const app = express();

app.use (express.static('public'));

app.get('/', function(req, res){
    console.log("my will to live");
});


app.listen(3001)