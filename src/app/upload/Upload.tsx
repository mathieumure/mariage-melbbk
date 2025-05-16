'use client';
import { ChangeEvent, useState } from 'react';
import styles from './Upload.module.css';
import { UploadItem } from '@/app/upload/UploadItem';

export const UploadArea = () => {
  const [selectedFiles, setSelectedFiles] = useState<Array<File>>([]);

  const uploadFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFiles(Array.from(files));
    }
  };

  if (selectedFiles.length === 0) {
    return (
      <form>
        <label className={styles.fileUpload}>
          <span>Charger vos photos</span>
          <input type="file" name="file" onChange={uploadFiles} accept="image/png, image/jpeg" multiple />
        </label>
      </form>
    );
  }

  return (
    <ul className={styles.uploadedImages}>
      {selectedFiles.map((file) => (
        <UploadItem file={file} key={file.name} />
      ))}
    </ul>
  );
};
