import ProductImageType from "./ProductImageType"

type ProductType = {
  "id": number,
  "name": string,
  "slug": string,
  "permalink": string,
  "description": string,
  "short_description": string,
  "sku": string,
  "price": string,
  "regular_price": string,
  "sale_price": string,
  "purchasable": boolean,
  "stock_quantity": number | null,
  "weight": string,
  "dimensions": {
    "length": string,
    "width": string,
    "height": string
  },
  "average_rating": string,
  "rating_count": number,
  "images": ProductImageType[],
  "stock_status": string,
}

export default ProductType;