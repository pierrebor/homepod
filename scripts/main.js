const leftButton = document.querySelector('.left')
const rightButton = document.querySelector('.right')
const slider = document.querySelector('.sliderContainer')
const sliderImages = document.querySelectorAll('.sliderContainer img')
const step = 670 // definit le décalage
let pos = 0 // définit la position en cours.
let action



let dots = document.querySelectorAll('li.slide-button');


for(let i = 0; i< dots.length; i++){
    dots[i].addEventListener(
      'click',
      function (){
        pos = this.getAttribute('data-pos');
        setPosition(pos)
    }
  )
}

playSlider()

leftButton.addEventListener('click',leftSlide)
rightButton.addEventListener('click',rightSlide)

function leftSlide(){
  pos--
  if(pos<0){
    pos=sliderImages.length-1
  }
  setPosition(pos)
}

function rightSlide(){
  pos++
  if(pos>=sliderImages.length)
  {
    pos=0
  }
  setPosition(pos)
}

function setPosition(pos)
{
  document.querySelector('li.current').classList.remove('current')
  dots[pos].classList.add('current')
  slider.style.left = -pos*step+'px' // 960px
}



function stopSlider()
{
  clearInterval(action)
}


function playSlider()
{
  action = rightSlide(
    function()
    {
      pos = (pos+1)%sliderImages.length
      setPosition(pos)
    }
  )
  action = leftSlide(
    function()
    {
      pos = (pos+1)%sliderImages.length
      setPosition(pos)
    }
  )
}
