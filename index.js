const URL = "https://rickandmortyapi.com/api/character/";

const mainCard = document.querySelector('#main-card');

const templateCard = document.querySelector('#template-card').content;

const fragment = document.createDocumentFragment();

const btnGenerate = document.getElementById('btn-generate');

btnGenerate.addEventListener('click',FetchApi);

function CreateCard(results) {
    let select = document.createElement('select');
    let option1 = document.createElement('option');
    option1.setAttribute('value',"value")
    let optionText1 = document.createTextNode(results[0].name)

    let option2 = document.createElement('option');
    option2.setAttribute('value',"value")
    let optionText2 = document.createTextNode(results[0].name)

    option1.appendChild(optionText1)
    option2.appendChild(optionText2)

    select.appendChild(option1);
    select.appendChild(option2);
    characters.appendChild(select);




    let cloneTemplate = document.importNode(templateCard,true);
    cloneTemplate.querySelector('.name-card').textContent = rickAndMorty[0].character;
    cloneTemplate.querySelector('.img-card').setAttribute('src',rickAndMorty[0].image);
    cloneTemplate.querySelector('.img-card').setAttribute('alt',rickAndMorty[0].character);
    cloneTemplate.querySelector('.quote-card').textContent = `Quote: ${rickAndMorty[0].quote}`;
    fragment.appendChild(cloneTemplate);
    mainCard.appendChild(fragment)
}

function FetchApi() {
    fetch(URL)
    .then(response => response.json())
    .then(card=>{
        mainCard.innerHTML = '';
        CreateCard(card);
    })
}
