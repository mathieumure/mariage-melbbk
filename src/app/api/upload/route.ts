// import { synlogyApiClient } from "@/modules/synology/synology.api";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv {
      SYNOLOGY_USERNAME: string;
      SYNOLOGY_PASSWORD: string;
    }
  }
}

export async function POST() {
  // await synlogyApiClient.login(process.env.SYNOLOGY_USERNAME, process.env.SYNOLOGY_PASSWORD);
  // const formData = await request.formData();
  // const data = await synlogyApiClient.uploadFile(formData.get('file') as File);
  //
  // if (!data.success) {
  //     console.log('not successfull !!!', data)
  //     return Response.json({ err: 'Cannot upload file', detail: data.error }, { status: 500 });
  // }

  await new Promise((resolve) => setTimeout(resolve, 2000));
  return Response.json({ success: true });
}
