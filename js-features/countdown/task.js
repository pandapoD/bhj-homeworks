

let time;
let deadline = 59;
countdown(); 
function countdown() {  
  document.getElementById('timer').innerHTML = deadline;
  deadline--;
  //console.log(time);
  if (deadline < 0) {
    clearTimeout(time);
    alert('Вы победили в конкурсе!');
  } else {
    time = setTimeout(countdown, 1000);
  }
}