"use strict";
let buttons = document.querySelectorAll(".menu__btn");
//for(let button of buttons){};

buttons.forEach(button => {
	button.addEventListener("click", (e)=>{
		let button = e.currentTarget;
		// Hide all tabs
		let tabs = document.querySelectorAll(".menu__choix");
		for(let tab of tabs){
			tab.classList.add("hidden");
		}
		// display current tab
		let tabId = e.currentTarget.getAttribute("data-tab");
		let currentTab = document.getElementById(tabId);
		currentTab.classList.remove("hidden");

		// desactivate active buttons
		let activeButtons = document.querySelectorAll(".menu__btn.active");
		for(let activeButton of activeButtons){
			activeButton.classList.remove("active");
		}

		// active current button
		e.currentTarget.classList.add("active");

		let activeBtns = document.querySelectorAll(".menu__content");
		for(let activeBtn of activeBtns){
			activeBtn.classList.remove("test");
		}

		let parentElement = button.parentNode;
		parentElement.classList.add("test");
		
	});
})

let ajd = new Date();
let year = ajd.getFullYear();
let copyright = document.querySelector(".copyright");
if(copyright){
	copyright.innerHTML = "©"+ year;
}

//---Shop---

fetch("assets/js/data.json").then(function(reponse){
   return reponse.json();
}).then(function(json){
	console.log(json);
});

var curseur = document.querySelector(".curseur");
var curseurcercle = document.querySelector(".curseurcercle");
var curseurimage = document.querySelector(".curseurimg");

var shopselect = document.querySelectorAll(".shop__select");

var prixcurseur = 0;
var logo;

var montantjeton = document.querySelector(".jeton");
var jeton = localStorage.getItem("Jetons");
if(jeton==="null"){
	jeton = 0;
	localStorage.setItem("Jetons",0);
}
if(montantjeton){
	montantjeton.innerHTML = ""+jeton+"";
}

var vitalityEtat = localStorage.getItem("vitality");
var nrgEtat = localStorage.getItem("nrg");
var ssgEtat = localStorage.getItem("ssg");
var dignitasEtat = localStorage.getItem("dignitas");
var veloceEtat = localStorage.getItem("veloce");
var pkEtat = localStorage.getItem("pk");
var reciprocityEtat = localStorage.getItem("reciprocity");
var renegadesEtat = localStorage.getItem("renegades");
var eunitedEtat = localStorage.getItem("eunited");
var lowkeyEtat = localStorage.getItem("low");
var havocEtat = localStorage.getItem("havoc");
var sinsEtat = localStorage.getItem("sins");
var cliquer = localStorage.getItem("clique");
var logoLast = localStorage.getItem("logolast");

console.log("Last curseur :"+cliquer+", Last Logo :"+logoLast+", Vitality :"+vitalityEtat+", NRG :"+nrgEtat+", SSG :"+ssgEtat+", Dignitas :"+dignitasEtat+", veloce :"+veloceEtat+", pk :"+pkEtat+", reciprocity :"+reciprocityEtat+", renegades :"+renegadesEtat+", eunited :"+eunitedEtat+", Lowkey :"+lowkeyEtat+", havoc :"+havocEtat+", sins :"+sinsEtat);

//--- Reset shop ligne 68 et 92 de mon code

if(curseur){
	document.addEventListener(("mousemove"),(e)=>{
		curseur.setAttribute("style",'top:'+(e.pageY-20)+"px; left:"+(e.pageX-20)+"px;");
	})
	//---petit prob quand tu joue avec la barre
}

function ButtonClassDebloquage(button, div){
	div.classList.add("acheter");
	div.classList.remove("bloquer");
	button.innerHTML="Equipable";
}

function resetButton(){
	shopselect.forEach(shopselect=>{
		if(shopselect.classList.contains("acheter")){
			shopselect.children[2].innerHTML="Equipable";
		}
	})
}


function DebloquerCurseur(shopselect,logo,prixcurseur,metacurseur,buttonChild){  
	resetButton();
	if(shopselect.classList.contains("bloquer") && jeton >= prixcurseur ){
		curseurimage.style.backgroundImage=logo;
		jeton = jeton-prixcurseur;
		montantjeton.innerHTML = ""+jeton+"";
		ButtonClassDebloquage(buttonChild,shopselect);
		curseurcercle.style.backgroundColor = "transparent";
		localStorage.setItem("logolast",logo);
		localStorage.setItem("Jetons",jeton);
		localStorage.setItem(""+metacurseur+"",true);
		localStorage.setItem("clique",""+metacurseur+"");
	}else if(shopselect.classList.contains("acheter")){
		curseurimage.style.backgroundImage=logo;
		curseurcercle.style.backgroundColor = "transparent";
		localStorage.setItem("logolast",logo);
		localStorage.setItem("clique",""+metacurseur+"");
	}else{
		alert("pas assez de jetons");
	}
	if(!shopselect.classList.contains("bloquer")){
		buttonChild.innerHTML="Equipé";
	}
}

function imageLocalStorage(button){
	curseurcercle.style.backgroundColor = "transparent";
	curseurimage.style.backgroundImage=logoLast;
	button.innerHTML=("Equipé");
}

shopselect.forEach(shopselect=>{
	var  metacurseur = shopselect.getAttribute("meta-cursor");
	shopselect.addEventListener(("click"),(e)=>{   
		let buttonChild = e.currentTarget.children[2];
		console.log(metacurseur);
		if(metacurseur=="normal"){
			localStorage.setItem("clique","normal");
			curseurimage.style.backgroundImage="none";
			curseurcercle.style.backgroundColor = "black";
			resetButton();
			buttonChild.innerHTML="Equipé"
		}else if(metacurseur=="vitality"){
			logo = "url('assets/images/vitality_logo.png')";
			prixcurseur = 30;
			DebloquerCurseur(shopselect,logo,prixcurseur,metacurseur,buttonChild);
		}else if(metacurseur=="nrg"){
			logo ="url('assets/images/nrg_logo.png')";
			prixcurseur = 30;
			DebloquerCurseur(shopselect,logo,prixcurseur,metacurseur,buttonChild);
		}else if(metacurseur=="ssg"){
			logo ="url('assets/images/spacestationgaming_logo.png')";
			prixcurseur = 30;
			DebloquerCurseur(shopselect,logo,prixcurseur,metacurseur,buttonChild);
		}else if(metacurseur=="dignitas"){
			logo ="url('assets/images/dignitas.png')";
			prixcurseur = 30;
			DebloquerCurseur(shopselect,logo,prixcurseur,metacurseur,buttonChild);
		}else if(metacurseur=="veloce"){
			logo ="url('assets/images/veloce_logo.png')";
			prixcurseur = 25;
			DebloquerCurseur(shopselect,logo,prixcurseur,metacurseur,buttonChild);
		}else if(metacurseur=="pk"){
            logo ="url('assets/images/pittsburghknights_logo.png')";
            prixcurseur = 25;
            DebloquerCurseur(shopselect,logo,prixcurseur,metacurseur,buttonChild);
        }else if(metacurseur=="reciprocity"){
			logo ="url('assets/images/reciprocity_logo.png')";
			prixcurseur = 25;
			DebloquerCurseur(shopselect,logo,prixcurseur,metacurseur,buttonChild);
		}else if(metacurseur=="renegades"){
			logo ="url('assets/images/renegades_logo.png')";
			prixcurseur = 25;
			DebloquerCurseur(shopselect,logo,prixcurseur,metacurseur,buttonChild);
		}else if(metacurseur=="eunited"){
			logo ="url('assets/images/eunited_logo.png')";
			prixcurseur = 15;
			DebloquerCurseur(shopselect,logo,prixcurseur,metacurseur,buttonChild);
		}else if(metacurseur=="low"){
			logo ="url('assets/images/lowkey_logo.png')";
			prixcurseur = 15;
			DebloquerCurseur(shopselect,logo,prixcurseur,metacurseur,buttonChild);
		}else if(metacurseur=="havoc"){
			logo ="url('assets/images/havoc_logo.png')";
			prixcurseur = 15;
			DebloquerCurseur(shopselect,logo,prixcurseur,metacurseur,buttonChild);
		}else if(metacurseur=="sins"){
			logo ="url('assets/images/threesins_logo.png')";
			prixcurseur = 15;
			DebloquerCurseur(shopselect,logo,prixcurseur,metacurseur,buttonChild);
		}
	})
	if(metacurseur==="normal"){
		curseurimage.style.backgroundImage="none";
		curseurcercle.style.backgroundColor = "red";
		shopselect.children[2].innerHTML="Equipable";
		if(cliquer==="normal"){
			shopselect.children[2].innerHTML="Equipé";
		}
	}
	else if(metacurseur==="vitality" && vitalityEtat==="true"){
		ButtonClassDebloquage(shopselect.children[2], shopselect)
		if(cliquer ==="vitality"){
            imageLocalStorage(shopselect.children[2]);
		}
	}
	else if(metacurseur==="nrg" && nrgEtat==="true"){
		ButtonClassDebloquage(shopselect.children[2], shopselect)
        if(cliquer ==="nrg"){
            imageLocalStorage(shopselect.children[2]);
        }
    }
})
