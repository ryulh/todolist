const imgNums = 7;
const background = document.getElementById("background");
const imgStr = `background/${Math.floor(Math.random() * imgNums + 1)}.jpg`;

background.style.backgroundImage = `url(${imgStr})`;
