const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const indicators = document.querySelectorAll('.pianoKeys li')
const keys = document.querySelectorAll('.key')
// const fkeys = document.querySelectorAll('.fkey')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')
const allKeys = document.querySelectorAll('.pianoKeys li')
/*=====================================================================================*/ 
const whiteKall = document.querySelectorAll('.white')
const blackKall = document.querySelectorAll('.black')
const curtainNav = document.querySelector('.curtainNav')
/*=====================================================================================*/ 
const banner = document.querySelector('.pillar')
var red;
var green;
var blue;
var rgbColor;
const randomColor = ()=> {
  for (var i = 0; i <=10; i += 1) {
  red = Math.floor(Math.random() * 256 );
  green = Math.floor(Math.random() * 256 );
  blue = Math.floor(Math.random() * 256 );
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  // html += '<div style="background-color:' + rgbColor + '"></div>';
  return rgbColor;
  }
}
/*=====================================================================================*/ 

let bannerImgs = [
  'url(https://miro.medium.com/max/1800/1*bsxrX3ZkcyEpZNqbRP7uuw.jpeg)',
  'url(https://assets.classicfm.com/2013/39/the-most-iconic-images-ever-martha-argerich-with-claudio-abbado-1380811300-view-1.jpg)',
  'url(https://assets.classicfm.com/2012/31/verbier-festival-2012-argerich-1343993458-view-1.jpg)',
  'url(https://api.culture.pl/sites/default/files/images/imported/muzyka/portrety%20i%20instytucje/zimerman%20krystian%20portret/krystian_zimermanen_a.jpg)',
  'url(https://pbs.twimg.com/media/Dg2bx_AWsAATTA0.jpg)'
]
/*=====================================================================================*/
window.addEventListener('load', pressHint)
indicators.forEach(indi =>{
  indi.addEventListener('mouseenter',() => hintToggle(indi))
})
keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})
blackKall.forEach(black => {
  black.addEventListener('click', menuToggle)
})
whiteKall.forEach(white => {
  white.addEventListener('click', info)
})
/*=====================================================================================*/ 


function pressHint(){
  indicators[3].classList.add('pressHint')
  //indicators[3].style.background = randomColor()
  indicators[3].textContent = '按'
}
function hintToggle(indi){
  indicators[3].classList.remove('pressHint')
  //indicators[3].style.background = ''
  indicators[3].textContent = ''
  indi.style.background = randomColor()
  indi.addEventListener('mouseleave', ()=>{
    indi.style.background = ''
  })
  // indi.classList.add('hint');
  // indi.addEventListener('mouseleave', ()=>{
  //   indi.classList.remove('hint');
  // })
}
document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)
  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})
function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add('active');
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}

/*=====================================================================================*/ 

function menuToggle(){
  curtainNav.classList.toggle('active');
}
/*=====================================================================================*/ 

function info(){
  let randomIndex = Math.floor(Math.random()*bannerImgs.length);
  banner.style.backgroundImage = bannerImgs[randomIndex];
}






  