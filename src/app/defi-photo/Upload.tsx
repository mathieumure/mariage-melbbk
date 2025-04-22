'use client';
import { ChangeEvent, useState } from 'react';
import styles from './defi-photo.module.css';
import axios from 'axios';
import { ProgressBar } from '@/modules/progress/ProgressBar';

type Props = {
  filename: string;
  initialFile?: string;
  allowReplace?: boolean;
};
export const UploadArea = ({ filename, initialFile, allowReplace }: Props) => {
  const [selectedFile, setSelectedFile] = useState<string | null>(initialFile || null);
  const [uploadProgress, setUploadProgress] = useState(-1);
  const uploadFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
      const formData = new FormData();
      const extension = file.name.slice(file.name.lastIndexOf('.'));
      formData.append('file', new File([file], `${filename}${extension}`));

      setUploadProgress(0);
      axios
        .request({
          method: 'POST',
          url: '/api/upload',
          data: formData,
          onUploadProgress: (p) => {
            setUploadProgress(Math.floor((p.loaded / (p.total || 100)) * 100));
          },
        })
        .then(() => {
          setUploadProgress(-1);
        })
        .catch();
    }
  };

  const changeFile = () => {
    setSelectedFile(null);
  };

  if (!selectedFile) {
    return (
      <form>
        <label className={styles.fileUpload}>
          <span>Charger la photo du défi</span>
          <input type="file" name="file" onChange={uploadFile} accept="image/png, image/jpeg" />
        </label>
      </form>
    );
  }

  return (
    <div className={styles.uploadedImage}>
      <img src={selectedFile} alt="" loading="lazy" />
      {uploadProgress !== -1 && (
        <div className={styles.overlay}>
          <ProgressBar amount={uploadProgress} />
        </div>
      )}
      {uploadProgress === -1 && allowReplace && (
        <div className={styles.actions}>
          <button type="button" onClick={changeFile}>
            Remplacer la photo
          </button>
        </div>
      )}
    </div>
  );
};
