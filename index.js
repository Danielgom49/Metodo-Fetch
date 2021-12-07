const URL = "https://rickandmortyapi.com/api/character/";

const mainCard = document.querySelector('#main-card');

const templateCard = document.querySelector('#template-card').content;

const fragment = document.createDocumentFragment();

const characters = document.getElementById('characters');

characters.addEventListener('change',CreateCard);

let option;

FetchApi(option)
function FetchApi(option) {
    fetch(URL)
    .then(response => response.json())
    .then(data=>{
        return data.results.map((card)=>{
        // mainCard.innerHTML = '';
        // CreateCard(card);
        option = document.createElement('option');
        option.value=card.name;
        option.textContent=card.name
        option.setAttribute('id', card.id)
        characters.appendChild(option);
        return card
        })
    })
}



function CreateCard(option) {
    fetch(URL)
    .then(response => response.json())
    .then(data=>{
        return data.results.map((results)=>{
            let id = option.target.value;
            console.log(id);
            if (id === 'allCharacters') {
                let cloneTemplate = document.importNode(templateCard,true);
                cloneTemplate.querySelector('.img-card').setAttribute('src',results.image);
                cloneTemplate.querySelector('.name-card').textContent = results.name;
                cloneTemplate.querySelector('.gender-card').textContent = results.gender;
                fragment.appendChild(cloneTemplate);
                mainCard.appendChild(fragment)
            }
            if(results.name===id){
                mainCard.innerHTML = '';
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

