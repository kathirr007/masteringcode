/* var highlight=  document.querySelectorAll('.tooltip');

highlight.forEach(function(item) {
    item.addEventListener('click', function() {
        if (item.dataset.highlightClick === 'on') {
            item.style.backgroundColor = 'orange'
        }
    }, false)
}, this) */


var highlight=  document.querySelectorAll('[data-highlight-click]');

highlight.forEach(function(item) {
    item.addEventListener('click', function() {
            item.style.backgroundColor = 'green'
    }, false)
}, this)