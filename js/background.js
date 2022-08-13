const imgNums = 14;

document.querySelector(
  "body"
).style.backgroundImage = `url(backgrounds/${Math.floor(
  Math.random() * imgNums + 1
)}.jpg)`;
