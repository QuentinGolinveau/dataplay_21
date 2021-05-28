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
var FormClass = document.querySelector('.test');
var FiltreBtn = document.querySelector('.filtre--btn');
var HiddenEtat = document.querySelector('.hidden');
var SuivantBtn = document.querySelector('.suivant');

if(FiltreBtn,FormClass){
  FiltreBtn.addEventListener("click", (e)=>{
      FormClass.classList.add('form');
      FormClass.classList.remove('hidden');
  });
}
if(SuivantBtn){
    SuivantBtn.addEventListener(("click"),(e)=>{ 
        e.preventDefault();
        FormClass.classList.remove('form');
        FormClass.classList.add('hidden');
    });
}


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
	var PGbuteur = document.querySelectorAll(".Gbuteur .buttonreponse");
    var PGassists = document.querySelectorAll(".Gassists .buttonreponse");
    var PGgardien = document.querySelectorAll(".Ggardien .buttonreponse");
    var PGscore = document.querySelectorAll(".Gscore .buttonreponse");
    var PGprix = document.querySelectorAll(".Gprix .buttonreponse");

    var PFbuteur = document.querySelectorAll(".Fbuteur .buttonreponse");
    var PFassists = document.querySelectorAll(".Fassists .buttonreponse");
    var PFgardien = document.querySelectorAll(".Fgardien .buttonreponse");
    var PFscore  = document.querySelectorAll(".Fscore .buttonreponse");
    var PFtireur  = document.querySelectorAll(".Ftireur .buttonreponse");

    var PDFbuteur = document.querySelectorAll(".Dbuteur .buttonreponse");
    var PDFassists = document.querySelectorAll(".Dassists .buttonreponse");
    var PDFgardien = document.querySelectorAll(".Dgardien .buttonreponse");
    var PDFscore  = document.querySelectorAll(".Dscore .buttonreponse");
    var PDFtireur  = document.querySelectorAll(".Dtireur .buttonreponse");

    var compteurmoins = document.querySelectorAll(".compteurmoins");
    var compteurplus = document.querySelectorAll(".compteurplus");
    var reponse = document.querySelector(".reponse");

    compteurplus.forEach(compteurplus=>{
        compteurplus.addEventListener(("click"),(e)=>{
            let parentElement = e.currentTarget.parentNode;
            let counterElement = parentElement.querySelector(".number");
            let counterValue = Number(counterElement.innerHTML);
            if(Number(jeton)<10){
                if(counterValue<Number(jeton)){
                    counterValue++;
                    counterElement.innerHTML = counterValue;
                }
            }else if(counterValue<10){
                counterValue++;
                counterElement.innerHTML = counterValue;
            }
            
        })
            
    })

    compteurmoins.forEach(compteurmoins=>{
        compteurmoins.addEventListener(("click"),(e)=>{
            let parentElement = e.currentTarget.parentNode;
            let counterElement = parentElement.querySelector(".number");
            let counterValue = Number(counterElement.innerHTML);
            if(counterValue>0){
                counterValue--;  
                counterElement.innerHTML = counterValue;
            }
        })
    })


    function buttonreponse(paris,parentElement){
            let parentElement2= parentElement.parentNode;
            let counterElement = parentElement2.querySelector(".number");
            let counterValue = Number(counterElement.innerHTML);
            if(paris.getAttribute("meta-reponse")==="true"){
                jeton =Math.ceil(Number(jeton)+(1.5*counterValue));
                montantjeton.innerHTML = ""+jeton+"";
                localStorage.setItem("Jetons",jeton);
                console.log("bonne reponse");
            }else{
                jeton =jeton-counterValue;
                montantjeton.innerHTML = ""+jeton+"";
                localStorage.setItem("Jetons",jeton);
                console.log("mauvaise reponse");
            } 
    }
    
    var divgraph = document.querySelectorAll(".bet__graph");
    function creadiv(longeur,position,nombre,joueur){
        gsap.fromTo(
            position,
            {height: 0 },
            {duration: 2, height: 200}
        );
        for(let i=0; i<longeur; i++){
                var divbaton = document.createElement("div");
                divbaton.classList.add("bet__graph--colonne");
                position.appendChild(divbaton);
                var hauteur = (nombre[i]/nombre[0])*100;
                if(hauteur===100){
                    divbaton.style.backgroundImage = "linear-gradient(0deg, #2B66FF 0%, #C324FF 100%)"; 
                }else{
                    divbaton.style.opacity="60%"
                }
                divbaton.style.height = hauteur + "%";
                
                var batontext = document.createElement("p");
                batontext.innerHTML=""+nombre[i]+"<span>"+joueur[i]+"</span>";
                divbaton.appendChild(batontext);
        }
    }

    function disablebutton(button,all){
            if(button==="true"){
                all.classList.add("bet__reponse--true");
            }else{
                all.classList.add("bet__reponse--false");
            } 
    }
    
//1
    PGbuteur.forEach(PGbuteur=>{
        PGbuteur.addEventListener(("click"),(e)=>{
            divgraph[0].classList.remove("hidden");
            let parentElement = e.currentTarget.parentNode;
            buttonreponse(PGbuteur,parentElement);
            let all = document.querySelectorAll(".Gbuteur .buttonreponse");
            all.forEach(all=>{
                var allmeta = all.getAttribute("meta-reponse");
                disablebutton(allmeta,all);
            })
            var reponse1 = [json["Spacestation"][0]["Compo"][0]["Arsenal"][0]["General"][0]["Goals"],json["Dignitas"][0]["Compo"][0]["Yukeo"][0]["General"][0]["Goals"],json["NRG"][0]["Compo"][0]["Turbopolsa"][0]["General"][0]["Goals"]];

            var joueur1 = ["Arsenal","Yukeo","Turbopolsa"];

            creadiv(3, divgraph[0],reponse1,joueur1);
        })
           
    })
//2
    PGassists.forEach(PGassists=>{
        PGassists.addEventListener(("click"),(e)=>{
            divgraph[1].classList.remove("hidden");
            let parentElement = e.currentTarget.parentNode;
            buttonreponse(PGassists,parentElement);
            let all = document.querySelectorAll(".Gassists .buttonreponse");
            all.forEach(all=>{
                var allmeta = all.getAttribute("meta-reponse");
                disablebutton(allmeta,all);
            })

            var reponse2 = [json["NRG"][0]["Compo"][0]["jstn."][0]["General"][0]["Assist"],json["Spacestation"][0]["Compo"][0]["Sypical"][0]["General"][0]["Assist"],json["Dignitas"][0]["Compo"][0]["Violentpanda"][0]["General"][0]["Assist"]];

            var joueur2 = ["jstn.","Sypical","ViolentPanda"];
            
            creadiv(3, divgraph[1],reponse2,joueur2);
        })
    })
//3
    PGgardien.forEach(PGgardien=>{
        PGgardien.addEventListener(("click"),(e)=>{
            divgraph[2].classList.remove("hidden");
            let parentElement = e.currentTarget.parentNode;
            buttonreponse(PGgardien,parentElement);
            let all = document.querySelectorAll(".Ggardien .buttonreponse");
            all.forEach(all=>{
                var allmeta = all.getAttribute("meta-reponse");
                disablebutton(allmeta,all);
            })

            var reponse3 = [json["Vitality"][0]["Compo"][0]["Scrub Killa"][0]["General"][0]["Save"],json["Vitality"][0]["Compo"][0]["Fairy peak"][0]["General"][0]["Save"],json["Vitality"][0]["Compo"][0]["Kaydop"][0]["General"][0]["Save"]];

            var joueur3 = ["Scrub Killa","Fairy peak","Kaydop"];

            creadiv(3, divgraph[2], reponse3,joueur3);
        })
    })
//4
    PGscore.forEach(PGscore=>{
        PGscore.addEventListener(("click"),(e)=>{
            let parentElement = e.currentTarget.parentNode;
            divgraph[3].classList.remove("hidden");
            buttonreponse(PGscore,parentElement);
            let all = document.querySelectorAll(".Gscore .buttonreponse");
            all.forEach(all=>{
                var allmeta = all.getAttribute("meta-reponse");
                disablebutton(allmeta,all);
            })

            var reponse4 = [json["Vitality"][0]["Stats"][0]["General"][0]["Score"],json["NRG"][0]["Stats"][0]["General"][0]["Score"],json["Spacestation"][0]["Stats"][0]["General"][0]["Score"]];

            var joueur4 = ["Vitality","NRG","Spacestation"];

            creadiv(3, divgraph[3], reponse4, joueur4);
        })
    })
//5
    PGprix.forEach(PGprix=>{
        PGprix.addEventListener(("click"),(e)=>{
            let parentElement = e.currentTarget.parentNode;
            buttonreponse(PGprix,parentElement);
            let all = document.querySelectorAll(".Gprix .buttonreponse");
            all.forEach(all=>{
                var allmeta = all.getAttribute("meta-reponse");
                disablebutton(allmeta,all);
            })
            reponse.innerHTML="<ul><li>Championnat de Rocket League : 529.5K $</li><li> Roland Garros Simple Homme 2019 : 2.8M $ </li><li> Ligue des Champions de Water Polo 2019 : 63k $</li></ul>";
        })
    })

//FINALE 

//6
    PFbuteur.forEach(PFbuteur=>{
        PFbuteur.addEventListener(("click"),(e)=>{
            let parentElement = e.currentTarget.parentNode;
            divgraph[0].classList.remove("hidden");
            buttonreponse(PFbuteur,parentElement);
            let all = document.querySelectorAll(".Fbuteur .buttonreponse");
            all.forEach(all=>{
                var allmeta = all.getAttribute("meta-reponse");
                disablebutton(allmeta,all);
            })

            var reponse6 = [json["NRG"][0]["Compo"][0]["Turbopolsa"][0]["Final"][0]["Goals"],json["Vitality"][0]["Compo"][0]["Kaydop"][0]["Final"][0]["Goals"],json["NRG"][0]["Compo"][0]["jstn."][0]["Final"][0]["Goals"]];

            var joueur6 = ["Turbopolsa","Kaydop", "jstn."];

            creadiv(3, divgraph[0], reponse6, joueur6);        
        })
    })
//7
    PFassists.forEach(PFassists=>{
        PFassists.addEventListener(("click"),(e)=>{
            let parentElement = e.currentTarget.parentNode;
            divgraph[1].classList.remove("hidden");
            buttonreponse(PFassists,parentElement);
            let all = document.querySelectorAll(".Fassists .buttonreponse");
            all.forEach(all=>{
                var allmeta = all.getAttribute("meta-reponse");
                disablebutton(allmeta,all);
            })

            
            var reponse8 = [json["NRG"][0]["Compo"][0]["Turbopolsa"][0]["Final"][0]["Assist"],json["NRG"][0]["Compo"][0]["jstn."][0]["Final"][0]["Assist"],json["Vitality"][0]["Compo"][0]["Scrub Killa"][0]["Final"][0]["Assist"]];

            var joueur8 = ["Turbopolsa", "jstn.","Scrub Killa"];
            
            creadiv(3, divgraph[1], reponse8, joueur8); 
        
        })
    })
//8
    PFgardien.forEach(PFgardien=>{
        PFgardien.addEventListener(("click"),(e)=>{
            let parentElement = e.currentTarget.parentNode;
            divgraph[2].classList.remove("hidden");
            buttonreponse(PFgardien,parentElement);
            let all = document.querySelectorAll(".Fgardien .buttonreponse");
            all.forEach(all=>{
                var allmeta = all.getAttribute("meta-reponse");
                disablebutton(allmeta,all);
            })
     
            var reponse9 = [json["Vitality"][0]["Compo"][0]["Scrub Killa"][0]["Final"][0]["Save"],json["NRG"][0]["Compo"][0]["jstn."][0]["Final"][0]["Save"],json["NRG"][0]["Compo"][0]["Turbopolsa"][0]["Final"][0]["Save"]];

            var joueur9 = ["Scrub Killa","jstn.","Turbopolsa"];

            creadiv(3, divgraph[2], reponse9, joueur9);
        
        })
    })
//9
    PFscore.forEach(PFscore=>{
        PFscore.addEventListener(("click"),(e)=>{
            let parentElement = e.currentTarget.parentNode;
            divgraph[3].classList.remove("hidden");
            buttonreponse(PFscore,parentElement);
            let all = document.querySelectorAll(".Fscore .buttonreponse");
            all.forEach(all=>{
                var allmeta = all.getAttribute("meta-reponse");
                disablebutton(allmeta,all);
            })

            var reponse10 = [json["NRG"][0]["Stats"][0]["Final"][0]["General"][0]["Score-team"],json["Vitality"][0]["Stats"][0]["Final"][0]["General"][0]["Score-team"]];

            var joueur10 =["NRG Esports","Renault Vitality"];

            creadiv(2, divgraph[3], reponse10, joueur10);        
        })
    })
//10    
    PFtireur.forEach(PFtireur=>{
        PFtireur.addEventListener(("click"),(e)=>{
            let parentElement = e.currentTarget.parentNode;
            divgraph[4].classList.remove("hidden");
            buttonreponse(PFtireur,parentElement);
            let all = document.querySelectorAll(".Ftireur .buttonreponse");
            all.forEach(all=>{
                var allmeta = all.getAttribute("meta-reponse");
                disablebutton(allmeta,all);
            })

            var reponse11 = [json["Vitality"][0]["Compo"][0]["Kaydop"][0]["Final"][0]["Shot"],json["NRG"][0]["Compo"][0]["GarrettG"][0]["Final"][0]["Shot"],json["NRG"][0]["Compo"][0]["jstn."][0]["Final"][0]["Shot"]];

            var joueur11 = ["Kaydop","GarrettG","jstn."];
            
            creadiv(3, divgraph[4], reponse11, joueur11); 
        
        })
    })
//Demi-Finale
//11

    PDFbuteur.forEach(PDFbuteur=>{
        PDFbuteur.addEventListener(("click"),(e)=>{
            let parentElement = e.currentTarget.parentNode;
            divgraph[0].classList.remove("hidden");
            buttonreponse(PDFbuteur,parentElement);
            let all = document.querySelectorAll(".Dbuteur .buttonreponse");
            all.forEach(all=>{
                var allmeta = all.getAttribute("meta-reponse");
                disablebutton(allmeta,all);
            })
            
            var reponse12 = [json["NRG"][0]["Compo"][0]["Turbopolsa"][0]["Semi_final"][0]["Goals"],json["Vitality"][0]["Compo"][0]["Fairy peak"][0]["Semi_final"][0]["Goals"],json["Spacestation"][0]["Compo"][0]["Arsenal"][0]["Semi_final"][0]["Goals"]];
            var joueur12 = ["Turbopolsa","Fairy Peak","Arsenal"];
            
            creadiv(3, divgraph[0], reponse12, joueur12);        
        })
    })
//12
    PDFassists.forEach(PDFassists=>{
        PDFassists.addEventListener(("click"),(e)=>{
            let parentElement = e.currentTarget.parentNode;
            divgraph[1].classList.remove("hidden");
            buttonreponse(PDFassists,parentElement);
            let all = document.querySelectorAll(".Dassists .buttonreponse");
            all.forEach(all=>{
                var allmeta = all.getAttribute("meta-reponse");
                disablebutton(allmeta,all);
            })
                        
            var reponse13 = [json["NRG"][0]["Compo"][0]["jstn."][0]["Semi_final"][0]["Assist"],json["NRG"][0]["Compo"][0]["GarrettG"][0]["Semi_final"][0]["Assist"],json["Vitality"][0]["Compo"][0]["Scrub Killa"][0]["Semi_final"][0]["Assist"]];
            var joueur13 = ["jstn.","GarrettG","Scrub Killa"];
            
            creadiv(3, divgraph[1], reponse13, joueur13); 
        })
    })
//13
    PDFgardien.forEach(PDFgardien=>{
        PDFgardien.addEventListener(("click"),(e)=>{
            let parentElement = e.currentTarget.parentNode;
            divgraph[2].classList.remove("hidden");
            buttonreponse(PDFgardien,parentElement);
            let all = document.querySelectorAll(".Dgardien .buttonreponse");
            all.forEach(all=>{
                var allmeta = all.getAttribute("meta-reponse");
                disablebutton(allmeta,all);
            })
                                    
            var reponse14 = [json["Vitality"][0]["Compo"][0]["Scrub Killa"][0]["Semi_final"][0]["Save"],json["Vitality"][0]["Compo"][0]["Fairy peak"][0]["Semi_final"][0]["Save"],json["Vitality"][0]["Compo"][0]["Kaydop"][0]["Semi_final"][0]["Save"]];
            var joueur14 = ["Scrub Killa","Fairy Peak","Kaydop"];
            
            creadiv(3, divgraph[2], reponse14, joueur14);         
        })
    })
//14
    PDFscore.forEach(PDFscore=>{
        PDFscore.addEventListener(("click"),(e)=>{
            let parentElement = e.currentTarget.parentNode;
            divgraph[3].classList.remove("hidden");
            buttonreponse(PDFscore,parentElement);
            let all = document.querySelectorAll(".score .buttonreponse");
            all.forEach(all=>{
                var allmeta = all.getAttribute("meta-reponse");
                disablebutton(allmeta,all);
            })
                                    
            var reponse15 = [json["Vitality"][0]["Stats"][0]["Semi_final"][0]["General"][0]["Score-team"],json["Dignitas"][0]["Stats"][0]["Semi_final"][0]["General"][0]["Score-team"],json["NRG"][0]["Stats"][0]["Semi_final"][0]["General"][0]["Score-team"]];
            var joueur15 = ["Renault Vitality","Dignitas","NRG Esports"];
            
            creadiv(3, divgraph[3], reponse15, joueur15); 

        })
    })
//15
    PDFtireur.forEach(PDFtireur=>{
        PDFtireur.addEventListener(("click"),(e)=>{
            let parentElement = e.currentTarget.parentNode;
            divgraph[4].classList.remove("hidden");
            buttonreponse(PDFtireur,parentElement);
            let all = document.querySelectorAll(".Dtireur .buttonreponse");
            all.forEach(all=>{
                var allmeta = all.getAttribute("meta-reponse");
                disablebutton(allmeta,all);
            })
                                    
            var reponse16 = [json["Dignitas"][0]["Compo"][0]["AztraL"][0]["Semi_final"][0]["Shot"],json["Vitality"][0]["Compo"][0]["Scrub Killa"][0]["Semi_final"][0]["Shot"],json["NRG"][0]["Compo"][0]["GarrettG"][0]["Semi_final"][0]["Shot"]];
            var joueur16 = ["Aztral", "Scrub Killa","GarrettG"];
            
            creadiv(3, divgraph[4], reponse16, joueur16); 
        })
    })
});

var curseur = document.querySelector(".curseur");
var curseurimage = document.querySelector(".curseurimg");

var shopselect = document.querySelectorAll(".shop__select");

var prixcurseur = 0;
var logo;

var montantjeton = document.querySelector(".jeton");
var jeton = localStorage.getItem("Jetons");
if(jeton===null){
	jeton = 15;
	localStorage.setItem("Jetons",15);
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
if(cliquer===null){   
    cliquer = "normal";
    localStorage.setItem("clique","normal");
}
if(logoLast===null){   
    logoLast="url('assets/images/curseur.svg')";
    localStorage.setItem("logolast","url('assets/images/curseur.svg')");
}

console.log("Last curseur :"+cliquer+", Last Logo :"+logoLast+", Vitality :"+vitalityEtat+", NRG :"+nrgEtat+", SSG :"+ssgEtat+", Dignitas :"+dignitasEtat+", veloce :"+veloceEtat+", pk :"+pkEtat+", reciprocity :"+reciprocityEtat+", renegades :"+renegadesEtat+", eunited :"+eunitedEtat+", Lowkey :"+lowkeyEtat+", havoc :"+havocEtat+", sins :"+sinsEtat);

//--- Reset shop ligne 68 et 92 de mon code
if(curseur){
	window.addEventListener(("mousemove"),(e)=>{
		curseur.setAttribute("style",'top:'+(e.pageY)+"px; left:"+(e.pageX)+"px;");
	})

	//---petit prob quand tu joue avec la barre
}

function ButtonClassDebloquage(button, div){
	div.classList.add("acheter");
	div.classList.remove("bloquer");
	button.innerHTML="Acheté";
}

function resetButton(){
	shopselect.forEach(shopselect=>{
		if(shopselect.classList.contains("acheter")){
			shopselect.children[2].innerHTML="Acheté";
		}
		shopselect.classList.remove("shop__select--pick");
	})
}
 
function DebloquerCurseur(shopselect,logo,prixcurseur,metacurseur,buttonChild){  
	resetButton();
	if(shopselect.classList.contains("bloquer") && jeton >= prixcurseur ){
		curseurimage.style.backgroundImage=logo;
		jeton = jeton-prixcurseur;
		montantjeton.innerHTML = ""+jeton+"";
		ButtonClassDebloquage(buttonChild,shopselect);
		localStorage.setItem("logolast",logo);
		localStorage.setItem("Jetons",jeton);
		localStorage.setItem(""+metacurseur+"",true);
		localStorage.setItem("clique",""+metacurseur+"");
	}else if(shopselect.classList.contains("acheter")){
		curseurimage.style.backgroundImage=logo;
		localStorage.setItem("logolast",logo);
		localStorage.setItem("clique",""+metacurseur+"");
	}else{
		alert("pas assez de jetons");
	}
	if(!shopselect.classList.contains("bloquer")){
		buttonChild.innerHTML="Equipé";
	}
}

function imageLocalStorage(button,shopselect){
	curseurimage.style.backgroundImage=logoLast;
    shopselect.classList.add("shop__select--pick");
	button.innerHTML=("Equipé");
}





shopselect.forEach(shopselect=>{
	var  metacurseur = shopselect.getAttribute("meta-cursor");
	shopselect.addEventListener(("click"),(e)=>{   
		let buttonChild = e.currentTarget.children[2];
		console.log(metacurseur);
		if(metacurseur=="normal"){
			localStorage.setItem("clique","normal");
			curseurimage.style.backgroundImage="url('assets/images/curseur.svg')";
			localStorage.setItem("logolast","url('assets/images/curseur.svg')");
			resetButton();
			buttonChild.innerHTML="Equipé"
		}else if(metacurseur=="vitality"){
			logo = "url('assets/images/curseur_vitality.svg')";
			prixcurseur = 30;
			DebloquerCurseur(shopselect,logo,prixcurseur,metacurseur,buttonChild);
		}else if(metacurseur=="nrg"){
			logo = "url('assets/images/curseur_nrg.svg')";
			prixcurseur = 30;
			DebloquerCurseur(shopselect,logo,prixcurseur,metacurseur,buttonChild);
		}else if(metacurseur=="ssg"){
			logo = "url('assets/images/curseur_spacestation.svg')";
			prixcurseur = 30;
			DebloquerCurseur(shopselect,logo,prixcurseur,metacurseur,buttonChild);
		}else if(metacurseur=="dignitas"){
			logo = "url('assets/images/curseur_dignitas.svg')";
			prixcurseur = 30;
			DebloquerCurseur(shopselect,logo,prixcurseur,metacurseur,buttonChild);
		}else if(metacurseur=="veloce"){
			logo = "url('assets/images/curseur_veloce.svg')";
			prixcurseur = 25;
			DebloquerCurseur(shopselect,logo,prixcurseur,metacurseur,buttonChild);
		}else if(metacurseur=="pk"){
			logo = "url('assets/images/curseur_knights.svg')";
            prixcurseur = 25;
            DebloquerCurseur(shopselect,logo,prixcurseur,metacurseur,buttonChild);
        }else if(metacurseur=="reciprocity"){
			logo = "url('assets/images/curseur_reciprocity.svg')";
			prixcurseur = 25;
			DebloquerCurseur(shopselect,logo,prixcurseur,metacurseur,buttonChild);
		}else if(metacurseur=="renegades"){
			logo = "url('assets/images/curseur_renegades.svg')";
			prixcurseur = 25;
			DebloquerCurseur(shopselect,logo,prixcurseur,metacurseur,buttonChild);
		}else if(metacurseur=="eunited"){
			logo = "url('assets/images/curseur_eunited.svg')";
			prixcurseur = 15;
			DebloquerCurseur(shopselect,logo,prixcurseur,metacurseur,buttonChild);
		}else if(metacurseur=="low"){
			logo = "url('assets/images/curseur_lowkey.svg')";
			prixcurseur = 15;
			DebloquerCurseur(shopselect,logo,prixcurseur,metacurseur,buttonChild);
		}else if(metacurseur=="havoc"){
			logo = "url('assets/images/curseur_havoc.svg')";
			prixcurseur = 15;
			DebloquerCurseur(shopselect,logo,prixcurseur,metacurseur,buttonChild);
		}else if(metacurseur=="sins"){
			logo = "url('assets/images/curseur_sins.svg')";
			prixcurseur = 15;
			DebloquerCurseur(shopselect,logo,prixcurseur,metacurseur,buttonChild);
		}
		
	e.currentTarget.classList.add("shop__select--pick");
	})
	if(metacurseur==="normal"){
		curseurimage.style.backgroundImage="url('assets/images/curseur.svg')";
		shopselect.children[2].innerHTML="Acheté";
		if(cliquer==="normal"){
			shopselect.children[2].innerHTML="Equipé";
            shopselect.classList.add("shop__select--pick");
		}
	}
	else if(metacurseur==="vitality" && vitalityEtat==="true"){
		ButtonClassDebloquage(shopselect.children[2], shopselect);
		if(cliquer ==="vitality"){
            imageLocalStorage(shopselect.children[2], shopselect);
		}
	}
	else if(metacurseur==="nrg" && nrgEtat==="true"){
		ButtonClassDebloquage(shopselect.children[2], shopselect);
        if(cliquer ==="nrg"){
            imageLocalStorage(shopselect.children[2], shopselect);
        }
    }else if(metacurseur==="ssg" && ssgEtat==="true"){
		ButtonClassDebloquage(shopselect.children[2], shopselect);
        if(cliquer ==="ssg"){
            imageLocalStorage(shopselect.children[2], shopselect);
        }
    }else if(metacurseur==="dignitas" && dignitasEtat==="true"){
		ButtonClassDebloquage(shopselect.children[2], shopselect);
        if(cliquer ==="dignitas"){
            imageLocalStorage(shopselect.children[2], shopselect);
        }
    }
	else if(metacurseur==="veloce" && veloceEtat==="true"){
		ButtonClassDebloquage(shopselect.children[2], shopselect);
        if(cliquer ==="veloce"){
            imageLocalStorage(shopselect.children[2], shopselect);
        }
    }else if(metacurseur==="pk" && pkEtat==="true"){
		ButtonClassDebloquage(shopselect.children[2], shopselect);
    	if(cliquer ==="pk"){
            imageLocalStorage(shopselect.children[2], shopselect);
        	}
    }else if(metacurseur==="reciprocity" && reciprocityEtat==="true"){
		ButtonClassDebloquage(shopselect.children[2], shopselect);
        if(cliquer ==="reciprocity"){
            imageLocalStorage(shopselect.children[2], shopselect);
        }
    }else if(metacurseur==="renegades" && renegadesEtat==="true"){
		ButtonClassDebloquage(shopselect.children[2], shopselect);
        if(cliquer ==="renegades"){
            imageLocalStorage(shopselect.children[2], shopselect);
        }
    }else if(metacurseur==="eunited" && eunitedEtat==="true"){
		ButtonClassDebloquage(shopselect.children[2], shopselect);
        if(cliquer ==="eunited"){
            imageLocalStorage(shopselect.children[2], shopselect);
        }
    }else if(metacurseur==="low" && lowkeyEtat==="true"){
		ButtonClassDebloquage(shopselect.children[2], shopselect);
        if(cliquer ==="low"){
            imageLocalStorage(shopselect.children[2], shopselect);
        }
    }else if(metacurseur==="havoc" && havocEtat==="true"){
		ButtonClassDebloquage(shopselect.children[2], shopselect);
        if(cliquer ==="havoc"){
            imageLocalStorage(shopselect.children[2], shopselect);
        }
    }else if(metacurseur==="sins" && sinsEtat==="true"){
		ButtonClassDebloquage(shopselect.children[2], shopselect);
        if(cliquer ==="sins"){
            imageLocalStorage(shopselect.children[2], shopselect);
        }
    }
})

if(curseurimage){
    if(cliquer ==="normal" || cliquer ===null){
        curseurimage.style.backgroundImage=logoLast;
    }else if(cliquer ==="vitality" && vitalityEtat==="true"){
        curseurimage.style.backgroundImage=logoLast;
    }else if(cliquer==="nrg" && nrgEtat==="true"){
        curseurimage.style.backgroundImage=logoLast;
    }else if(cliquer==="ssg" && ssgEtat==="true"){
        curseurimage.style.backgroundImage=logoLast;
    }else if(cliquer==="dignitas" && dignitasEtat==="true"){
        curseurimage.style.backgroundImage=logoLast;
    }else if(cliquer==="veloce" && veloceEtat==="true"){
        curseurimage.style.backgroundImage=logoLast;
    }else if(cliquer==="pk" && pkEtat==="true"){
        curseurimage.style.backgroundImage=logoLast;
    }else if(cliquer==="reciprocity" && reciprocityEtat==="true"){
        curseurimage.style.backgroundImage=logoLast;
    }else if(cliquer==="renegades" && renegadesEtat==="true"){
        curseurimage.style.backgroundImage=logoLast;
    }else if(cliquer==="eunited" && eunitedEtat==="true"){
        curseurimage.style.backgroundImage=logoLast;
    }else if(cliquer==="low" && lowkeyEtat==="true"){
        curseurimage.style.backgroundImage=logoLast;
    }else if(cliquer==="havoc" && havocEtat==="true"){
        curseurimage.style.backgroundImage=logoLast;
    }else if(cliquer==="sins" && sinsEtat==="true"){
        curseurimage.style.backgroundImage=logoLast;
    }
}

var reset = document.querySelector(".reset")
if(reset){
    reset.addEventListener(("click"),(e)=>{
        localStorage.clear();
        window.location ="shop.html";
    })
}
