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
  @ViewChild('search', { static: true }) searchTerm!: ElementRef;
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

  constructor(private shopService: ShopService) {
    this.shopParams = this.shopService.getShopParams();
  }

  ngOnInit(): void {
    this.getProducts(true);
    this.getBrands();
    this.getTypes();
  }

  getProducts(useCache = false): void {
    this.shopService.getProducts(useCache).subscribe({
      next: (response) => {
        if (response) {
          this.products = response.data;
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
    const params = this.shopService.getShopParams();
    params.brandId = brandId;
    params.pageNumber = 1;
    this.shopService.setShopParams(params);
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
    const params = this.shopService.getShopParams();
    this.shopParams.typeId = typeId;
    this.shopParams.pageNumber = 1;
    this.shopService.setShopParams(params);
    this.getProducts();
  }

  onSortSelected(event: Event): void {
    const params = this.shopService.getShopParams();
    const sort = (event.target as HTMLSelectElement).value;
    this.shopParams.sort = sort;
    this.shopService.setShopParams(params);
    this.getProducts();
  }

  onPageChanged(pageNumber: number): void {
    const params = this.shopService.getShopParams();
    if (params.pageNumber !== pageNumber) {
      params.pageNumber = pageNumber;
      this.shopService.setShopParams(params);
      this.getProducts(true);
    }
  }

  onSearch(): void {
    const params = this.shopService.getShopParams();
    params.search = this.searchTerm.nativeElement.value;
    params.pageNumber = 1;
    this.shopService.setShopParams(params);
    this.getProducts();
  }

  onReset(): void {
    this.searchTerm.nativeElement.value = '';
    this.shopParams = new ShopParams();
    this.shopService.setShopParams(this.shopParams);
    this.getProducts();
  }

}
