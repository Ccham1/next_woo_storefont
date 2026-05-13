import methodType from "@/types/ApiMethods";

 async function apiClient<T>(url:string, options:RequestInit = {}, method:methodType = "GET"): Promise<T> {
   
        const response = await fetch(url,{
            ...options,
            method:method,
            headers: {
              ...(options.headers || {})
            },
            body: options.body ? JSON.stringify(options.body) : undefined
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`)
        }
        const  data = await response.json() as T;

        return data;
    
}

export default apiClient;