
import { categoryModel } from './category.model';
import { tagModel } from './tag.model';
import { imageModel } from './image.model';
import { attributeModel } from './attribute.model';
import { translationModel } from './translation.model';


export class productModel {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  type: string;
  status: string;
  featured: boolean;
  catalog_visibility: string;
  description: string;
  short_description: string;
  sku: string;
  price: number;
  regular_price: number;
  price_html: string;
  on_sale: boolean;
  total_sales: number // interesante, nº de ventas?!
  virtual: boolean; // type
  downloadable: boolean; // type
  tax_status: string; // taxable
  tax_class: string;
  stock_quantity: number; // nullable
  stock_status: string; // "instock"
  sold_individually: boolean;
  dimensions: {
    "length": "",
    "width": "",
    "height": ""
  };
  related_ids: [number];
  categories: [categoryModel];
  tags: [tagModel];
  images: [imageModel];
  attributes: [attributeModel];
  default_attributes: [attributeModel];
  variations: [number];
  translations: {translationModel};
}
