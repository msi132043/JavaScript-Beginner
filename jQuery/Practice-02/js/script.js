$(document).ready(function(){
    
    //animate({prams},speed,callback);
    
    $('#right').click(function(){
        $('.box-right').animate({left: '300px'},'slow');
    });
    
    $('#left').click(function(){
        $('.box-left').animate({right: '300px'},'slow');
    });
    
    $('#up').click(function(){
        $('.box-up').animate({bottom: '90px'},'slow');
    });
    
    $('#down').click(function(){
        $('.box-down').animate({top: '90px'},'slow');
    });
    
    //animate with multiple effects;
    
    $('#animate-1').click(function(){
        $('.box-one').animate({right: '300px', width: '100px'}, 2000);
        $('.box-one').animate({right: '-300px'}, 2000);
        $('.box-one').animate({right: '0px', width: '150px'}, 2000);
    });
    
    //stop(); using on animate();
    
    $('#animate').click(function(){
        $('.box-two').animate({left: '400px'}, 3000);
        $('.box-two').animate({left: '-400px'}, 3000);
    });
    
    $('#stop').click(function(){
        $('.box-two').stop();
    })
    
    //chaining;
    
    $('#chaining').click(function(){
        $('.box-three').animate({left: '200px'},1000)
            .slideUp(1000)
            .slideDown(1000)
            .animate({top: '150px'},1000)
            .animate({left: '-200px'},1000)
            .animate({top: '0px'},1000)
            .slideUp(1000)
            .slideDown(1000)
            .animate({left: '0px'},1000);;
    });
    
});