import { Component, OnInit } from '@angular/core';
declare var Swiper:any;
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /*----------------------------------------
            Background Image
    -------------------------------------------*/
    $('[data-bg-image]').each(function(index:any, e:any) {
      var $this = $(e),
        $image = $this.data('bg-image');
      $this.css('background-image', 'url(' + $image + ')');
    });

    /*---------------------
        Hero Slider
     ---------------------- */
    var heroSlider = new Swiper('.hero-slider.swiper-container', {
      loop: true,
      speed: 2000,
      effect: "fade",
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });

    /*---------------------
        Category Slider
     ---------------------- */
    var categorySlider = new Swiper('.tab-slider.swiper-container', {
      loop: true,
      slidesPerView: 6,
      spaceBetween: 30,
      speed: 1500,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        478: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        },
      },
    });

    /*---------------------------
        Testimonial Slider
    ------------------------------ */
    var testiSlider = new Swiper('.content-top', {
      slidesPerView: 2,
      spaceBetween: 30,
      speed: 1500,
      loop: true,

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        478: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
      },
    });

    /*---------------------
        Countdown
    --------------------- */
    $("[data-countdown]").each(function(index:any, e:any) {
      var $this = $(e),
        finalDate = $(e).data("countdown");
      $this.countdown(finalDate, function(event:any) {
        $this.html(event.strftime('<span class="cdown hour"><span class="cdown-1">%-H</span><p>Hrs</p></span> <span class="cdown minutes"><span class="cdown-1">%M</span> <p>Min</p></span> <span class="cdown second"><span class="cdown-1"> %S</span> <p>Sec</p></span>'));
      });
    });

    /*---------------------------
            Brand Logo
      ------------------------------ */
    var companyLogoSlider = new Swiper('.brand-slider.swiper-container', {
      slidesPerView: 4,
      speed: 1500,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      }
    });
  }
}
