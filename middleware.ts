import { authMiddleware } from "@clerk/nextjs/server";
 
export default authMiddleware({
  // An array of routes that should be accessible to both signed-in and signed-out users.
  // By default, all routes are protected.
  publicRoutes: ["/api/webhook/clerk", "/api/uploadthing"],
});
 
export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/clerk-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.*\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
