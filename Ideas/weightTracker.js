
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


$(document).on("click", "#add-weight-btn", function newWeight(event) {

    event.preventDefault();

    var weightInput = $("#weight").val().trim();
    var date = moment().format('l');

    var newWeight = {
        weight: weightInput,
        current: date,

    
};

database.ref("/weight").push(newWeight);

$("#weight").val("");
});


database.ref("/weight").on("child_added", function(childSnapshot) {
    var weightInput = childSnapshot.val().weight;
    var date = childSnapshot.val().current;
    console.log("base")

    //pounds lost /start weight) * 100


    var newRow = $("<tr>").append(
        $("<td>").text(date),
        $("<td>").text(weightInput),
    );

    $("#weightTable > tbody").append(newRow);
    
})