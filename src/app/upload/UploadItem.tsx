import styles from '@/app/upload/Upload.module.css';
import { ProgressBar } from '@/modules/progress/ProgressBar';
import { useEffect, useState } from 'react';
import { useUser } from '@/contexts/user.context';
import axios from 'axios';

type Props = {
  file: File;
};
export const UploadItem = ({ file }: Props) => {
  const user = useUser();
  const filePath = URL.createObjectURL(file);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [hasError, setHasError] = useState(false);

  const uploadFile = async () => {
    setUploadProgress(0);
    const formData = new FormData();
    formData.append('file', new File([file], `${user.name}_${file.name}`));
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
      .catch(() => {
        setUploadProgress(-1);
        setHasError(true);
      });
  };

  useEffect(() => {
    uploadFile();
  }, []);

  return (
    <li className={styles.uploadedImagesItem}>
      <img src={filePath} alt="" loading="lazy" />
      {uploadProgress !== -1 ? (
        <ProgressBar amount={uploadProgress} />
      ) : hasError ? (
        <>
          <p style={{ color: 'var(--pink)' }}>❌Une erreur est survenue</p>
          <button onClick={uploadFile}>Ré-essayer</button>
        </>
      ) : (
        <p>✅ Chargement terminé</p>
      )}
    </li>
  );
};
