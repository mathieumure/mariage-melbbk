import { synologyClient } from '@/modules/synology/synology.api';

import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv {
      SYNOLOGY_USERNAME: string;
      SYNOLOGY_PASSWORD: string;
    }
  }
}

export async function POST(request: NextRequest) {
  const cookieStore = await cookies();
  const sid = cookieStore.get('sid');
  if (!sid) {
    return Response.json('Missing authorization', { status: 401 });
  }
  const formData = await request.formData();

  return synologyClient.uploadFile(sid.value, formData.get('file') as File);
}
