import apiClient from "./apiClient";
import methodType from "@/types/ApiMethods";

const BASEURL = process.env.BASEURL ?? ''
const WOO_API_BASE = process.env.WOO_API_BASE_URL ?? ''
const WOO_CUSTOMER_KEY = process.env.WOO_CUSTOMER_KEY ?? '';
const WOO_SECERT_KEY = process.env.WOO_SECERT_KEY ?? '';
const auth = btoa(`${WOO_CUSTOMER_KEY}:${WOO_SECERT_KEY}`);


function wooClient<T>(url:string, options: RequestInit = {}, method: methodType = 'GET'){
    
    return apiClient<T>(`${BASEURL}${WOO_API_BASE}${url}`,{
        ...options,
        method,
        headers:{
             "Authorization": `Basic ${auth}`,
             "Content-Type": "application/json",
             ...(options.headers || {})
        }
    });
}

export default wooClient;