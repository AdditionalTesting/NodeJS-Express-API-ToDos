var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
    
    
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

var todoRoutes = require('./routes/todos');

app.get('/', function(req, res){
    res.sendFile("index.html");
})

app.use('/api/todos', todoRoutes)

app.listen(3000, function(){
    console.log("APP IS RUNNING")
})