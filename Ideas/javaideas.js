var config = {
    apiKey: "AIzaSyCs3K5zwuOuS0odq89IpPLC7HnXTOcDqgI",
    authDomain: "recent-user-with-all-use-e8e76.firebaseapp.com",
    databaseURL: "https://recent-user-with-all-use-e8e76.firebaseio.com",
    projectId: "recent-user-with-all-use-e8e76",
    storageBucket: ""
};

firebase.initializeApp(config);

var database = firebase.database();


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
var newUser = false;
var login = false;
$("#new-user").on("click", function() {
    newUser = true;
})
$("#login-page").on("click", function() {
    login = true;
})

if (newUser === true) {
    CreateNewUser();
} else if (login === true) {
    LoginPage();
} else {}

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
            database.ref("/users").push({

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

function LoginPage() {
    $("#login").on("click", function LoginInput() {

        var username = $("#username-input").val().trim();
        var password = $("#password-input").val().trim();

        if (username === database.ref("/users").username || password === database.ref("/users").password) {
            //lead to user's page
        } else {
            //prompt error "incorrect username/password"
        }

    })
    $("#create-new-user").on("click", CreateNewUser())
}

function BMI() {
    BMI = (user.weight * 703) / user.height
        //append to webpage
}