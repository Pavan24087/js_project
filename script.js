// {/* <script type="module"> */}
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
    const email=document.getElementById("email")
    const password=document.getElementById("password")
    const btn=document.querySelector(".login_btn")
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBIUaHLwPaqOiVAkkR57uQ0-Mf9NUnnAWo",
    authDomain: "login-398a8.firebaseapp.com",
    projectId: "login-398a8",
    storageBucket: "login-398a8.firebasestorage.app",
    messagingSenderId: "1035221748540",
    appId: "1:1035221748540:web:f7af368e4c8d146cf16c39"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  btn.addEventListener("click",function(event){
    const message=document.querySelector(".message_box")

    const email=document.getElementById("email").value
    const password=document.getElementById("password").value
   event.preventDefault() 
 createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
   message.textContent="Account successfully created!"
   message.classList.remove("error")
   message.classList.add("created")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    message.classList.add("error")
    if(errorCode == "auth/email-already-in-use"){
        message.textContent = "This email is already registered!";
    }else if(errorCode == "auth/invalid-email"){
        messege.textContent = "The email format is incorrect!";
    }else if(errorCode == "auth/weak-password"){
        messege.textContent = "The password must be at least 6 characters!";
    }else{
      message.textContent = "An unexpected error occurred: " + errorMessage;
    }
  });

  })
// </script>