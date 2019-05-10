function slider(){
  if(document.querySelector('.slider-room .next')){
    var
      roomSliderNext = document.querySelector('.slider-room .next'),
      roomSliderPrev = document.querySelector('.slider-room .prev'),
      roomNumImg = 0,
      roomSliderDots = document.querySelectorAll('.slider-room .dots span'),
      roomSliderImg = document.querySelectorAll('.slider-room img');

    roomSliderImg[roomNumImg].style.opacity = 1;
    roomSliderDots[roomNumImg].classList.add('active')


    for(let i=0, max= roomSliderDots.length; i<max;i++){
      roomSliderDots[i].addEventListener('click',function(){
        for(let i=0, max= roomSliderDots.length; i<max;i++){
          roomSliderDots[i].classList.remove('active')
          roomSliderImg[i].style.opacity = 0;
        }
        roomSliderDots[i].classList.add('active')
        roomSliderImg[i].style.opacity = 1;
      })
    }


    roomSliderNext.addEventListener('click', function (){
      if(roomNumImg < roomSliderImg.length - 1) {
        roomSliderImg[roomNumImg].style.opacity = 0;
        roomSliderDots[roomNumImg].classList.remove('active')
        roomNumImg++;
        roomSliderImg[roomNumImg].style.opacity = 1;
        roomSliderDots[roomNumImg].classList.add('active')
      }
    });

    roomSliderPrev.addEventListener('click', function (){
      if(roomNumImg >= 1){
        roomSliderImg[roomNumImg].style.opacity = 0;
        roomSliderDots[roomNumImg].classList.remove('active')
        roomNumImg--;
        roomSliderImg[roomNumImg].style.opacity = 1;
        roomSliderDots[roomNumImg].classList.add('active')
      }
    });



    var
      commSliderNext = document.querySelector('.comm .next'),
      commSliderPrev = document.querySelector('.comm .prev'),
      commNumImg = 0,
      commSliderImg = document.querySelectorAll('.comm .comment');

    commSliderImg[commNumImg].style.opacity = 1;

    commSliderNext.addEventListener('click', function (){
      if(commNumImg < commSliderImg.length - 1) {
        commSliderImg[commNumImg].style.opacity = 0;
        commNumImg++;
        commSliderImg[commNumImg].style.opacity = 1;
      }
    });

    commSliderPrev.addEventListener('click', function (){
      if(commNumImg >= 1){
        commSliderImg[commNumImg].style.opacity = 0;
        commNumImg--;
        commSliderImg[commNumImg].style.opacity = 1;
      }
    });
  }

}
