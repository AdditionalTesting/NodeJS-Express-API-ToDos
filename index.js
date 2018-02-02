var express = require('express'),
    app = express();

var todoRoutes = require('./routes/todos');

app.get('/', function(req, res){
    res.send("HI THERE FROM EXPRESS!!!")
})

app.use('/api/todos', todoRoutes)

app.listen(3000, function(){
    console.log("APP IS RUNNING")
})