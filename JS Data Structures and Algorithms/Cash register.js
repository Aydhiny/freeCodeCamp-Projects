function checkCashRegister(price, cash, cid) {
  const currencyUnits = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];

  let changeDue = cash - price;
  let totalCid = 0;

  for (const unit of cid) {
    totalCid += unit[1];
  }

  if (totalCid < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (totalCid === changeDue) {
    return { status: "CLOSED", change: cid };
  } else {
    let change = [];
    for (let i = currencyUnits.length - 1; i >= 0; i--) {
      const [unit, value] = currencyUnits[i];
      const availableAmount = cid[i][1];
      const maxToUse = Math.floor(availableAmount / value);
      const toUse = Math.min(maxToUse, Math.floor(changeDue / value));

      if (toUse > 0) {
        changeDue -= value * toUse;
        changeDue = Math.round(changeDue * 100) / 100;
        change.push([unit, value * toUse]);
      }
    }

    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else {
      return { status: "OPEN", change };
    }
  }
}

// Example usage
const cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];


checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
