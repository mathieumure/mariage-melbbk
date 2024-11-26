import {synlogyApiClient} from "@/modules/synology/synology.api";

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            SYNOLOGY_USERNAME: string;
            SYNOLOGY_PASSWORD: string;
        }
    }
}

export async function GET() {
    try {
        const data = await synlogyApiClient.login(process.env.SYNOLOGY_USERNAME, process.env.SYNOLOGY_PASSWORD);

        return Response.json(data);
    } catch (err) {
        console.error(err)
        return Response.json({error: err}, {status: 500});
    }
}