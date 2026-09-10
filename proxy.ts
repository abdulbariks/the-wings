import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const url = request.nextUrl;

  if (url.pathname.startsWith("/api/")) {
    const apiUrl = new URL(
      "/api",
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
    );
    const proxyUrl = new URL(url.pathname.replace(/^\/api\//, "/"), apiUrl);
    proxyUrl.search = url.search;

    return NextResponse.rewrite(proxyUrl.toString(), {
      headers: {
        "x-proxied-by": "elizabeth-frontend",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};
