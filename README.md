# Course-Search
## API Documentation
Use the base URL: https://sju-course-finder.herokuapp.com/
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
