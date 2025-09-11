import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/choosecareerpath",
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  if (!userId && isProtectedRoute(req)) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }
});

export const config = {
  matcher: ["/dashboard(.*)", "/choosecareerpath", "/api/:path*"],
};
