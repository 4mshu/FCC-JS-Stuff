let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];
const cash = document.getElementById("cash")
const purchaseBtn = document.getElementById("purchase-btn")
const changeDue = document.getElementById("change-due")

const statusMsg = (arr,change) => {
    console.log(arr,change)

}

const calculateChange = (cash,price) => {
    const change = (cash - price).toFixed(2);
    let remainingChange = change
    let changeArr = [];
    while (cid[8][1] !=0 ){
        if(remainingChange / 100 >= 1){
            changeArr.push("hundred")
            cid[8][1] -= 100;
            remainingChange -= (100)
        } else {
            break;
        }
    } 
    while (cid[7][1] !=0 ){
        if(remainingChange / 20 >= 1){
            changeArr.push("twenty")
            cid[7][1] -= 20;
            remainingChange -= (20)
        }
        else {
            break;
        }
    }
    while (cid[6][1] !=0 ){
        if(remainingChange / 10 >= 1){
            changeArr.push("ten")
            cid[6][1] -= 10;
            remainingChange -= (10)
        }         else {
            break;
        }
    }
    while (cid[5][1] !=0 ){
        if(remainingChange / 5 >= 1){
            changeArr.push("five")
            cid[5][1] -= 5;
            remainingChange -= (5)
        }         else {
            break;
        }
    }
    while (cid[4][1] !=0 ){
        if(remainingChange / 1 >= 1){
            changeArr.push("one")
            cid[4][1] -= 1;
            remainingChange -= (1)
        } else {
            break;
        }
    }
    while (cid[3][1] !=0 ){
        if(remainingChange / 0.25 >= 1){
            changeArr.push("quarter")
            cid[3][1] -= 0.25;
            remainingChange -= (0.25)
        } else {
            break;
        }
    }
    while (cid[2][1] !=0 ){
        if(remainingChange / 0.1 >= 1){
            changeArr.push("dime")
            cid[2][1] -= 0.1;
            remainingChange -= (0.1)
        } else {
            break;
        }
    }
    while (cid[1][1] !=0 ){
        if(remainingChange / 0.05 >= 1){
            changeArr.push("nickel")
            cid[1][1] -= 0.05;
            remainingChange -= (0.05)
        }        else {
            break;
        }
    }
    while (cid[0][1] !=0 ){
        if(remainingChange.toFixed(2) / 0.01 >= 1){
            changeArr.push("penny")
            cid[0][1] -= 0.01;
            remainingChange -= (0.01)
        } else {
            break;
        }
    }

    if(Math.round(remainingChange,2)==0){
        statusMsg(changeArr,change)
    } else{
        changeDue.textContent = "Sorry, we don't have enough change"
    }
}

purchaseBtn.addEventListener("click", ()=>{
    if(cash.value<price){
        alert("Customer does not have enough money to purchase the item")
    } else if (cash.value == price){
        changeDue.textContent = "No change due - customer paid with exact cash"
    }
    else {
        calculateChange(cash.value,price);
    }
})
