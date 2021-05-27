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
    var reponse = document.querySelectorAll(".reponse");

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
            if(counterValue>1){
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


    PGbuteur.forEach(PGbuteur=>{
        PGbuteur.addEventListener(("click"),(e)=>{
            let parentElement = e.currentTarget.parentNode;
            buttonreponse(PGbuteur,parentElement);
            reponse[0].innerHTML="Arsenal : "+json["Spacestation"][0]["Compo"][0]["Arsenal"][0]["General"][0]["Goals"]+", Yukeo : "+json["Dignitas"][0]["Compo"][0]["Yukeo"][0]["General"][0]["Goals"]+", Turbopolsa : "+json["NRG"][0]["Compo"][0]["Turbopolsa"][0]["General"][0]["Goals"];
        })
    })

    PGassists.forEach(PGassists=>{
        PGassists.addEventListener(("click"),(e)=>{
            let parentElement = e.currentTarget.parentNode;
            buttonreponse(PGassists,parentElement);
            reponse[1].innerHTML="jstn. : "+json["NRG"][0]["Compo"][0]["jstn."][0]["General"][0]["Assist"]+", Sypical : "+json["Spacestation"][0]["Compo"][0]["Sypical"][0]["General"][0]["Assist"]+", ViolentPanda : "+json["Dignitas"][0]["Compo"][0]["Violentpanda"][0]["General"][0]["Assist"];
        })
    })

    PGgardien.forEach(PGgardien=>{
        PGgardien.addEventListener(("click"),(e)=>{
            let parentElement = e.currentTarget.parentNode;
            buttonreponse(PGgardien,parentElement);
            reponse[2].innerHTML="Scrub Killa : "+json["Vitality"][0]["Compo"][0]["Scrub Killa"][0]["General"][0]["Save"]+", Fairy Peak : "+json["Vitality"][0]["Compo"][0]["Fairy peak"][0]["General"][0]["Save"]+", Kaydop : "+json["Vitality"][0]["Compo"][0]["Kaydop"][0]["General"][0]["Save"];
        })
    })

    PGscore.forEach(PGscore=>{
        PGscore.addEventListener(("click"),(e)=>{
            let parentElement = e.currentTarget.parentNode;
            buttonreponse(PGscore,parentElement);
            reponse[3].innerHTML="Renault Vitality : "+json["Vitality"][0]["Stats"][0]["General"][0]["Score"]+", NRG : "+json["NRG"][0]["Stats"][0]["General"][0]["Score"]+", Spacestation Gaming : "+json["Spacestation"][0]["Stats"][0]["General"][0]["Score"];
        })
    })

    PGprix.forEach(PGprix=>{
        PGprix.addEventListener(("click"),(e)=>{
            let parentElement = e.currentTarget.parentNode;
            buttonreponse(PGprix,parentElement);
            reponse[4].innerHTML="Championnat de Rocket League : 529.5K $, Roland Garros Simple Homme 2019 : 2.8M $ , Ligue des Champions de Water Polo 2019 : 63k $";
        })
    })

    PFbuteur.forEach(PFbuteur=>{
        PFbuteur.addEventListener(("click"),(e)=>{
            let parentElement = e.currentTarget.parentNode;
            buttonreponse(PFbuteur,parentElement);
            reponse[5].innerHTML="Turbopolsa : "+json["NRG"][0]["Compo"][0]["Turbopolsa"][0]["Final"][0]["Goals"]+", Kaydop : "+json["Vitality"][0]["Compo"][0]["Kaydop"][0]["Final"][0]["Goals"]+", jstn. : "+json["NRG"][0]["Compo"][0]["jstn."][0]["Final"][0]["Goals"];
        
        })
    })

    PFbuteur.forEach(PFbuteur=>{
        PFbuteur.addEventListener(("click"),(e)=>{
            let parentElement = e.currentTarget.parentNode;
            buttonreponse(PFbuteur,parentElement);
            reponse[5].innerHTML="Turbopolsa : "+json["NRG"][0]["Compo"][0]["Turbopolsa"][0]["Final"][0]["Goals"]+", Kaydop : "+json["Vitality"][0]["Compo"][0]["Kaydop"][0]["Final"][0]["Goals"]+", jstn. : "+json["NRG"][0]["Compo"][0]["jstn."][0]["Final"][0]["Goals"];
        
        })
    })

    PFassists.forEach(PFassists=>{
        PFassists.addEventListener(("click"),(e)=>{
            let parentElement = e.currentTarget.parentNode;
            buttonreponse(PFassists,parentElement);
            reponse[6].innerHTML="Turbopolsa : "+json["NRG"][0]["Compo"][0]["Turbopolsa"][0]["Final"][0]["Assist"]+", jstn. : "+json["NRG"][0]["Compo"][0]["jstn."][0]["Final"][0]["Assist"]+", Scrub Killa : "+json["Vitality"][0]["Compo"][0]["Scrub Killa"][0]["Final"][0]["Assist"];
        
        })
    })

    PFgardien.forEach(PFgardien=>{
        PFgardien.addEventListener(("click"),(e)=>{
            let parentElement = e.currentTarget.parentNode;
            buttonreponse(PFgardien,parentElement);
            reponse[7].innerHTML="Scrub Killa : "+json["Vitality"][0]["Compo"][0]["Scrub Killa"][0]["Final"][0]["Save"]+", jstn. : "+json["NRG"][0]["Compo"][0]["jstn."][0]["Final"][0]["Save"]+", Turbopolsa : "+json["NRG"][0]["Compo"][0]["Turbopolsa"][0]["Final"][0]["Save"];
        
        })
    })

    PFscore.forEach(PFscore=>{
        PFscore.addEventListener(("click"),(e)=>{
            let parentElement = e.currentTarget.parentNode;
            buttonreponse(PFscore,parentElement);
            reponse[8].innerHTML="NRG Esports : "+json["NRG"][0]["Stats"][0]["Final"][0]["General"][0]["Score-team"]+", Renault Vitality : "+json["Vitality"][0]["Stats"][0]["Final"][0]["General"][0]["Score-team"];
        
        })
    })
    
    PFtireur.forEach(PFtireur=>{
        PFtireur.addEventListener(("click"),(e)=>{
            let parentElement = e.currentTarget.parentNode;
            buttonreponse(PFtireur,parentElement);
            reponse[9].innerHTML="Kaydop : "+json["Vitality"][0]["Compo"][0]["Kaydop"][0]["Final"][0]["Shot"]+", GarrettG : "+json["NRG"][0]["Compo"][0]["GarrettG"][0]["Final"][0]["Shot"]+", jstn. : "+json["NRG"][0]["Compo"][0]["jstn."][0]["Final"][0]["Shot"];
        
        })
    })
    
    PDFbuteur.forEach(PDFbuteur=>{
        PDFbuteur.addEventListener(("click"),(e)=>{
            let parentElement = e.currentTarget.parentNode;
            buttonreponse(PDFbuteur,parentElement);
            reponse[10].innerHTML="Turbopolsa : "+json["NRG"][0]["Compo"][0]["Turbopolsa"][0]["Semi_final"][0]["Goals"]+", Fairy Peak : "+json["Vitality"][0]["Compo"][0]["Fairy peak"][0]["Semi_final"][0]["Goals"]+", Arsenal : "+json["Spacestation"][0]["Compo"][0]["Arsenal"][0]["Semi_final"][0]["Goals"];
        
        })
    })

    PDFassists.forEach(PDFassists=>{
        PDFassists.addEventListener(("click"),(e)=>{
            let parentElement = e.currentTarget.parentNode;
            buttonreponse(PDFassists,parentElement);
            reponse[11].innerHTML="jstn. : "+json["NRG"][0]["Compo"][0]["jstn."][0]["Semi_final"][0]["Assist"]+", GarrettG : "+json["NRG"][0]["Compo"][0]["GarrettG"][0]["Semi_final"][0]["Assist"]+", Scrub Killa : "+json["Vitality"][0]["Compo"][0]["Scrub Killa"][0]["Semi_final"][0]["Assist"];
        
        })
    })

    PDFgardien.forEach(PDFgardien=>{
        PDFgardien.addEventListener(("click"),(e)=>{
            let parentElement = e.currentTarget.parentNode;
            buttonreponse(PDFgardien,parentElement);
            reponse[12].innerHTML="Scrub Killa : "+json["Vitality"][0]["Compo"][0]["Scrub Killa"][0]["Semi_final"][0]["Save"]+", Fairy Peak : "+json["Vitality"][0]["Compo"][0]["Fairy peak"][0]["Semi_final"][0]["Save"]+", Kaydop : "+json["Vitality"][0]["Compo"][0]["Kaydop"][0]["Semi_final"][0]["Save"];
        
        })
    })

    PDFscore.forEach(PDFscore=>{
        PDFscore.addEventListener(("click"),(e)=>{
            let parentElement = e.currentTarget.parentNode;
            buttonreponse(PDFscore,parentElement);
            reponse[13].innerHTML="Renault Vitality : "+json["Vitality"][0]["Stats"][0]["Semi_final"][0]["General"][0]["Score-team"]+", Dignitas : "+json["Dignitas"][0]["Stats"][0]["Semi_final"][0]["General"][0]["Score-team"]+", NRG Esports : "+json["NRG"][0]["Stats"][0]["Semi_final"][0]["General"][0]["Score-team"];
        
        })
    })

    PDFtireur.forEach(PDFtireur=>{
        PDFtireur.addEventListener(("click"),(e)=>{
            let parentElement = e.currentTarget.parentNode;
            buttonreponse(PDFtireur,parentElement);
            reponse[14].innerHTML="Aztral : "+json["Dignitas"][0]["Compo"][0]["AztraL"][0]["Semi_final"][0]["Shot"]+", Scrub Killa : "+json["Vitality"][0]["Compo"][0]["Scrub Killa"][0]["Semi_final"][0]["Shot"]+", GarrettG : "+json["NRG"][0]["Compo"][0]["GarrettG"][0]["Semi_final"][0]["Shot"];
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