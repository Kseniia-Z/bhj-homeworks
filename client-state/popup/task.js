const popup = document.getElementById('subscribe-modal');
const popupClose = document.querySelector('.modal__close');

popupClose.addEventListener('click', () => {
    popup.classList.remove('modal_active');
    document.cookie = 'popup = shown';
})

function getCookie(name) {
    try {
        const pairs = document.cookie.split('; ');
        const cookie = pairs.find(p => p.startsWith(name + '='));
        return cookie.substring(name.lenght + 1);
    } catch {
        return null;
    }  
}

if (getCookie('popup') != 'shown') {
    popup.classList.add('modal_active');
};
