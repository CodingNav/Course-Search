# Course-Search
## API Documentation

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
    [
      {
        course_code: "CUS610",
        course_level: "graduate",
        title: "Example",
        instructor: "Dr. Example"
        
      }
    ]
  </li>
</ul>