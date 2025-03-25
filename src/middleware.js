import { NextResponse } from "next/server";


export function middleware(request) {
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        const token = request.cookies.get("authToken");

        const url = request.nextUrl.clone();

        if (!token) {
            url.pathname = '/login';
            return NextResponse.redirect(url);
        }
    }
    return NextResponse.next();
}