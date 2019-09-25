

var apiKey = "c1af05bee1161ebc3a62cf3369b2b344"
var apiID = "c6bee22a";
var protien = "chicken" ; 
var startCals = 10; //range
var endCals = 5000;


"https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"

function displayWorkout() {
    // can search by equiptment and muscle group
    //possibly use random 

var queryURL =  "https://api.edamam.com/search?q=chicken&app_id=" + apiID + "&app_key=" + apiKey + "&from=0&to=3&calories=591-722&health=alcohol-free"



$.ajax({
    url: queryURL,
    method: "GET"
})
.then(function (response) {
    var results = response.data;
    console.log(response.q);
    console.log(queryURL)

})
}
displayWorkout();