import { Page, PageHeading } from '@/components/portfolio/Page';
import { education } from '../data/education';
import { certifications } from '../data/certifications';

const highlighted = [0, 1, 2, 4, 5, 6];
function CertificationList({ indices }: { indices: number[] }) {
  return <div className="credentials-list">{indices.map(index => {
    const item = certifications[index];
    return <article key={item.name}><div className="certification-meta"><span>{item.issuer}</span><time>{item.date}</time></div><h3>{item.name}</h3>{item.detail && <p>{item.detail}</p>}</article>;
  })}</div>;
}
export default function Education() {
  return <Page className="education-page"><PageHeading index="05" label="Education / Certifications">Strong foundations.<br /><span className="font-pixel">Continuous learning.</span></PageHeading>
    <div className="education-block"><div><span className="eyebrow gold">2022–2027 / Master’s candidate</span><h3>USEK</h3><p className="muted">Holy Spirit University of Kaslik</p></div><div><h4>{education.degree}</h4><p>Artificial Intelligence</p><p className="body-copy">Software, algorithms, networks and digital systems — the engineering foundations behind intelligent products.</p></div></div>
    <div className="credentials-heading"><h3 className="eyebrow">Selected certifications & training</h3><span className="eyebrow">Always learning / 2026</span></div>
    <CertificationList indices={highlighted} />
    <details className="all-certifications"><summary><span className="when-closed">View all certifications +</span><span className="when-open">Show fewer certifications −</span></summary><CertificationList indices={certifications.map((_, i) => i).filter(i => !highlighted.includes(i))} /></details>
  </Page>;
}
