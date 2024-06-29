let price = 19.5;
let cid = [
   [["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 100]]
];
const cash = document.getElementById("cash")
const purchaseBtn = document.getElementById("purchase-btn")
const changeDue = document.getElementById("change-due")

const checkStatus = (price) => {

}

const statusMsg = (arr,change) => {
    let countOfChange = arr.reduce((acc, current) => {
        if (acc[current]) {
            acc[current]++;
        } else {
            acc[current] = 1;
        }
        return acc;
    }, {});
    for (let key in countOfChange){
        if(key === "hundred"){
            changeDue.textContent += `HUNDRED: $${countOfChange[key]*100} `
        }
        if(key === "twenty"){
            changeDue.textContent += `TWENTY: $${countOfChange[key]*20} `
        }
        if(key === "ten"){
            changeDue.textContent += `TEN: $${countOfChange[key]*10} `
        }
        if(key === "five"){
            changeDue.textContent += `FIVE: $${countOfChange[key]*5} `
        }
        if(key === "one"){
            changeDue.textContent += `ONE: $${countOfChange[key]*1} `
        }
        if(key === "quarter"){
            changeDue.textContent += `QUARTER: $${countOfChange[key]*0.25} `
        }
        if(key === "dime"){
            changeDue.textContent += `DIME: $${countOfChange[key]*0.1} `
        }
        if(key === "nickel"){
            changeDue.textContent += `NICKEL: $${countOfChange[key]*0.05} `
        }
        if(key === "penny"){
            changeDue.textContent += `PENNY: $${countOfChange[key]*0.01} `
        }
    }

}

const calculateChange = (cash,price) => {
    const change = (cash - price).toFixed(2);
    let remainingChange = change
    let changeArr = [];
    while (cid[8][1] > 0 ){
        if(remainingChange / 100 >= 1){
            changeArr.push("hundred")
            cid[8][1] -= (100).toFixed(2);
            remainingChange -= (100).toFixed(2)
        } else {
            break;
        }
    } 

    while (cid[7][1] > 0 ){
        if(remainingChange / 20 >= 1){
            changeArr.push("twenty")
            cid[7][1] -= (20).toFixed(2);
            remainingChange -= (20).toFixed(2)
        }
        else {
            break;
        }
    }

    while (cid[6][1] > 0 ){
        if(remainingChange / 10 >= 1){
            changeArr.push("ten")
            cid[6][1] -= (10).toFixed(2);
            remainingChange -= (10).toFixed(2)
        }         else {
            break;
        }
    }

    while (cid[5][1] > 0 ){
        if(remainingChange / 5 >= 1){
            changeArr.push("five")
            cid[5][1] -= (5).toFixed(2);
            remainingChange -= (5).toFixed(2)
        }         else {
            break;
        }
    }

    while (cid[4][1] > 0 ){
        if(remainingChange / 1 >= 1){
            changeArr.push("one")
            cid[4][1] -= 1;
            remainingChange -= (1).toFixed(2)
        } else {
            break;
        }
    }

    while (cid[3][1] > 0 ){
        if(remainingChange / 0.25 >= 1){
            changeArr.push("quarter")
            cid[3][1] -= 0.25;
            remainingChange -= (0.25).toFixed(2)
        } else {
            break;
        }
    }

    while (cid[2][1] > 0 ){
        if(remainingChange / 0.1 >= 1){
            changeArr.push("dime")
            cid[2][1] -= (0.10).toFixed(2)
            remainingChange -= (0.1).toFixed(2)
        } else {
            break;
        }
    }

    while (cid[1][1] > 0 ){
        if(remainingChange / 0.05 >= 1){
            changeArr.push("nickel")
            cid[1][1] -= (0.05).toFixed(2);
            remainingChange -= (0.05).toFixed(2)
        }        else {
            break;
        }
    }

    while (cid[0][1] > 0 ){
        if(remainingChange.toFixed(2) / 0.01 >= 1){
            changeArr.push("penny")
            cid[0][1] -= (0.01).toFixed(2);
            remainingChange -= (0.01).toFixed(2)
        } else {
            break;
        }
    }
    if(Math.round(remainingChange,2)==0){
        statusMsg(changeArr,change)
    } else{
        changeDue.textContent = "Status: INSUFFICIENT_FUNDS"
    }
    
}

purchaseBtn.addEventListener("click", ()=>{
    changeDue.textContent = ""

    if(cash.value<price){
        alert("Customer does not have enough money to purchase the item")
    } else if (cash.value == price){
        changeDue.textContent = "No change due - customer paid with exact cash"
    }
    else if (price<cash.value) {
        checkStatus(price,cash,cid)
        calculateChange(cash.value,price);
    }
})
