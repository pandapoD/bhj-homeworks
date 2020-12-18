

const dropdown__values = Array.from(document.getElementsByClassName("dropdown__value")); // в случае, если подобных кнопок будет несколько
const dropdown__links = Array.from(document.querySelectorAll(".dropdown__link"));

for (let value of dropdown__values) {
	value.addEventListener("click", makeActiveList);
	function makeActiveList(event) {
		this.nextElementSibling.classList.toggle("dropdown__list_active");
	}
}


for (let link of dropdown__links) {
	link.addEventListener("click", turnOnLink);
	function turnOnLink(event) {
		this.closest('ul').classList.remove("dropdown__list_active");
		this.closest(".dropdown__list").previousElementSibling.textContent = this.textContent;
		event.preventDefault();
	}
}
