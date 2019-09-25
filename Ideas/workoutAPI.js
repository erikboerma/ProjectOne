$(document).ready(function () {

    
    var key = 'dafa9b25bfc440d631da35cffee0ae0be40de719'
    var muscle = Math.floor(Math.Random() * 10);
    var equipment = Math.floor(Math.Random() * 5);
    
    function displayWorkout() {
        // can search by equiptment and muscle group
        //possibly use random 

    var queryURL = 'https://wger.de/api/v2/exercise/?equipment=' + equipment + '&format=json&muscles=' + muscle +'' 
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function (response) {
        var results = response.data;

    })
}
displayWorkout();

})