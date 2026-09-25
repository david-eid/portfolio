import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { HeroPortrait } from '@/components/portfolio/HeroPortrait';
import { Logo } from '@/components/portfolio/Logo';
import { EmbeddedPage } from '@/components/portfolio/Page';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Expertise from './pages/Expertise';
import Contact from './pages/Contact';
import Education from './pages/Education';

export default function Home() {
  const [intro, setIntro] = useState<'pending' | 'play' | 'done'>(() => {
    try { return matchMedia('(prefers-reduced-motion: reduce)').matches || sessionStorage.getItem('davidPortfolioIntroPlayed') === 'true' ? 'done' : 'pending'; }
    catch { return 'done'; }
  });
  useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    let cancelled = false;
    let timer = 0;
    const finish = () => { setIntro('done'); try { sessionStorage.setItem('davidPortfolioIntroPlayed', 'true'); } catch { /* Storage may be disabled. */ } };
    const change = () => { if (reduced.matches) finish(); };
    if (intro === 'pending') {
      void Promise.resolve().then(() => {
        if (cancelled) return;
        if (reduced.matches) { finish(); return; }
        setIntro('play');
      });
    }
    if (intro === 'play') timer = window.setTimeout(finish, 2600);
    reduced.addEventListener('change', change);
    return () => { cancelled = true; clearTimeout(timer); reduced.removeEventListener('change', change); };
  }, [intro]);

  return <main id="main-content" tabIndex={-1} className="home" data-intro={intro}>
    {intro !== 'done' && <div className="intro-curtain" aria-hidden="true"><div className="intro-mark"><Logo /><span>David Eid</span></div></div>}
    <section className="portrait-hero" aria-label="David Eid - Computer Engineer">
      <h1 className="hero-word">ENGINEER</h1>
      <div className="hero-content">
        <div className="hero-copy home-reveal">
          <div className="hero-identity"><p>David Eid</p><p>Computer Engineer<br />AI &amp; Full-Stack Engineer</p></div>
          <p className="hero-introduction">I build intelligent systems and digital products, from LLM applications to scalable full-stack architectures.</p>
          <a className="hero-explore" href="#projects">Explore work <ArrowUpRight size={17} /></a>
        </div>
        <HeroPortrait />
      </div>
      <a className="hero-scroll" href="#projects">Scroll <ArrowDown size={12} /></a>
    </section>
    <EmbeddedPage.Provider value={true}>
      <section id="projects" className="home-section"><Projects /></section>
      <section id="experience" className="home-section"><Experience /></section>
      <section id="about" className="home-section"><About /></section>
      <section id="expertise" className="home-section"><Expertise /></section>
      <section id="education" className="home-section"><Education /></section>
      <section id="contact" className="home-section"><Contact /></section>
    </EmbeddedPage.Provider>
  </main>;
}
