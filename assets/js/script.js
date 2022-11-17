
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
   // console.log( days,hours,mins,secound);
    
 }
countdown();
setInterval(countdown,1000);


// popup

// Credits: Easy Tuturials
//https://www.youtube.com/watch?v=AF6vGYIyV8M&t=549s

let popup = document.getElementById('popup');
function openPopup(){
  popup.classList.add('open-popup');  
}

function closePopup(){
  popup.classList.remove('open-popup');  
}



// quiz
//source
// https://codepen.io/kklumpp13/pen/xVwBKE


// quiz
//source
// https://codepen.io/kklumpp13/pen/xVwBKE

var formElement = document.forms['quizForm'];

formElement.onsubmit = function submitAnswers(){
    var total = 5;
    var score = 0;
    
    // Get User Input
    var q1 = document.forms["quizForm"]["q1"].value,
        q2 = document.forms["quizForm"]["q2"].value,
        q3 = document.forms["quizForm"]["q3"].value,
        q4 = document.forms["quizForm"]["q4"].value,
        q5 = document.forms["quizForm"]["q5"].value;
    
    // Validation
    for(i = 1; i <= total;i++){
        if(eval('q'+i) === null || eval('q'+i) === ''){
            alert('You missed question '+ i);
            return false;
        }
    }
    
    // Set Correct Answers
    var answers = ["b","a","d","b","d"];
    
    // Check Answers
    for(i = 1; i <= total;i++){
        if(eval('q'+i) === answers[i - 1]){
            score++;
        }
    }
    
    // Display Results
    var results = document.getElementById('results');
    results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
    
    return false;
}

// end quiz


// Modal PopUp for QUIZ

//source
// https://codepen.io/kklumpp13/pen/xVwBKE

var formElement = document.forms['quizForm'];

formElement.onsubmit = function submitAnswers() {
  var total = 5;
  var score = 0;
  var modal = document.getElementById("myModal");
  var modalContent = document.getElementById("modal-content")

  // Get User Input
  var q1 = document.forms["quizForm"]["q1"].value,
    q2 = document.forms["quizForm"]["q2"].value,
    q3 = document.forms["quizForm"]["q3"].value,
    q4 = document.forms["quizForm"]["q4"].value,
    q5 = document.forms["quizForm"]["q5"].value;

  // Validation" 
  for (i = 1; i <= total; i++) {
    if (eval('q' + i) === null || eval('q' + i) === '') {
        console.log("you missed")
        modal.style.display = "block";
        modalContent.innerHTML += `
        <span class="close" onclick="closeModal()">&times;</span>
        <p>You missed some questions!</p>
        `
      //alert('You missed question '+ i);
      return false;
    }
  }

  // Set Correct Answers
  var answers = ["b", "a", "d", "b", "d"];

  // Check Answers
  for (i = 1; i <= total; i++) {
    if (eval('q' + i) === answers[i - 1]) {
      score++;
    }
  }

  // Display Results
  var results = document.getElementById('results');
  results.innerHTML = '<h3>You scored <span>' + score + '</span> out of <span>' + total + '</span></h3>';

  return false;
}


//Modal Popup for Quiz
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal



// var  z = 5;

 //function openPopup(){
    //if (z < total){
      // Get the modal
        var modal = document.getElementById("myModal");
        var modalContent = document.getElementById("modal-content")

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal 

        /* btn.onclick = function() {
        modal.style.display = "block";
        if(selectedQuestions === 5){
            modalContent.innerHTML += `<p>congrats you scored 5/10!</p>`
        }else{
            modalContent.innerHTML += `<p>You missed some questions!</p>`
        }
        
        }


    
 */
        // When the user clicks on <span> (x), close the modal

      

      
       function closeModal () {
        modalContent.innerHTML = ""
        modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
        if (event.target == modal) {
          modalContent.innerHTML = ""
            modal.style.display = "none";
        }
        }




//  }
// }
  
      
    

        


