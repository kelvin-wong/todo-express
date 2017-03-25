var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'ToDoExpress' });
});

/* GET task list */
router.get('/tasks', function(req, res) {
});

/* POST create task */
router.post('/tasks', function(req, res) {
});

/* GET task detail */
router.get('/tasks/:taskId', function(req, res) {
});

/* DELETE task by id */
router.delete('/tasks/:taskId', function(req, res) {
});

module.exports = router;
