const URL = "https://rickandmortyapi.com/api/character/";

const mainCard = document.querySelector('#main-card');

const templateCard = document.querySelector('#template-card').content;

const fragment = document.createDocumentFragment();

const valor = document.getElementById('optionCharacter').value

const characters = document.getElementById('characters')

characters.addEventListener('change',CreateCard);

FetchApi()
function FetchApi() {
    fetch(URL)
    .then(response => response.json())
    .then(data=>{
        return data.results.map((card)=>{
        // mainCard.innerHTML = '';
        // CreateCard(card);
        const option = document.createElement('option');
        option.value=card.name;
        option.textContent=card.name
        option.setAttribute('id', card.id)
        characters.appendChild(option);
        return card
        })
    })
}





function CreateCard() {
    fetch(URL)
    .then(response => response.json())
    .then(data=>{
        return data.results.map((results)=>{
            console.log(results.id);
            if (valor==='allCharacter') {
                let cloneTemplate = document.importNode(templateCard,true);
                cloneTemplate.querySelector('.img-card').setAttribute('src',results.image);
                cloneTemplate.querySelector('.name-card').textContent = results.name;
                cloneTemplate.querySelector('.gender-card').textContent = results.gender;
                fragment.appendChild(cloneTemplate);
                mainCard.appendChild(fragment)
            }
            if (results.id==='') {
                let cloneTemplate = document.importNode(templateCard,true);
                cloneTemplate.querySelector('.img-card').setAttribute('src',results.image);
                cloneTemplate.querySelector('.name-card').textContent = results.name;
                cloneTemplate.querySelector('.gender-card').textContent = results.gender;
                fragment.appendChild(cloneTemplate);
                mainCard.appendChild(fragment)
            }
        })
    })
   
}

