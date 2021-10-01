import { useRouter } from 'next/dist/client/router';
import { cloneElement, ReactElement } from 'react';
import Link, { LinkProps } from 'next/link';

interface AciveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink({ children, activeClassName, ...props }: AciveLinkProps) {
  const { asPath } = useRouter();
  const className = asPath === props.href ? activeClassName : '';

  return <Link {...props}>{cloneElement(children, { className })}</Link>;
}
