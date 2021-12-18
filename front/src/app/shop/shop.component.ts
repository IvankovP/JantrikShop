import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /*----------------------------------------
                    Bootstrap dropdown
            -------------------------------------------*/

    // Add slideDown animation to Bootstrap dropdown when expanding.

    $('.dropdown').on('show.bs.dropdown', function(e:any) {
      $(e).find('.dropdown-menu').first().stop(true, true).slideDown();
    });
    // Add slideUp animation to Bootstrap dropdown when collapsing.
    $('.dropdown').on('hide.bs.dropdown', function(e:any) {
      $(e).find('.dropdown-menu').first().stop(true, true).slideUp();
    });
  }

}
