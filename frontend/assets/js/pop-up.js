(function(){
  const svgMap = document.querySelector('.for-who__right-side');
  if(svgMap){
    svgMap.addEventListener('mouseover', function(){
      if(!(document.querySelector('.mapToolTip'))){
        const mapToolTip = document.createElement('span');
        mapToolTip.className = 'mapToolTip button button--pink';
        mapToolTip.innerHTML = 'Увеличить схему';

        svgMap.appendChild(mapToolTip);
      }
    })

    svgMap.addEventListener('click', function(e){
      if(e.target.classList.contains('cancelMap')){
        svgMap.classList.remove('active-pop-up')
      }else{
        this.classList.add('active-pop-up')
      }


      if(!(document.querySelector('.cancelMap'))){
        const cancelMap = document.createElement('div');
        cancelMap.className = 'cancelMap';
        svgMap.appendChild(cancelMap);
      }





    })
  }
})();
