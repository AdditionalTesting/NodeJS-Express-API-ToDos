var express = require('express'),
    app = express();

app.get('/', function(req, res){
    res.send("HI THERE FROM EXPRESS!!!")
})

app.listen(3000, function(){
    console.log("APP IS RUNNING")
})