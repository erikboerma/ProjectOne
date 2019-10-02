
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

var date = moment().format('l');
var currentWeight = "";

$(document).on("click", "#add-weight-btn", function newWeight(event) {

    event.preventDefault();

    currentWeight = $("#weight").val().trim();

    // var weight = {
    //     number: 0,
    //     current: date,

    database.ref("/weight").push({
        weight: currentWeight,
        lastDate: date

    });
    
    $("#weight").val("")
});


database.ref("/weight").on("value", function () {

    var newRow = $("<tr>").append(
        $("<td>").text(date),
        $("<td>").text(currentWeight),
        $("<td>").text(currentWeight - lastWeight)
    );

    $("#weightTable > tbody").append(newRow);
})
    
    
    
    
    var lastWeight = 0;
    var lastDate = 0;
    
    

    database.ref("/weight").on("child_added", function (childSnapshot) {
    
    lastWeight = childSnapshot.val().weight;
    lastDate = childSnapshot.val().lastDate;

    //pounds lost /start weight) * 100


})

database.ref("/weight").on("child_added", function(snapshot, prevChildKey, ) {
    var newPost = snapshot.val();
    console.log("Previous Post ID: " + prevChildKey);
})