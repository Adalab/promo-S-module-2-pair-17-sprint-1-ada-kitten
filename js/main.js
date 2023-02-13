'use strict';

const formList = document.querySelector('.js-list');

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

const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];
console.log (kittenDataList);

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
// const filterKitten = (event) => {
//   event.preventDefault();
//   formList.innerHTML = "";
//   const descrSearchText = input_search_desc.value;
//   if (kittenData_1.desc.includes(descrSearchText)) {
//     // formList.innerHTML += kittenData_1;
//     renderKittenSearch(kittenData_1);
//     paragraph.innerHTML = `Tu gato es el 1`;}

//   if (kittenData_2.desc.includes(descrSearchText)) {
//     // formList.innerHTML += kittenData_2;
//     renderKittenSearch(kittenData_2);
//      paragraph.innerHTML = 'Tu gato es el 2';}

//   if (kittenData_3.desc.includes(descrSearchText)) {
//     // formList.innerHTML += kittenData_3;
//     renderKittenSearch(kittenData_3);
//     paragraph.innerHTML = 'Tu gato es el 3';
//   }
// };

function filterKitten(event) {
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  formList.innerHTML = '';
  for (const kittenItem of kittenDataList) {
    if (kittenItem.desc.includes(descrSearchText)) {
      renderKittenSearch(kittenItem);
    }
  }
}



btnSearch.addEventListener('click',filterKitten );

const renderRace = (race) => {
  if (race==="")
  {
    return 'Uy que despiste, no sabemos su raza';
  }
  else
  {
    return race;
  }

}

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
    formList.innerHTML += `<li class="card"><article class="js-article-3"><img    class="card_img"src="${kittenInput.valuePhoto}" alt="siames-cat"/><h3 class="card_title">${kittenInput.valueName.toUpperCase()}</h3><h4 class="card_race">${renderRace(kittenInput.valueRace)}</h4><p class="card_description">${kittenInput.valueDesc}</p></article></li>`;
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
    // const kittenInput = {
    // image : inputPhoto.value,
    // name : inputName.value,
    // desc : inputDesc.value,
    // race : inputRace.value,
    // }

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

const buttonCancel = document.querySelector('.js-btn-cancel');

const cancelNewKitten = (event) =>{
   event.preventDefault();
    inputClear();
    form.classList.add('collapsed');
}
buttonCancel.addEventListener('click',cancelNewKitten);


// Lesson 2.9
function renderKittenList(kittenDataList) {
  formList.innerHTML = '';
  for (const kitten of kittenDataList){
    renderKittenSearch(kitten);
  }
}


  //Completa el código:
  //Vaciamos el innerHTML del <ul> de la página.
  //Iteramos sobre el listado de gatitos
  //Y por cada iteración pintamos un gatito.
  //utilizando la función renderKitten(kittenItem)

