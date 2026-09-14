import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'David Eid — Computer Engineer | AI & Full-Stack',
  description: 'David Eid, Computer Engineer and AI & Full-Stack Engineer based in Beirut, Lebanon. Selected work in AI engineering, LLM systems, and scalable software.',
};

const introScript = `(function(){try{document.documentElement.dataset.intro=window.matchMedia('(prefers-reduced-motion: reduce)').matches||sessionStorage.getItem('davidPortfolioIntroPlayed')==='true'?'done':'pending'}catch(e){document.documentElement.dataset.intro='done'}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><head><link rel="preload" as="image" href="/images/david-eid-portrait-cutout.png" /><script dangerouslySetInnerHTML={{ __html: introScript }} /></head><body>{children}</body></html>;
}
