$(document).ready(function(){
    
    //box-1: hide(), show(), toggle();
    
    $('#hide').click(function(){
        $('.box-1').hide('fast');
    });
    
    $('#show').click(function(){
        $('.box-1').show('slow');
    });
    
    $('#toggle').click(function(){
        $('.box-1').toggle(500);
    });
    
    
    //box-2: fadeOut(), fadeIn(), fadeToggle();
    
    $('#fadeOut').click(function(){
        $('.box-2').fadeOut();
    });
    
    $('#fadeIn').click(function(){
        $('.box-2').fadeIn();
    });
    
    $('#fadeToggle').click(function(){
        $('.box-2').fadeToggle();
    });
    
    $('#fadeTo').click(function(){
        $('.box-2').fadeTo('slow', 0.5);
    });
    
    
    //box-3: slideUp(), slideDown(), slideToggle();
    
    $('#slideUp').click(function(){
        $('.box-3').slideUp();
    });
    
    $('#slideDown').click(function(){
        $('.box-3').slideDown();
    });
    
    $('#slideToggle').click(function(){
        $('.box-3').slideToggle();
    });
});