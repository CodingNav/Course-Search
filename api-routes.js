// Loading express
var express = require('express');
var router = express.Router();

// Grabbing the database
var db = require("./db/courses.json");
var courses = db.courses;

// Created GET route to allow searching for course_code
router.get('/by_course_code/:qcode', function (req, res) {
    // Allows for the api route to be case insensitive
    var code = req.params.qcode.toUpperCase();
    // Array for the courses found in the database
    var foundCourses = [];

    // Looping through all the courses checking which meets the criteria 
    for (var i = 0; i < courses.length; i++) {
        var currCourse = courses[i];                
        if (currCourse.course_code.toUpperCase().indexOf(code) > -1) {
            foundCourses.push(currCourse);
        } 
    }

    // Sends JSON array as response to requester
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

// Created GET route for combined_query, allows for user to send type of search, search, and level
router.get('/combined_query/:qtype/:qsearch/:qlevel', function (req, res) {
    // Grabs type of search, search, and level from URL
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