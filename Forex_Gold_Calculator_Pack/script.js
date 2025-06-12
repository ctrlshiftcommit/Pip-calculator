function calculate() {
  const type = document.getElementById("pairType").value;
  const entry = parseFloat(document.getElementById("entry").value);
  const exit = parseFloat(document.getElementById("exit").value);
  const lot = parseFloat(document.getElementById("lotSize").value);
  const resultDiv = document.getElementById("result");

  let pips = 0;
  let profit = 0;

  if (type === "forex") {
    pips = (exit - entry) / 0.0001;
    profit = pips * lot * 10;
  } else if (type === "jpy") {
    pips = (exit - entry) / 0.01;
    profit = pips * lot * 10;
  } else if (type === "gold") {
    const points = exit - entry;
    profit = points * lot * 100;
    resultDiv.innerHTML = `📈 Points: ${points.toFixed(1)}<br>💰 Profit: $${profit.toFixed(2)}`;
    return;
  }

  resultDiv.innerHTML = `📈 Pips: ${pips.toFixed(1)}<br>💰 Profit: $${profit.toFixed(2)}`;
}