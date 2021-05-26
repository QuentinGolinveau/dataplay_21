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
montantjeton.innerHTML = ""+jeton+"";


if(curseur){
	document.addEventListener(("mousemove"),(e)=>{
		curseur.setAttribute("style",'top:'+(e.pageY-20)+"px; left:"+(e.pageX-20)+"px;");
	})
}

function DebloquerCurseur(button,logo,prixcurseur,metacurseur){  
	//resetButton();
	if(button.classList.contains("bloquer") && jeton >= prixcurseur ){
		curseurimage.style.backgroundImage=logo;
		jeton = jeton-prixcurseur;
		montantjeton.innerHTML = ""+jeton+"";
		ButtonClassDebloquage(button);
		curseurcercle.style.backgroundColor = "transparent";
		localStorage.setItem("logolast",logo);
		localStorage.setItem("Jetons",jeton);
		localStorage.setItem(""+metacurseur+"",true);
		localStorage.setItem("clique",""+metacurseur+"");
	}else if(button.classList.contains("acheter")){
		curseurimage.style.backgroundImage=logo;
		curseurcercle.style.backgroundColor = "transparent";
		localStorage.setItem("logolast",logo);
		localStorage.setItem("clique",""+metacurseur+"");
	}else{
		alert("pas assez de jetons");
	}
	if(!button.classList.contains("bloquer")){
		button.innerHTML="Equipé";
	}
}

shopselect.forEach(shopselect=>{
	var  metacurseur = shopselect.getAttribute("meta-cursor");
	shopselect.addEventListener(("click"),(e)=>{   
		console.log(metacurseur);
		if(metacurseur=="normal"){
			curseurimage.style.backgroundImage="none";
			curseurcercle.style.backgroundColor = "black";
		}else if(metacurseur=="vitality"){
			logo = "url('Vitality_logo.svg')";
			prixcurseur = 30;
			DebloquerCurseur(shopselect,logo,prixcurseur,metacurseur);
		}
	})
})
