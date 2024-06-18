import classNames from '@/utils/tailwindClassNamesHelper';
import { FC, MouseEventHandler, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  style?: 'primary' | 'secondary';
} & (
  {
    type?: HTMLButtonElement['type'];
    onClick?: MouseEventHandler<HTMLButtonElement>;
  } | { 
    href: HTMLLinkElement['href'];
    rel: HTMLLinkElement['rel']
    target: HTMLLinkElement['target'];
  }
)

const buttonStyles: Record<'primary' | 'secondary', string> = {
  primary: 'ext-white from-purple-500 to-pink-700',
  secondary: 'text-white from-blue-500 to-indigo-700',
};

export const Button: FC<ButtonProps> = ({ style, children, ...props}) => {
  const baseStyle = 'text-center text-sm sm:title bg-gray-600 hover:bg-gradient-to-r py-2 w-28 sm:w-36 rounded-md transition-all';
 return 'href' in props ? (
    <a className={classNames(baseStyle, buttonStyles[style || 'primary'])} {...props}>
      {children}
    </a>
  ) : (
    <button className={classNames(baseStyle, buttonStyles[style || 'primary'])} {...props}>
      {children}
    </button>
  );
};
