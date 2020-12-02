index = 1;
let deadMole = 0;
let deadMiss = 0;

getHole = index => document.getElementById(`hole${index}`)
	for (let index=1; index<10; index++) {
	 	getHole(index).onclick = check;

	function check() {
	 	if (getHole(index).classList.contains('hole_has-mole')) {
	 		deadMole++;
	 		document.getElementById('dead').innerHTML = deadMole;
        	if (deadMole === 5) {
        		alert('Победа!!!');
        		restart();
        	}
    	} else {
    		deadMiss++;
    		document.getElementById('lost').innerHTML = deadMiss;
         	if (deadMiss === 10) {
         		alert ('Вы проиграли =(');
         		restart();
         	}
        }
	}
}

function restart() {
	document.getElementById('lost').innerHTML = 0;
	document.getElementById('dead').innerHTML = 0;
	deadMiss = 0;
	deadMole = 0;
}	