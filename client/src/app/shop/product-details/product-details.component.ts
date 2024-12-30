import { Component, OnInit } from '@angular/core';
import { IProduct } from '@app/shared/models/product';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  product!: IProduct;

  constructor(private shopService: ShopService,
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService
  ) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    this.shopService.getProduct(+(this.activatedRoute.snapshot.paramMap.get('id')!)).subscribe({
      next: (product) => {
        this.product = product;
        this.breadcrumbService.set('@productDetails', product.name);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
