import { synologyClient } from '@/modules/synology/synology.api';

import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  const cookieStore = await cookies();
  const sid = cookieStore.get('sid');
  if (!sid) {
    return Response.json('Missing authorization', { status: 401 });
  }
  const formData = await request.formData();

  await synologyClient.uploadFile(sid.value, formData.get('file') as File);

  return Response.json('ok');
}
