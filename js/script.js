const headerTopMenuItems = dqsa(".header__top-menu ul li");
let headerTopMenuPosition = "top";

const headerBottomMenuItems = dqsa(".header__bottom-menu > ul > li > span");
let headerBottomMenuItemsFunc = false;



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



// Event Listeners

window.addEventListener("resize", event => {

	checkMediaHeaderTopMenu();
	checkMediaHeaderBottomMenu();
});


window.addEventListener('load', () => {
	
	checkMediaHeaderTopMenu();
	checkMediaHeaderBottomMenu();
});