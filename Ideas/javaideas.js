 var firebaseConfig = {
     apiKey: "AIzaSyB_u64MjpDHqA7cw3xQ4QCAnnlRvpcLfi8",
     authDomain: "domm-a7373.firebaseapp.com",
     databaseURL: "https://domm-a7373.firebaseio.com",
     projectId: "domm-a7373",
     storageBucket: "",
     messagingSenderId: "651633677889",
     appId: "1:651633677889:web:8731b3f75b269e2c6658c0"
 };

 firebase.initializeApp(firebaseConfig);

 var database = firebase.database();


 var user = {
     username: "",
     //    password: "",
     //    email: "",
     nameF: "",
     nameL: "",
     sex: "",
     age: 0,
     weight: 0,
     height: 0,
     goal: 0,
     //   track: [], //array of new weight to track progess
     //  page: ""
 }
 var BMI = 0 //updates based off user health stats from calculator
 var newUser = false;
 var login = false;
 //$("#new-user").on("click", function() {
 //    newUser = true;
 //    location.replace("");
 // })
 //$("#login-page").on("click", function() {
 //     login = true;
 // })

 //if (newUser === true) {
 //     CreateNewUser();
 // } else if (login === true) {
 //     LoginPage();
 // } else {}

 //function CreateNewUser() {

 $(document).on("click", "#submit", function NewUser() {
         event.preventDefault();

         user.username = $("#username-input").val().trim();
         //   user.password = $("#password-input").val().trim();
         //   user.email = $("#email-input").val().trim();
         user.nameF = $("#first-input").val().trim();
         user.nameL = $("#last-input").val().trim();
         user.sex = $("#sex-input").val();
         user.age = $("#age-input").val().trim();
         user.weight = $("#weight-input").val().trim();
         user.height = $("#height-input").val().trim();
         user.goal = $("#goal-input").val().trim();
         // user.track[0] = $("#weight-input").val().trim();

         //   if (user.password === $("#passwordCheck-input").val().trim()) {
         database.ref("/users").push({

             user: user.username,
             //    password: user.password,
             //   email: user.email,
             first: user.nameF,
             last: user.nameL,
             sex: user.sex,
             age: user.age,
             weight: user.weight,
             height: user.height,
             goal: user.goal,
             //track: user.track

             //continue to next page
             //    });

             //   } else {
             //error prompt, do not continue to next page
             // }
         })
         console.log(user.username)
         console.log(user.nameF)
         console.log(user.nameL)
         console.log(user.age)
         console.log(user.sex)
         console.log(user.weight)
         console.log(user.height)
         console.log(user.goal)
     })
     // }

 function LoginPage() {
     $("#login").on("click", function LoginInput() {

         var username = $("#username-input").val().trim();
         //    var password = $("#password-input").val().trim();

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
     $("#BMI").text(BMI);
 }

 function Tracker() {
     $("#start").text(user.track[0]);
     $("#current").text(user.weight);
     $("#goal").text(user.goal);

 }