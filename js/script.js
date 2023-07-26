const headerTopMenuItems = dqsa(".header__top-menu ul li");
let headerTopMenuPosition = "top";

const headerBottomMenuItems = dqsa(".header__bottom-menu > ul > li > span");
let headerBottomMenuItemsFunc = false;

const car = {
	names: ["ACURA", "ALFA ROMEO", "AUDI", "BMW", "CHERY", "CHEVROLET", "CITROEN", "DACIA", "DAEWOO", "DAIHATSU", "FIAT", "FORD", "GEELY", "HONDA", "HUMMER", "HYUNDAI", "INFINITI", "JEEP", "KIA", "LADA", "LAND ROVER", "LEXUS", "MAZDA", "MERCEDES-BENZ", "MITSUBISHI", "MOSKVICH", "NISSAN", "OPEL", "PEUGEOT", "PORSCHE", "RENAULT", "SEAT", "SKODA", "SMART", "SSANGYONG", "SUBARU", "SUZUKI", "TOYOTA", "VOLVO", "VW"],
	models: ["100", "200", "80", "90", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "Allroad", "Cabriolet", "Coupe", "Q3", "Q5", "Q7", "Quattro", "R8", "Tt", "V8"],
	years: ["2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002"],
	engine: {
		diesel: ["2.2", "2.3"],
		petrol: ["1.2", "1.3"],
	},
	modification: [
		{
			name: "2.2 quattro",
			horsepower: "159 к.с.",
			type: "Універсал",
			years: "1989 (вересень) - 1991 (грудень)",
			enginePower: "Потужність двигуна 117кВт",
			code: "Код MC",
			cylinders: "5 циліндрів",
		},
		{
			name: "2.2 Turbo",
			horsepower: "165 к.с.",
			type: "Універсал",
			years: "1985 (вересень) - 1990 (грудень)",
			enginePower: "Потужність двигуна 121кВт",
			code: "Код MC",
			cylinders: "6 циліндрів",
		},
		{
			name: "2.2 Turbo quattro",
			horsepower: "200 к.с.",
			type: "Універсал",
			years: "1988 (вересень) - 1991 (грудень)",
			enginePower: "Потужність двигуна 147кВт",
			code: "Код MC",
			cylinders: "5 циліндрів",
		},
	],
}



function dqs(cssSelector) {
	return document.querySelector(cssSelector);
}
function dqsa(cssSelector) {
	return document.querySelectorAll(cssSelector);
}



function moveHeaderTopMenu(where) {
		
	let ul;

	if (where == "to bottom") {
		ul = ".header__bottom-menu ul";
		headerTopMenuPosition = "bottom";
	} else if (where == "to top") {
		ul = ".header__top-menu ul";
		headerTopMenuPosition = "top";
	} else {
		return;
	}

	headerTopMenuItems.forEach(li => {
		dqs(ul).appendChild(li);
	});
}

function checkMediaHeaderTopMenu() {
	if (window.matchMedia("(max-width: 991.5px)").matches && headerTopMenuPosition == "top") {
		moveHeaderTopMenu("to bottom");
	} else if (!window.matchMedia("(max-width: 991.5px)").matches && headerTopMenuPosition == "bottom") {
		moveHeaderTopMenu("to top");
	}
}


function burgerMenu() {
	dqs(".header__bottom-menu").classList.toggle("header__bottom-menu_open");
}


function onClickAttrsToHeaderBottomMenu(action) {

	let func;

	if (action == "add") {
		func = "openHeaderBottomSubMenu(this);";
	} else if (action == "remove") {
		func = "";
	}

	headerBottomMenuItems.forEach(span => {
		span.setAttribute('onClick', func);
	}); 
}

function checkMediaHeaderBottomMenu() {
	if (window.matchMedia("(max-width: 991.5px)").matches && !headerBottomMenuItemsFunc) {
		onClickAttrsToHeaderBottomMenu("add");
		headerBottomMenuItemsFunc = true;
	} else if (!window.matchMedia("(max-width: 991.5px)").matches && headerBottomMenuItemsFunc) {
		onClickAttrsToHeaderBottomMenu("remove");
		headerBottomMenuItemsFunc = false;
	}
}

function openHeaderBottomSubMenu(elem) {
	elem.parentNode.classList.toggle("open");
}

function closeHeaderAd() {
	dqs(".header__ad").style.gridTemplateRows = "0fr";
}

function switchTabs1(tabNumber) {
	// tabs
	dqs(`.car-choice__tabs1-content.open`).classList.remove("open");
	dqs(`.car-choice__tabs1-content:nth-child(${tabNumber + 1})`).classList.add("open");

	// buttons
	dqs(`.car-choice__tabs1-btns button.active`).classList.remove("active");
	dqs(`.car-choice__tabs1-btns button:nth-child(${tabNumber})`).classList.add("active");
}

function swithTabs2(tabNumber, elem) {

	if (elem.parentNode.classList.contains("car-choice__tabs2-content") || elem.parentNode.parentNode.classList.contains("car-choice__tabs2-content")) {
		
		// reset tabs
		let i = 5;
		while (i >= tabNumber) {
			let btn = dqs(`.car-choice__tabs2-btns button:nth-child(${i})`);
			btn.disabled = true;
			btn.textContent = btn.dataset.text;
			
			i = i - 1;
		}

		// rename tab button
		dqs(`.car-choice__tabs2-btns button:nth-child(${tabNumber - 1})`).textContent = elem.textContent;
	
	}

	function getNewBtns(array) {
		
		let btnsHTML = "";

		array.forEach(arrayItem => {
			btnsHTML += `<button onClick="swithTabs2(${tabNumber + 1}, this);">${arrayItem}</button>`;
		});

		return btnsHTML;
	}

	let newHTML = "";

	if (tabNumber == 1) {
		newHTML = getNewBtns(car.names);
	} else if (tabNumber == 2) {
		newHTML = getNewBtns(car.models);
	} else if (tabNumber == 3) {
		newHTML = getNewBtns(car.years);
	} else if (tabNumber == 4) {

		if (car.engine.petrol.length !== 0) {
			newHTML += `<div>
							<p>Бензин</p>
							${getNewBtns(car.engine.petrol)}
						</div>`;
		}

		if (car.engine.diesel.length !== 0) {
			newHTML += `<div>
							<p>Дизель</p>
							${getNewBtns(car.engine.diesel)}
						</div>`;
		}
	} else if (tabNumber == 5) {
		car.modification.forEach(mod => {
			newHTML += `<button>
							<p>${mod.name}</p>
							<span>${mod.horsepower}</span>
							<span>${mod.type}</span>
							<div>
								<span>${mod.years}</span>
								<span>${mod.enginePower}</span>
								<span>${mod.code}</span>
								<span>${mod.cylinders}</span>
							</div>
						</button>`;
		});
	}

	if (tabNumber == 1 || tabNumber == 2 || tabNumber == 3) {
		if (!dqs(".car-choice__tabs2-content").classList.contains("car-choice__tabs2-content_table6")) {
			dqs(".car-choice__tabs2-content").classList.remove("car-choice__tabs2-content_engine");
			dqs(".car-choice__tabs2-content").classList.remove("car-choice__tabs2-content_mod");
			dqs(".car-choice__tabs2-content").classList.add("car-choice__tabs2-content_table6");
		}
	} else if (tabNumber == 4) {
		if (!dqs(".car-choice__tabs2-content").classList.contains("car-choice__tabs2-content_engine")) {
			dqs(".car-choice__tabs2-content").classList.remove("car-choice__tabs2-content_table6");
			dqs(".car-choice__tabs2-content").classList.remove("car-choice__tabs2-content_mod");
			dqs(".car-choice__tabs2-content").classList.add("car-choice__tabs2-content_engine");
		}
	} else if (tabNumber == 5) {
		if (!dqs(".car-choice__tabs2-content").classList.contains("car-choice__tabs2-content_mod")) {
			dqs(".car-choice__tabs2-content").classList.remove("car-choice__tabs2-content_table6");
			dqs(".car-choice__tabs2-content").classList.remove("car-choice__tabs2-content_engine");
			dqs(".car-choice__tabs2-content").classList.add("car-choice__tabs2-content_mod");
		}
	}

	dqs(".car-choice__tabs2-content").innerHTML = newHTML;
	dqs(`.car-choice__tabs2-btns button:nth-child(${tabNumber})`).disabled = false;
}



// Event Listeners

window.addEventListener("resize", event => {

	checkMediaHeaderTopMenu();
	checkMediaHeaderBottomMenu();
});


window.addEventListener('load', () => {
	
	checkMediaHeaderTopMenu();
	checkMediaHeaderBottomMenu();
});