const boxElement = document.querySelector('.interests_main');

boxElement.addEventListener('click', abc);
function abc(e) {
	const childElements = [...e.target.parentElement.nextElementSibling.querySelectorAll('label input')];
	if (e.target.checked) {
		for (let i = 0; i < childElements.length; i++) {
			childElements[i].checked = true;
		}
	}
	if (!e.target.checked) {
		for (let i = 0; i < childElements.length; i++) {
			childElements[i].checked = false;
		}
	}	
}