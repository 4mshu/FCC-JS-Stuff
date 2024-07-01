const purchaseBtn = document.getElementById("purchase-btn");
const changeMsg = document.getElementById("change-due");

let price = 19.5;
let cid = [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];

let bill = [
  ['ONE HUNDRED', 100],
  ['TWENTY', 20],
  ['TEN', 10],
  ['FIVE', 5],
  ['ONE', 1],
  ['QUARTER', 0.25],
  ['DIME', 0.1],
  ['NICKEL', 0.05],
  ['PENNY', 0.01]
];

const bills = {
    'ONE HUNDRED': 100,
    'TWENTY': 20,
    'TEN': 10,
    'FIVE': 5,
    'ONE': 1,
    'QUARTER': 0.25,
    'DIME': 0.1,
    'NICKEL': 0.05,
    'PENNY': 0.01
  };

function cashInDrawer(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][1];
  }
  return sum.toFixed(2);
}

function calculateChange(changeDue, denominations) {
    
  let changeArr = [];
  for (let i = 0; i < bill.length; i++){
    while(changeDue / bill[i][1] >= 1 && denominations[i][1] !== 0){
        changeArr.push(bill[i][0])
        denominations[i][1] -= bill[i][1];
        changeDue -= bill[i][1];
        changeDue = changeDue.toFixed(2)
    }
  }


  let counts = {};
  changeArr.forEach(element => {

    if (counts[element]) {

        counts[element]++;
    } else {

        counts[element] = 1;
    }
});

if (changeDue > 0){
    changeMsg.textContent += "Status: INSUFFICIENT_FUNDS"
} else{
    let textMsg = "";
    for (let i in counts){
        textMsg += `${i}: $${(bills[i]*counts[i])} ` 
    } 
    return textMsg;
} 
}
purchaseBtn.addEventListener("click", () => {
  const cash = document.getElementById("cash");
  let changeDue = cash.value - price;
  let denominations = [...cid].reverse();


  if (changeDue < 0) {
    alert("Customer does not have enough money to purchase the item");
  } else if (changeDue == 0) {
    changeMsg.textContent = "No change due - customer paid with exact cash";   
  } else if (changeDue == cashInDrawer(cid)) {
    changeMsg.textContent = `Status: CLOSED ${calculateChange(changeDue, denominations)}`; 
  } else if (cashInDrawer(cid) < changeDue) {
    changeMsg.textContent = "Status: INSUFFICIENT_FUNDS";
  } else if (calculateChange(changeDue, denominations)) {
    changeMsg.textContent = `Status: OPEN ${calculateChange(changeDue, denominations)}`;
    ;
  }
});
