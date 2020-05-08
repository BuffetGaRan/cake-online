$(() => {
    $('textarea').css('box-shadow', 'none');
    $(window).scroll(() => {
        var scroll = $(window).scrollTop(),
            dh = $(document).height(),
            wh = $(window).height();
        value = (scroll / (dh - wh)) * 100;
        $('#progress').css('width', value + '%');
    })
})