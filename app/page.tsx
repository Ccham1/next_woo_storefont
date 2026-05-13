import getProductCategories from "@/lib/services/getProductCategories";
import getLatestProducts from "@/lib/services/getLatestProducts";
import Link from "next/link";
import ProductType from "@/types/productType";
import getPageBySlug from "@/lib/services/getPageBySlug";
import ProductCategories from "@/types/ProductCategories";
import SafeHtml from "@/components/safeHtml";

export default async function Home() {

  const latestProducts = await getLatestProducts();
  const categories = await getProductCategories();
  const data = await getPageBySlug("shop");
  const page  = data[0];

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-7xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
  
    <SafeHtml html={page.acf.h1} as="h1" className="text-4xl font-bold" />
    <img src={page.custom_image_url} alt={page.slug} />
    <div className="w-full max-w-7xl mx-auto my-9">
      <h3 className="text-2xl font-bold">Categories</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {categories.map((category : ProductCategories ) => (
          <div
            key={category.id}
            className="bg-black text-white rounded-xl p-6 shadow-md hover:shadow-lg transition hover:scale-[1.02]"
          >
            <Link href={`${category.slug}`}>
              <h1 className="text-lg font-semibold hover:underline">
                {category.name}
              </h1>
            </Link>
          </div>
        ))}
      </div>
    </div>

       <h3 className="text-2xl font-bold">Latest Products</h3>
      <div className="grid grid-cols-4 gap-6">
       
            {latestProducts.map((product: ProductType) => (
              <div
                key={product.id}
                className="md:col-span-2 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition transition hover:scale-[1.02]"
              >
                <Link href={`${product.slug}`}>
                  <img
                    src={product.images?.[0]?.src}
                    alt={product.images?.[0]?.alt || product.name}
                    title={product.name}
                    className="w-full h-48 object-cover"
                  />
                </Link>

                <div className="p-4 flex flex-col gap-2">
                  <h1 className="text-lg font-semibold">{product.name}</h1>
                  <strong>${product.price }</strong>
                  <Link href={`${product.slug}`}>
                    <button className="mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                      View More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
      </div>

      </main>
    </div>
  );
}
