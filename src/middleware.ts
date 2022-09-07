import type {NextFetchEvent, NextRequest} from "next/server";
import {NextResponse} from "next/server";
// In rewrite method you pass a page folder name(as a string). which // you create to handle underConstraction  functionalty.
export function middleware(request: NextRequest, ev: NextFetchEvent) {
  // return NextResponse.redirect(new URL("/login", request.url));
  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
