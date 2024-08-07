/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import classNames from '../../utils/classNames';

const techIconData: Record<string, { label: string; src: string; style?: string; }> = {
  react: {
    label: 'React',
    src: '/img/react.svg',
    style: 'bg-[#17333B] p-1',
  },
  next: {
    label: 'NextJs',
    src: '/img/next.svg',
  },
  node: {
    label: 'NodeJs',
    src: '/img/node.svg',
    style: 'bg-white',
  },
  js: {
    label: 'JavaScript',
    src: '/img/javascript.svg',
    style: 'bg-[#f7df1e] pb-0.5',
  },
  ts: {
    label: 'TypeScript',
    src: '/img/typescript.svg',
    style: 'bg-[#3178C6] pb-0.5',
  },
  tailwind: {
    label: 'Tailwind',
    src: '/img/tailwind.svg',
    style: 'bg-[#1C5C78] p-1',
  },
  puppeteer: {
    label: 'Puppeteer',
    src: '/img/puppeteer.svg',
    style: 'bg-[#17333B] p-1',
  },
};

type TechIconProps = {
  techId: string;
  className?: string;
  altIntlFn?: (techLabel: string) => string;
  withLabel?: boolean;
};

const TechIcon: FC<TechIconProps> = ({
  techId, className, altIntlFn, withLabel,
}) => (
  <>
    <img
      className={classNames(
        techIconData[techId].style || '',
        className,
      )}
      src={techIconData[techId].src}
      alt={altIntlFn ? altIntlFn(techIconData[techId].label) : techIconData[techId].label}
    />
    {withLabel && (
      <span className="text-gray-700">
        {techIconData[techId].label}
      </span>
    )}
  </>
);

export default TechIcon;
