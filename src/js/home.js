import "./../css/carousel.css";
import "./../css/home.css";

export const homeElem = document.getElementById("home-page");

export const carousel = document.getElementById("carousel");

const img1 = document.createElement('div');
img1.className = 'card_part card_part-one';

const img2 = document.createElement('div');
img2.className = 'card_part card_part-two';

const img3 = document.createElement('div');
img3.className = 'card_part card_part-three';

carousel.querySelector(".card").append(img1, img2, img3);

