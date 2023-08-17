const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json'
xhr.send();

xhr.addEventListener('load', () => {
    let responseInfo = xhr.response;
    pollTitle.textContent = responseInfo.data.title;

    for (const answer of responseInfo.data.answers) {
        const answerButton = document.createElement('button');
        answerButton.textContent = answer;
        answerButton.classList.add('poll__answer');
        answerButton.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'));
        pollAnswers.insertAdjacentElement('afterbegin', answerButton);
    }
})