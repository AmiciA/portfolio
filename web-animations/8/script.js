/* ---------- HOUR PROGRESS ---------- */
$(function() {
    var trigger = $('button#cycle');
    
    var english = $('.texEN');
    var german = $('.texDE');
    var chinese = $('.texZH');
    
    var selector = $('.sel');
    
    var count = 0;
    
    trigger.on('click', function() {
        if(count == 0) {
            selector.toggleClass('selDE');
            
            chinese.toggleClass('bold');
            german.toggleClass('bold');
            
            count++;
        }
        
        else if(count == 1) {
            selector.toggleClass('selDE');
            selector.toggleClass('selZH');
            
            german.toggleClass('bold');
            english.toggleClass('bold');
            
            count++;
        }
        
        else if(count == 2) {
            selector.toggleClass('selZH');
            
            english.toggleClass('bold');
            chinese.toggleClass('bold');
            
            count = 0;
        }
        
        /*for (i=0; i<=2; i++) {
            alert("moo");
        }*/
        //selector.toggleClass('selDE');
        /*english.toggleClass('endEN');
        
        chinese.toggleClass('endZH');
        chinese.toggleClass('startZH');
        
        if(english.hasClass('endEN')) {
            trigger.text('to English');
        }
        
        else {
           trigger.text('用粵話'); 
        }*/
    });
  });