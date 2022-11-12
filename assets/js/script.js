
// credits  https://www.codinglearners.com/how-to-create-product-sales-countdown-timer-using-html-css-js/


const codinglearners ="1 December 2022";
const daysDiv =document.getElementById("days");
const hoursDiv =document.getElementById("hours");
const minsDiv =document.getElementById("mins");
const secoundDiv =document.getElementById("secound");
function countdown(){
    const coding = new Date(codinglearners );
    const currentday = new Date();
   const totaltime = (coding-currentday)/1000;
    const days = Math.floor(totaltime / 3600 / 24);
    const hours =Math.floor((totaltime /3600)%24);
    const mins = Math.floor((totaltime / 60)% 60);
    const secound = Math.floor(totaltime ) %60;
        
   
    daysDiv.innerHTML =days;
    hoursDiv.innerHTML=hours;
    minsDiv.innerHTML=mins;
    secoundDiv.innerHTML=secound;
    console.log( days,hours,mins,secound);
    
 }
countdown();
setInterval(countdown,1000);