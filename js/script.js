const itemsWrapper = document.querySelector('.items-wrapper');
const btnPrevious = document.querySelector('.up');
const btnNext = document.querySelector('.down');
const images = [
	'img/01.webp',
	'img/02.webp',
	'img/03.webp',
	'img/04.webp',
	'img/05.webp'
];
let counter = 0;

//reset slider
itemsWrapper.innerHTML = '';


//stampa le immagini 
for( let i = 0; i < images.length; i++ ) {
	const image = images[i];
	console.log(image);
	itemsWrapper.innerHTML += `<img src="${image}" class="item hide">`;
}

//salva le immagini in un array
const itemsCollection = document.getElementsByClassName('item');

//toglie la classe 'hide' al primo elemento per visualizzarlo
itemsCollection[0].classList.remove('hide');
console.log (itemsCollection);

btnNext.addEventListener('click', function(){

	//aggiunge la classe 'hide' all'elemento corrente
	itemsCollection[counter].classList.add('hide');

	//incrementa il contatore
	counter++;

	//bonus 1 
	if(counter === images.length ){
		counter = 0;
	}

	//toglie la classe 'hide' all'elemento corrente
	itemsCollection[counter].classList.remove('hide');

})

btnPrevious.addEventListener('click', function(){

	//aggiunge la classe 'hide' all'elemento corrente
	itemsCollection[counter].classList.add('hide');

	//decrementa il contatore
	counter--;

	//bonus 1 
	if(counter < 0 ){
		counter = images.length - 1;
	}

	//toglie la classe 'hide' all'elemento corrente
	itemsCollection[counter].classList.remove('hide');

})


