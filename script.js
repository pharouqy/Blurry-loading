const bg = document.querySelector(".background");
const compteur = document.querySelector(".compteur > span");

let interv;

let i = 100;
function timerBlur() {
  i--;
  bg.style.filter = `blur(${i}px)`;
  compteur.innerHTML = `${i}%`;
  compteur.style.opacity = `${i / 100}`;
  console.log(i);
  if (i <= 0) {
    clearInterval(interv);
  }
}

bg.addEventListener("mouseover", (e) => {
  e.preventDefault;
  e.stopPropagation();
  interv = setInterval(timerBlur, 150);
});
