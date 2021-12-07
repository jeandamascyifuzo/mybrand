

function validate(){
    let id =() => document.getElementById('#email');
    let form = document.getElementById('#main');
    form.addEventListener("submit",(event)=>{
        event.preventDefault()
    })
   console.log(id.value);
}


// let classes = (classes) => document.getElementsByClassName(classes);

// console.log(id.value);

// let username = id(username),
//     email    = id(email),
//     password = id(password),
//     form     = id(main),
//     errorMsg = classes("error"),
//     successIcon = classes("success-icon"),
//     failureIcon = classes("failure-icon");
//     form.addEventListener("submit",(e) =>{
//         e.preventDefault();
//         control(username,0,"Username can not be blank");
//         control(email,1,"Email can not be blank");
//         control(password,2,"Password can be blank");
//     });

//     let control = (id, serial, message) =>{
//         if(id.value.trim() ===""){
//             errorMsg[serial].innerHTML = message;
//             id.style.border ="2px solid red";

//             failureIcon[serial].style.opacity ="1";
//             successIcon[serial].style.opacity ="0";
//         }
//         else{
//             errorMsg[serial].innerHTML ="";
//             id.style.border ="2px solid green";

//             failureIcon[serial].style.opacity ="0";
//             successIcon[serial].style.opacity ="1";

//         }
//     }