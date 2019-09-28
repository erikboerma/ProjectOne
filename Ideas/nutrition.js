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
        .then(function(response) {

            for (var k = 0; k < response.hits.length; k++) {
                $(".label").html(response.hits[k].recipe.label);
                for (var i = 0; i < response.hits[k].recipe.ingredients.length; i++) {
                    $(".ingredients").append("<li>" + response.hits[k].recipe.ingredients[i].text + "</li>");
                }
                $(".ingredients").append("<div><img src='" + response.hits[k].recipe.image + "'></div>");
                

                var toAdd = document.createDocumentFragment();
                for (var j = 0; j < 4; j++) {
                    var newDiv = document.createElement('div');
                    newDiv.id = "new" + j;
                    newDiv.className = 'ingredients' + j;
                    $(".ingredients" + j).append("<li>" + response.hits[k].recipe.ingredients[i].text + "</li>")
                    toAdd.appendChild(newDiv);
                }
            }

        })

}
displayRecipe();





var queryURL = "https://api.edamam.com/search?q=" + protien + "&app_id=" + apiID + "&app_key=" + apiKey + "&from=0&to=3&calories=591-722&health=alcohol-free"

$(document).on("click", "#submit1", function nutrition() {
    $(".ingredients").empty()
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



    }
    return displayRecipe(protien);

});