$(function() {
    $('.load-info').on('click', function(e) {
        e.preventDefault()
        $.ajax({
           method: 'GET' ,
           url: 'js/data_artists.json',
           dataType: 'json'
        }).done(function(data) {
            if(!$('.info-artists').html() == "") {
                return
            }
            $.each(data.artists, function(key, val) {
                $('.info-artists')
                    .append(`<li> ${val.name}</li>`)
            }) //each
        }) //ajax done
    }) //click event
});//jQuery ready