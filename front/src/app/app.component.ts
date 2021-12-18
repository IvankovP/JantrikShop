import {Component, OnInit} from '@angular/core';
declare var Swiper:any;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'front';

  ngOnInit(): void {
    "use Strict";

    /*---------------------------
     Commons Variables
  ------------------------------ */
    var $window = $(window),
      $body = $("body");

    /*---------------------------
       Menu Fixed On Scroll Active
    ------------------------------ */
    $window.on("scroll", function() {
      if ($window.scrollTop() > 250) {
        $(".sticky-nav").addClass("menu_fixed animated fadeInDown");
      } else {
        $(".sticky-nav").removeClass("menu_fixed animated fadeInDown");
      }
    });

    /*---------------------------------
        Off Canvas Function
    -----------------------------------*/
    (function() {
      var $offCanvasToggle = $(".offcanvas-toggle"),
        $offCanvas = $(".offcanvas"),
        $offCanvasOverlay = $(".offcanvas-overlay"),
        $mobileMenuToggle = $(".mobile-menu-toggle");
      $offCanvasToggle.on("click", function(e:any) {
        e.preventDefault();
        var $this = $(e.currentTarget),
          $target = $this.attr("href");
        $body.addClass("offcanvas-open");
        $($target).addClass("offcanvas-open");
        $offCanvasOverlay.fadeIn();
        if ($this.parent().hasClass("mobile-menu-toggle")) {
          $this.addClass("close");
        }
      });
      $(".offcanvas-close, .offcanvas-overlay").on("click", function(e:any) {
        e.preventDefault();
        $body.removeClass("offcanvas-open");
        $offCanvas.removeClass("offcanvas-open");
        $offCanvasOverlay.fadeOut();
        $mobileMenuToggle.find("a").removeClass("close");
      });
    })();

    /*----------------------------------
        Off Canvas Menu
    -----------------------------------*/
    function mobileOffCanvasMenu() {
      var $offCanvasNav = $(".offcanvas-menu, .overlay-menu"),
        $offCanvasNavSubMenu = $offCanvasNav.find(".sub-menu");

      /*Add Toggle Button With Off Canvas Sub Menu*/
      $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"></span>');

      /*Category Sub Menu Toggle*/
      $offCanvasNav.on("click", "li a, .menu-expand", function(e:any) {
        var $this = $(e);
        if ($this.attr("href") === "#" || $this.hasClass("menu-expand")) {
          e.preventDefault();
          if ($this.siblings("ul:visible").length) {
            $this.parent("li").removeClass("active");
            $this.siblings("ul").slideUp();
            $this.parent("li").find("li").removeClass("active");
            $this.parent("li").find("ul:visible").slideUp();
          } else {
            $this.parent("li").addClass("active");
            $this.closest("li").siblings("li").removeClass("active").find("li").removeClass("active");
            $this.closest("li").siblings("li").find("ul:visible").slideUp();
            $this.siblings("ul").slideDown();
          }
        }
      });
    }
    mobileOffCanvasMenu();

    /*---------------------------
        Quick view Slider
    ------------------------------ */
    var galleryThumb = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      centerMood:true,
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 0,
      loop: true,
      slidesPerView: 1,
      centerMood:true,
      thumbs: {
        swiper: galleryThumb
      }
    });

    /*---------------------------
        Quick view Slider
    ------------------------------ */
    var galleryThumb = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      // Navigation arrows

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 0,
      loop: true,
      thumbs: {
        swiper: galleryThumb
      }
    });

    /*----------------------------
        Cart Plus Minus Button
    ------------------------------ */
    var CartPlusMinus = $(".cart-plus-minus");
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');

    $(".qtybutton").on("click", function(event:any) {
      var $button = $(event.currentTarget);
      var value = $button.parent().find("input").val();
      if ($button.text() === "+") {
        value = parseFloat(value) + 1;
      } else {
        value = parseFloat(value) - 1;
      }
      $button.parent().find("input").val(value < 1 ? 1 : value);
    });

    /*---------------------
        Scroll Up
    --------------------- */
    $.scrollUp({
      scrollText: '<i class="pe-7s-angle-up"></i>',
      easingType: "linear",
      scrollSpeed: 900,
      animation: "fade",
    });

    /*---------------------
        venobox
    --------------------- */
    $('.venobox').venobox();
  }
}
