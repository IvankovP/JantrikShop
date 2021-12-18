import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /*-------------------------------
        Create an account toggle
    ---------------------------------*/
    $(".checkout-toggle2").on("click", function() {
      $(".open-toggle2").slideToggle(1000);
    });

    $(".checkout-toggle").on("click", function() {
      $(".open-toggle").slideToggle(1000);
    });
  }

}
