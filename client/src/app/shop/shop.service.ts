import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBrand } from '@app/shared/models/brand';
import { IPagination } from '@app/shared/models/pagination';
import { IType } from '@app/shared/models/productType';
import { ShopParams } from '@app/shared/models/shopParams';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(
    private http: HttpClient,
  ) { }

  getProducts({ brandId, typeId, sort, pageNumber, pageSize, search }: ShopParams) {
    let params = new HttpParams();

    if (brandId !== 0) {
      params = params.append('brandId', brandId.toString());
    }

    if (typeId !== 0) {
      params = params.append('typeId', typeId.toString());
    }

    params = params.append('sort', sort);
    params = params.append('pageIndex', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());
    params = params.append('search', search);

    return this.http.get<IPagination>(`${this.baseUrl}products`, { observe: 'response', params })
      .pipe(
        map(response => response.body)
      );
  }

  getBrands() {
    return this.http.get<IBrand[]>(`${this.baseUrl}products/brands`);
  }

  getTypes() {
    return this.http.get<IType[]>(`${this.baseUrl}products/types`);
  }
}
