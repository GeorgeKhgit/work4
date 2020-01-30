$(document).ready(function(){
    $('.navigationmain__list a').click(function(){
            event.preventDefault()
         $('.navigationmain__list a').css('color','#1289d5').not(this).css('color','#cccccc')
     })
    $('#scorlby').click(function(){
        $('html,body').animate({scrollTop:window.innerHeight+50},1000)
    })
    $('#sekkleton').styler();
    $('.formlist__content_form_date').click(function(){
        this.type="date"
        $('.formlist__content_form_date').css('background','#dbdbdb')
    })
    $('.formlist__content_form_date_2').click(function(){
        this.type="date"
        $('.formlist__content_form_date_2').css('background','#dbdbdb')
    })
    $('#test1').click(function(){
        $('#test1').removeClass('formlist__content_form_text');
        $('#test1').addClass('formlist__content_form_text1')
    })
    $('.openerbutton').click(function(){
        if($('.openerbutton').html()==='See all destinations'){
            $('.dissibles').fadeIn();
            $('.openerbutton').html('Close all destinations');
        }
        else if($('.openerbutton').html()==='Close all destinations'){
            $('.dissibles').fadeOut();
            $('.openerbutton').html('See all destinations');
        }
    })

})