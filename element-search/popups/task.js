// const modal = document.getElementsByClassName('modal')
// console.log(modal);
// console.log(modal[0]);
// document.querySelector('.modal').classList.add("modal_active");
// modal[0].onclick = closeModal;
// console.log(document.querySelectorAll('.modal__close'))
// const modal_close = document.querySelectorAll('.modal__close')
// console.log(modal_close[1]);
// function closeModal() {
// 	//console.log(document.querySelector('.modal__close'))
// 	document.querySelector('.modal').classList.remove("modal_active");
// }



// const modal = document.getElementsByClassName('modal')
// console.log(modal);
// console.log(modal[0]);
// for (let i = 0; i < modal.length; i++) {
//     modal[i].classList.add('modal_active');
//     if (modal[0]) {
//     	modal[0].onclick = closeModal;
//     }
// }
// // document.querySelector('.modal').classList.add('modal_active');
// // modal[0].onclick = closeModal;
// // console.log(document.querySelectorAll('.modal__close'))
// const modal_close = document.querySelectorAll('.modal__close')
// console.log(modal_close[1]);
// function closeModal() {
// 	//console.log(document.querySelector('.modal__close'))
// 	document.querySelector('.modal').classList.remove('modal_active');
// }



document.getElementById('modal_main').classList.add("modal_active");
const modal_close = document.querySelectorAll('.modal__close')
// console.log(modal_close[0].closest('*'));
// console.log(modal_close[1].closest('*'));
// console.log(modal_close[2].closest('*'));
modal_close[0].onclick = closeModal_1;
function closeModal_1() {
	document.getElementById('modal_main').classList.remove("modal_active");
}
document.querySelector('.show-success').onclick = openModal;
function openModal() {
	closeModal_1();
	document.getElementById('modal_success').classList.add("modal_active");
}
document.querySelector('.btn_success').onclick = closeModal_2;
modal_close[2].onclick = closeModal_2;
function closeModal_2() {
	document.getElementById('modal_success').classList.remove("modal_active");
}
