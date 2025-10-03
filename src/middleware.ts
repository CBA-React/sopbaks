import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const AUTH_ROUTES = {
    public: ['/sign-in', '/sign-up', '/forgot-password'],
    protected: [
        '/home',
        '/social',
        '/settings',
        '/ads',
        '/discover',
        '/faq',
        '/following',
        '/home',
        '/social',
        '/settings',
    ],
} as const;

export function middleware(request: NextRequest): NextResponse {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-pathname', request.nextUrl.pathname);

    const token = request.cookies.get('accessToken')?.value;
    const pathname = request.nextUrl.pathname;

    const isPublicRoute = AUTH_ROUTES.public.some(
        (route) => pathname === route || pathname.startsWith(route + '/'),
    );

    const isProtectedRoute = AUTH_ROUTES.protected.some((route) =>
        pathname.startsWith(route),
    );

    if (isProtectedRoute && !token) {
        const signInUrl = new URL('/sign-in', request.url);
        return NextResponse.redirect(signInUrl);
    }

    if (
        token &&
        (pathname.startsWith('/sign-in') || pathname.startsWith('/sign-up'))
    ) {
        return NextResponse.redirect(new URL('/home', request.url));
    }

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
