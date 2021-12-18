import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
  }

}
