const items = document.getElementById('items');
const loader = document.getElementById('loader');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('load', () => {
    let exchangeRates = xhr.response;
    for (let item in exchangeRates.response.Valute) {
        items.innerHTML +=
        `<span class="item__code"><b>` 
            + exchangeRates.response.Valute[item].CharCode + 
        `</b></span>
        <span class="item__value">` 
            + exchangeRates.response.Valute[item].Value +
        `</span>
        <span class="item__currency"> 
             руб.
        </span><br>`;
    }
    loader.classList.remove('loader_active');
});