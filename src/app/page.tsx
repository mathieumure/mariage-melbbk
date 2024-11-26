'use client';
import React, {useRef, useState} from "react";
import {uploadFile} from "@/app/action";
import {Plus}  from '@/modules/icons/plus';
import classNames from "classnames";
import {Loader} from "@/modules/icons/loader";

export default function Home() {
    const [currentFile, setCurrentFile] = useState<File>()
    const fileInput = useRef<HTMLInputElement>(null);
    const [deletion, setDeletion] = useState<boolean>()
    const [sending, setSending] = useState<boolean>()
    function handleFileSelection(e: React.ChangeEvent<HTMLInputElement>) {
        setCurrentFile(e.target.files?.[0]);
    }

    function cancelFileSelection() {
        setDeletion(true);
        if (fileInput.current) {
            fileInput.current.value = '';
        }
        setTimeout(() => {
            setCurrentFile(undefined);
            setDeletion(false);
        }, 200)
    }

    async function sendFile() {
        setSending(true);
        console.log('sending file....');
        // await uploadFile(currentFile as File);
        // cancelFileSelection();
    }

  return (
      <main className="w-full h-full flex flex-col gap-4 p-4 items-center justify-center">
          <label className="absolute z-0 p-4 rounded-full outline-4 outline-emerald-500 outline-offset-4 bg-emerald-500 text-white drop-shadow-lg" tabIndex={0}>
            <Plus title="Charger votre photo" className="size-10" />
            <input ref={fileInput} className="hidden" type="file" name="file" accept="image/*" onChange={handleFileSelection} />
          </label>
          {currentFile &&
            <img className={classNames("object-contain z-10 h-48 h-full rounded-lg overflow-hidden popin", {reduce: deletion})} src={URL.createObjectURL(currentFile)} alt={currentFile.name} />
          }
          {currentFile &&
              <div className={classNames("absolute inset-0 pb-8 z-20 justify-end items-center flex flex-col gap-4 bg-gradient-to-t from-zinc-500 to-20% move-up", {'move-down': deletion})}>
                    <button type="button" onClick={sendFile} className="w-52 px-10 py-3 rounded-full bg-emerald-500 text-white drop-shadow-lg flex justify-center" disabled={sending}>{ sending ? <Loader className="animate-spin h-6" aria-label="Image en cours d'envoie" /> : 'Envoyer' }</button>
                    <button type="button" onClick={cancelFileSelection} className="w-52 px-10 py-3 rounded-full border-neutral-600 border-2 text-neutral-600 bg-white drop-shadow-lg">Annuler</button>
              </div>
          }
      </main>
  );
}
