const hamb = document.querySelector('#hamb');
const popupHumb = document.querySelector('#popupHumb');
const menu = document.querySelector('#menuItems').cloneNode(true);
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler (e) {
    e.preventDefault();
    popupHumb.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll")
    renderPopup();
}

function renderPopup() {
    popupHumb.appendChild(menu);
}


const links = Array.from(menu.children);

links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
    popupHumb.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
}