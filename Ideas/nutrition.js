var apiKey = "c1af05bee1161ebc3a62cf3369b2b344";
var apiID = "c6bee22a";
var protien = "";
// var startCals = 10; //range
// var endCals = 5000;
console.log(protien);
function displayRecipe() {
   var queryURL = "https://api.edamam.com/search?q=" + protien + "&app_id=" + apiID + "&app_key=" + apiKey + "&from=0&to=3&calories=591-722&health=alcohol-free";
   $.ajax({
           url: queryURL,
           method: "GET"
       })
       .then(function(response) {
           console.log(response)
           var num = ["a", "b", "c", "d", "e", "h"]
           for (var k = 0; k < response.hits.length; k++) {
               var newDiv = $("<div>");
               newDiv.addClass("col");
               newDiv.attr('id', '' + num[k]);
               $("#row1").append(newDiv)
               $("#" + num[k]).html("<div class='card'><div class='card-body'><div class='card-body'<h5 class='card-title'><span class='label' id=2" + num[k] + "></span> </h5><p class='card-text'><span class='ingredients' id='1" + num[k] + "'></span></p><p class='card-text'><span class='nutrition'><a class='btn btn-primary btn-lg id=3" + num[k] + " href='' role='button'>Click here for directions!</a></a></span></p>")
               $("#2" + num[k]).html(response.hits[k].recipe.label);
               for (var i = 0; i < response.hits[k].recipe.ingredients.length; i++) {
                   $("#1" + num[k]).append("<li>" + response.hits[k].recipe.ingredients[i].text + "</li>");
               }
               $("#1" + num[k]).append("<div><img src='" + response.hits[k].recipe.image + "'></div>");
               $("#3" + num[k]).attr("href", "" + response.hits[k].recipe.url)
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
       case "tofu":
           protein = "tofu";
           break;
       default:
           break;
   }
   return displayRecipe(protien);
});