const checkButton = document.getElementById("check-btn");
checkButton.addEventListener("click", function(){
    const inputElement = document.getElementById("text-input");
    const inputWord = inputElement.value;
    const resultElement = document.getElementById("result");

    if (!inputWord.trim()){
        alert("Please input a value");
    }
    const checkText = cleanText(inputWord);
    if (isPalindrome(checkText)){
        resultElement.innerText = `${inputWord} is a palindrome`;
    } else{
        resultElement.innerText = `${inputWord}  is not a palindrome`;
    };
});

function cleanText(str){
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanStr;
}

function isPalindrome(word){
    const orgiWord = word;
    const reverseWord = word.split("").reverse().join("");
    return orgiWord === reverseWord;
}