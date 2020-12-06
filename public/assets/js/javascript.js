$(document).ready(function() {

    var courses = [];

    $("#search-form").on("submit", function(event) {
        event.preventDefault();

        var search = $("#search").val();
        var level = $("#level").val();
        var searchType = $(".search-type").val();
        var api_url = `/api/by_${searchType}/${search}`;
        
        if (search.trim() == "" && level == "any") {
            return alert("Please enter text inside of the search bar or choose a level.");
        } 
        else if (search.trim() == "" && level != "any") {
            api_url = `/api/by_level/${level}`;
        }
        else if (search.trim() != "" && level != "any") {
            api_url = `/api/combined_query/${searchType}/${search}/${level}`;
        }
                
        fetch(api_url).then(function(response) {
            response.json().then(function(data) {
                courses = data;
            });
        });
    });


  var couse_view = (view_id) => {
    var source = document.querySelector(view_id).innerHTML;
    var template = Handlebars.compile(source);
    var html = template(courses);
  
    if (courses.length == 0) {
        html = "<p>No results found.</p>"
    }

    document.querySelector("#course-widget").innerHTML = html;
  }

})