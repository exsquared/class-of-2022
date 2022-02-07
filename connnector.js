import {calculateBill} from './index.js';

const lines = document.querySelector(".lines");
const minutes = document.querySelector(".Minutes");
const btn = document.querySelector("#calc");

btn.onclick= function() {
    let plan = document.querySelector('input[name=plan]:checked');
    let min = Number(minutes.value);
    let no_of_lines = Number(lines.value)+1;
    min = plan.value=="Gold" ? min + 1000 : min + 500;
    document.querySelector("#amt").value= calculateBill(plan.value, min, no_of_lines);
};

