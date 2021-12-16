import { Component, OnInit } from '@angular/core';
import noUiSlider from 'nouislider';
declare var $:any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var slider = document.getElementById('slider');

    if (slider) {
      noUiSlider.create(slider, {
        start: [0, 80],
        connect: true,
        range: {
          'min': 0,
          'max': 100
        }
      });

      // @ts-ignore
      slider.noUiSlider.on('update', function (values: any) {
        $("#amount").val("min $" + values[0] + " - max $" + values[1]);
      });
    }
  }

}
