type Product = {
    id: number;
    name: string;
    price: string;
    color ?: string;
};

type ProductSummary = Pick<Product, "id" | "name" | "price">;

type ProductWithOutStock = Omit<Product, "stock" | "color">;

type OptionProduct = Partial<Product>;