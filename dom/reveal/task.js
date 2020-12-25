const divActivArr = document.querySelectorAll(".reveal");

function scroll() {
	for (let div of divActivArr) {
		const acd = div.getBoundingClientRect().top;
		const viewportHeight = window.innerHeight;
		if (0 - div.getBoundingClientRect().height <= acd && acd < viewportHeight) {
			div.classList.add("reveal_active");
		} else {
			div.classList.remove("reveal_active");
		}
	}
}

document.addEventListener("scroll", scroll);
