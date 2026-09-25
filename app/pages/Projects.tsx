import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import { Page, PageHeading } from '@/components/portfolio/Page';
import { ProjectMedia } from '@/components/portfolio/ProjectMedia';

export default function Projects() {
  return <Page className="projects-page"><PageHeading index="01" label="Selected work" description="Intelligent products. Deliberate architecture. Engineering from the interface to the system.">Built to think.<br /><span className="font-pixel">Engineered to scale.</span></PageHeading>
    <div className="project-list">{projects.map((p,i)=><article key={p.slug} className={`project-preview ${p.featured?'project-cinematic':'project-secondary'}`}>
      <Link className="project-media-link" to={`/projects/${p.slug}`} aria-label={`View ${p.name} case study`}><ProjectMedia project={p} /></Link>
      <div className="project-copy"><p className="eyebrow"><span className="gold">0{i+1}</span> / {p.label}</p><h2><Link to={`/projects/${p.slug}`}>{p.name}</Link></h2><p className="project-description">{p.description}</p><ul className="tech-list" aria-label="Technologies">{p.technologies.map(t=><li key={t}>{t}</li>)}</ul><Link className="primary-link" to={`/projects/${p.slug}`}>View case <ArrowUpRight size={19} /></Link></div>
    </article>)}</div>
  </Page>;
}
