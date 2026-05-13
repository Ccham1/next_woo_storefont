import wooClient from "./clients/woo_client";
import ProductCategories from "@/types/ProductCategories";


const CATEGORY_BASE_PATH = process.env.WC_CATEGORY_BASE

async function getProductCategories(): Promise<ProductCategories[]>{

    const response = await wooClient<ProductCategories[]>("products/categories",{},"GET");
    console.log(response);
    const filteredCategories = response.filter((item)=> item.name != "Uncategorized" );

    return filteredCategories.map((item: ProductCategories) => ({
        ...item,
        slug: `${CATEGORY_BASE_PATH}${item.slug}`
     }));
}

export default getProductCategories;