import getProductBySlug from "@/lib/services/getProductBySlug";
import SafeHtml from "@/components/safeHtml";
import AddToCartButton from "@/components/AddToCartButton";

async function ProductPage(){

    const product = await getProductBySlug("hat");

    return(

    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div>
          <div className="aspect-square bg-gray-100 rounded-xl mb-4 flex items-center justify-center">
           <img src={product.images[0].src} alt={product.images[0].alt} />
          </div>

        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
          <SafeHtml html={product.short_description} as="p" className="text-gray-500 mb-4" />

          <div className="text-2xl font-bold mb-6">£{product.price}</div>

        <AddToCartButton />

          <div className="mt-6 text-sm text-gray-500 space-y-2">
            <p>Free shipping over €50</p>
            <p>30-day returns</p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-semibold mb-4">Product Details</h2>
            <SafeHtml html={product.description} as="p" className="text-gray-600 leading-relaxed max-w-3xl" />
      </div>
    </div>
    )
}

export default ProductPage;