import wpClient from "./clients/wp_client";
import navigation from "@/types/Navigation";

async function getWpNavigation(){

    const response  = await wpClient<navigation[]>("menu-items", {},"GET");

    // normalize data
    return response.map((item: any) => ({
        ...item,
        title: item.title.rendered
     }));

}

export default getWpNavigation;