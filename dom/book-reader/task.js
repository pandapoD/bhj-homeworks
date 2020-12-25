const font_sizeArr = Array.from(document.querySelectorAll(".font-size"));
const parentFs = document.querySelector(".book__control_font-size");
const book__content = document.querySelector(".book__content");

parentFs.addEventListener('click', function(event) {
	let target = event.target;
	event.preventDefault();
	for(let i = 0; i < font_sizeArr.length; i++) {
		if (target == font_sizeArr[i]) {
			hideFs();
			changeText();
			font_sizeArr[i].classList.add('font-size_active');
			break;
		}
	}
	function changeText() {
		if (target.classList.contains("font-size_small")) {
			book__content.classList.add("book_fs-small");
		}
		if (target.classList.contains("font-size_big")){
			book__content.classList.add("book_fs-big");
		}
	}
});

function hideFs() {
	for (let i = 0; i < font_sizeArr.length; i++) {
		font_sizeArr[i].classList.remove('font-size_active');
	}
	book__content.classList.remove("book_fs-big");
	book__content.classList.remove("book_fs-small");
}

