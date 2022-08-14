const clockTitle = document.getElementById("clock");

function getTime() {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const ampm = hour < 12 ? "AM" : "PM";

  clockTitle.innerText = `${hmsFormat(hour % 12)}:${hmsFormat(min)}:${hmsFormat(
    sec
  )} ${ampm}`;
}

function hmsFormat(time) {
  return String(time).padStart(2, "0");
}

getTime();
setInterval(getTime, 1000);
