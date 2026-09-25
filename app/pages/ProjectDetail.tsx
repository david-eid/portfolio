import { Link, useParams } from 'react-router';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import { Page } from '@/components/portfolio/Page';
import { ProjectMedia } from '@/components/portfolio/ProjectMedia';
import NotFound from './NotFound';

export default function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex(p=>p.slug===slug);
  const project = projects[index];
  if (!project) return <NotFound />;
  const next = projects[(index+1)%projects.length];
  return <Page className="case-page"><Link className="back-link" to="/projects"><ArrowLeft size={15} /> All projects</Link><header className="case-heading"><p className="eyebrow"><span className="gold">0{index+1}</span> / {project.category}</p><h1>{project.name}<span className="gold">.</span></h1><p className="case-subtitle font-pixel">{project.fullName}</p><p className="case-description">{project.description}</p></header>
    <ProjectMedia project={project} />
    <section className="case-section"><h2 className="eyebrow">01 / The objective</h2><p className="large-copy">{project.objective}</p></section>
    <section className="case-section"><h2 className="eyebrow">02 / System overview</h2><div className="architecture-list">{project.architecture.map((a,i)=><article key={a.title}><span className="font-pixel gold">0{i+1}</span><div><h3>{a.title}</h3><p>{a.description}</p></div></article>)}</div></section>
    <section className="case-section"><h2 className="eyebrow">03 / Engineering details</h2><div><ul className="detail-list">{project.details.map(detail=><li key={detail}>{detail}</li>)}</ul><ul className="tech-list">{project.technologies.map(t=><li key={t}>{t}</li>)}</ul></div></section>
    {(project.github || project.demo) && <div className="case-links">{project.github && <a href={project.github} className="primary-link" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={18} /></a>}{project.demo && <a href={project.demo} className="primary-link" target="_blank" rel="noreferrer">View live <ArrowUpRight size={18} /></a>}</div>}
    <Link className="next-project" to={`/projects/${next.slug}`}><span className="eyebrow">Next project</span><span>{next.name}</span><ArrowUpRight /></Link>
  </Page>;
}
