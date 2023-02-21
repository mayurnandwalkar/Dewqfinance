/**
 *   videoPopup
 *   PreLoader
 *   Retina Logos
 *   Header Fixed
 *   Mobile Navigation
 *   Scroll to Top 
 *   Menu Active 
 *   wowanimation
 */

;
(function($) {
    "use strict";

    //Hide Loading Box (Preloader)
    function handlePreloader() {
        if ($(".preloader").length) {
            $("body").addClass("page-loaded");
            $(".preloader").delay(300).fadeOut(0);
        }
    }

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var wow = new WOW({
        animateClass: 'animated',
        offset: 100
    });
    wow.init();


    // === window When Loading === //

    $(window).on("load", function() {


        /* ===============================  SPLITTING TEXT  =============================== */

        Splitting();


        /* ===============================  SPLITTING  =============================== */

        var imageUp = document.getElementsByClassName('thumparallax');
        new simpleParallax(imageUp, {
            delay: 1
        });

        var imageDown = document.getElementsByClassName('thumparallax-down');
        new simpleParallax(imageDown, {
            orientation: 'down',
            delay: 1
        });



        /* ===============================  contact validator  =============================== */

    });

    $(document).ready(function() {
        "use strict";

        //Scroll back to top

        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function() {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 150;
        var duration = 550;
        jQuery(window).on('scroll', function() {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.progress-wrap').addClass('active-progress');
            } else {
                jQuery('.progress-wrap').removeClass('active-progress');
            }
        });
        jQuery('.progress-wrap').on('click', function(event) {
            event.preventDefault();
            jQuery('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        })


    });



    var videoPopup = function() {
        $(".fancybox").on("click", function() {
            $.fancybox({
                href: this.href,
                type: $(this).data("type")
            }); // fancybox
            return false
        }); // on
    }

    var themesflatTheme = {

        // Main init function
        init: function() {
            this.config();
            this.events();
        },

        // Define vars for caching
        config: function() {
            this.config = {
                $window: $(window),
                $document: $(document),
            };
        },

        // Events
        events: function() {
            var self = this;

            // Run on document ready
            self.config.$document.on('ready', function() {

                // PreLoader
                self.preLoader();

                // Retina Logos
                self.retinaLogo();

                // Mobile Navigation
                self.mobileNav();

                // Scroll to Top
                self.scrollToTop();

            });

            // Run on Window Load
            self.config.$window.on('load', function() {

            });
        },

        // PreLoader
        preLoader: function() {
            if ($().animsition) {
                $('.animsition').animsition({
                    inClass: 'fade-in',
                    outClass: 'fade-out',
                    inDuration: 1500,
                    outDuration: 800,
                    loading: true,
                    loadingParentElement: 'body',
                    loadingClass: 'animsition-loading',
                    timeout: false,
                    timeoutCountdown: 5000,
                    onLoadEvent: true,
                    browser: [
                        '-webkit-animation-duration',
                        '-moz-animation-duration',
                        'animation-duration'
                    ],
                    overlay: false,
                    overlayClass: 'animsition-overlay-slide',
                    overlayParentElement: 'body',
                    transition: function(url) { window.location.href = url; }
                });
            }
        },

        // Retina Logos
        retinaLogo: function() {
            var retina = window.devicePixelRatio > 1 ? true : false;
            var $logo = $('#site-logo img');
            var $logo_retina = $logo.data('retina');

            if (retina && $logo_retina) {
                $logo.attr({
                    src: $logo.data('retina'),
                    width: $logo.data('width'),
                    height: $logo.data('height')
                });
            }
        },



        // Mobile Navigation
        mobileNav: function() {
            var menuType = 'desktop';

            $(window).on('load resize', function() {
                var mode = 'desktop';
                var wrapMenu = $('#site-header-inner .tf-nav');
                var navExtw = $('.nav-extend.active');
                var navExt = $('.nav-extend.active').children();

                if (matchMedia('only screen and (max-width: 991px)').matches)
                    mode = 'mobile';

                if (mode != menuType) {
                    menuType = mode;

                    if (mode === 'mobile') {
                        $('#main-nav').attr('id', 'main-nav-mobi')
                            .appendTo('#site-header')
                            .hide().children('.menu').append(navExt)
                            .find('li:has(ul)')
                            .children('ul')
                            .removeAttr('style')
                            .hide()
                            .before('<span class="arrow"></span>');
                    } else {
                        if ($('body').is('.header-style-3'))
                            wrapMenu = $('.site-navigation-wrap .inner');

                        $('#main-nav-mobi').attr('id', 'main-nav')
                            .removeAttr('style')
                            .prependTo(wrapMenu)
                            .find('.ext').appendTo(navExtw)
                            .parent().siblings('#main-nav')
                            .find('.sub-menu')
                            .removeAttr('style')
                            .prev().remove();

                        $('.mobile-button').removeClass('active');
                    }
                }
            });

            $(document).on('click', '.mobile-button', function() {
                $(this).toggleClass('active');
                $('#main-nav-mobi').slideToggle();
            })

            $(document).on('click', '#main-nav-mobi .arrow', function() {
                $(this).toggleClass('active').next().slideToggle();
            })

        },


        // Scroll to Top
        scrollToTop: function() {
            $(window).scroll(function() {
                if ($(this).scrollTop() > 300) {
                    $('#scroll-top').addClass('show');
                } else {
                    $('#scroll-top').removeClass('show');
                }
            });

            $('#scroll-top').on('click', function() {
                $('html, body').animate({ scrollTop: 0 }, 1000, 'easeInOutExpo');
                return false;
            });
        },

    }; // end themesflatTheme

    // Start things up
    themesflatTheme.init();
    // Menu Active
    $(function() {

        var url = window.location.pathname,
            urlRegExp = new RegExp(url.replace(/\/$/, '') + "$"); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
        // now grab every link from the navigation
        $('.menu-item a').each(function() {
            // and test its normalized href against the url pathname regexp
            if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
                $(this).addClass('active');
            }
        });

    });
    // End menu active

    $('.couter').appear(function() {
        $('.chart').easyPieChart({
            easing: 'easeOut',
            lineWidth: 2,
            size: 72,
            scaleColor: false,
            barColor: 'rgb(255, 255, 255)',
            trackColor: 'rgba(255, 255, 255,0.1)',
            animate: 7000,
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });

    }, {
        offset: 400
    });


    var ajaxContactForm = function() {
        $('#contactform').each(function() {
            $(this).validate({
                submitHandler: function(form) {
                    var $form = $(form),
                        str = $form.serialize(),
                        loading = $('<div />', { 'class': 'loading' });

                    $.ajax({
                        type: "POST",
                        url: $form.attr('action'),
                        data: str,
                        beforeSend: function() {
                            $form.find('.form-submit').append(loading);
                        },
                        success: function(msg) {
                            var result, cls;
                            if (msg === 'Success') {
                                result = 'Message Sent Successfully To Email Administrator. ( You can change the email management a very easy way to get the message of customers in the user manual )';
                                cls = 'msg-success';
                            } else {
                                result = 'Error sending email.';
                                cls = 'msg-error';
                            }

                            $form.prepend(
                                $('<div />', {
                                    'class': 'flat-alert ' + cls,
                                    'text': result
                                }).append(
                                    $('<a class="close" href="#"><i class="fa fa-close"></i></a>')
                                )
                            );

                            $form.find(':input').not('.submit').val('');
                        },
                        complete: function(xhr, status, error_thrown) {
                            $form.find('.loading').remove();
                        }
                    });
                }
            });
        }); // each contactform
    };
    // accordionToggle
    var accordionToggle = function() {
        $('.flat-question').each(function() {
            var speed = { duration: 400 };
            $('.flat-question .toggle-content').hide();
            $('.flat-question .accordion-toggle .toggle-title.active').siblings('.toggle-content').show();
            $('.flat-question .accordion').find('.toggle-title').on('click', function() {
                $(this).toggleClass('active');
                $(this).closest('.accordion').find('.accordion-toggle').removeClass('active');
                $(this).closest('.accordion-toggle').toggleClass('active');
                $(this).next().slideToggle(speed);
                $(".flat-question .toggle-content").not($(this).next()).slideUp(speed);
                if ($(this).is('.active')) {
                    $(this).closest('.accordion').find('.toggle-title.active').toggleClass('active');
                    $(this).toggleClass('active');
                };
            });
        });
    };


    var ajaxSubscribe = {
        obj: {
            subscribeEmail: $('#subscribe-email'),
            subscribeButton: $('#subscribe-button'),
            subscribeMsg: $('#subscribe-msg'),
            subscribeContent: $("#subscribe-content"),
            dataMailchimp: $('#subscribe-form').attr('data-mailchimp'),
            success_message: '<div class="notification_ok">Thank you for joining our mailing list! Please check your email for a confirmation link.</div>',
            failure_message: '<div class="notification_error">Error! <strong>There was a problem processing your submission.</strong></div>',
            noticeError: '<div class="notification_error">{msg}</div>',
            noticeInfo: '<div class="notification_error">{msg}</div>',
            basicAction: 'mail/subscribe.php',
            mailChimpAction: 'mail/subscribe-mailchimp.php'
        },

        eventLoad: function() {
            var objUse = ajaxSubscribe.obj;

            $(objUse.subscribeButton).on('click', function() {
                if (window.ajaxCalling) return;
                var isMailchimp = objUse.dataMailchimp === 'true';

                if (isMailchimp) {
                    ajaxSubscribe.ajaxCall(objUse.mailChimpAction);
                } else {
                    ajaxSubscribe.ajaxCall(objUse.basicAction);
                }
            });
        },

        ajaxCall: function(action) {
            window.ajaxCalling = true;
            var objUse = ajaxSubscribe.obj;
            var messageDiv = objUse.subscribeMsg.html('').hide();
            $.ajax({
                url: action,
                type: 'POST',
                dataType: 'json',
                data: {
                    subscribeEmail: objUse.subscribeEmail.val()
                },
                success: function(responseData, textStatus, jqXHR) {
                    if (responseData.status) {
                        objUse.subscribeContent.fadeOut(500, function() {
                            messageDiv.html(objUse.success_message).fadeIn(500);
                        });
                    } else {
                        switch (responseData.msg) {
                            case "email-required":
                                messageDiv.html(objUse.noticeError.replace('{msg}', 'Error! <strong>Email is required.</strong>'));
                                break;
                            case "email-err":
                                messageDiv.html(objUse.noticeError.replace('{msg}', 'Error! <strong>Email invalid.</strong>'));
                                break;
                            case "duplicate":
                                messageDiv.html(objUse.noticeError.replace('{msg}', 'Error! <strong>Email is duplicate.</strong>'));
                                break;
                            case "filewrite":
                                messageDiv.html(objUse.noticeInfo.replace('{msg}', 'Error! <strong>Mail list file is open.</strong>'));
                                break;
                            case "undefined":
                                messageDiv.html(objUse.noticeInfo.replace('{msg}', 'Error! <strong>undefined error.</strong>'));
                                break;
                            case "api-error":
                                objUse.subscribeContent.fadeOut(500, function() {
                                    messageDiv.html(objUse.failure_message);
                                });
                        }
                        messageDiv.fadeIn(500);
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    alert('Connection error');
                },
                complete: function(data) {
                    window.ajaxCalling = false;
                }
            });
        }
    };

    var alertBox = function() {
        $(document).on('click', '.close', function(e) {
            $(this).closest('.flat-alert').remove();
            e.preventDefault();
        })

    };


    var wowanimation = function() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }
    var flatOwl = function() {
        if ($().owlCarousel) {
            $('.flat-carousel-box').each(function() {
                var
                    $this = $(this),
                    auto = $this.data("auto"),
                    item = $this.data("column"),
                    item2 = $this.data("column2"),
                    item3 = $this.data("column3"),
                    item4 = $this.data("column4"),
                    loops = $this.data("loop"),
                    zero = $this.data("zero"),

                    gap = Number($this.data("gap")),

                    dots = $this.data("dots"),
                    nav = $this.data("nav");

                $this.find('.owl-carousel').owlCarousel({
                    margin: gap,
                    loop: loops,
                    dots: dots,
                    nav: nav,
                    navigation: true,
                    pagination: true,
                    autoplay: false,
                    autoplayTimeout: 5000,
                    responsive: {
                        0: {
                            items: item4
                        },
                        600: {
                            items: item3
                        },
                        768: {
                            items: item2
                        },
                        1000: {
                            items: item
                        }
                    }
                });

                if (zero === 0) {
                    $(".banners-z .owl-dot").find('span').addClass("number_zero");
                }
                $this.find('.owl-dot').each(function() {
                    var number = $(this).index() + 1;
                    if ($(this).children('span').hasClass("number_zero")) {
                        if (number < 9) {
                            number = '0' + number;
                        }
                        $(this).children('span').html(number);
                        $(this).append('<i class="line"></i>');
                    } else {
                        $(this).children('span').html(number);
                    }

                    $(this).children('span').addClass("btn-dots btn-defect");


                });
            });
        }
    };
    // Dom Ready
    $(function() {
        handlePreloader();
        ajaxSubscribe.eventLoad();
        videoPopup();
        ajaxContactForm();
        alertBox();
        wowanimation();
        accordionToggle();
        flatOwl();
    });

})(jQuery);