import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "./core/nav-bar/nav-bar.component";
import { ShopComponent } from './shop/shop.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [NavBarComponent, ShopComponent]
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
