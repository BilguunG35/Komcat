var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var dotenv = require('dotenv');
var ejs = require('ejs');
var fileUpload = require('express-fileupload');

//router direction
var home = require('./route/home');
var about = require('./route/about');
var products = require('./route/products');
var single = require('./route/single');
var admin = require('./route/admin');
var addUser = require('./route/addUser');
var managePost = require('./route/managePost');
var manageUser = require('./route/manageUser');
var deleteUser = require('./route/deleteUser');
var editUser = require('./route/editUser');
var addPost = require('./route/addPost');
var deletePost = require('./route/deletePost');
var editPost = require('./route/editPost');



dotenv.config();

app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('/public'));
app.use(express.static(__dirname + '/public'));
app.use(fileUpload());


// app.use('/', login);
app.use('/', home);
app.use('/', about);
app.use('/', products);
app.use('/', single);
app.use('/', admin);
app.use('/', addUser);
app.use('/', manageUser);
app.use('/', deleteUser);
app.use('/', editUser);
app.use('/', managePost);
app.use('/', addPost);
app.use('/', deletePost);
app.use('/', editPost);


app.listen(process.env.SERVER_PORT, function () {
    console.log('Database Connected')
});
