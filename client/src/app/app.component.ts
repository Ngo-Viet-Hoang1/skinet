import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "./core/nav-bar/nav-bar.component";
import { RouterOutlet } from '@angular/router';
import { SectionHeaderComponent } from "./core/section-header/section-header.component";
import { NgxSpinnerModule } from 'ngx-spinner';
import { BasketService } from './basket/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    NavBarComponent, 
    RouterOutlet, 
    SectionHeaderComponent,
    NgxSpinnerModule,
  ]
})
export class AppComponent implements OnInit {

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    const basketId = localStorage.getItem('basket_id');
    if (basketId) {
      this.basketService.getBasket(basketId).subscribe({
        next: () => {
          console.log('initialised basket');
        },
        error: (error) => console
      });
    }
  }
}
