var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var nunjucks = require('nunjucks');
var mongoose = require('mongoose');

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
 * MODELS DECLARATIONS
 */
const Schema = mongoose.Schema;
const TodoSchema = new Schema({
    text: String,
    done: Boolean
});
const Todo = mongoose.model('Todo', TodoSchema);
mongoose.connect('mongodb://localhost/reduxdojo');

/*
 * ROUTING
 */
var router = express.Router();
router.get('/', function(req, res) {
    res.render('index', { title: 'My Todo List' });
});
router.get('/todos', function(req, res) {
    Todo.find(function(err, todos) {
        if (err) throw err;

        res.end(JSON.stringify(todos));
    });
});
router.post('/todos', function(req, res) {
    new Todo({
        text: req.body.text,
        done: req.body.done
    }).save(function(err, todo) {
        if (err) throw err;

        res.end(JSON.stringify(todo));
    })
});
app.use(router);

app.set('port', 3000);
var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port 3000');
})
