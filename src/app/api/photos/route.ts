'use server';

import { synologyClient } from '@/modules/synology/synology.api';
import { NextRequest } from 'next/server';

async function ensureLogin(request: NextRequest): Promise<string> {
  const authCookie = request.cookies.get('did');
  if (!authCookie) {
    return synologyClient.cookieLogin(process.env.SYNOLOGY_USERNAME, process.env.SYNOLOGY_PASSWORD);
  }
  return request.headers.get('Cookie') as string;
}

export async function GET(request: NextRequest) {
  const cookieLogin = await ensureLogin(request);

  const photoList = await synologyClient.getPhotoList(cookieLogin);

  if (photoList.error) {
    return Response.error();
  }

  const data = photoList.data.files.map((file) => `/api/photo/${file.name}`);

  const response = Response.json(data);
  if (cookieLogin) {
    response.headers.append('Set-Cookie', cookieLogin);
  }

  return response;
}
