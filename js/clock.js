let myname = prompt();

let myName = document.querySelector("#myName");

myName.innerHTML = `${myname}`;

function showTime() {
  let timeHMS = new Date();
  let Hour = timeHMS.getHours();
  let Minute = timeHMS.getMinutes();
  let Second = timeHMS.getSeconds();

  if (Hour < 10) {
    Hour = "0" + Hour;
  } else if (Minute < 10) {
    Minute = "0" + Minute;
  } else if (Second < 10) {
    Second = "0" + Second;
  }

  let day = new Date();
  let weekDay = day.getDay();

  weekDay = (weekDay = 1)
    ? "Pazartesi."
    : (weekDay = 2)
    ? "Salı."
    : (weekDay = 3)
    ? "Çarşamba."
    : (weekDay = 4)
    ? "Perşembe."
    : (weekDay = 5)
    ? "Cuma."
    : (weekDay = 6)
    ? "Cumartesi."
    : (weekDay = 0)
    ? "Pazar."
    : "";

  let date = new Date();
  let dateDay = new Date().getDate();
  let dateMonth = new Date().getMonth() + 1;
  let dateYear = new Date().getFullYear();

  if (dateDay < 10) {
    dateDay = "0" + dateDay;
  } else if (dateMonth < 10) {
    dateMonth = "0" + dateMonth;
  }

  document.querySelector(".clock").innerHTML =
    Hour + ":" + Minute + ":" + Second;
  document.querySelector(".clock").innerHTML += ` <b>${weekDay}</b> `;
  document.querySelector(".clock").innerHTML +=
    dateMonth + "." + dateDay + "." + dateYear;
}
setInterval(showTime);
