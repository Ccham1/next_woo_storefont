import apiClient from "./apiClient"
import methodType from "@/types/ApiMethods";

const BASEURL = process.env.BASEURL;
const WP_API_BASE_URL= process.env.WP_API_BASE_URL;


async function wpClient<T>(url:string, options: RequestInit = {}, method:methodType = "GET"){

    const response = await apiClient<T>(`${BASEURL}${WP_API_BASE_URL}${url}`, options, method);

    return response;


}

export default wpClient;