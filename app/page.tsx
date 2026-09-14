'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription } from '@/components/ui/sheet';

const links = ['About', 'Projects', 'Expertise'];
const expertise = ['AI engineering', 'LLM systems', 'Full-stack', 'Scalable systems'];

export default function Home() {
  const hero = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useLayoutEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const pointer = matchMedia('(hover: hover) and (pointer: fine) and (min-width: 1025px)');
    let frame = 0;
    let x = 0, y = 0, targetX = 0, targetY = 0;
    let disposed = false;
    let timer = 0;
    let settled = document.documentElement.dataset.intro === 'done';
    try {
      if (sessionStorage.getItem('davidPortfolioIntroPlayed') === 'true') settled = true;
    } catch {}
    if (reduced.matches || settled) {
      document.documentElement.dataset.intro = 'done';
      settled = true;
    } else {
      const portrait = hero.current?.querySelector<HTMLImageElement>('.portrait');
      // Keep the curtain in place until the original-photo cutout is decoded.
      Promise.allSettled([portrait?.decode()]).then(() => {
        if (disposed || reduced.matches) return;
        document.documentElement.dataset.intro = 'play';
        timer = window.setTimeout(() => {
          settled = true;
          try { sessionStorage.setItem('davidPortfolioIntroPlayed', 'true'); } catch {}
        }, matchMedia('(max-width: 600px)').matches ? 2200 : 2700);
      });
    }
    const update = () => {
      x += (targetX - x) * .075;
      y += (targetY - y) * .075;
      hero.current?.style.setProperty('--px', `${x}px`);
      hero.current?.style.setProperty('--py', `${y}px`);
      frame = Math.abs(targetX - x) + Math.abs(targetY - y) > .015 ? requestAnimationFrame(update) : 0;
    };
    const move = (event: PointerEvent) => {
      if (!settled || reduced.matches || !pointer.matches || !hero.current) return;
      const rect = hero.current.getBoundingClientRect();
      targetX = ((event.clientX - rect.left) / rect.width - .5) * 10;
      targetY = ((event.clientY - rect.top) / rect.height - .5) * 6;
      if (!frame) frame = requestAnimationFrame(update);
    };
    const reset = () => { targetX = 0; targetY = 0; if (!frame) frame = requestAnimationFrame(update); };
    const motionChange = () => {
      if (reduced.matches) { document.documentElement.dataset.intro = 'done'; settled = true; }
      reset();
    };
    const element = hero.current;
    element?.addEventListener('pointermove', move);
    element?.addEventListener('pointerleave', reset);
    reduced.addEventListener('change', motionChange);
    pointer.addEventListener('change', reset);
    return () => {
      disposed = true;
      clearTimeout(timer); cancelAnimationFrame(frame);
      element?.removeEventListener('pointermove', move);
      element?.removeEventListener('pointerleave', reset);
      reduced.removeEventListener('change', motionChange);
      pointer.removeEventListener('change', reset);
    };
  }, []);

  return (
    <main>
      <a className="skip-link" href="#projects">Skip to selected work</a>
      <div className="intro-curtain" aria-hidden="true"><div className="intro-mark"><span className="monogram">DE<span>.</span></span><span>David Eid</span></div></div>
      <section className="hero" id="top" ref={hero} aria-label="David Eid, engineer">
        <header className="navigation reveal">
          <a href="#top" className="monogram" aria-label="David Eid home">DE<span>.</span></a>
          <nav className="desktop-nav" aria-label="Main navigation">{links.map(link => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}</nav>
          <span className="nav-location">Beirut, Lebanon <span className="location-dot" /></span>
          <div className="mobile-nav">
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger className="menu-trigger" aria-label="Open navigation"><span /><span /></SheetTrigger>
              <SheetContent className="mobile-menu">
                <SheetTitle>David Eid</SheetTitle><SheetDescription>Computer Engineer / AI & Full-Stack</SheetDescription>
                <nav aria-label="Mobile navigation">{links.map((link, index) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}><small>0{index + 1}</small>{link}<span>↗</span></a>)}</nav>
                <p>Beirut, Lebanon</p>
              </SheetContent>
            </Sheet>
          </div>
        </header>
        <div className="hero-name reveal"><h1>David Eid</h1><p>Computer engineering / AI / Software systems</p></div>
        <div className="word-position" aria-hidden="true"><div className="word-depth"><div className="hero-word">ENGINEER</div></div></div>
        <div className="portrait-position"><div className="portrait-depth"><img className="portrait" src="/images/david-eid-portrait-cutout.png" alt="David Eid wearing a gray blazer and black shirt" width="1254" height="1254" fetchPriority="high" decoding="sync" /></div></div>
        <div className="hero-information">
          <div className="identity"><p className="identity-name reveal">David Eid</p><p className="role reveal">Computer Engineer</p><p className="role second-role reveal">AI & Full-Stack Engineer</p><p className="location reveal">Beirut, Lebanon</p><a className="editorial-link reveal" href="#projects">Explore work <span aria-hidden="true">↗</span></a></div>
          <div className="hero-expertise" aria-label="Areas of expertise">{expertise.map((item, i) => <p className={`reveal expertise-line expertise-${i}`} key={item}>{item}</p>)}</div>
        </div>
        <a className="scroll-cue reveal" href="#projects">Scroll to explore <span aria-hidden="true">↓</span></a>
        <span className="hero-index reveal" aria-hidden="true">01 — Introduction</span>
      </section>
      <section className="selected dark" id="projects" aria-labelledby="work-heading">
        <div className="section-topline"><p>Selected / 2026</p><span>Engineering in practice</span></div>
        <h2 id="work-heading">Built to think.<br /><span>Engineered to scale.</span></h2>
        <div className="project-list">{['AEGIS AI', 'NEXUS AI', 'DOCUMIND AI'].map((name, index) => <article className="project-row" key={name}><span className="project-number">0{index + 1}</span><h3>{name}</h3><span className="project-label">Selected project</span></article>)}</div>
      </section>
      <section className="about dark" id="about" aria-labelledby="about-heading"><p className="eyebrow">02 / About</p><div><h2 id="about-heading">David Eid.<br /><span>Engineer.</span></h2><p className="about-copy">Computer Engineer.<br />AI & Full-Stack Engineer.<br />Based in Beirut, Lebanon.</p></div></section>
      <section className="expertise-section dark" id="expertise" aria-labelledby="expertise-heading"><p className="eyebrow" id="expertise-heading">03 / Expertise</p><div>{expertise.map((item, index) => <div className="expertise-row" key={item}><span>0{index + 1}</span><h2>{item}</h2></div>)}</div></section>
      <footer className="dark"><a className="monogram" href="#top" aria-label="Back to top">DE<span>.</span></a><p>David Eid © 2026</p><a className="footer-top" href="#top">Back to top ↑</a></footer>
    </main>
  );
}
