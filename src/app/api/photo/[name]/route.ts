import { ImageSize, synologyClient } from '@/modules/synology/synology.api';
import { NextRequest } from 'next/server';

async function ensureLogin(request: NextRequest): Promise<string> {
  const authCookie = request.cookies.get('did');
  if (!authCookie) {
    return synologyClient.cookieLogin(process.env.SYNOLOGY_USERNAME, process.env.SYNOLOGY_PASSWORD);
  }
  return request.headers.get('Cookie') as string;
}

export async function GET(request: NextRequest, { params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const size = (request.nextUrl.searchParams.get('size') as ImageSize) || 'original';
  const cookieLogin = await ensureLogin(request);

  const photoList = await synologyClient.getPhoto(name, size, cookieLogin);

  const response = new Response(photoList, {
    headers: {
      'Content-Type': 'image/jpeg',
    },
  });

  return response;
}
