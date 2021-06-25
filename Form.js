// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCibw-QV14dpTtJSS5ns02TETkZMQCONik",
    authDomain: "sports-website-b9f40.firebaseapp.com",
    databaseURL: "https://sports-website-b9f40-default-rtdb.firebaseio.com",
    projectId: "sports-website-b9f40",
    storageBucket: "sports-website-b9f40.appspot.com",
    messagingSenderId: "1032155445074",
    appId: "1:1032155445074:web:48bbb5007eee83722dac8b",
    measurementId: "G-JSRSRC4GV3"
  };
  firebase.initializeApp(firebaseConfig);
  var userinputref = firebase.database().ref();
  document.getElementById("form").addEventListener('submit',submitform);
  function submitform(e){
    e.preventDefault();
    
    var year =document.getElementById("year").value;
    
     readloaction(year)
  }
  function readloaction(state){
  
    var centers ;
    var ref=firebase.database().ref(state);
    ref.on('value',(data) => {centers=data.val(); document.getElementById("centers").innerHTML ="<br>"+centers;
    })
  }    