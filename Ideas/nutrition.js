var apiKey = "c1af05bee1161ebc3a62cf3369b2b344"
var apiID = "c6bee22a";
var protien = "";

// var startCals = 10; //range
// var endCals = 5000;

console.log(protien);
    function displayRecipe() {
    
        var queryURL = "https://api.edamam.com/search?q=" + protien + "&app_id=" + apiID + "&app_key=" + apiKey + "&from=0&to=3&calories=591-722&health=alcohol-free"
    
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                // $(".nutrition").append(results);
    
                var newDiv = $("<div>")
                console.log(response);
                console.log(response.hits[0].recipe.label);
                console.log(response.hits[0].recipe.ingredients);
                console.log(response.hits[0].recipe.ingredients[0].text)
                $(".label").text(response.hits[1].recipe.label);
                $(".ingredients").text("<div>" + newDiv + response.hits[1].recipe.ingredients[0].text + "</div>");
                $(".ingredients").text("<div>" + newDiv + response.hits[1].recipe.ingredients[1].text + "</div>");
                $(".ingredients").text("<div>" + response.hits[1].recipe.ingredients[2].text + "</div>")
    
    
            })
    
        }
        displayRecipe();





var queryURL = "https://api.edamam.com/search?q=" + protien + "&app_id=" + apiID + "&app_key=" + apiKey + "&from=0&to=3&calories=591-722&health=alcohol-free"

$(document).on("click", "#submit1", function nutrition() {

    protien = $("#APIsearch").val()
    console.log(protien)
    switch (parseInt(protien)) {
        case "steak":
            protien = "steak";
            break;
        case "chicken":
            protien = "chicken";
            break;
        case "fish":
            protien = "fish";
            break;
        case "veggie":
            protien = "veggie";
            break;
        default:
            break;



    return displayRecipe(protien);

});

