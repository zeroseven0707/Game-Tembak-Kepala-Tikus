const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const scor = document.querySelector('.scor');
const poP = document.querySelector('.pop');
const audio = document.querySelector('.audio');

let tanahSebelumnya;
let selesai;
let skor;

function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomTanah(tanah) {
  const t = Math.floor(Math.random() * tanah.length);
  const tRandom = tanah[t];
  if (tRandom == tanahSebelumnya) {
    randomTanah(tanah);
  }
  tanahSebelumnya = tRandom;
  return tRandom;
}

function munculkanTikus() {
  audio.play();
  const tRandom = randomTanah(tanah);
  const wRandom = randomWaktu(400, 300);
  tRandom.classList.add('muncul');

  setTimeout(() => {
    if (!selesai) {
      munculkanTikus(tanah);
    }
    tRandom.classList.remove('muncul');
  }, wRandom);
}

function mulai() {
  selesai = false;
  skor = 0;
  scor.textContent = 0;
  munculkanTikus(tanah);
  setTimeout(() => {
    selesai = true;
  }, 15000);
}
function pukul() {
  skor++;
  scor.textContent = skor;
  poP.play();
  this.parentNode.classList.remove('muncul');
}

tikus.forEach((t) => {
  t.addEventListener('click', pukul);
});
