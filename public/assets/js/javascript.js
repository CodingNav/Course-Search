// Makes sure the page is loaded before running code
$(document).ready(function() {

    var herokuURL = "https://sju-course-finder.herokuapp.com";
    //var herokuURL = ""; // For testing

    // Stores all searched courses within this array
    var courses = [];

    // Checks for when form is submitted
    $("#search-form").on("submit", function(event) {
        // Prevents page from refreshing because refreshing will restart the code
        event.preventDefault();

        // Grab all information from inputs
        var search = $("#search").val();
        var level = $("#level").val();
        var searchType = $(".search-type:checked").val();

        // Set up default api route for Radio Buttons (i.e. /api/by_instructor/Puya)
        var api_url = `/api/by_${searchType}/${search}`;
        
        // If nothing is being searched, displays error message
        if (search.trim() == "" && level == "any") {
            return alert("Please enter text inside of the search bar or choose a level.");
        } 
        // If Level is selected and nothing is searched, then it uses the api for level searching
        else if (search.trim() == "" && level != "any") {
            api_url = `/api/by_level/${level}`;
        }
        // If a Level is selected and there is something being searched, then the combined_query api route is used
        else if (search.trim() != "" && level != "any") {
            api_url = `/api/combined_query/${searchType}/${search}/${level}`;
        }
        
        // After the proper api route is selected, I use fetch to send an api GET request to the specified route
        fetch(herokuURL + api_url, {
            credentials: "include"
          })
          .then(function(response) {
            // Waits for the response from the backend then grabs the data
            response.json().then(function(data) {
                // Sets the courses array to the array sent from the backend
                courses = data;
                // Runs course_view function to display the search results on the page
                course_view("#course-template")
            });
        });
    });


  function course_view(view_id) {
    // Grabs handlebars template from HTML
    var source = document.querySelector(view_id).innerHTML;
    // Handlebars compiled template
    var template = Handlebars.compile(source);    
    var data = {
        searchedCourses: courses
    }
   
    // Sends the data to the template
    var html = template(data);
      
    if (courses.length == 0) {
        html = "<p>No results found.</p>"
    }

    // Replaces course-widget's html with the new course results or the "No results found" message
    document.querySelector("#course-widget").innerHTML = html;
  }

})