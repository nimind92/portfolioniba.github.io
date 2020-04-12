$(document).ready(function () {

//    var navToggleButton = $('.navigation__toggle');
    var navToggleIcon = $('.navigation__toggle .fas');
    var navBlock = $('.navigation__list');
    var navBlockOpen = 'navigation__list--open';
    var navLink = $('.navigation__list a');
    var iconNav = 'fa-bars';
    var iconClose = 'fa-times';
    
    var navToggleButton = $('#navigation__button');


    //    navigation
//    navToggleButton.on('click', function (e) {
//        e.preventDefault();
//        navBlock.toggleClass(navBlockOpen);
//
//        if (navToggleIcon.hasClass(iconNav)) {
//            navToggleIcon.removeClass(iconNav);
//            navToggleIcon.addClass(iconClose);
//        } else {
//            navToggleIcon.removeClass(iconClose);
//            navToggleIcon.addClass(iconNav);
//        }
//    });
    //    end navigation    

    navLink.on('click', function (e) {
        navBlock.removeClass(navBlockOpen);

        navToggleIcon.removeClass(iconClose);
        navToggleIcon.removeClass(iconNav);
        navToggleIcon.addClass(iconNav);
        
        navToggleButton.removeClass('active');
    });
    
        
    navToggleButton.on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');        
        navBlock.toggleClass(navBlockOpen);
    });

    //slide2id - плавная прокрутка по ссылкам внутри страницы
    $("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id,a.mouse_scroll").mPageScroll2id({
        highlightSelector: "nav a"
    });


    $('#portfolio-projects').mixItUp();


    $(".fancybox").fancybox({
        // Default - with fix from scroll to top
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
    
    var clicked_job = $('.filter-block__button--active');
    $('.filter-block__button').on('click', function(e) {        
        if(clicked_job) clicked_job.removeClass('filter-block__button--active');
        $(this).addClass('filter-block__button--active');
        clicked_job = $(this);
    });
    
    $(".contact-form").validate({
        rules: {
            name: { required: true },
            email: { required: true, email: true },
            message: { required: true }
        }, 
        messages: {
            name: "Пожалуйста, введите свое имя",
            email: {
                required: "Пожалуйста, введите свой email",
                email: "Email адрес должен быть в формате name@domain.com. Возможно вы ввели email с ошибкой."
            },
            message: "Пожалуйста, введите текст сообщения"
        },
        
        submitHandler: function(form) {
            ajaxFormSubmit();
        }
    });
    
    function ajaxFormSubmit() {
        var string = $(".contact-form").serialize();
        
        $.ajax( {
            type: "POST",
            url: "php/mail.php",
            data: string,
            success: function(html) {
                $(".contact-form").slideUp(800);
                $("#answer").html(html);
            }
        });
        
        return false;
    }
    
//    $('.button').on('click',function(e) {
//        
//    });
//    $('portfolio-item__title a').on('click', function(e) {
//        
//    });

    //    //    navigation
    //    $('.navigation__toggle').on('click', function (e) {
    //        e.preventDefault();
    //        $('.navigation__list').toggleClass('navigation__list--open');
    //
    //        if ($('.navigation__toggle .fas').hasClass('fa-bars')) {
    //            $('.navigation__toggle .fas').removeClass('fa-bars');
    //            $('.navigation__toggle .fas').addClass('fa-times');
    //        } else {
    //            $('.navigation__toggle .fas').removeClass('fa-times');
    //            $('.navigation__toggle .fas').addClass('fa-bars');
    //        }
    //    });
    //    //    end navigation    
    //
    //    $('.navigation__list a').on('click', function (e) {
    //        $('.navigation__list').removeClass('navigation__list--open');
    //    });
});
