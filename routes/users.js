var express = require('express');
var router = express.Router();
var events = {};
var id_counter = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    name: "John",
    last: "Smith"
  });
});

router.get('/add', function(req, res, next) {
  events[id_counter] = {name: 'foo', name: 'bar'};
  id_counter += 1;
  res.json(events);
});

module.exports = router;
