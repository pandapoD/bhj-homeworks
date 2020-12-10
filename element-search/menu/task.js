
const menu__link = Array.from(document.querySelectorAll('.menu__link'));
//const arrLength = menu__link.length;

// console.log(menu__link)
// console.log(menu__link[1].nextElementSibling)
// console.log(menu__link[1].nextElementSibling.classList.contains('menu')) 


//for (let i = 0; i < arrLength; i++) {
    for (let link of  menu__link) {
         //menu__link[i].addEventListener('click', showSub)  
        link.addEventListener("click", showSub);
        //menu__link[i].onclick = showSub;

//menu__link.forEach((item) => item.addEventListener('click', showSub));
//}
	function showSub(event) {
        if (link.nextElementSibling != null && link.nextElementSibling.classList.contains('menu')) {
            link.nextElementSibling.classList.toggle('menu_active');
            event.preventDefault();
        }
    }
}



