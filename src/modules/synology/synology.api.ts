declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv {
      SYNOLOGY_BASE_URL: string;
    }
  }
}

type SynologyResponse<T> = {
  success: boolean;
  data: T;
  error?: never;
};

class SynologyApi {
  public baseUrl: string;
  public sid?: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async login(username: string, password: string) {
    const params = new URLSearchParams({
      api: 'SYNO.API.Auth',
      version: '3',
      method: 'login',
      account: username,
      passwd: password,
      session: 'FileStation',
      format: 'sid',
    });

    const loginResult: SynologyResponse<{ did: string; sid: string }> = await fetch(`${this.baseUrl}/auth.cgi?${params}`).then((it) => it.json());

    if (!loginResult.success) {
      throw new Error(loginResult.error);
    }

    this.sid = loginResult.data.sid;
  }

  async uploadFile(file: File): Promise<SynologyResponse<unknown>> {
    if (!this.sid) {
      throw new Error('Not logged in');
    }

    const formData = new FormData();
    formData.append('path', `/photo/Mathieu/mariage`);
    formData.append('filename', file, `${Date.now()}_${file.name}`);

    const params = new URLSearchParams({
      api: 'SYNO.FileStation.Upload',
      version: '3',
      method: 'upload',
      overwrite: 'true',
      _sid: this.sid,
    });

    console.log('uploading to ', `${this.baseUrl}/entry.cgi?${params}`, file.name);
    return fetch(`${this.baseUrl}/entry.cgi?${params}`, {
      method: 'POST',
      body: formData,
    }).then((it) => it.json());
  }
}

export const synlogyApiClient = new SynologyApi(process.env.SYNOLOGY_BASE_URL);
