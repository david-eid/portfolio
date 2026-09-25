import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { Page, PageHeading } from '@/components/portfolio/Page';
import { education } from '../data/education';

export default function About() {
  return <Page className="about-page"><PageHeading index="03" label="About David">Engineering the<br /><span className="font-pixel">intelligence</span><br />behind digital products.</PageHeading><section className="about-introduction"><div className="about-portrait"><img src="/images/david-eid-portrait-cutout.png" width={1254} height={1254} alt="David Eid, Computer Engineer and AI & Full-Stack Engineer" loading="lazy" /><span className="eyebrow">David Eid / Lebanon</span></div><div><p className="large-copy">Computer Engineer.<br />AI & Full-Stack Engineer.<br /><span className="muted">A systems-first perspective.</span></p><p className="body-copy">Master’s candidate in Computer Engineering focused on Artificial Intelligence. I build advanced AI and software systems around LLMs, RAG, automation and scalable full-stack architectures — with an emphasis on performance, reliability and real-world impact.</p><p className="body-copy">My goal is to bring strong computer-engineering foundations and modern AI together to build serious, useful products.</p><Link className="primary-link" to="/projects">Explore my work <ArrowUpRight size={18} /></Link></div></section>
    <section className="split-section"><h2 className="eyebrow">Current focus</h2><div className="focus-grid">{['LLMs','RAG','AI Agents','Scalable Systems','Backend','Enterprise AI'].map((item,i)=><p key={item}><small>0{i+1}</small>{item}</p>)}</div></section>
    <div className="about-education-note"><span className="eyebrow">USEK / {education.period}</span><p>{education.degree} <span className="muted">/ {education.focus}</span></p><a href="/#education" className="text-link">Education & certifications <ArrowUpRight size={16} /></a></div>
  </Page>;
}
