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

const calculateChange = (cash,price) => {
    let change = (cash - price).toFixed(2);
    let changeArr = [];
    let hundreds = 0;
    if (change / 100 >= 1){
        hundreds = Math.floor(change/100);
        change = (change % 100).toFixed(2);
        let obj = {
            "ONE HUNDRED" : hundreds
        }
        changeArr.push(obj)
    }
    if (change / 20 >= 1){
        twenties = Math.floor(change/20);
        change = (change % 20).toFixed(2);
        let obj = {
            "TWENTY" : twenties
        }
        changeArr.push(obj)
    }
    if (change / 10 >= 1){
        tens = Math.floor(change/10);
        change = (change % 10).toFixed(2);
        let obj = {
            "TEN" : tens
        }
        changeArr.push(obj)
    }
    if (change / 5 >= 1){
        fives = Math.floor(change/5);
        change = (change % 5).toFixed(2);
        let obj = {
            "FIVE" : fives
        }
        changeArr.push(obj)
    }
    if (change / 1 >= 1){
        ones = Math.floor(change/1);
        change = (change % 1).toFixed(2);
        let obj = {
            "ONE" : ones
        }
        changeArr.push(obj)
    }
    console.log(changeArr);
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
