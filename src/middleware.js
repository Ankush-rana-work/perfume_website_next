import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { PUBLIC_ROUTES } from "../lib/routes";

export default withAuth(
    function middleware(req) {
        const { nextUrl } = req;
        const { pathname, origin } = nextUrl;
        const isLoggedIn = req.nextauth.token;
        const isPublicRoute = PUBLIC_ROUTES.includes(pathname);

        console.log(req.nextauth.token, origin, 'anks', pathname)

        if (isPublicRoute) {
            return NextResponse.next();
        }

        if (!isPublicRoute && !isLoggedIn) {
            return Response.redirect(new URL("/signin", nextUrl));
        }
        console.log( 'rrrr')
       // return NextResponse.next();
    },
    {
        callbacks: {
            authorized: ({ token }) => true
        },
        pages: {
            signIn: '/signin',
        }
    });

export const config = {
    matcher: [
        "/((?!.+\\.[\\w]+$|_next).*)",
        "/(api|trpc)(.*)"
    ]
};
