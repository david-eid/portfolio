import { useState } from 'react';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { Page, PageHeading } from '@/components/portfolio/Page';

const areas = [
  { name: 'Intelligence', description: 'From models to reasoning systems.', skills: ['LLMs', 'RAG', 'AI Agents', 'Machine Learning', 'Prompt Engineering', 'Semantic Search'] },
  { name: 'Software', description: 'Interfaces, services, complete products.', skills: ['React', 'Next.js', 'Vue', 'Node.js', 'FastAPI', 'Python', 'Django', 'REST APIs'] },
  { name: 'Data', description: 'Knowledge, structured for retrieval.', skills: ['PostgreSQL', 'Supabase', 'MongoDB', 'MySQL', 'pgvector', 'Query Optimization'] },
  { name: 'Engineering', description: 'The systems below the software.', skills: ['FPGA', 'VHDL', 'Networking', 'C++', 'Algorithms', 'Systems Design'] },
];
export default function Expertise() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string[]>([]);
  return <Page className="expertise-page"><PageHeading index="04" label="Expertise">Across the stack.<br /><span className="font-pixel">Below the surface.</span></PageHeading>
    <p className="capability-hint eyebrow">Explore a discipline <ArrowUpRight size={14} /></p>
    <div className="engineering-map">{areas.map((area, i) => {
      const pinned = expanded.includes(area.name);
      const open = pinned || hovered === area.name;
      const id = `capability-${area.name.toLowerCase()}`;
      return <div className={`engineering-area ${open ? 'is-open' : ''}`} key={area.name} onPointerEnter={event => { if (event.pointerType === 'mouse') setHovered(area.name); }} onPointerLeave={() => setHovered(null)}>
        <button aria-expanded={open} aria-controls={id} onClick={() => setExpanded(items => pinned ? items.filter(item => item !== area.name) : [...items, area.name])}>
          <span className="area-number">0{i + 1} /</span><span className="area-name">{area.name}</span>{open ? <Minus size={20} /> : <Plus size={20} />}<span className="area-description">{area.description}</span>
        </button>
        <div className="area-technologies" id={id} aria-hidden={!open}><ul>{area.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></div>
      </div>;
    })}</div>
  </Page>;
}
