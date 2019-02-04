import { Injectable } from '@angular/core';
import { productModel } from '../models/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  client_key: 'ck_879f8bd1d2a2301308bc48d4d14e41ca92bcb557';
  client_secret_key: 'cs_cee132693c5919331472ffe248491159d5404ef3';

  constructor( private http: HttpClient ) {
    console.log('Wordpress API ready!');
  }

  getQuery( query:string ) {
    const url = `https://www.sixpro.eu/wp-json/wc/v3/${ query }`;
    //const url = `https://localhost:8100/wp-json/wc/v3/${ query }`;

    console.log(url);

    const headers = new HttpHeaders({
      'Authentication': 'Basic Y2tfODc5ZjhiZDFkMmEyMzAxMzA4YmM0OGQ0ZDE0ZTQxY2E5MmJjYjU1Nzpjc19jZWUxMzI2OTNjNTkxOTMzMTQ3MmZmZTI0ODQ5MTE1OWQ1NDA0ZWYz',
      'Access-Control-Allow-Origin': '*',
    });

    return this.http.get(url, { headers } );
  }

  getAllPublishedProducts(): any {
    return this.getQuery('products?status=publish&stock_status=instock');
  }

}
