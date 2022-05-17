import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
    const url = req.nextUrl.clone()
  if (url.pathname === "/") {
    const session = await getToken({
      req,
      secret: process.env.JWT_SECRET,
      secureCookie: process.env.NODE_ENV === "production",
    });
    // You could also check for any property on the session object,
    // like role === "admin" or name === "John Doe", etc.
    url.pathname = "/home"
    if (!session) return NextResponse.redirect(url);
    // If user is authenticated, continue.
  }
}



