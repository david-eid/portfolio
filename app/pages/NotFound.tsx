import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { Page, PageHeading } from '@/components/portfolio/Page';

export default function NotFound() {
  return <Page><PageHeading index="404" label="Page not found" description="This address does not point to a page in the portfolio.">A different<br /><span className="font-pixel">direction.</span></PageHeading><Link to="/projects" className="primary-link">Explore projects <ArrowUpRight size={18} /></Link></Page>;
}
