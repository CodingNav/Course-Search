# Course-Search
<b> Link to site: </b> https://sju-course-finder.netlify.app/

## Preview
<img src="./public/assets/images/course_finder.png" alt="Game" width="100%"> <br> <img src="./public/assets/images/course_finder.gif" alt="Game" width="100%">

## About
<b>Course finder</b> is a web application with a back-end API service that provides students access to information about the courses offered at St John's University. 
<br>
<b>Presentation: </b> https://youtu.be/egu6_48MAho

## API Documentation
Use the API base URL: https://sju-course-finder.herokuapp.com/
### Search Course by Course Code
Returns json data for courses containing the specified course code

<ul>
  <li>
    <b>URL:</b>
    <br/>
    /api/by_course_code/{code}
  </li>
  <li>
    <b>Method:</b>
    <br/>
    GET
  </li>
  <li>
    <b>Response:</b>
    
```json
[
      {
        course_code: "CUS610",
        course_level: "graduate",
        title: "Example",
        instructor: "Dr. Example"
        
      }
    ]
```
  </li>
</ul>

### Search Course by Title
Returns json data for courses containing the specified title

<ul>
  <li>
    <b>URL:</b>
    <br/>
    /api/by_title/{title}
  </li>
  <li>
    <b>Method:</b>
    <br/>
    GET
  </li>
  <li>
    <b>Response:</b>
    
```json
[
      {
        course_code: "CUS610",
        course_level: "graduate",
        title: "Example",
        instructor: "Dr. Example"
        
      }
    ]
```
  </li>
</ul>

### Search Course by Instructor
Returns json data for courses containing the specified instructor

<ul>
  <li>
    <b>URL:</b>
    <br/>
    /api/by_instructor/{name}
  </li>
  <li>
    <b>Method:</b>
    <br/>
    GET
  </li>
  <li>
    <b>Response:</b>
    
```json
[
      {
        course_code: "CUS610",
        course_level: "graduate",
        title: "Example",
        instructor: "Dr. Example"
        
      }
    ]
```
  </li>
</ul>

### Search Course by Level
Returns json data for courses containing the specified level

<ul>
  <li>
    <b>URL:</b>
    <br/>
    /api/by_level/{level}
  </li>
  <li>
    <b>Method:</b>
    <br/>
    GET
  </li>
  <li>
    <b>Response:</b>
    
```json
[
      {
        course_code: "CUS610",
        course_level: "graduate",
        title: "Example",
        instructor: "Dr. Example"
        
      }
    ]
```
  </li>
</ul>



### Search Course by Combined Queries
Returns json data for courses containing the specified combined queries

<ul>
  <li>
    <b>URL:</b>
    <br/>
    /api/combined_query/{search_type}/{query}/{level}
  </li>
  <li>
    <b>Method:</b>
    <br/>
    GET
  </li>
  <li>
    <b>Response:</b>
    
```json
[
      {
        course_code: "CUS610",
        course_level: "graduate",
        title: "Example",
        instructor: "Dr. Example"
        
      }
    ]
```
  </li>
</ul>

## Technologies

### Front End
<img align="middle" src="./public/assets/images/html_css.png" title="HTML5 and CSS3" alt="HTML5 and CSS3" width="25%"/>&nbsp; &nbsp;
<img align="middle" src="./public/assets/images/js.jpg" title="Javascript" alt="Javascript" width="10%"/> &nbsp; <img align="middle" src="./public/assets/images/bootstrap.png" title="Bootstrap" alt="Bootstrap" width="13%"/>&nbsp; &nbsp;<img align="middle" src="./public/assets/images/jquery.png" title="JQuery" alt="JQuery" width="20%"/> <img align="middle" src="./public/assets/images/handlebars.png" title="Handlebars" alt="Handlebars" width="20%"/>

### Back End

<img align="middle" src="./public/assets/images/nodejs.png" title="NodeJS" alt="NodeJS" width="20%"/> &nbsp; &nbsp; <img align="middle" src="./public/assets/images/expressjs.png" title="ExpressJS" alt="ExpressJS" width="25%"/> 


