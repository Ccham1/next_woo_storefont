async function PostToCart() {
  await fetch("/api/cart/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      product_id: 29,
      quantity: 5,
    }),
  });

 setTimeout(() => {
  // use env url
  window.location.href = "https://wp.domain.com/cart/";
}, 2000);
}
export default PostToCart;