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

$("#add-weight").on("click", function(event) {
    event.preventDefault();

    var weightInput = $("#weight").val().trim();
    var moment = moment().format("x")

    var newWeight = {
        weight: weightInput,
    
};

database.ref("/weight").push(newWeight);

$("#weight").val("");
});


database.ref("/weight").on("child_added", function(childSnapshot) {
    var weightInput = childSnapshot.val().weight;
})