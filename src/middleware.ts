import { NextRequest, NextResponse } from 'next/server';
import { synologyClient } from '@/modules/synology/synology.api';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const cookieStore = request.cookies;
  const authCookie = cookieStore.get('sid');
  if (!authCookie || !authCookie.value) {
    const authResponse = await synologyClient.login(process.env.SYNOLOGY_USERNAME, process.env.SYNOLOGY_PASSWORD);
    response.cookies.set('sid', authResponse, { maxAge: 60 * 60 * 24 * 7 }); // 7 days
    cookieStore.set('sid', authResponse);
  }

  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/gallery'],
};
