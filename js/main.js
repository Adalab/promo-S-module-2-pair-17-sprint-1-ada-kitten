'use strict';

//const formHidden = document.querySelector('.js-new-form');
//formHidden.classList.remove("collapsed");


const formList = document.querySelector('.js-list');

const kittenOneImg='https://dev.adalab.es/gato-siames.webp';
const kittenOneName='Anastacio';
const kittenOneDesc='Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenOneRace='Siamés';

const kittenOne=`<li class="card"><article class="js-article-1"><img class="card_img"src="${kittenOneImg}" alt="siames-cat"/><h3 class="card_title">${kittenOneName.toUpperCase()}</h3><h4 class="card_race">${kittenOneRace}</h4><p class="card_description">${kittenOneDesc}</p></article></li>`

const kittenTwoImg="https://dev.adalab.es/sphynx-gato.webp";
const kittenTwoName="Fiona";
const kittenTwoRace="Sphynx";
const kittenTwoDesc="Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza  gatuna que se caracteriza por la «ausencia» de pelo.";

const kittenTwo = `<li class="card"><article class="js-article-2"><img    class="card_img"src="${kittenTwoImg}" alt="siames-cat"/><h3 class="card_title">${kittenTwoName.toUpperCase()}</h3><h4 class="card_race">${kittenTwoRace}</h4><p class="card_description">${kittenTwoDesc}</p></article></li>`;

const kittenThreeImg="https://dev.adalab.es/maine-coon-cat.webp";
const kittenThreeName="Cielo";
const kittenThreeRace="Maine Coon";
const kittenThreeDesc="Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";

const kittenThree = `<li class="card"><article class="js-article-3"><img    class="card_img"src="${kittenThreeImg}" alt="siames-cat"/><h3 class="card_title">${kittenThreeName.toUpperCase()}</h3><h4 class="card_race">${kittenThreeRace}</h4><p class="card_description">${kittenThreeDesc}</p></article></li>`;

formList.innerHTML = kittenOne + kittenTwo + kittenThree;

const input_search_desc = document.querySelector('.js_in_search_desc');
const paragraph = document.querySelector('.js-paragraph');

const articleOne = document.querySelector('.js-article-1');
const articleTwo = document.querySelector('.js-article-2');
const articleThree = document.querySelector('.js-article-3');


const descrSearchText = input_search_desc.value;

//remove.classList.remove('remove');

if(kittenOneDesc.includes(descrSearchText)){
    paragraph.innerHTML = `Tu gato es el 1`;
    articleTwo.classList.add('remove');
    articleThree.classList.add('remove');
} else if (kittenTwoDesc.includes(descrSearchText)) {
    paragraph.innerHTML = 'Tu gato es el 2';
    articleOne.classList.add('remove');
    articleThree.classList.add('remove');
} else if (kittenThreeDesc.includes(descrSearchText)){
    paragraph.innerHTML = 'Tu gato es el 3';
    articleOne.classList.add('remove');
    articleTwo.classList.add('remove');
} else {
    paragraph.innerHTML ='No hay ningún gato con esa característica';
    articleOne.classList.add('remove');
    articleTwo.classList.add('remove');
    articleThree.classList.add('remove');
}