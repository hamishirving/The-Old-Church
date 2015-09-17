/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.3
 * Copyright 2015. MIT licensed.
 */
$( document ).ready(function() {

    // ----
    // Mobile Nav
    // ----

    $('.menu-opener, .close-menu').click(function (e) {
        $('.mobile-nav-overlay').toggleClass('open');
        e.preventDefault();
    });

    // ----
    // Swiper settings
    // ----

    var swiper = new Swiper('.swiper-container', {
        effect: 'fade',
        loop: true,
        speed: 600,
        autoplay: 4000,
        grabCursor: true
    });

    // ----
    // Scroll Toggle Navigation (https://github.com/shorttompkins/scrollToggle)
    // ----

    var ScrollToggle = function (top, callbackShow, callbackHide) {
        this.ontop = 0;
        this.hontop = 0;
        this.top = top - 20;
        this.show = callbackShow;
        this.hide = callbackHide;
        var self = this;


        (function () {
            $(window).scroll(function (event) {
                var y = $(window).scrollTop();

                if (y >= self.top)
                    self.ontop = 1;
                else
                    self.ontop = 0;

                if (self.ontop !== self.hontop) {
                    if (self.ontop) {
                        self.show();
                    }
                    else {
                        self.hide();
                    }
                }
                self.hontop = (self.ontop * 1);
            });
        })();
    };

    // Id of the element which triggers ScrollToggle
    var myScroller = new ScrollToggle($('#scrollToggle').position().top, function () {
        // Element to show
        $('.nav-fixed').css({'margin-top':'0'});
    }, function () {
        // Element to hide
        $('.nav-fixed').css({'margin-top':'-55px'});
    });

    // ----
    // Froogaloop - Play Vimeo video on button click
    // ----

    var iframe = document.getElementById('video');

    // $f == Froogaloop
    var player = $f(iframe);

    // bind events
    var playButton = document.getElementById("play-button");
    playButton.addEventListener("click", function() {
      player.api("play");
      $(this).hide();
      $('#pause-button').show();
    });

    var pauseButton = document.getElementById("pause-button");
    pauseButton.addEventListener("click", function() {
      player.api("pause");
      $(this).hide();
      $('#play-button').show();
    });

    // ----
    // Fastclick
    // ----

    $(function() {
        var attachFastClick = Origami.fastclick;
        attachFastClick(document.body);
    });
});