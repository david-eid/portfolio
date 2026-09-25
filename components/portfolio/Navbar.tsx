import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import type { CSSProperties } from 'react';
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription, SheetClose } from '@/components/ui/sheet';
import { Logo } from './Logo';

export const navigation = ['About', 'Experience', 'Projects', 'Expertise', 'Contact'];

export function Navbar() {
  const { pathname } = useLocation();
  const sectionHref = (name: string) => `${pathname === '/' ? '' : '/'}#${name.toLowerCase()}`;
  const [open, setOpen] = useState(false);
  return <header className="navigation">
    <Link to="/" className="brand" aria-label="David Eid home"><Logo /><span>David Eid<span className="brand-sub">Engineering & intelligence</span></span></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(name => <a key={name} href={sectionHref(name)}>{name}</a>)}</nav>
    <div className="mobile-nav"><Sheet modal={false} open={open} onOpenChange={setOpen}>
      <SheetTrigger className="menu-trigger" aria-label="Open navigation"><Menu size={23} /></SheetTrigger>
      <SheetContent className="mobile-menu" showCloseButton={false}>
        <div className="menu-heading"><Logo /><SheetClose className="menu-trigger" aria-label="Close navigation"><X size={26} /></SheetClose></div>
        <SheetTitle className="sr-only">David Eid — navigation</SheetTitle>
        <SheetDescription className="menu-description">Computer Engineer / AI & Full-Stack Engineer</SheetDescription>
        <nav aria-label="Mobile navigation">{navigation.map((name, index) => <a key={name} href={sectionHref(name)} onClick={() => setOpen(false)} style={{ '--item-delay': `${100 + index * 60}ms` } as CSSProperties}><small>0{index + 1}</small>{name}<ArrowUpRight size={25} /></a>)}</nav>
        <p className="menu-location">Based in Lebanon. Building beyond borders.</p>
      </SheetContent>
    </Sheet></div>
  </header>;
}
