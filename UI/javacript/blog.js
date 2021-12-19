
const firebaseConfig = {
    apiKey: "AIzaSyA8RalzTwbiyOFjIAZ8XD0-tz5erWwZa2A",
    authDomain: "capstone-project-2c209.firebaseapp.com",
    projectId: "capstone-project-2c209",
    storageBucket: "capstone-project-2c209.appspot.com",
    messagingSenderId: "908272886510",
    appId: "1:908272886510:web:3bbb7137663785d85709ff"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

const getBlogs = ()=>{
    db.collection("blog").onSnapshot((snaphot)=>{
        const data = snaphot.docs.map((doc)=>({id:doc.id,data:doc.data}))
        localStorage.setItem("getData",data);
        console.log(data)
    })
}
getBlogs()