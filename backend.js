import { calculateBill } from "./index.js";

const totalBill = document.querySelector('#displayBill');

const btn = document.querySelector('.submit');



btn.addEventListener('click', () => {
    const plan = document.querySelector('input[name="planType"]:checked');
    const lines = document.querySelector('.lines');
    const mins = document.querySelector('.mins');
 
    let totalMins=0;
    let totalLines = Number(lines.value)+1;
    totalMins = plan.value=="Gold" ? 1000 + Number(mins.value) : 500+Number(mins.value);
    totalBill.value = calculateBill(plan.value, totalLines, totalMins);
   
});

