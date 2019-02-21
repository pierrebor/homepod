const font = document.querySelector('.font')
const font2 = document.querySelector('.font2')
const img_choice = document.querySelector('.change_images')


font.addEventListener(
  'click',
function font()
{
  img_choice.src="images/homepodx2.jpg"
},
false
)
font2.addEventListener(
  'click',
function font()
{
  img_choice.src="images/homepodx2Inverser.png"
},
false
)
