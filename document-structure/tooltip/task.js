const linkOftooltipArr = [...document.querySelectorAll('.has-tooltip')];

linkOftooltipArr.forEach((el) => el.addEventListener('click', (e) => {
	e.preventDefault();
	let target = event.target;
	if (target.nextElementSibling && target.nextElementSibling.classList.contains('tooltip_active')) {
		target.nextElementSibling.remove();
		return;
	}

	const tooltipArr = [...document.querySelectorAll('.tooltip')];
	if (tooltipArr.length) {
		tooltipArr.forEach((tooltip) => tooltip.remove());
	}

	const hint = target.title;
	target.insertAdjacentHTML(
		'afterend',
		insertHint(target, hint, ' tooltip_active'),
	);

	const tooltipElem = document.querySelector('.tooltip_active');
	let coords = target.getBoundingClientRect();

	let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0;

    let top = coords.top - tooltipElem.offsetHeight;
    if (top < 0) {
      	top = coords.top + target.offsetHeight;
    }

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';
  }));


function insertHint(target, hint, type = '') {
	return `
	<div class="tooltip ${type}"> 
		${hint}
	</div>
	`;
}

