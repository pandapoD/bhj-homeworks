
const menu__link = Array.from(document.querySelectorAll('.menu__link'));

for (let link of  menu__link) {  
    link.addEventListener("click", showSub);

    function showSub(event) {
        if (link.nextElementSibling != null && link.nextElementSibling.classList.contains('menu')) {
            link.nextElementSibling.classList.toggle('menu_active');
            event.preventDefault();
        }
    }
}



