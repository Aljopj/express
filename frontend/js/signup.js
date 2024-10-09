document.getElementById("formss").addEventListener("submit",async(e)=>{
    e.preventDefault();
    
    let username=document.getElementById("username").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let cpassword=document.getElementById("cpassword").value;
    console.log(username,email,password,cpassword);

    await fetch("http://localhost:3000/api/useremployee",{
        method:"post",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({username,email,password,cpassword})

    }).then((res)=>{
        if(res.status==201){
            alert("Success")
            window.location.href="../index.html"
        }
        else if(res.status==400){
            alert("user Already Exist")
        }
        else{
            alert("Unable to save data")
        }
    }).catch((error)=>{
        console.log(error);
        
    })

})


