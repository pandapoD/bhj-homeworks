const slider__arrow_next = document.querySelector('.slider__arrow_next')
//console.log(slider__arrow_next)
slider__arrow_next.addEventListener("click", getNextSlide);

const slider__item = Array.from(document.querySelectorAll('.slider__item'));
const sliderLength = slider__item.length;
let sliderI = 0;

function getNextSlide() {
	slider__item[sliderI].classList.remove('slider__item_active');
	if (sliderI === sliderLength-1) {
	        sliderI = 0;
		} else {
			sliderI++;
	}
	for (let i = sliderI; i == sliderI; i++) {
		slider__item[i].classList.add('slider__item_active');
  		//console.log(slider__item[i])
		// console.log('i= ' + i)
	}
}

const slider__arrow_prev = document.querySelector('.slider__arrow_prev')
slider__arrow_prev.addEventListener("click", getPrevSlide);

function getPrevSlide() {
	slider__item[sliderI].classList.remove('slider__item_active');
	if (sliderI === 0) {
	        sliderI = sliderLength-1;
		} else {
			sliderI--;
	}
	for (let i = sliderI; i == sliderI; i++) {
		slider__item[i].classList.add('slider__item_active');
	}
}