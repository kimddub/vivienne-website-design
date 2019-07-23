var $tabMenuItem = window.$('.pro-list-img .header > ul > li');


$tabMenuItem.mouseover(function() {
     var $clickedLi = $(this);
    
    var index = $clickedLi.index();
    
    $clickedLi.siblings('.active').removeClass('active');
    $clickedLi.addClass('active');
    
    var $tabBox = $clickedLi.parent().parent().parent();
    
    $tabBox.find('.body > ul > li.active').removeClass('active');
    
    $tabBox.find('.body > ul > li:nth-child(' + (index + 1)  + ')').addClass('active');
    
});
