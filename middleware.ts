import { authMiddleware } from "@clerk/nextjs/server";
 
// See https://clerk.com/docs/references/nextjs/auth-middleware
// for more information about configuring your middleware
export default authMiddleware({
  // Public routes are routes that don't require authentication
  publicRoutes: [
    "/api/webhook/clerk",
    "/api/uploadthing",
  ],
  
  // Ignored routes are routes that the middleware will completely skip
  ignoredRoutes: ["/api/webhook/clerk"],
});
 
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
