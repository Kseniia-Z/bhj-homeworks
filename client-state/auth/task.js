const signin = document.getElementById('signin');
const form = document.getElementById('signin__form');
const signinBtn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

function sendForm() {
   let xhr = new XMLHttpRequest();
   xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
   xhr.responseType = 'json';
   xhr.addEventListener('load', () => {
    checkSuccess(xhr);
   })
   xhr.send(new FormData(form));
}

if (localStorage.getItem('user_id')) {
    signin.classList.remove('signin_active');
    userId.textContent += localStorage.getItem('user_id');
    welcome.classList.add('welcome_active');
  } else {
    signinBtn.addEventListener('click', e => {
        e.preventDefault();
        sendForm();
    })
  }

  function checkSuccess(xhr) {
    let info = xhr.response;
    if (info['success'] == true) {
        localStorage.setItem('user_id', info['user_id']);
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        userId.textContent += localStorage.getItem('user_id');
    } else {
        alert('Неверный логин/пароль');
    }
  }
