$(function(){
    $('#change-color').on('click', function(){
        $('#target').css('color', '#F00');
    });
    $('#change-text').on('click', function(){
        $('#target').text('さようなら！');
    });
    $('#fade-out').on('click', function(){
        $('#target').fadeOut(500);
    });
    $('#fade-in').on('click',function(){
        $('#target').fadeIn(500);
    })
});