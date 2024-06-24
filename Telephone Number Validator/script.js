const checkBtn = document.getElementById("check-btn")
const clearBtn = document.getElementById("clear-btn")
const checkPhoneNumber = (number) => {
    const regex = /^1?[-. ]?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/
    const resultsDiv =document.getElementById("results-div")
    if(regex.test(number)){
        resultsDiv.innerText = `Valid US number: ${number}`
    } 
    else{
        resultsDiv.innerText = `Invalid US number: ${number}`
    }
}
const checkUserInput = () =>{
    const userInput = document.getElementById("user-input")
    if(!userInput.value){
        alert("Please provide a phone number");
    } else{
        checkPhoneNumber(userInput.value);
    } 
    userInput.value="";
}
const clearInput =() =>{
    const userInput = document.getElementById("user-input")
    const resultsDiv =document.getElementById("results-div")
    userInput.value="";
    resultsDiv.innerHTML = "";   
}

checkBtn.addEventListener("click", checkUserInput)
clearBtn.addEventListener("click", clearInput)