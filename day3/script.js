function checkName(){
    let input = document.getElementById("nameInput").value;
    if(input == ""){
        document.getElementById("result").innerText = "please enter a name!";
    }else{
        document.getElementById("result").innerText = "Hello " + input + "!";

    }
    }

function checkAge(){
    let age = Number(document.getElementById("ageInput").value);
    if(age==""){
        document.getElementById("ageResult").innerText = "Please enter your age";
    }
    else if(age<18){
        document.getElementById("ageResult").innerText = "You are a minor";
    }
    else{
        document.getElementById("ageResult").innerText = "You are an Adult";
    }
    }