"use client";
import PostToCart from "@/lib/services/PostToCart";


 function addToCartButton(){

    function addToCart(){
        console.log("add to cart")
        alert("posting");
        PostToCart();

    }

    return(
         <button  onClick={addToCart} className="bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
            Add to Cart
          </button>
    )

 }

export default addToCartButton 

