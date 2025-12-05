import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
//import axios from "axios";

// Auth middleware function
export async function authMiddleware(req: NextRequest) {
  const token = req.cookies.get("authToken")?.value;
  //const baseURL = "https://auth.rentfms.com/api";

  if (!token) {
    // If no token is found, redirect to the login page
    // Allow access to auth pages
    if (req.nextUrl.pathname.startsWith("/auth")) {
      return NextResponse.next();
    }
    // Redirect all other pages to login
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  // If user is logged in and trying to access auth pages, redirect to dashboard
  if (req.nextUrl.pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

/*   try {
    const check = await axios.get(`${baseURL}/users/validate-token`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (check.status !== 200) {
      // If the token is invalid, redirect to the login page
      if (req.nextUrl.pathname.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }
  } catch (error) {
    console.error("Token validation failed", error);
    // If there is an error during token validation, redirect to the login page
    if (req.nextUrl.pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  } */

  return NextResponse.next();
}