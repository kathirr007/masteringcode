var tips = document.querySelectorAll('.hastip')

for(var i=0; i<tips.length; i++) {
  tips[i].addEventListener('click', function(e){
    e.target.parentNode.querySelectorAll('.hastip .tooltip').forEach(function(item){
      item.classList.remove('active')
    })
    e.target.querySelector('.tooltip').classList.toggle('active')
  }, false)
}