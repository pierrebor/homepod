const square = document.querySelector('.square')
const square2 = document.querySelector('.square2')
const img_choice = document.querySelector('.change_images')


square.addEventListener(
  'click',
function square()
{
  img_choice.src="images/homepodx2.jpg"
},
false
)
square2.addEventListener(
  'click',
function square()
{
  img_choice.src="images/homepodx2Inverser.png"
},
false
)
