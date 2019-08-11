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
