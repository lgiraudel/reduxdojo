var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var nunjucks = require('nunjucks');

/*
 * APP CONFIGURATION
 */
var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, '../public')));
nunjucks.configure('server/views', {
    autoescape: true,
    express: app
});

/*
 * ROUTING
 */
var router = express.Router();
router.get('/', function(req, res) {
    res.render('index', { title: 'My Todo List' });
});
app.use(router);

app.set('port', 3000);
var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port 3000');
})
