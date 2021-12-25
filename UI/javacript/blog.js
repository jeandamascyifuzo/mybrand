
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


// READ MORE BLOGS

function readMore (){
  document.getElementById("readmore").addEventListener("click",(event)=>{
    event.preventDefault()
    const image = document.getElementById("imge").src;
    const Title = document.getElementById("header").innerHTML;
    const Paragraph = document.getElementById("paragraph").innerHTML;
    console.log(image,Title,Paragraph);
    localStorage.setItem("Blog",JSON.stringify({Title:Title,Image:image,Paragraph:Paragraph}))
  })
}



  const getBlogs = () => {
    db.collection("blog").orderBy("timestamp", 'desc').onSnapshot((snaphot) => {
        const data = snaphot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        //   console.log("data",data.data.ImageUrl)
        document.querySelector(".row").innerHTML =
            data.map((blogs) => `
 <div class="row fgfg">
 <div class="blog-col">
 <img id="imge" src=${blogs?.data?.ImageUrl}>
 <h3 id="header">
 ${blogs?.data?.Title}
 </h3>
 <p id="paragraph">
 ${blogs?.data?.content}
 </p>
 
 <button id="readmore" onclick="readMore()"><a href="/mybrand/UI/pages/single-blog.html">Read more...</a></button>
 </div>
 
 </div>
 `).join("")

    })
}
getBlogs();


// SEARCH BLOG

document.getElementById('searchbtn').addEventListener("click",()=>{
  const searchkeyword = document.getElementById("search").value;
  const getBlogs = () => {
    db.collection("blog").orderBy("timestamp", 'desc').onSnapshot((snaphot) => {
        const data = snaphot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        //   console.log("data",data.data.ImageUrl)

    let searchResult;
     if(searchkeyword!==''){
      searchResult = data.filter((blog)=>{
        return Object.values(blog.data).join(' ').toLowerCase().includes(searchkeyword.toLowerCase())
      })
     }

if(searchkeyword!==''){
  document.querySelector(".row").innerHTML =
  searchResult.map((blogs) => `
<div class="row fgfg">
<div class="blog-col">
<img id="imge" src=${blogs?.data?.ImageUrl}>
<h3 id="header">
${blogs?.data?.Title}
</h3>
<p id="paragraph">
${blogs?.data?.content}
</p>

<button type="submit"><a href="/mybrand/UI/pages/single-blog.html">Read more...</a></button>
</div>

</div>
`).join("")
}else{
  document.querySelector(".row").innerHTML =
  data.map((blogs) => `
<div class="row fgfg">
<div class="blog-col">
<img id="imge" src=${blogs?.data?.ImageUrl}>
<h3 id="header">
${blogs?.data?.Title}
</h3>
<p id="paragraph">
${blogs?.data?.content}
</p>

<button type="submit"><a href="/mybrand/UI/pages/single-blog.html">Read more...</a></button>
</div>

</div>
`).join("")
}

    })
}
getBlogs();

})