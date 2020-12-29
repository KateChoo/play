//選擇照片
const slides = document.querySelectorAll('.carousel-item')
//照片位置
let slidePosition = 0 
let totalSlides = slides.length
const prevBtn = document.querySelector('#carousel-button-prev')
const nextBtn = document.querySelector('#carousel-button-next')



const moveNext = ()=>{
  hideAllSlides();
  if(slidePosition === slides.length -1){   /*2=3-1最後一張*/
    slidePosition = 0   /*回到第一張*/
  }else{
    slidePosition++  /*最後一張也不能再加了*/
  };
  slides[slidePosition].classList.add('carousel-item-visible')
}

const movePrev = ()=>{
  hideAllSlides();
  if(slidePosition === 0){   /*第一張*/
    slidePosition = totalSlides -1; /*2=3-1最後一張*/
  }else{
    slidePosition--
  };
  slides[slidePosition].classList.add('carousel-item-visible')
}


const hideAllSlides = ()=> {
 for (let slide of slides){
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}


prevBtn.addEventListener('click', movePrev)
nextBtn.addEventListener('click', moveNext)