import { calculate } from "./calculations.js";

const btn = document.getElementById("calculate_bill");
const display = document.getElementById("bill_amount");
btn.addEventListener("click", calculatePhoneBill);

const gold = document.getElementById("gold");
const silver = document.getElementById("silver");

export function calculatePhoneBill() {
  if(gold.checked || silver.checked){
    var planType = gold.checked ? "gold" : "silver";
  }else{
    alert("Choose a plan type...");
  }
  const numberOfMinutes = document.getElementById("minutes_used").value;
  const numberOfLines = document.getElementById("lines_used").value;

  let output = calculate(planType, numberOfLines, numberOfMinutes);
  document.getElementById("bill_amount").value = output;
}
