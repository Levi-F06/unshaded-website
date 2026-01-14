import { serveFile } from "@std/http";

Deno.serve(req => {
  const pathname = new URL(req.url).pathname;

  switch(pathname) {
    case ("/"):
      return serveFile(req, "./src/index.html");
    default:
      return new Response(`404: no file '${pathname}' found :(`, {status: 404})
  }
})
