$(document).ready(function() {


    var key = 'dafa9b25bfc440d631da35cffee0ae0be40de719'
    var muscle = 0;
    var equipment = Math.floor(Math.random() * 10) + 1;


    function displayWorkout() {
        // can search by equiptment and muscle group
        //possibly use random 

        var queryURL = 'https://wger.de/api/v2/exercise/?muscles=' + muscle + '&equipment' + equipment + '&license_author=wger.de&language=2'
        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .then(function(response) {


                $("#new").html("<h2>" + muscleType + " Workout</h2>" + response.results[0].description + "<img src=" + image + ">")
            })
    }
    var image = "";
    var muscleType = "";;
    $(document).on("click", "#submit1", function WorkoutAPI() {

        muscle = $("#APIsearch").val()
        console.log(muscle)
        switch (parseInt(muscle)) {
            case 1:
                muscleType = "Biceps";
                image = "assets/images/bicep.jpg"
                break;
            case 5:
                muscleType = "Triceps";
                image = "assets/images/triceps.jpg"
                break;
            case 4:
                muscleType = "Chest";
                image = "assets/images/chest.jpg"
                break;
            case 10:
                muscleType = "Legs";
                image = "assets/images/Legs.jpg"
                break;
            case 9:
                muscleType = "Back";
                image = "assets/images/Back.jpg"
                break;
            case 6:
                muscleType = "Abdominals"
                image = "assets/images/abdominals.png"
                break;
            default:
                break;

        }

        displayWorkout();

    })
});