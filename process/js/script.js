var boxes = document.querySelector('.boxes')
var specialbox = document.querySelector('#special')

boxes.addEventListener('click', function(e){
  console.log('other')
  if(e.target.className === 'box') {
    e.target.parentNode.removeChild(e.target)
  }
}, false)

specialbox.addEventListener('click', function(e){
  console.log(e)
  e.target.style = 'background-color: green;'
  e.stopPropagation()
}, false)