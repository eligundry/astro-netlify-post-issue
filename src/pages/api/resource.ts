import type { APIRoute } from "astro";

export const prerender = false;

export const get: APIRoute = async () => {
  return {
    body: "Hello from the API!",
  };
};

export const post: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const file = data.get("file");
  if (!file) {
    return new Response("No file uploaded", { status: 400 });
  }

  return new Response(`Hello from the API! You uploaded ${file?.name}`, {
    status: 200,
  });
};
