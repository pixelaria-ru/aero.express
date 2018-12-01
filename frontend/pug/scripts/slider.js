var
  imgSliderRoom = document.querySelectorAll('.slider-room img'),
  sliderNext = document.querySelector('.next'),
  sliderPrev = document.querySelector('.prev'),
  numImg = 0;


imgSliderRoom[numImg].style.opacity = 1;

sliderNext.addEventListener('click', nextImg);
function nextImg (){
  console.log(numImg)
  if(numImg < imgSliderRoom.length - 1 ){

    imgSliderRoom[numImg].style.opacity = 0;
    numImg++
    imgSliderRoom[numImg].style.opacity = 1;
  }
  else {
    imgSliderRoom[numImg].style.opacity = 0;
    numImg = 0

    numImg++
    imgSliderRoom[numImg].style.opacity = 1;
  }
}

sliderPrev.addEventListener('click', prevImg);
function prevImg (){
  console.log(numImg)
  if(numImg <= imgSliderRoom.length - 1 && numImg > 0){

    imgSliderRoom[numImg].style.opacity = 0;
    numImg--
    imgSliderRoom[numImg].style.opacity = 1;
  }
  else if(numImg = 0 ){
    numImg++
  }
  else{
    imgSliderRoom[numImg].style.opacity = 0;
    numImg--
    imgSliderRoom[numImg].style.opacity = 1;
  }

}
