import { FC } from 'react';
import classNames from '../utils/classNames';

type EmailLinkProps = {
  email: string;
  className?: string;
};

const EmailLink: FC<EmailLinkProps> = ({ email, className }) => (
  <a
    href={`mailto:${email}`}
    className={classNames(
      'gradient-b bg-clip-text text-gray-600 transition-all hover:text-transparent',
      className,
    )}
  >
    {email}
  </a>
);

export default EmailLink;
