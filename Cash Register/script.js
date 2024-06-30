const purchaseBtn = document.getElementById("purchase-btn")
const changeMsg = document.getElementById("change-due")

let price = 10;
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

function cashInDrawer(arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        sum += arr[i][1];
    }
    return sum.toFixed(2);
}

function calculateChange (changeDue){
    

}

purchaseBtn.addEventListener("click", ()=>{
    const cash = document.getElementById("cash")
    const changeDue = cash.value - price;


    if(changeDue < 0){
        alert("Customer does not have enough money to purchase the item")
    } else if (changeDue == 0){
        changeMsg.textContent = "No change due - customer paid with exact cash";   
    } else if (changeDue == cashInDrawer(cid)){
        changeMsg.textContent = `Status: CLOSED ${calculateChange(changeDue)}`; 
    }
    else if (changeDue > cashInDrawer(cid)){
        changeMsg.textContent = "Status: INSUFFICIENT_FUNDS";
    } else {
        changeMsg.textContent = `Status: OPEN ${calculateChange(changeDue)}`;
    }
})