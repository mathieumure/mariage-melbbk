import { ImageSize, synologyClient } from '@/modules/synology/synology.api';
import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest, { params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const cookieStore = await cookies();
  const sid = cookieStore.get('sid');
  if (!sid) {
    return Response.json('Missing authorization', { status: 401 });
  }

  const size = (request.nextUrl.searchParams.get('size') as ImageSize) || 'original';

  return synologyClient.getPhoto(name, size, sid.value);
}
