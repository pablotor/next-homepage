'use client';

import Image, { StaticImageData } from 'next/image';
import {
  FC, ReactNode, useCallback, useState,
} from 'react';
import { UnstableInfiniteScroll as InfiniteScroll } from 'react-photo-album/scroll';
import { RenderImageContext, RenderImageProps, RowsPhotoAlbum } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';

import 'react-photo-album/rows.css';
import 'yet-another-react-lightbox/styles.css';

import Spinner from './spinner';
import usePhotoFetcher from '../hooks/usePhotoFetcher';

const renderNextImage = (
  { alt = '', title, sizes }: RenderImageProps,
  { photo }: RenderImageContext,
) => (
  <div className="relative">
    <Image
      src={photo.src}
      width={photo.width}
      height={photo.height}
      alt={alt}
      title={title}
      sizes={sizes}
      className="animate-fade-in"
      // placeholder={'blurDataURL' in photo ? 'blur' : undefined}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-500 to-transparent opacity-0 transition-opacity hover:opacity-30" />
  </div>
);

type GenericPhotoGalleryProps = {
  photos: StaticImageData[];
  epilogue?: ReactNode;
};

const GenericPhotoGallery: FC<GenericPhotoGalleryProps> = ({ photos, epilogue }) => {
  const [lightboxPhotoIndex, setLightboxPhotoIndex] = useState<number | null>(null);
  const photoFetcher = usePhotoFetcher({ photos });

  const closeLightbox = useCallback(() => setLightboxPhotoIndex(null), []);

  return (
    <>
      <InfiniteScroll
        fetch={photoFetcher}
        onClick={({ event, index }) => {
          // let a link open in a new tab / new window / download
          if (event.shiftKey || event.altKey || event.metaKey) return;

          // prevent the default link behavior
          event.preventDefault();

          // open photo in the lightbox
          setLightboxPhotoIndex(index);
        }}
        loading={<Spinner className="size-5 fill-blue-500 text-gray-200" />}
        finished={epilogue}
        error={<div>Failed to fetch photos</div>}
      >
        <RowsPhotoAlbum
          photos={[]}
          render={{ image: renderNextImage }}
          targetRowHeight={200}
          breakpoints={[300, 600, 900]}
          sizes={{
            size: '1168px',
            sizes: [{ viewport: '(max-width: 1200px)', size: 'calc(100vw - 32px)' }],
          }}
          componentsProps={{ container: { style: { marginBottom: 20 } } }}
        />
      </InfiniteScroll>
      <Lightbox
        open={Boolean(typeof lightboxPhotoIndex === 'number' && photos[lightboxPhotoIndex])}
        close={() => closeLightbox()}
        index={lightboxPhotoIndex || 0}
        slides={photos}
        carousel={{ finite: true }}
        styles={{ root: { '--yarl__color_backdrop': 'rgba(0, 0, 0, .8)' } }}
        controller={{ closeOnBackdropClick: true, closeOnPullUp: true, closeOnPullDown: true }}
      />
    </>
  );
};

export default GenericPhotoGallery;
