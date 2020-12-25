const rotator__case = Array.from(document.querySelectorAll(".rotator__case"));
let rotatorCaseLen = rotator__case.length;

function changeCase() {

	let frase = rotator__case.findIndex((el) => el.classList.contains('rotator__case_active'));
	if (frase === rotatorCaseLen - 1) {
		rotator__case[rotatorCaseLen - 1].classList.remove('rotator__case_active');
		rotator__case[0].classList.add('rotator__case_active');
	} else {
		rotator__case[frase].classList.remove('rotator__case_active');
		rotator__case[frase + 1].classList.add('rotator__case_active');
	}
}

setInterval(changeCase, 1000);

