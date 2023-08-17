const progress = document.getElementById( 'progress' );
const form = document.getElementById('form');

form.addEventListener('submit', event => {
    event.preventDefault();

    let xhr = new XMLHttpRequest();
    let formData = new FormData(form);

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    xhr.upload.addEventListener('progress', event => {
        progress.value = event.loaded / event.total;
    })

    xhr.upload.addEventListener('load', () => {
        alert('Файл успешно загружен!')
      });

    xhr.send(formData);
})