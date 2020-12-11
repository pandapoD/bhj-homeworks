const slider__arrow_next = document.querySelector('.slider__arrow_next');
slider__arrow_next.addEventListener("click", changeSlide);
const slider__arrow_prev = document.querySelector('.slider__arrow_prev');
slider__arrow_prev.addEventListener("click", changeSlide);
const slider__item = Array.from(document.querySelectorAll('.slider__item'));
const sliderLength = slider__item.length;

function changeSlide(event) {
	let change;
	let item = slider__item.findIndex((el) => el.classList.contains('slider__item_active'));
	slider__item[item].classList.remove('slider__item_active')
	if (event.currentTarget == slider__arrow_next) {
		change = (item === sliderLength - 1) ? slider__item[0].classList.add('slider__item_active') : slider__item[item + 1].classList.add('slider__item_active');
	} 
	if (event.currentTarget == slider__arrow_prev) {
		change = (item === 0) ? slider__item[sliderLength - 1].classList.add('slider__item_active') : slider__item[item - 1].classList.add('slider__item_active');
	}
}
