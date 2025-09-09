// import { NextResponse } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
//   return NextResponse.redirect(new URL('/', request.url))
// }
 
// export const config = {
//   matcher: '/about/:path*',
// }

// //if match this url then redirect to nextresponse

      // or another ways

import { NextResponse } from 'next/server'
 
export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}
