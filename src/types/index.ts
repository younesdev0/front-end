export interface TotalSales {
    totalSales: number;
  }
  
  export interface TrendingProduct {
    id: number;
    name: string;
    sales: number;
  }
  
  export interface CategorySales {
    category: string;
    sales: number;
  }
  
  export interface Product {
    id: number;
    name: string;
    dateAdded: string;
    price: number;
    totalSales: number;
  }
  
  export interface ProductSales {
    name: string;
    sales: number;
  }
  
  