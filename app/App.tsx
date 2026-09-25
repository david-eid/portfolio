import { Route, Routes, useLocation } from 'react-router';
import Home from './page';
import { Navbar } from '@/components/portfolio/Navbar';
import { RouteEffects } from '@/components/portfolio/RouteEffects';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Expertise from './pages/Expertise';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  const { pathname } = useLocation();
  return <><a className="skip-link" href="#main-content">Skip to content</a><Navbar /><div className="route-view" key={pathname}><Routes><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/experience" element={<Experience />} /><Route path="/projects" element={<Projects />} /><Route path="/projects/:slug" element={<ProjectDetail />} /><Route path="/expertise" element={<Expertise />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<NotFound />} /></Routes></div><RouteEffects /></>;
}
