$(document).ready(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCp14chIR3_ropTyer2yyR4NvTAlUvc0d8",
    authDomain: "trainproject-fe3d8.firebaseapp.com",
    databaseURL: "https://trainproject-fe3d8.firebaseio.com",
    storageBucket: "trainproject-fe3d8.appspot.com",
    messagingSenderId: "775046742039"
  };
  firebase.initializeApp(config);

  database = firebase.database();

 $('#trainInfo').on('click', function(){

 	var trainName = $('#tName').val().trim();
 	var destination = $('#destination').val().trim();
 	var trainStart = moment($('#sDate').val().trim().format("HH:mm").utc());
 	var trainFreq = $('#freq').val().trim();
  var nTrain = moment($("").add(trainFreq,"m")

 	var newTrain = {
 		Name: trainName,
 		Destinaton: destination,
 		StartTime: trainStart,
 		Frequency: trainFreq
 	};

 	database.ref().push(newTrain);

 	$('#tName').val("");
 	$('#destination').val("");
 	$('#sDate').val("");
 	$('#freq').val("");

 	return false;
 });

 database.ref().on("child_added", function(childSnapshot, prevChildKey){
 		console.log(childSnapshot.val());

 		var trainName = childSnapshot.val().Name;
 		var destination = childSnapshot.val().Destinaton;
 		var trainStart = childSnapshot.val().StartTime;
 		var trainFreq = childSnapshot.val().Frequency;
    $("tInfoDisplay").append("<tr><td>"+trainName+"</td>","<td>"+destination+"</td>","<td>"+trainStart+"</td>","<td>"+nTrain+"</td>","<td>"+trainFreq+"</td></tr>");
 })


});