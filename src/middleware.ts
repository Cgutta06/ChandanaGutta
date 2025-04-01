import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the current pathname
  const pathname = request.nextUrl.pathname
  
  // Don't redirect API routes and Next.js internal routes
  if (pathname.startsWith('/_next') || 
      pathname.startsWith('/api') ||
      pathname === '/ChandanaGutta_Resume.pdf') {
    return NextResponse.next()
  }
  
  // Check if we're on GitHub Pages (github.io domain)
  const isGitHubPages = request.headers.get('host')?.includes('github.io')
  
  if (isGitHubPages) {
    // If we're at the root without the /ChandanaGutta prefix, add it
    if (!pathname.startsWith('/ChandanaGutta')) {
      return NextResponse.redirect(new URL(`/ChandanaGutta${pathname}`, request.url))
    }
    
    // If we're at /ChandanaGutta without trailing slash, add it
    if (pathname === '/ChandanaGutta') {
      return NextResponse.redirect(new URL('/ChandanaGutta/', request.url))
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc.)
    '/((?!_next|api).*)',
  ],
}