/* ---------- HOUR PROGRESS ---------- */
$(function() {
    var english = $('.fulltextEN');
    var chinese = $('.fulltextZH');
    var trigger = $('button#translate');
    
    trigger.on('click', function() {
        english.toggleClass('startEN');
        english.toggleClass('endEN');
        
        chinese.toggleClass('endZH');
        chinese.toggleClass('startZH');
        
        if(english.hasClass('endEN')) {
            trigger.text('to English');
        }
        
        else {
           trigger.text('用粵話'); 
        }
    });
  });