var firebaseConfig = {
    apiKey: "AIzaSyB_u64MjpDHqA7cw3xQ4QCAnnlRvpcLfi8",
    authDomain: "domm-a7373.firebaseapp.com",
    databaseURL: "https://domm-a7373.firebaseio.com",
    projectId: "domm-a7373",
    storageBucket: "",
    messagingSenderId: "651633677889",
    appId: "1:651633677889:web:8731b3f75b269e2c6658c0"
};
​
firebase.initializeApp(firebaseConfig);
​
var database = firebase.database();
var initialWeight = 0;
database.ref("/prev/initialWeight").on("value", function(snap) {
    initialWeight = snap.val()
    var firstRow = $("<tr>").append(
        $("<td>").text("10/3/2019"),
        $("<td>").text(initialWeight),
        $("<td>").text(0)
    );
    $("#weightTable > tbody").append(firstRow);
})
​
​
​
​
$(document).on("click", "#add-weight-btn", function newWeight(event) {
​
    event.preventDefault();
​
    var weight = $("#weight").val().trim();
    var date = moment().format('l');
​
​
    database.ref("/weight").push({
        weight: weight,
        date: date,
    });
​
​
​
​
​
    $("#weight").val("")
});
​
​
​
database.ref("/weight").on("child_added", function(childSnapshot) {
​
    weight = childSnapshot.val().weight;
    date = childSnapshot.val().date;
​
    var newRow = $("<tr>").append(
        $("<td>").text(date),
        $("<td>").text(weight),
        $("<td>").text(-(initialWeight - weight))
​
    );
​
    $("#weightTable > tbody").append(newRow);
})
​
database.ref("/weight").on("child_added", function(snapshot, prevChildKey, ) {
    var newPost = snapshot.val();
    console.log("Previous Post ID: " + prevChildKey);
})
