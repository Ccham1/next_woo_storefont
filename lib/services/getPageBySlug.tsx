import wpClient from "./clients/wp_client"
import PageType from "@/types/PageType";


async function getPageBySlug(slug:string): Promise<PageType[]>{

    const response = await wpClient<PageType[]>(`pages?slug=${slug}`);
    return response;

}

export default getPageBySlug;