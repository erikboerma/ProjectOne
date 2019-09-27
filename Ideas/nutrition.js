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
            // $(".nutrition").append(results);
            console.log(response);
            console.log(response.hits[0].recipe.label);
            console.log(response.hits[0].recipe.ingredients);
            console.log(response.hits[0].recipe.ingredients[0].text)
            $(".nutrition").append(response.hits[0].recipe.label);
            $(".ingredients").append(response.hits[0].recipe.ingredients[0].text);
            $(".ingredients").append(response.hits[0].recipe.ingredients[1].text);
            $(".ingredients").append(response.hits[0].recipe.ingredients[2].text)


        })

    }
    ajax();