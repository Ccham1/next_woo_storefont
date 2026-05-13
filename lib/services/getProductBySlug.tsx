import wooClient from "./clients/woo_client";
import ProductType from "@/types/productType";


const PRODUCT_BY_SLUG = process.env.WC_PRODUCT_BY_SLUG

async function getProductBySlug(slug:string): Promise<ProductType>{

    const response = await wooClient<ProductType[]>(`${PRODUCT_BY_SLUG}${slug}`, {}, "GET");

    const normalizedResponse = {
        ...response[0],
        price : Number(response[0].price).toFixed(2)
    }

    return normalizedResponse;

}

export default getProductBySlug;