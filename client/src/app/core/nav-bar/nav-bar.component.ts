import { CommonModule } from '@angular/common';
import { IBasket } from './../../shared/models/basket';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BasketService } from '@app/basket/basket.service';
import { Observable } from 'rxjs';
import { IUser } from '@app/shared/models/user';
import { AccountService } from '@app/account/account.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule, CommonModule, BsDropdownModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {
  basket$: Observable<IBasket | null> | undefined;
  currentUser$!: Observable<IUser | null> | undefined;

  constructor(
    private basketService: BasketService,
    private accountService: AccountService,
  ) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
    this.currentUser$ = this.accountService.curentUser$;
  }

  logout() {
    this.accountService.logout();
  }

}
