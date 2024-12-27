import { ShopParams } from './../shared/models/shopParams';
import { ShopService } from './shop.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IProduct } from '../shared/models/product';
import { ShopItemComponent } from "./shop-item/shop-item.component";
import { IBrand } from '@app/shared/models/brand';
import { IType } from '@app/shared/models/productType';
import { PagingHeaderComponent } from '@app/shared/components/paging-header/paging-header.component';
import { PagerComponent } from '@app/shared/components/pager/pager.component';

@Component({
  selector: 'app-shop',
  imports: [
    ShopItemComponent, 
    PagingHeaderComponent,
    PagerComponent,
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit {
  @ViewChild('search', {static: true}) searchTerm!: ElementRef;
  products: IProduct[] = [];
  brands: IBrand[] = [];
  types: IType[] = [];
  shopParams = new ShopParams();
  totalCount: number = 0;
  sortOptions = [
    { name: 'Alphabetical', value: 'name' },
    { name: 'Price: Low to High', value: 'priceAsc' },
    { name: 'Price: High to Low', value: 'priceDesc' }
  ];

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  getProducts(): void {
    this.shopService.getProducts(this.shopParams).subscribe({
      next: (response) => {
        if (response) {
          this.products = response.data;
          this.shopParams.pageNumber = response.pageIndex;
          this.shopParams.pageSize = response.pageSize;
          this.totalCount = response.count;
        }
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  getBrands(): void {
    this.shopService.getBrands().subscribe({
      next: (response) => {
        this.brands = [{ id: 0, name: 'All' }, ...response];
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  onBrandSelected(brandId: number): void {
    this.shopParams.brandId = brandId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  getTypes(): void {
    this.shopService.getTypes().subscribe({
      next: (response) => {
        this.types = [{ id: 0, name: 'All' }, ...response];
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  onTypeSelected(typeId: number): void {
    this.shopParams.typeId = typeId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onSortSelected(event: Event): void {
    const sort = (event.target as HTMLSelectElement).value;
    this.shopParams.sort = sort;
    this.getProducts();
  }

  onPageChanged(pageNumber: number): void {
    if (this.shopParams.pageNumber !== pageNumber) {
      this.shopParams.pageNumber = pageNumber;
      this.getProducts();
    }
  }

  onSearch(): void {
    this.shopParams.search = this.searchTerm.nativeElement.value;
    this.getProducts();
  }

  onReset(): void {
    this.searchTerm.nativeElement.value = '';
    this.shopParams = new ShopParams();
    this.getProducts();
  }

}
