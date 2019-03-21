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
    // var count = 0;
    

    // function timer(){
    //   var sec = $('.box-time span').text();
    //   var timer =  setInterval(function() { 
    //     $('.box-time span').text(--sec);
    //         if (sec == 0) {
    //             $('.main-img').fadeOut(100);
    //             clearInterval(timer);
    //         } 
    //     }, 1000);
    // }
    
    // function increase_scrore() {
    //     var scrore = count+=5;
    //     $(".scrore").html("<span>" + scrore + "</span>")
    //     if(scrore == 100){
    //         $('.main-img').fadeOut(100);
    //         clearInterval(timer);
    //     }
    // }

    // $('.tab2').click(timer());

    // $('.acne-small').on('click',function(e){
    //     var offset = $(this).offset();
    //     var curX = e.pageX;
    //     var curY = e.pageY;
    //     if( curX > offset.left && curY > offset.top){
    //         $(this).hide();
    //         increase_scrore();
    //     }   
    // })
   
    $('.acne-big').on('click',function(){

        var life = $(this).attr('data-life');
        var max_life = $(this).attr('data-max');
        var _radio  = 1/max_life;

        $(this).attr('data-life', life - 1); 
        

        //  Ti le scale 
        var _scale = (life - 1)*_radio;
        $(this).css({'transform':'scale(' + _scale + ')'});
        increase_scrore();
        // console.log(_radio);
        // console.log(_life);

        // if(_life == 1 ){
        //     console.log('abcd');
        //     $(this).addClass('asjdhkjasdhk');
        // }
       
         
        // if($(this).attr('data-life')){
        //     $(this).css({'transform':'scale(0.5)'})
        //     $(this).attr('data-life', '1');
        //     console.log($(this).attr('data-life'));
        // } else if($(this).attr('data-life') === '1' ){
        //     console.log('abcd');
        //     $(this).addClass('asjdhkjasdhk');
        // }
       
    })
})();