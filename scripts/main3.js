const blackButton = document.querySelector('.blackButton')
const whiteButton = document.querySelector('.whiteButton')
const img_choice = document.querySelector('.color_choice_img')

blackButton.addEventListener(
  'click',
  function blackButton()
  {
    img_choice.src="images/carHomePod.png"
  },
  false
)

whiteButton.addEventListener(
  'click',
  function whiteButton()
  {
    img_choice.src="images/carblanc2.png"
  },
  false
)
