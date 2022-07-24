
var contactBtn = document.querySelector('.contact-btn');

contactBtn.onmouseover = function() {
    contactBtn.innerText = 'CLICK';
}

contactBtn.onmouseleave = function() {
    contactBtn.innerText = 'CONTACT ME'
}