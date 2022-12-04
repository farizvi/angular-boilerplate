export interface IProduct {
    id: number;
    name: string;
    description: string;
    createdAt: Date;
}

export interface IProductsResult {
    products: IProduct[];
}