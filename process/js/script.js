/* document.querySelector('.load-info')
    .addEventListener('click', function(){
        fetch('js/data_artists.json')
            .then(function(res){
                return res.json()
            })
            .then(function(data) {
                console.log(data)
            })
    }) */
/* var artists = fetch('js/data_artists.json')
    .then(function (res) {
        return res.json()
    });
document.querySelector('.load-info')
    .addEventListener('click', function(){
        artists.then(function(data) {
                console.log(data)
            })
    }) */

    var getArtists = new Request('js/data_artists.json', {
        method: 'GET'
    })

var artists = fetch(getArtists)
    .then(function (res) {
        return res.json()
    });
document.querySelector('.load-info')
    .addEventListener('click', function(){
        artists.then(function(data) {
                console.log(data)
            })
    })
