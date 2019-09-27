var apiKey = "c1af05bee1161ebc3a62cf3369b2b344"
var apiID = "c6bee22a";
var protien = "chicken";
// var startCals = 10; //range
// var endCals = 5000;
console.log(protien);



// can search by equiptment and muscle group
//possibly use random 


var queryURL = "https://api.edamam.com/search?q=chicken&app_id=" + apiID + "&app_key=" + apiKey + "&from=0&to=3&calories=591-722&health=alcohol-free"



function ajax() {

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var results = response.data;
            var index = 0;
            // $(".nutrition").append(results);
            console.log(response)
            console.log(response.hits[0].recipe.label)
            console.log(response.hits[0].recipe.ingredients)
            $(".nutrition").html(response.hits[0].recipe.label);
            $(".nutrition").html(response.hits[0].recipe.ingredients)
        })

    }
    ajax();