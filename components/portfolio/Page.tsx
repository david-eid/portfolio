import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { Footer } from './Footer';

export const EmbeddedPage = createContext(false);

export function Page({ children, className = '' }: { children: ReactNode; className?: string }) {
  const embedded = useContext(EmbeddedPage);
  if (embedded) return <div className={`inner-page ${className}`}>{children}</div>;
  return <><main id="main-content" tabIndex={-1} className={`inner-page ${className}`}>{children}</main><Footer /></>;
}

export function PageHeading({ index, label, children, description }: { index: string; label: string; children: ReactNode; description?: string }) {
  const Heading = useContext(EmbeddedPage) ? 'h2' : 'h1';
  return <header className="page-heading"><div className="page-topline"><p className="eyebrow"><span className="gold">{index}</span> / {label}</p><span className="eyebrow">David Eid — Engineering portfolio</span></div><Heading>{children}</Heading>{description && <p className="page-intro">{description}</p>}</header>;
}
