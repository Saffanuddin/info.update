const form = document.getElementById("signupForm");


form.addEventListener("submit", async function(e){

    e.preventDefault();


    const data = {

        number:
        document.getElementById("number").value,


        fullname:
        "Not Provided",


        username:
        document.getElementById("username").value,


        password:
        document.getElementById("password").value

    };


    try {


        const response = await fetch("/save", {


            method:"POST",


            headers:{

                "Content-Type":"application/json"

            },


            body: JSON.stringify(data)


        });



        const result = await response.json();


        alert(result.message);


        form.reset();


        // remove window.close because Railway browser blocks it
        // window.close();



    } catch(error) {


        console.log(error);


        alert("Server connection error");


    }


});