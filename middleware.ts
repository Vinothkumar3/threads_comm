import { authMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from 'next/server';
 
export default authMiddleware({
  // An array of routes that should be accessible to both signed-in and signed-out users.
  publicRoutes: ["/api/webhook/clerk", "/api/uploadthing"],

  beforeAuth(auth, req) {
    // Vercel diagnostic log
    console.log(`Middleware is running for path: ${req.nextUrl.pathname}`);
    return NextResponse.next();
  },
});
 
export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/clerk-middleware
  // for more information about configuring your Middleware
  matcher: [
    "/((?!.*\\..*|_next).*)", // Exclude static files
    "/",                      // Root
    "/(api|trpc)(.*)",         // API routes
    "/(auth)(.*)"             // Explicitly include auth routes
  ],
};
