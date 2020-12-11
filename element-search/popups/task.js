
document.getElementById('modal_main').classList.add("modal_active");
const modal_close = Array.from(document.querySelectorAll('.modal__close'));

for (let cross of modal_close) {
	cross.addEventListener("click", closeCross);
	function closeCross() {
		this.closest('.modal').classList.remove('modal_active');
	}
}

document.querySelector('.show-success').addEventListener("click", () => document.getElementById('modal_success').classList.add("modal_active"));

