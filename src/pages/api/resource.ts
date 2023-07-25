import type { APIRoute } from "astro";

export const get: APIRoute = () => {
  return {
    body: "Hello from the API!",
  };
};

export const post: APIRoute = () => {
  return {
    body: "You posted to the API!",
  };
};
