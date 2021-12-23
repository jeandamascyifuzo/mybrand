
//ADD DATA

document.getElementById("add").addEventListener("click", (event) => {
    event.preventDefault();
    const Title = document.getElementById("title").value;
    const ImageUrl = document.getElementById("image").value;
    const content = document.getElementById("content").value;
  

    const addData = () => {
        db.collection("blog").add({
            Title,
            content,
            ImageUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then((result) => {
            const data = result.data;
            localStorage.setItem("blogs", data);
            
        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        })

         document.getElementById("title").value="";
         document.getElementById("image").value="";
         document.getElementById("content").value="";

    }
    addData();    
})
// GET BLOGS FROM FIREBASE
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

 <button id=${blogs.id}+edit_blog class="blog__update--btn"onclick="myFunc(${JSON.stringify(blogs).split('"').join("&quot;")})">
 Edit
 </button>
 <button id="deletes" class="blog__delete--btn"onClick="deleteBlog(${JSON.stringify(blogs).split('"').join("&quot;")})">
 Delete
 </button>
  </div>
 </div>
 `).join("")

    })
}
getBlogs();

// UPDATE BLOG
document.getElementById("update_blog").addEventListener("click", (event) => {
    event.preventDefault()
    const Title = document.getElementById("title").value;
    const ImageUrl = document.getElementById("image").value;
    const content = document.getElementById("content").value;
    const id = document.getElementById("blog_id").value;
    
    // db.collection("blog").doc('oSyX0Eo6gDdkD9TbllVQ').set({

    const updateblog = ()=>{

        db.collection("blog").doc(id).set({
            Title,
            content,
            ImageUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        },
            {
                merge: true
            }
        ).then((result) => {
            const data = result.data;
            localStorage.setItem("blogs", data);
            alert("Data well Updated...")
            
            console.log("Document written with ID: ", result.id);
        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        })
        document.getElementById("title").value="";
        document.getElementById("image").value="";
        document.getElementById("content").value="";
    }
    updateblog()
})

// DELETE BLOG
function deleteBlog(blog) {
    document.getElementById("deletes").addEventListener("click",(event)=>{
      event.preventDefault()
      db.collection("blog").doc(blog.id).delete()
    })

}

// GETTING BLOG CONTENTS AND ID 


function myFunc(blog) {
    document.querySelector(".blog__update--btn").addEventListener('click', (event) => {
        const Titles = document.getElementById("header").innerHTML;
        const ImageUrls = document.getElementById("imge").src;
        const contents = document.getElementById("paragraph").innerHTML;
        document.getElementById("blog_id").value=event.target.id.split("+")[0]
        document.getElementById("title").value = Titles;
        document.getElementById("image").value = ImageUrls;
        document.getElementById("content").innerHTML = contents;
         console.log(Titles,ImageUrls,contents);
    })
    
   
}


//edit_blog