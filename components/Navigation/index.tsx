 import getWpNavigation from "@/lib/services/getWpNavigation";
 import Link from "next/link";

async function Navigation(){

    const nav = await getWpNavigation();

return (

     <ul className="flex gap-6">
        { nav.map((item, index)=>(
            <li key={index}  className="hover:underline"><Link href={ item.url }>{item.title}</Link></li>
        ))}
     </ul>
)

}

export default Navigation;
