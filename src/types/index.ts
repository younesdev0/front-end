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
    percentage:number;
  }
  
  export interface Product {
    ProductID: number;
    ProductName: string;
    Price: number;
    VentsParProduit: number;
  }
  
  export interface ProductSales {
    name: string;
    sales: number;
  }
  
  