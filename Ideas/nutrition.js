var apiKey = "c1af05bee1161ebc3a62cf3369b2b344";
var apiID = "c6bee22a";
var protein = "";

// var startCals = 10; //range
// var endCals = 5000;
console.log(protein);

function displayRecipe() {

    var queryURL = "https://api.edamam.com/search?q=" + protein + "&app_id=" + apiID + "&app_key=" + apiKey + "&from=3&to=12&calories=0-" + $("#myRange").val() + "";
    console.log(queryURL)
    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response) {
            console.log(response)
            var num = ["a", "b", "c", "d", "e", "h", "i", "j", "k"]
            for (var k = 0; k < response.hits.length; k++) {
                var newDiv = $("<div>");

                if (k < 3) {
                    newDiv.addClass("col");
                    newDiv.attr('id', '' + num[k]);
                    $("#row1").append(newDiv)
                    $("#" + num[k]).html("<div class='card'><div class='card-body'><div class='card-body'<h5 class='card-title'><span class='label' id=2" + num[k] + "></span> </h5><p class='card-text'><div id='nfacts'>Makes: " + response.hits[k].recipe.yield + " Servings  |  Each Serving Contains:</div><div id='nfacts'> (" + (response.hits[k].recipe.totalWeight / response.hits[k].recipe.yield).toFixed(0) + " g)</div><hr><span class='facts' id='0'><ul>Calories: " + (response.hits[k].recipe.totalNutrients.ENERC_KCAL.quantity / response.hits[k].recipe.yield).toFixed(0) + "</ul><ul>Fat: " + (response.hits[k].recipe.totalNutrients.FAT.quantity / response.hits[k].recipe.yield).toFixed(0) + "g</ul><ul>Carbohydrates: " + (response.hits[k].recipe.totalNutrients.CHOCDF.quantity / response.hits[k].recipe.yield).toFixed(0) + "g</ul><ul>Protein: " + (response.hits[k].recipe.totalNutrients.PROCNT.quantity / response.hits[k].recipe.yield).toFixed(0) + "g</ul></span></p><p class='card-text'><hr><h5>Ingredients:</h5><hr><span class='ingredients' id='1" + num[k] + "'></span></p><p class='card-text'><span class='nutrition'><a class='btn btn-primary btn-lg' id=3" + num[k] + " href=" + JSON.stringify(response.hits[k].recipe.url) + "  target='_blank' role='button'>Click here for directions!</a></a></span></p>")
                    $("#2" + num[k]).html(response.hits[k].recipe.label);
                    for (var i = 0; i < response.hits[k].recipe.ingredients.length; i++) {
                        $("#1" + num[k]).append("<li>" + response.hits[k].recipe.ingredients[i].text + "</li>");
                    }
                    $("#1" + num[k]).append("<br><div><img src='" + response.hits[k].recipe.image + "'></div>Allergy Information:");
                    $("#1" + num[k]).append("<div class=" + num[k] + " id='allergy'></div>")
                    for (var j = 0; j < response.hits[k].recipe.healthLabels.length; j++) {
                        $("." + num[k]).append("|" + response.hits[k].recipe.healthLabels[j] + "|")
                    }

                    continue;
                } else if (3 <= k < 6) {
                    newDiv.addClass("col");
                    newDiv.attr('id', '' + num[k]);
                    $("#row2").append(newDiv)
                    $("#" + num[k]).html("<div class='card'><div class='card-body'><div class='card-body'<h5 class='card-title'><span class='label' id=2" + num[k] + "></span> </h5><p class='card-text'><div id='nfacts'>Makes: " + response.hits[k].recipe.yield + " Servings  |  Each Serving Contains:</div><div id='nfacts'> (" + (response.hits[k].recipe.totalWeight / response.hits[k].recipe.yield).toFixed(0) + " g)</div><hr><span class='facts' id='0'><ul>Calories: " + (response.hits[k].recipe.totalNutrients.ENERC_KCAL.quantity / response.hits[k].recipe.yield).toFixed(0) + "</ul><ul>Fat: " + (response.hits[k].recipe.totalNutrients.FAT.quantity / response.hits[k].recipe.yield).toFixed(0) + "g</ul><ul>Carbohydrates: " + (response.hits[k].recipe.totalNutrients.CHOCDF.quantity / response.hits[k].recipe.yield).toFixed(0) + "g</ul><ul>Protein: " + (response.hits[k].recipe.totalNutrients.PROCNT.quantity / response.hits[k].recipe.yield).toFixed(0) + "g</ul></span></p><p class='card-text'><hr><h5>Ingredients:</h5><hr><span class='ingredients' id='1" + num[k] + "'></span></p><p class='card-text'><span class='nutrition'><a class='btn btn-primary btn-lg' id=3" + num[k] + " href=" + JSON.stringify(response.hits[k].recipe.url) + "  target='_blank' role='button'>Click here for directions!</a></a></span></p>")
                    $("#2" + num[k]).html(response.hits[k].recipe.label);
                    for (var i = 0; i < response.hits[k].recipe.ingredients.length; i++) {
                        $("#1" + num[k]).append("<li>" + response.hits[k].recipe.ingredients[i].text + "</li>");
                    }
                    $("#1" + num[k]).append("<br><div><img src='" + response.hits[k].recipe.image + "'></div>Allergy Information:");
                    $("#1" + num[k]).append("<div class=" + num[k] + " id='allergy'></div>")
                    for (var j = 0; j < response.hits[k].recipe.healthLabels.length; j++) {
                        $("." + num[k]).append("|" + response.hits[k].recipe.healthLabels[j] + "|")
                    }

                    continue;
                } else if (k >= 6) {
                    newDiv.addClass("col");
                    newDiv.attr('id', '' + num[k]);
                    $("#row3").append(newDiv)
                    $("#" + num[k]).html("<div class='card'><div class='card-body'><div class='card-body'<h5 class='card-title'><span class='label' id=2" + num[k] + "></span> </h5><p class='card-text'><div id='nfacts'>Makes: " + response.hits[k].recipe.yield + " Servings  |  Each Serving Contains:</div><div id='nfacts'> (" + (response.hits[k].recipe.totalWeight / response.hits[k].recipe.yield).toFixed(0) + " g)</div><hr><span class='facts' id='0'><ul>Calories: " + (response.hits[k].recipe.totalNutrients.ENERC_KCAL.quantity / response.hits[k].recipe.yield).toFixed(0) + "</ul><ul>Fat: " + (response.hits[k].recipe.totalNutrients.FAT.quantity / response.hits[k].recipe.yield).toFixed(0) + "g</ul><ul>Carbohydrates: " + (response.hits[k].recipe.totalNutrients.CHOCDF.quantity / response.hits[k].recipe.yield).toFixed(0) + "g</ul><ul>Protein: " + (response.hits[k].recipe.totalNutrients.PROCNT.quantity / response.hits[k].recipe.yield).toFixed(0) + "g</ul></span></p><p class='card-text'><hr><h5>Ingredients:</h5><hr><span class='ingredients' id='1" + num[k] + "'></span></p><p class='card-text'><span class='nutrition'><a class='btn btn-primary btn-lg' id=3" + num[k] + " href=" + JSON.stringify(response.hits[k].recipe.url) + "  target='_blank' role='button'>Click here for directions!</a></a></span></p>")
                    $("#2" + num[k]).html(response.hits[k].recipe.label);
                    for (var i = 0; i < response.hits[k].recipe.ingredients.length; i++) {
                        $("#1" + num[k]).append("<li>" + response.hits[k].recipe.ingredients[i].text + "</li>");
                    }
                    $("#1" + num[k]).append("<br><div><img src='" + response.hits[k].recipe.image + "'></div>Allergy Information:");
                    $("#1" + num[k]).append("<div class=" + num[k] + " id='allergy'></div>")
                    for (var j = 0; j < response.hits[k].recipe.healthLabels.length; j++) {
                        $("." + num[k]).append("|" + response.hits[k].recipe.healthLabels[j] + "|")
                    }
                }
            }

        })

}
protein = "beef"
displayRecipe();

var queryURL = "https://api.edamam.com/search?q=" + protein + "&app_id=" + apiID + "&app_key=" + apiKey + "&from=0&to=3"

$(document).on("click", "#submit1", function nutrition() {
    $(".ingredients").empty()
    $("#row1").empty()
    $("#row2").empty()
    $("#row3").empty()
    protein = $("#APIsearch").val()
    console.log(protein)
    switch (parseInt(protein)) {
        case "beef":
            protein = "beef";
            break;
        case "pork":
            protein = "pork";
            break;
        case "chicken":
            protein = "chicken";
            break;
        case "seafood":
            protein = "seafood";
            break;
        case "tofu":
            protein = "tofu";
            break;
        case "veggie":
            protein = "veggie";
            break;

        default:
            break;
    }
    return displayRecipe(protein);

});