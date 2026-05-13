export async function POST(req) {
  const body = await req.json();

  const response = await fetch(
    "https://wp.domain.com/?wc-ajax=add_to_cart",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Cookie: req.headers.get("cookie") || "",
      },
      body: new URLSearchParams(body),
    }
  );

  const cookies = response.headers.getSetCookie?.() || [];
  const data = await response.text();

  const headers = new Headers();
  headers.set("Content-Type", "application/json");

  cookies.forEach((c) => headers.append("Set-Cookie", c));

  return new Response(data, {
    headers,
  });
}