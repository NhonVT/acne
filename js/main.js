(function(){
    $('.tabs .tab-links a').on('click', function(e) {
        e.preventDefault();
        var currentAttributeValue = $(this).attr('href');
        // Show/Hide Tabs
        $('.tabs ' + currentAttributeValue).show().siblings().hide();
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
    });

    $('.button-sub').click(function(){
        var that = $(this);
        if(that.hasClass('active')){
            that.removeClass('active');
            that.prev().removeClass('active');
            that.prev().prev().removeClass('active');
            that.prev().prev().prev().removeClass('active');
        }else{
            that.addClass('active');
            that.prev().addClass('active');
            that.prev().prev().addClass('active');
            that.prev().prev().prev().addClass('active');
  
        }
    })
})();