let numberOfClicks = 0; 
initElement();

function initElement() {
  let cookie = document.getElementById('cookie');
  cookie.onclick = startСounting;
  function startСounting() {
    numberOfClicks++;
    document.getElementById('clicker__counter').innerHTML = numberOfClicks;
    if (numberOfClicks % 2 == 0) {
      document.getElementById("cookie").width = 200;
    } else {
      document.getElementById("cookie").width = 300;
    }
  }
}
