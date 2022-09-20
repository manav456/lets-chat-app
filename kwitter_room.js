
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAhvXm4Wkva4DhnfupjGoX-Ppdq58AHQbE",
      authDomain: "kwitter-c719c.firebaseapp.com",
      projectId: "kwitter-c719c",
      storageBucket: "kwitter-c719c.appspot.com",
      messagingSenderId: "424508807502",
      appId: "1:424508807502:web:285dd815b74f01ac3ca61f"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
