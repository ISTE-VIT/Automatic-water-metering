// Your web app's Firebase configre
  var firebaseConfig = {
    apiKey: "AIzaSyDnasIQf2Ezs0XfsFXOrO6CJ2F2q39sSeY",
    authDomain: "plant-machine-ae2f0.firebaseapp.com",
    databaseURL: "https://plant-machine-ae2f0.firebaseio.com/",
    projectId: "plant-machine-ae2f0",
    storageBucket: "plant-machine-ae2f0.appspot.com",
    messagingSenderId: "861480646468",
    appId: "1:861480646468:web:64856f5db4122149924911",
    measurementId: "G-6CEKLC6P2M"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



  $(document).ready(function(){
  var database = firebase.database();
  var relay;
  database.ref().on("value",function(snap){
    relay = snap.val().relay;
    if (relay == 1){
      $(".relay").text("The relay is on");
    }else{
      $(".relay").text("The relay is off");
    }
   });

  $(".relaybutton").click(function(){
    var firebaseRef = firebase.database().ref().child("relay");

    if(relay ==  1){
      firebaseRef.set(0);
      relay = 0;
    }else{
      firebaseRef.set(1);
      relay = 1;
    }
  });
});

