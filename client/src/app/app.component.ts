import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HttpClient } from '@angular/common/http';
import { IProduct } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [NavBarComponent]
})
export class AppComponent implements OnInit {
  title = 'Skinet';
  products: IProduct[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/products').subscribe({
      next: (response: any) => {
        this.products = response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
