var express = require('express');
var StudentHelper = require('../db/helpers/StudentSqlHelper.js');


var router = express.Router();



//#Student Routes
//#-------------------------------------------------------
// Get all students
router.get('/', function (req, res) {
    StudentHelper.getAllStudents(function (err, rows) {
            if (err) {
                res.send(err);
            } else {
                res.send(rows); 
            }
            
        });
})


module.exports = router
