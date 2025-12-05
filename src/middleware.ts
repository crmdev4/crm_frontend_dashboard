import type { NextRequest } from "next/server";
import { authMiddleware } from "./middleware/authMiddleware";

export function middleware(req: NextRequest) {
  console.log('Middleware is executing...'); // ✅ Check logs
  return authMiddleware(req); // Use auth middleware
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/", // Protect root path
  ],
};
