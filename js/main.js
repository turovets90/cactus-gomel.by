$(document).ready(function(){

    $('.hamburger').click(function () {
        $('.main_menu').toggleClass('open');
        $('html').toggleClass('page-noscroll');

        $('.main_menu .mm_close').click(function () {
            $('.main_menu').removeClass('open');
            $('html').removeClass('page-noscroll');
        });
        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".main_menu.open").length) {
            $(".main_menu.open").removeClass('open');
            $("html").removeClass('page-noscroll');
        }
        e.stopPropagation();
    });


    $(".main_slider").slick({
        infinite: true,
        arrows: false,
        dots: false,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        //centerMode: true,
        //centerPadding: '0',
        //focusOnSelect: true
    });

    $('.product_item').each(function(){
        var variations=$(this).find('.variations');
        var price=$(this).find('.price');
        var first=$(variations).find('.item:nth-child(1)');
        var second=$(variations).find('.item:nth-child(2)');
        $(first).click(function(){
            $(variations).removeClass('active');
            $(price).removeClass('active');
        });
        $(second).click(function(){
            $(variations).addClass('active');
            $(price).addClass('active');
        });

    });


    $('.amount .down').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.amount .up').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });



    /*
    $('select.custom_select').select2({
        minimumResultsForSearch: -1
    });

    $('.switcher_wrapper').click(function(){
        $(this).parent().toggleClass('act');
        $('.switcher_tabs').toggleClass('act');
    });


    $('.nav_tabs li ').each(function(){
        var tab_link=$(this).index();
        var tab_content=$('.tab_content .tab-pane').index();
        $(this).click(function(){
            console.log(tab_link);
            $('.nav_tabs li ').removeClass('act');
            $('.tab_content .tab_pane').removeClass('active');
            $(this).addClass('act');
            $('.tab_content .tab_pane').eq(tab_link).addClass('active');
        });
    });

    $('.game_item_box').each(function(){
        var game_item_box=$(this);
        var game_item_toggle=$(this).find('.game_item_toggle')
        var game_item_body=$(this).find('.game_item_body');

        $(game_item_toggle).click(function(){
            if($(game_item_body).is(':visible')){
                $(game_item_box).removeClass('active');
                $(this).text('Change');
            }else{
                $(game_item_box).addClass('active');
                $(this).text('Cancel');
            }
        });
    });

    $('.popup-with-form').magnificPopup({
        removalDelay: 300,
    });

    $('.time').mask('00:00');



     */


});





