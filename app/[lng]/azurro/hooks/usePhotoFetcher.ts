import { StaticImageData } from 'next/image';
import { Photo } from 'react-photo-album';

type Props = {
  photos: StaticImageData[];
  batchSize?: number;
  maxBatches?: number;
};

const usePhotoFetcher = (
  { photos, batchSize = 30, maxBatches = 100 }: Props,
) => (index: number) => new Promise<Photo[] | null>((resolve, reject) => {
  if (!navigator.onLine) {
    reject(new Error('Failed to load photos'));
    return;
  }

  const batch = batchSize * index < photos.length && (maxBatches <= 0 || index < maxBatches)
    ? photos.slice(batchSize * index, batchSize * (index + 1))
    : null;
  resolve(batch);
});

export default usePhotoFetcher;
