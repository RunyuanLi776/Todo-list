let express = require('express');
let app = express();
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

//connect mongoose instance to the url
mongoose.connect('mongodb://localhost:27017/todos', {
    useMongoClient: false
});
mongoose.Promise = global.Promise;

//adding body parser to handle request and response
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");	
    next();
});

//enable port
let initApp = require('./api/server');
initApp(app);

app.listen(3000);
console.log("Todo Application server start on: 3000");