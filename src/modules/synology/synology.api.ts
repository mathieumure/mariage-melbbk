declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv {
      SYNOLOGY_BASE_URL: string;
      SYNOLOGY_PHOTO_DIR: string;
    }
  }
}

type SynologyResponse<T> = {
  success: boolean;
  data: T;
  error?: never;
};

type SynologyListResponse = {
  files: Array<{
    isdir: boolean;
    name: string;
    path: string;
  }>;
};

export type ImageSize = 'small' | 'medium' | 'large' | 'original';

class SynologyApi {
  public baseUrl: string;
  public photoDir: string;

  constructor(baseUrl: string, photoDir: string) {
    this.baseUrl = baseUrl;
    this.photoDir = photoDir;
  }

  async login(username: string, password: string): Promise<string> {
    const params = new URLSearchParams({
      api: 'SYNO.API.Auth',
      version: '3',
      method: 'login',
      account: username,
      passwd: password,
      session: 'FileStation',
      format: 'sid',
    });

    const loginResult = await fetch(`${this.baseUrl}/auth.cgi?${params}`);

    if (!loginResult.ok) {
      const reason = await loginResult.text();
      throw new Error('Login failed:' + reason);
    }

    const loginData: SynologyResponse<{ sid: string }> = await loginResult.json();
    if (!loginData.success) {
      throw new Error('Login failed:' + loginData.error);
    }

    return loginData.data.sid;
  }

  async cookieLogin(username: string, password: string): Promise<string> {
    const params = new URLSearchParams({
      api: 'SYNO.API.Auth',
      version: '3',
      method: 'login',
      account: username,
      passwd: password,
      session: 'FileStation',
    });

    const loginResult = await fetch(`${this.baseUrl}/auth.cgi?${params}`);

    if (!loginResult.ok) {
      const reason = await loginResult.text();
      throw new Error('Login failed:' + reason);
    }

    const loginData: SynologyResponse<{ did: string; sid: string }> = await loginResult.json();
    if (!loginData.success) {
      throw new Error('Login failed:' + loginData.error);
    }

    return loginResult.headers.get('set-cookie') as string;
  }

  // async uploadFile(file: File): Promise<SynologyResponse<unknown>> {
  //   const formData = new FormData();
  //   formData.append('path', `/photo/Mathieu/mariage`);
  //   formData.append('filename', file, `${Date.now()}_${file.name}`);
  //
  //   const params = new URLSearchParams({
  //     api: 'SYNO.FileStation.Upload',
  //     version: '3',
  //     method: 'upload',
  //     overwrite: 'true',
  //   });
  //
  //   console.log('uploading to ', `${this.baseUrl}/entry.cgi?${params}`, file.name);
  //   return fetch(`${this.baseUrl}/entry.cgi?${params}`, {
  //     method: 'POST',
  //     body: formData,
  //   }).then((it) => it.json());
  // }

  async getPhotoList(sid: string): Promise<SynologyResponse<SynologyListResponse>> {
    const params = new URLSearchParams({
      api: 'SYNO.FileStation.List',
      version: '2',
      method: 'list',
      folder_path: this.photoDir,
      pattern: '*.png,*.jpg,*jpeg',
      _sid: sid,
    });

    return fetch(`${this.baseUrl}/entry.cgi?${params}`).then((it) => it.json());
  }

  async getPhoto(path: string, size: ImageSize = 'small', sid: string): Promise<Response> {
    const params = new URLSearchParams({
      api: 'SYNO.FileStation.Thumb',
      version: '2',
      method: 'get',
      path: this.photoDir + '/' + path,
      size,
      _sid: sid,
    });

    return fetch(`${this.baseUrl}/entry.cgi?${params}`);
  }
}

export const synologyClient = new SynologyApi(process.env.SYNOLOGY_BASE_URL, process.env.SYNOLOGY_PHOTO_DIR);
