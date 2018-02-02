var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
    
    
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var todoRoutes = require('./routes/todos');

app.get('/', function(req, res){
    res.send("HI THERE FROM EXPRESS!!!")
})

app.use('/api/todos', todoRoutes)

app.listen(3000, function(){
    console.log("APP IS RUNNING")
})