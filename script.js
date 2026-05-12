const input = document.getElementById('myInput');
const bouton = document.getElementById('addBtn');
const liste = document.getElementById('liste');
const tableau = document.getElementById('tableau');

const myArray = [];
//fonction vérification string vide dans input
function isVide(text){
	if(!text.trim()){
		alert("veuillez mettre au moins un mot");
		return true;
	}else {
		return false;
	}
}

//fonction pour ajouter items dans la liste
function addItems(){
	const item = input.value;
	if(isVide(item)){
		return;
	}
	myArray.push(item);
	tableau.textContent = `Le tableau : [${myArray.join(', ')}]`;
	return myArray;
}

//fonction qui affiche les items
function displayItems(){
	myArray.forEach(item => {
		const li = document.createElement('li');
		li.textContent = item;
		liste.appendChild(li);
	});
}

//ajout écouteur d'événement sur le bouton
bouton.addEventListener('click',()=>{
	liste.textContent = "";
	addItems();
	displayItems();
	input.value="";
});