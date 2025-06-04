export type  IBackendApiType = {
  url : string 
  method : string
} 
export interface navItemType {
  id: number ;
  label : string ;
  href : string;
}

export type CardItem ={
  title:string
  link:{text:string; href:string}
  items:{
    name:string
    items?:string[]
    image:string
    href:string
  }[]
}


export interface IProduct {
  name: string;
  description: string;
  price: number;
  listPrice?: number;
  countInStock?: number;
  numSales: number;
  category: string;
  brand: string;
  sizes?: string[];
  colors?: string[];
  images?: string[];
  isPublished: boolean;
  avgRating: number;
  numReviews: number;
  tags?: string[];
  reviews?: any[];
}



