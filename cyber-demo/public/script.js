const form = document.getElementById("signupForm");


form.addEventListener("submit", async function(e){

    e.preventDefault();



    const data = {

        number:
        document.getElementById("number").value,


        fullname:
        document.getElementById("e-mail").value,


        username:
        document.getElementById("username").value,


        password:
        document.getElementById("password").value

    };



    const response = await fetch("/save", {

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },


        body:JSON.stringify(data)

    });



    const result = await response.json();



    alert(result.message);



    // ✅ ADDED (what you asked: close or exit after popup)
    form.reset();

    window.location.href = "/";

}); 