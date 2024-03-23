import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(req) {
        const { pathname, origin } = req.nextUrl;
        console.log(req.nextauth.token,origin, 'anks')

        if (req.nextUrl.pathname.startsWith("/shop")) {
            return NextResponse.next();
        }else{
            return NextResponse.next();
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => {
                return token
            },
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
