import { Component, OnInit } from '@angular/core';
declare var Swiper:any;
declare var $:any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /*---------------------
        New Product Slider
     ---------------------- */

    var productSlider = new Swiper('.new-product-slider.swiper-container', {
      slidesPerView: 4,
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
      },
    });

    /*---------------------------
        Product Details Slider
    ------------------------------ */
    var zoomThumb = new Swiper('.zoom-thumbs', {
      spaceBetween: 18,
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
    var zoomTop = new Swiper('.zoom-top', {
      spaceBetween: 0,
      slidesPerView: 1,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      thumbs: {
        swiper: zoomThumb
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
        venobox
    --------------------- */
    $('.venobox').venobox();
  }

}
