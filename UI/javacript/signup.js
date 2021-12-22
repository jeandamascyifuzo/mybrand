import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";









const email = document.getElementById('email');
const password = document.getElementById('password');

console.log(email,password);

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });






































const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav-links');
menu.addEventListener('click', () =>{
    nav.classList.toggle('nav-active');
});


const form = document.getElementById('main');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    }
    else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 6 ) {
        setError(password, 'Password must be at least 6 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }
};



//firebase

const firebaseConfig = {
    apiKey: "AIzaSyBAwt0Q11_t9AE_dcTZZEg47RQ3e6ZhlYs",
    authDomain: "capstone-project-a3ca7.firebaseapp.com",
    databaseURL: "https://capstone-project-a3ca7-default-rtdb.firebaseio.com",
    projectId: "capstone-project-a3ca7",
    storageBucket: "capstone-project-a3ca7.appspot.com",
    messagingSenderId: "508777674844",
    appId: "1:508777674844:web:44046bb51aae2cf2ce4e99"
  };

  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);
// initialize variables
  const auth = firebase.auth();
  const db = firebase.database();

//set signup function
  function register(){
      //get input data
    
     username = document.getElementById('username').value;
     email = document.getElementById('email').value;
     password = document.getElementById('password').value;
     password2 = document.getElementById('password2').value;
    auth.createUserWithEmailAndPassword(email, password)
    .then(function(){
        var user = auth.currentUser
        //add user to the firebase
        var dbRef = db.ref()
        // create user data
        var userData = {
            username: username,
            email: email,
            last_login: Date.now()
        }

        dbRef.child('user/' + user.uid).set(userData)



        alert('well created!')
    })
    .catch(function(error){
        var error_code = error_code
        var error_message = error.message
        alert(error_message)
    })
  }







