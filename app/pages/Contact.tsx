import { ArrowUpRight } from 'lucide-react';
import { Page, PageHeading } from '@/components/portfolio/Page';
import { profile } from '../config/profile';

export default function Contact() {
  return <Page className="contact-page contact-finale"><PageHeading index="06" label="Contact">Let’s build<br />something<br /><span className="font-pixel">intelligent.</span></PageHeading>
    <p className="contact-statement">AI systems / software engineering / scalable products / ambitious technical ideas.</p>
    <div className="finale-links"><a href={profile.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span><ArrowUpRight /></a><a href={`mailto:${profile.email}`}><span>{profile.email}</span><ArrowUpRight /></a></div>
    <div className="finale-bottom"><p className="eyebrow">Beirut, Lebanon</p><p>David Eid — Computer Engineer / AI & Full-Stack Engineer</p></div>
  </Page>;
}
