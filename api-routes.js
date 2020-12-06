var express = require('express');
var router = express.Router();

var db = require("./db/courses.json");
var courses = db.courses;

// define the home page route
router.get('/by_course_code/:qcode', function (req, res) {
    var code = req.params.qcode.toUpperCase();
    var foundCourses = [];

    for (var i = 0; i < courses.length; i++) {
        var currCourse = courses[i];        
        if (currCourse.course_code.toUpperCase().indexOf(code) > -1) {
            foundCourses.push(currCourse);
        } 
    }

    res.json(foundCourses);
});

router.get('/by_title/:qtitle', function (req, res) {
    var code = req.params.qtitle.toUpperCase();
    var foundCourses = [];

    for (var i = 0; i < courses.length; i++) {
        var currCourse = courses[i];        
        if (currCourse.title.toUpperCase().indexOf(code) > -1) {
            foundCourses.push(currCourse);
        } 
    }

    res.json(foundCourses);
});

router.get('/by_instructor/:qname', function (req, res) {
    var code = req.params.qname.toUpperCase();
    var foundCourses = [];

    for (var i = 0; i < courses.length; i++) {
        var currCourse = courses[i];        
        if (currCourse.instructor.toUpperCase().indexOf(code) > -1) {
            foundCourses.push(currCourse);
        } 
    }

    res.json(foundCourses);
});

router.get('/by_level/:qlevel', function (req, res) {
    var level = req.params.qlevel.toUpperCase();
    var foundCourses = [];

    for (var i = 0; i < courses.length; i++) {
        var currCourse = courses[i];        
        if (currCourse.course_level.toUpperCase() == level) {
            foundCourses.push(currCourse);
        } 
    }

    res.json(foundCourses);
});

router.get('/combined_query/:qtype/:qsearch/:qlevel', function (req, res) {
    var type = req.params.qtype.toLowerCase();
    var search = req.params.qsearch.toUpperCase();
    var level = req.params.qlevel.toUpperCase();
    
    var foundCourses = [];

    for (var i = 0; i < courses.length; i++) {
        var currCourse = courses[i];        
        if (currCourse[type] != null && currCourse[type].toUpperCase().indexOf(search) > -1 && currCourse.course_level.toUpperCase() == level) {
            foundCourses.push(currCourse);
        } 
    }

    res.json(foundCourses);
});

module.exports = router;