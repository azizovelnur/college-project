window.onscroll = function () {
    scrollUp()
}
function scrollUp() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        document.getElementById('scrollUpBtn').style.display = 'block';
    } else {
        document.getElementById('scrollUpBtn').style.display = 'none';
    }
}

