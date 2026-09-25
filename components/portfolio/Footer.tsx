import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return <footer className="page-footer"><div className="footer-invitation"><p className="eyebrow">Next conversation</p><Link to="/contact">Let’s build something<br /><span className="font-pixel">intelligent.</span><ArrowUpRight aria-hidden="true" /></Link></div><div className="footer-bottom"><Link to="/" aria-label="David Eid home"><Logo /></Link><span>David Eid © {new Date().getFullYear()}</span><span>AI · Software · Computer Engineering</span></div></footer>;
}
