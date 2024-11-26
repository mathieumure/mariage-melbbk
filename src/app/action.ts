"use server";

import {synlogyApiClient} from "@/modules/synology/synology.api";

export async function uploadFile (file: File) {
    await synlogyApiClient.login(process.env.SYNOLOGY_USERNAME, process.env.SYNOLOGY_PASSWORD);
    const data = await synlogyApiClient.uploadFile(file);
    if (!data.success) {
        throw new Error();
    }
}