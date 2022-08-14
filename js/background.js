const imgNums = 11;
const background = document.getElementById("background");
const imgStr = `backgrounds/${Math.floor(Math.random() * imgNums + 1)}.jpg`;

background.style.backgroundImage = `url(${imgStr})`;
