'use strict';

//const formHidden = document.querySelector('.js-new-form');
//formHidden.classList.remove("collapsed");


const formList = document.querySelector('.js-list');


// const kittenOne=`<li class="card"><article class="js-article-1"><img class="card_img"src="${kittenOneImg}" alt="siames-cat"/><h3 class="card_title">${kittenOneName.toUpperCase()}</h3><h4 class="card_race">${kittenOneRace}</h4><p class="card_description">${kittenOneDesc}</p></article></li>`

// const kittenTwo = `<li class="card"><article class="js-article-2"><img    class="card_img"src="${kittenTwoImg}" alt="siames-cat"/><h3 class="card_title">${kittenTwoName.toUpperCase()}</h3><h4 class="card_race">${kittenTwoRace}</h4><p class="card_description">${kittenTwoDesc}</p></article></li>`;

// const kittenThree = `<li class="card"><article class="js-article-3"><img    class="card_img"src="${kittenThreeImg}" alt="siames-cat"/><h3 class="card_title">${kittenThreeName.toUpperCase()}</h3><h4 class="card_race">${kittenThreeRace}</h4><p class="card_description">${kittenThreeDesc}</p></article></li>`;


const kittenData_1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio',
  desc: ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: 'Siamés',
};

const kittenData_2 = {
  image: 'https://dev.adalab.es/sphynx-gato.webp',
  name: 'Fiona',
  desc: 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza  gatuna que se caracteriza por la «ausencia» de pelo.',
  race: 'Sphynx',
};

const kittenData_3 = {
  image: 'https://dev.adalab.es/maine-coon-cat.webp',
  name: 'Cielo',
  desc: 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
  race: 'Maine Coon',
};







//formList.innerHTML = kittenOne + kittenTwo + kittenThree;

function renderKittenSearch(kittenData){
    const kittenImg = kittenData.image;
    const kittenName = kittenData.name;
    const kittenDesc = kittenData.desc;
    const kittenRace = kittenData.race;
    formList.innerHTML += `<li class="card"><article class="js-article-3"><img    class="card_img"src="${kittenImg}" alt="siames-cat"/><h3 class="card_title">${kittenName.toUpperCase()}</h3><h4 class="card_race">${kittenRace}</h4><p class="card_description">${kittenDesc}</p></article></li>`;
};



const input_search_desc = document.querySelector('.js_in_search_desc');
const paragraph = document.querySelector('.js-paragraph');
const articleOne = document.querySelector('.js-article-1');
const articleTwo = document.querySelector('.js-article-2');
const articleThree = document.querySelector('.js-article-3');

const btnSearch = document.querySelector('.js-btn-search');

//remove.classList.remove('remove');
const filterKitten = (event) => {
  event.preventDefault();
  formList.innerHTML = "";
  const descrSearchText = input_search_desc.value;
  if (kittenData_1.desc.includes(descrSearchText)) {
    formList.innerHTML += kittenData_1;
    renderKittenSearch(kittenData_1);
    paragraph.innerHTML = `Tu gato es el 1`;}

  if (kittenData_2.desc.includes(descrSearchText)) {
    formList.innerHTML += kittenData_2;
    renderKittenSearch(kittenData_2);
     paragraph.innerHTML = 'Tu gato es el 2';}

  if (kittenData_3.desc.includes(descrSearchText)) {
    formList.innerHTML += kittenData_3;
    renderKittenSearch(kittenData_3);
    paragraph.innerHTML = 'Tu gato es el 3';
  }
};

btnSearch.addEventListener('click',filterKitten );

// if(kittenOneDesc.includes(descrSearchText)){
//     paragraph.innerHTML = `Tu gato es el 1`;
//     articleTwo.classList.add('remove');
//     articleThree.classList.add('remove');
// } else if (kittenTwoDesc.includes(descrSearchText)) {
//     paragraph.innerHTML = 'Tu gato es el 2';
//     articleOne.classList.add('remove');
//     articleThree.classList.add('remove');
// } else if (kittenThreeDesc.includes(descrSearchText)){
//     paragraph.innerHTML = 'Tu gato es el 3';
//     articleOne.classList.add('remove');
//     articleTwo.classList.add('remove');
// } else {
//     paragraph.innerHTML ='No hay ningún gato con esa característica';
//     articleOne.classList.add('remove');
//     articleTwo.classList.add('remove');
//     articleThree.classList.add('remove');
// }


const buttonPlusCircle = document.querySelector('.item');
const form = document.querySelector('.js-new-form')

buttonPlusCircle.addEventListener('click', handleClickNewCatForm);

function showNewCatForm() {
  form.classList.remove('collapsed');
}
function hideNewCatForm() {
  form.classList.add('collapsed');
}
    
function handleClickNewCatForm(event) {
  event.preventDefault();
  if (form.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}


const buttonAdd = document.querySelector('.js-btn-add');

const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-race');
const labelMessageError = document.querySelector('.js-label-error');


function renderKittenForm(kittenInput){
   
    formList.innerHTML += `<li class="card"><article class="js-article-3"><img    class="card_img"src="${kittenInput.valuePhoto}" alt="siames-cat"/><h3 class="card_title">${kittenInput.valueName.toUpperCase()}</h3><h4 class="card_race">${kittenInput.valueRace}</h4><p class="card_description">${kittenInput.valueDesc}</p></article></li>`;
};

buttonAdd.addEventListener('click', addNewKitten);

function addNewKitten(event) {
    event.preventDefault();
     const kittenInput = {
      valueName:inputName.value,
      valuePhoto: inputPhoto.value,
      valueDesc: inputDesc.value,
      valueRace: inputRace.value,
    };
    //Comentar con Marina
    // const kittenInput= kittenData_1;
    // kittenInput.image=inputPhoto.value;
    // kittenInput.name=inputName.value;
    // kittenInput.desc=inputDesc.value;
    // kittenInput.race=inputRace.value;

    if (kittenInput.valueDesc === '' || kittenInput.valuePhoto === '' || kittenInput.valueName === '') {
        labelMessageError.innerHTML = "¡Uy! parece que has olvidado algo";
    } else {
        labelMessageError.innerHTML = "Todo ok";
        renderKittenForm(kittenInput);
        // renderKittenSearch(kittenInput);
        inputClearForm();
    }

}

function inputClearForm(){
    inputPhoto.value = '';
    inputName.value = '';
    inputRace.value = '';
    inputDesc.value = '';
}

function inputClearSearch(){

}


//buttonAdd.addEventListener('click', (event) =>{
    //event.preventDefault();
//     const valueDesc = inputDesc.value;
//     const valuePhoto = inputPhoto.value;
//     const valueName = inputName.value;

//     if (valueDesc === '' || valuePhoto === '' || valueName === '') {
//         labelMessageError.innerHTML = "¡Uy! parece que has olvidado algo"
//     } else {
//         labelMessageError.innerHTML = "Todo ok"
//     }
// })

const buttonCancel = document.querySelector('.js-btn-cancel');

const cancelNewKitten = (event) =>{
   event.preventDefault();
    inputClear();
    form.classList.add('collapsed');
}
buttonCancel.addEventListener('click',cancelNewKitten);
