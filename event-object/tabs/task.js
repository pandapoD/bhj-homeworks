const tabArr = Array.from(document.querySelectorAll(".tab"));
const tab__contentArr = Array.from(document.querySelectorAll(".tab__content"));
const tab__navigation = document.querySelector(".tab__navigation")

function hideTab() {
  	for (let i = 0; i < tab__contentArr.length; i++) {
    	tab__contentArr[i].classList.remove('tab__content_active');
    	tabArr[i].classList.remove('tab_active');
  	}
}

function showTabContent(j) {
    tab__contentArr[j].classList.add('tab__content_active');
}

tab__navigation.addEventListener('click', function(event) {
	let target = event.target;
	if (target && target.classList.contains('tab')) {
		for(let i = 0; i < tabArr.length; i++) {
				if (target == tabArr[i]) {
				hideTab();
				showTabContent(i);
				tabArr[i].classList.add('tab_active');
				break;
			}
		}
	}
});