var user = {
    username: //links to user input on database
        password: //links to password on login
        email: //user email for notifications
        nameF: //user first name
        nameL: //user last name
        sex: //user sex
        age: //user age
        weight: //user weight
        height: //user height
        goal: //user weight/health goals updated based off database changes
        track: [] //array of new weight to track progess
}
var BMI = 0 //updates based off user health stats from calculator
var NewUser = false;
$("#new-user").on("click", function() {
    NewUser = true;
})

if (NewUser === true) {
    CreateNewUser();
}


function CreateNewUser() {

    $("#submit").on("click", function NewUser() {

        user.username = $("#username-input").val().trim();
        user.password = $("#password-input").val().trim();
        user.email = $("#email-input").val().trim();
        user.nameF = $("#first-input").val().trim();
        user.nameL = $("#last-input").val().trim();
        user.sex = $("#sex-input").val().trim();
        user.age = $("#age-input").val().trim();
        user.weight = $("#weight-input").val().trim();
        user.height = $("#height-input").val().trim();
        user.goal = $("#goal-input").val().trim();
        user.track[0] = $("#weight-input").val().trim();

        if (user.password === $("#passwordCheck-input").val().trim()) {
            database.attr({

                user: user.username,
                password: user.password,
                email: user.email,
                first: user.nameF,
                last: user.nameL,
                sex: user.sex,
                age: user.age,
                weight: user.weight,
                height: user.height,
                goal: user.goal,
                track: user.track

                //continue to next page
            });

        } else {
            //error prompt, do not continue to next page
        }
    })

}