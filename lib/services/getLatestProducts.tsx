import wooClient from "./clients/woo_client";
import ProductType from "@/types/productType";

 const latestProductQuery = "products?per_page=8&orderby=date&order=desc"
const PRODUCT_BASE_PATH = process.env.WC_PRODUCT_BASE;

async function getLatestProducts():Promise<ProductType[]>{

    const response = await wooClient<ProductType[]>(latestProductQuery,{}, "GET");
    console.log(response);

    return response.map((item: any) => ({
        ...item,
        slug: `${PRODUCT_BASE_PATH}${item.slug}`
     }));

}

export default getLatestProducts;