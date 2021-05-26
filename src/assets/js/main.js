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

//fetch("http://julienma.be/projets/data.json").then(function(reponse){
//    return reponse.json();
//}).then(function(json){
//	console.log(json);
//});