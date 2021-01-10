const cart = document.querySelector('.cart__products');
const productsContainer = document.querySelector('.products');
let CardFullItem = true;// костыль для функции findProduct. Лучшей идеи не возникло

productsContainer.addEventListener('click', (e) => {
	if (e.target.classList.contains('product__quantity-control_dec')) {
		if (e.target.nextElementSibling.innerText == 1) return;
		e.target.nextElementSibling.innerText--;
	}
	if (e.target.classList.contains('product__quantity-control_inc')) {
		e.target.previousElementSibling.innerText++;
	}
	if (e.target.classList.contains('product__add')) {
		addItemToCart(e.target);
	}
});
	
function addItemToCart(element) {
	const id = element.closest('.product').dataset.id;
	const imageURL = element.closest('.product').querySelector('.product__image').getAttribute('src');
	const count = +element.previousElementSibling.querySelector('.product__quantity-value').textContent;
	findProduct(id, count);
	if (!CardFullItem) return CardFullItem = true;
	cart.insertAdjacentHTML(
		'beforeend',
		templateItem(id, imageURL, count),
		);
	
}

function findProduct(id, count) {
	let childElemArr = [...cart.children];
	let result = childElemArr.find(item => {
		if (item.dataset.id == id) { 
			let countItem = +item.lastElementChild.textContent;
			countItem += count;
			item.lastElementChild.textContent = countItem;
			CardFullItem = false;
		} 
	});
}

function templateItem(id, imageURL, count) {
	return `
	<div class="cart__product" data-id=${id}>
	<img class="cart__product-image" src=${imageURL}>
	<div class="cart__product-count">${count}</div>
	</div>
	`;
}

