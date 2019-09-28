var apiKey = "c1af05bee1161ebc3a62cf3369b2b344"
var apiID = "c6bee22a";
var protien = {
 1:"chicken",
 2:"steak",
 3:"fish",
}
// var startCals = 10; //range
// var endCals = 5000;
console.log(protien);





var queryURL = "https://api.edamam.com/search?q=chicken&app_id=" + apiID + "&app_key=" + apiKey + "&from=0&to=3&calories=591-722&health=alcohol-free"



function ajax() {

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            // $(".nutrition").append(results);

            var newDiv = $("<div>")
            console.log(response);
            console.log(response.hits[2].recipe.label);
            console.log(response.hits[2].recipe.ingredients);
            console.log(response.hits[2].recipe.ingredients[0].text)
            $(".label").append(response.hits[2].recipe.label);
            $(".ingredients").append("<div>" + newDiv + response.hits[2].recipe.ingredients[0].text + "</div>");
            $(".ingredients").append("<div>" + newDiv + response.hits[2].recipe.ingredients[1].text + "</div>");
            $(".ingredients").append("<div>" + response.hits[2].recipe.ingredients[2].text + "</div>");
            $(".nutrition").append("<div>" + response.hits[2].recipe.ingredients[2].totalDaily.K.label + "</div>");
            console.log(response.hits[2].recipe.ingredients[2].totalDaily.K.label)



        })

    }
    ajax();