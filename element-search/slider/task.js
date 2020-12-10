const slider__arrow_next = document.querySelector('.slider__arrow_next')
console.log(slider__arrow_next)
slider__arrow_next.addEventListener("click", getNextSlide);

const slider__item = Array.from(document.querySelectorAll('.slider__item'));
const sliderLength = slider__item.length;
console.log(slider__item)

	for (let i = 0; i < sliderLength; i++) {
		// if (slider__item[i].nextElementSibling === null) {
		// 	i = 0
		// console.log(slider__item[i])
		// console.log('i= ' + i)
		// }
		slider__arrow_next.addEventListener("click", getNextSlide);
		slider__item[i].nextElementSibling.classList.toggle('slider__item_active');

		console.log(slider__item[i])
		console.log('i= ' + i)
		// console.log(slider__item[3].nextElementSibling.classList)
		// console.log(slider__item[4].nextElementSibling)
	}
function getNextSlide() {

}