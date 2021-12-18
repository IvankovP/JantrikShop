import { Component, OnInit } from '@angular/core';
declare var Swiper:any;
declare var $:any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
        venobox
    --------------------- */
    $('.venobox').venobox();
  }

}
