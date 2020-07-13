// Menu open/close button
// Create event handler
let navHandler = {
	navIsClosed: true,
	handleEvent() {
		let navbar = document.getElementById("hero__navbar");

		if (this.navIsClosed) {
			// Expand the navbar
			navbar.style.width = "100%";
			navbar.style.paddingRight = "0.5rem";
			this.navIsClosed = false;
		}
		else {
			// Close the navbar
			navbar.style.width = "0px";
			navbar.style.paddingRight = "0rem";
			this.navIsClosed = true;
		}
	}
}

let btnHeroNav = document.getElementById("hero__nav-div--btn");
btnHeroNav.addEventListener("click", navHandler);


// Email button
function emailHandler() {
	// This obfuscation is for protection against spam bots
	let eml = "ma" + "il" + "to" + ": " + "Gam" + "lie"
		+ "lUr" + "lan" + "da." + "Free" + "lanc" + "ing"
		+ "@g" + "mai" + "l.com";

	window.open(eml);
}

let btnContactEmail = document.getElementById("contact__btn-email");
btnContactEmail.addEventListener("click", emailHandler);


// Phone button
function phoneHandler() {
	// This obfuscation is for protection against spam bots
	let phn = "te" + "l:6" + "61" + "34" + "785" + "48";

	window.open(phn);
}

let btnContactPhone = document.getElementById("contact__btn-phone");
btnContactPhone.addEventListener("click", phoneHandler);
