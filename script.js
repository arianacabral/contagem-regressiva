const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const year = document.getElementById("year");
const loading = document.getElementById("loading");

// dia de hoje
const today = new Date();
// console.log("today: ", today);

// ano atual
const current_year = today.getFullYear();
// console.log("current year: ", current_year);

// próximo ano
const next_year = current_year + 1;
// console.log("next year: ", next_year);

// dia de interesse, considerando o ano atual
const current_day = new Date(`June 12 ${current_year} 00:00:00`);

// dia de interesse, considerando o próximo ano 
const next_day = new Date(`June 12 ${next_year} 00:00:00`);

if(today > current_day){ // se o dia já passou, considerar a data do próximo ano

  day = next_day;

}else{ // se ainda não chegou a data  

  day = current_day;

}

const day_year = day.getFullYear();
console.log("day year: ", day_year);

function updateCountdown() {
  const currentTime = new Date();
  const difference = day - currentTime;
  const currentDays = Math.floor(difference / 1000 / 60 / 60 / 24);
  const currentHours = Math.floor(difference / 1000 / 60 / 60) % 24;
  const currentMinutes = Math.floor(difference / 1000 / 60) % 60;
  const currentSeconds = Math.floor(difference / 1000) % 60;
  days.innerText = currentDays;
  hours.innerText = currentHours < 10 ? "0" + currentHours : currentHours;
  minutes.innerText =
    currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;
  seconds.innerText =
    currentSeconds < 10 ? "0" + currentSeconds : currentSeconds;
}

setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
}, 1000);

setInterval(updateCountdown, 1000);

year.innerText = day_year;
