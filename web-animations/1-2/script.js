/* ---------- HOUR PROGRESS ---------- */
$(function() {
    var oldNum = $('.hourOld');
    var newNum = $('.hourNew');
    var trigger = $('button');
    
    trigger.on('click', function() {
        newNum.toggleClass('hourNewAnim');
        oldNum.toggleClass('hourOldAnim');
        
        if(newNum.hasClass('hourNewAnim')) {
            trigger.text('Reset Hours');
        }
        
        else {
           trigger.text('Hour Increase'); 
        }
    });
  });


/* ---------- TAB BAR ---------- */
$(function() {
    var icoUn = $('.iconUnsel');
    var icoSel = $('.iconSel');
    var selBar = $('.tabSelector');
    
    icoUn.on('click', function() {
        icoUn.toggleClass('iconUnselAnim');
        icoSel.toggleClass('iconSelAnim');
        
        selBar.toggleClass('tabSelectorSlide');
    });
  });