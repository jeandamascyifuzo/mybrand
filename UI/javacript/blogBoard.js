
  document.getElementById("add").addEventListener("click",(event)=>{
    event.preventDefault();
const Title = document.getElementById("title").value;
const ImageUrl = document.getElementById("image").value;
const content= document.getElementById("content").value;
//   console.log(Title,ImageUrl,content);

const addData = ()=>{
  db.collection("blog").add({
      Title,
      content,
      ImageUrl,
     timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }).then((result)=>{
      const data = result.data;
      localStorage.setItem("blogs",data);
  }).catch((error)=>{
      const errorMessage= error.message;
      console.log(errorMessage);
  })

} 
addData();

//READ DATA




//   const getBlogs = ()=>{
//       db.collection("blog").orderBy("timestamp",'desc').onSnapshot((snaphot)=>{
//           const data = snaphot.docs.map((doc)=>({id:doc.id,data:doc.data()}))
//   //   console.log("data",data.data.ImageUrl)
//    document.querySelector("#blog").innerHTML ="<div class='row'>"+
//    data.map((blog)=>"<div class='blog-col'>"+`<img id='imge' src=${blog?.data?.ImageUrl}>`+`<h3 id='header'>${blog?.data?.Title}</h3>`+`<p id='paragraph'>${blog?.data?.content}</p>`+`<button id='update' class='blog__update--btn'>Edit</button><button id='delete' class='blog__delete--btn'>Delete</button>`+"</div>")+"</div>"

//   // data.map((el)=>console.log(el.data.content));

//   })
//   }
//   getBlogs();
})


// UPDATE

const updateBlog = ()=>{

//   const Title = document.getElementById("title").innerHTML;
//   const ImageUrl = document.getElementById("image").innerHTML;
//   const content= document.getElementById("content").innerHTML;

  // db.collection("blog").set({
  //     Title,
  //     content,
  //     ImageUrl
  // },{
  // merge:true
  // }).then((result)=>{
  //     const data = result.data;
  //     localStorage.setItem("blogs",data);
  // }).catch((error)=>{
  //     const errorMessage= error.message;
  //     console.log(errorMessage);
  // })
 
 // delete

//  console.log(Title,ImageUrl,content);
}

// document.getElementById("update").addEventListener("click",()=>{
//   const Titles = document.getElementById("header").innerHTML;
//   const ImageUrls = document.getElementById("imge").src;
//   const contents= document.getElementById("paragraph").innerHTML;
//   document.getElementById("title").value=Titles;
//   document.getElementById("image").value=ImageUrls;
//   document.getElementById("content").innerHTML=contents;
//   console.log("Titles,ImageUrls,contents")
    
// });


document.getElementById("update_blog").addEventListener("click",(event)=>{
    event.preventDefault()
    const Title = document.getElementById("title").value;
    const ImageUrl = document.getElementById("image").value;
    const content= document.getElementById("content").value;

    db.collection("blog").doc('oSyX0Eo6gDdkD9TbllVQ').set({
        Title,
        content,
        ImageUrl,
       timestamp: firebase.firestore.FieldValue.serverTimestamp()
    },
    {
     merge:true   
    }
    ).then((result)=>{
        const data = result.data;
        localStorage.setItem("blogs",data);
    }).catch((error)=>{
        const errorMessage= error.message;
        console.log(errorMessage);
    })
    console.log("Well updated")
})

function blogIds(blogs){
console.log(blogs)
}

function myFunc(){
    document.getElementById("updates").addEventListener('click',()=>{
        const Titles = document.getElementById("header").innerHTML;
          const ImageUrls = document.getElementById("imge").src;
          const contents= document.getElementById("paragraph").innerHTML;
          document.getElementById("title").value=Titles;
          document.getElementById("image").value=ImageUrls;
          document.getElementById("content").innerHTML=contents;
    })
   //  console.log(blogs?.id)
}
const getBlogs = ()=>{
    db.collection("blog").orderBy("timestamp",'desc').onSnapshot((snaphot)=>{
        const data = snaphot.docs.map((doc)=>({id:doc.id,data:doc.data()}))
//   console.log("data",data.data.ImageUrl)
 document.querySelector("#blog").innerHTML =
 data.map((blogs)=> `
 <div class="row fgfg">
 <div class="blog-col">
 <img id="imge" src=${blogs?.data?.ImageUrl}>
 <h3 id="header">
 ${blogs?.data?.Title}
 </h3>
 <p id="paragraph">
 ${blogs?.data?.content}
 </p>
 <script>
  ${blogIds(blogs)}
 </script>
 <button id="updates" class="blog__update--btn"onclick="myFunc()">
 Edit
 </button>
 <button id="deletes" class="blog__delete--btn">
 Delete
 </button>
 </div>
 
 </div>
 `)

// data.map((el)=>console.log(el.data.content));

})
}
getBlogs();


//"<div class='row'>"+"<div class='blog-col'>"+`<img id='imge' src=${blog?.data?.ImageUrl}>`+`<h3 id='header'>${blog?.data?.Title}</h3>`+`<p id='paragraph'>${blog?.data?.content}</p>`+`<button id='update' class='blog__update--btn'>Edit</button><button id='delete' class='blog__delete--btn'>Delete</button>`+"</div>"+"</div>"
//  document.getElementsByClassName("blog__update--btn").addEventListener("click",()=>{
//      console.log("Hi");
//  });