export interface TotalSales {
    totalSales: number;
  }
  
  export interface TrendingProduct {
    productId: number;
    name: string;
    quantity: number;
    totalAmount: number;
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
  
  