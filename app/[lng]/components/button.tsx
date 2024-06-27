/* eslint-disable react/button-has-type */
import { FC, MouseEventHandler, ReactNode } from 'react';
import classNames from '../utils/classNames';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
} & (
  {
    type?: HTMLButtonElement['type'];
    onClick?: MouseEventHandler<HTMLButtonElement>;
  } | {
    href: HTMLLinkElement['href'];
    rel: HTMLLinkElement['rel']
    target: HTMLLinkElement['target'];
  }
);

const baseStyle = 'text-center text-sm sm:title bg-gray-600 hover:bg-gradient-to-r py-2 w-28 sm:w-36 rounded-md transition-all';

const buttonVariants: Record<'primary' | 'secondary', string> = {
  primary: 'ext-white from-purple-500 to-pink-700',
  secondary: 'text-white from-blue-500 to-indigo-700',
};

export const Button: FC<ButtonProps> = ({ variant, children, ...props }) => {
  const style = classNames(baseStyle, buttonVariants[variant || 'primary']);
  return 'href' in props ? (
    <a className={style} {...props}>
      {children}
    </a>
  ) : (
    <button className={style} {...props}>
      {children}
    </button>
  );
};
