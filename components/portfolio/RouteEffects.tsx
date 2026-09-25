import { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import { projects } from '@/app/data/projects';

const titles: Record<string, string> = { '/about': 'About', '/experience': 'Experience', '/projects': 'Selected Projects', '/expertise': 'Expertise', '/contact': 'Contact' };
const description = 'Portfolio of David Eid, a Computer Engineer and AI & Full-Stack Engineer building LLM applications, enterprise AI systems and scalable software.';

export function RouteEffects() {
  const { pathname, hash } = useLocation();
  const previous = useRef(pathname);
  useLayoutEffect(() => {
    const project = projects.find(p=>pathname===`/projects/${p.slug}`);
    const title = project?.name ?? titles[pathname];
    document.title = pathname==='/' ? 'David Eid — Computer Engineer & AI / Full-Stack Engineer' : `${title ?? 'Page Not Found'} — David Eid`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', project?.description ?? description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', pathname==='/'?'David Eid — AI & Software Engineering':document.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', project?.description ?? description);
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    else if (previous.current !== pathname || !hash) window.scrollTo({top:0,behavior:'instant'});
    if (previous.current !== pathname) document.querySelector<HTMLElement>('#main-content')?.focus({preventScroll:true});
    previous.current = pathname;
  }, [pathname, hash]);
  return null;
}
