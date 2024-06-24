const checkBtn = document.getElementById("check-btn")
const clearBtn = document.getElementById("clear-btn")

const checkPhoneNumber = (number) =>{
    
}

const checkUserInput = () =>{
    const userInput = document.getElementById("user-input")
    if(!userInput.value){
        alert("Please provide a phone number");
    }
    else {
        checkPhoneNumber(userInput.value);
    }
    userInput.value="";
}
const clearInput =() =>{
    const userInput = document.getElementById("user-input")
    const resultsDiv = document.getElementById("results-div")
    userInput.value="";
    resultsDiv.value="";
}

checkBtn.addEventListener("click", checkUserInput)
clearBtn.addEventListener("click", clearInput)