$(document).ready(function () {

    
    var key = 'dafa9b25bfc440d631da35cffee0ae0be40de719'
    var muscle = $("#");
    
    function displayWorkout() {

    var queryURL = 'https://wger.de/api/v2/?format=api'
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function (response) {
        var results = response.data;
    }) 

    }

})