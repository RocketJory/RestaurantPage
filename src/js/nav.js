import "./../css/nav.css";

import {menuElem} from "./../js/menu.js";
import {homeElem} from "./../js/home.js";
import {aboutElem} from "./../js/about.js";
import {contactElem} from "./../js/contact.js";

export const navBar = document.getElementById("navbar");

// The various menu buttons
const homeBtn = document.getElementById("nav-home");
const menuBtn = document.getElementById("nav-menu");
const contactBtn = document.getElementById("nav-contact");
const aboutBtn = document.getElementById("nav-about");
export const dropBtn = document.getElementById('menu-btn');

const navBtns = [homeBtn, menuBtn, contactBtn, aboutBtn];
const pageElems = [homeElem, menuElem, contactElem, aboutElem];

/**
 * toggle the display of the responsive navigation bar, triggered by the hamburger menu
 */
let dropNav = function() {
    navBar.className = (navBar.className === "topnav") ? "topnav responsive" : "topnav";
}

/**
 * Shows a specific page of content matching the page id, hides all others
 * 
 * @param {*} pageId the id of the tag containing the content to display
 */
let showPage = function(pageId) {
    pageElems.forEach((elem) => {
        elem.style.display = (elem.id === pageId) ? 'block' : 'none';
    });
    dropNav();
}

homeBtn.addEventListener("click", (e) => { showPage("home-page") });
menuBtn.addEventListener("click", (e) => { showPage("menu-page") });
contactBtn.addEventListener("click", (e) => { showPage("contact-page") });
aboutBtn.addEventListener("click", (e) => { showPage("about-page") });

dropBtn.addEventListener("click", (e) => { dropNav(); });