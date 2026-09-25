export interface Project {
  slug: string;
  name: string;
  fullName: string;
  category: string;
  label: string;
  description: string;
  technologies: string[];
  featured: boolean;
  objective: string;
  architecture: { title: string; description: string }[];
  details: string[];
  image?: string;
  video?: string;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    slug: 'aegis-ai', name: 'Aegis AI', fullName: 'Enterprise AI Operating System',
    category: 'Enterprise AI / Financial Intelligence / Intelligent Systems', label: 'Enterprise AI system', featured: true,
    description: 'An enterprise-grade AI operating system for financial intelligence, risk analysis, document workflows and executive decision support.',
    technologies: ['Next.js', 'FastAPI', 'AI', 'Systems Design'],
    objective: 'Bring financial intelligence, risk assessment and document workflows into an AI system designed around business decision-making.',
    architecture: [
      { title: 'Financial intelligence', description: 'A focus on financial information and intelligent business workflows.' },
      { title: 'Risk & documents', description: 'Risk assessment and document workflows within the same enterprise-oriented system.' },
      { title: 'Executive perspective', description: 'Decision support designed around the needs of executive users.' },
    ],
    details: ['Next.js application architecture', 'FastAPI backend', 'Enterprise AI and intelligent automation', 'Financial intelligence and risk assessment'],
  },
  {
    slug: 'nexus-ai', name: 'Nexus AI', fullName: 'Multi-Agent Business Intelligence Platform',
    category: 'AI Agents / Business Intelligence / Enterprise AI', label: 'Multi-agent intelligence', featured: true,
    description: 'An enterprise-grade multi-agent intelligence platform that transforms complex business questions into structured, executive-ready insights.',
    technologies: ['Python', 'FastAPI', 'Next.js', 'AI Agents', 'Systems Design'],
    objective: 'Turn complex business questions into structured intelligence through agent reasoning, research and synthesis.',
    architecture: [
      { title: 'Business questions', description: 'Start with the information a business needs to understand.' },
      { title: 'Agent intelligence', description: 'Multi-agent concepts connect research, AI reasoning and data synthesis.' },
      { title: 'Structured insight', description: 'Bring the resulting intelligence into executive-oriented reports.' },
    ],
    details: ['Python and FastAPI services', 'Next.js application', 'Multi-agent business intelligence', 'Research, reasoning and structured reporting'],
  },
  {
    slug: 'documind-ai', name: 'DocuMind AI', fullName: 'AI-Powered Document Intelligence Platform',
    category: 'Generative AI / RAG / Full-Stack AI', label: 'Document intelligence', featured: true,
    description: 'An AI-powered document intelligence platform combining semantic retrieval, vector search and conversational reasoning to turn documents into queryable knowledge.',
    technologies: ['Next.js', 'Supabase', 'PostgreSQL', 'pgvector', 'Groq', 'LLMs', 'REST APIs', 'Prompt Engineering'],
    objective: 'Make documents queryable through semantic retrieval and conversational AI, connecting relevant source material with language-model reasoning.',
    architecture: [
      { title: 'Vector storage', description: 'Document embeddings are stored in PostgreSQL using pgvector and a Supabase backend.' },
      { title: 'Semantic retrieval', description: 'Vector search and document matching retrieve relevant material for a question.' },
      { title: 'Conversational reasoning', description: 'Groq integration connects retrieved context to LLM responses, with streaming output.' },
    ],
    details: ['Supabase / PostgreSQL backend', 'vector(1536) storage', 'match_documents RPC for retrieval', 'Groq / llama-3.3-70b-versatile integration', 'Streaming responses and RAG architecture'],
  },
  {
    slug: 'exoplanet', name: '3D Exoplanet Explorer', fullName: 'An Interactive Planetary Experience',
    category: 'Creative Engineering / 3D Web', label: 'Creative engineering', featured: false,
    description: 'An immersive browser-based exoplanet experience combining interactive 3D graphics, shaders and modern React engineering.',
    technologies: ['React', 'React Three Fiber', 'WebGL', 'Vite', 'Tailwind CSS', 'Shaders'],
    objective: 'Explore how real-time graphics and React can create an immersive planetary experience in the browser.',
    architecture: [
      { title: '3D scene', description: 'Interactive planets sit within an immersive star field.' },
      { title: 'Rendering', description: 'React Three Fiber and WebGL bring the planetary scene into the browser.' },
      { title: 'Visual effects', description: 'Shader-based effects give the experience its visual character.' },
    ],
    details: ['Interactive 3D planets', 'Immersive star field', 'Shader-based effects', 'React and Vite application'],
  },
  {
    slug: 'fpga-calculator', name: 'FPGA Calculator', fullName: 'Arithmetic in Hardware',
    category: 'Computer Engineering / Digital Systems', label: 'Digital systems', featured: false,
    description: 'A hardware calculator implemented in VHDL on a Cyclone II FPGA, combining arithmetic logic, digital-system design and seven-segment output.',
    technologies: ['VHDL', 'Quartus II', 'ModelSim', 'DE2 Cyclone II FPGA'],
    objective: 'Implement arithmetic directly in digital hardware, from two-digit operands to a readable seven-segment result.',
    architecture: [
      { title: 'Operands', description: 'Two-digit operands provide the arithmetic inputs.' },
      { title: 'Arithmetic logic', description: 'VHDL logic implements addition, subtraction and multiplication on a Cyclone II FPGA.' },
      { title: 'HEX output', description: 'Seven-segment displays show the result, with an E indicator for overflow.' },
    ],
    details: ['Two-digit operands', 'Addition, subtraction and multiplication', 'HEX display output', 'Overflow indicator: E', 'Quartus II and ModelSim toolchain'],
  },
  {
    slug: 'eid-properties', name: 'EID Properties', fullName: 'EID Properties & Construction',
    category: 'Full-Stack / Frontend Engineering', label: 'Business software', featured: false,
    description: 'A bilingual real-estate experience built with Vue 3, responsive components and practical tools for exploring properties.',
    technologies: ['Vue 3', 'Vite', 'Tailwind CSS', 'Composition API'],
    objective: 'Create a responsive English and Arabic property experience for EID Properties & Construction: “Where Trust Meets Value.”',
    architecture: [
      { title: 'Property discovery', description: 'Real-estate listings and map integration support property exploration.' },
      { title: 'Bilingual interface', description: 'English and Arabic content, responsive layouts and dark/light modes.' },
      { title: 'Reusable frontend', description: 'Vue 3 and the Composition API provide the component architecture.' },
    ],
    details: ['English / Arabic', 'Responsive reusable components', 'Dark and light modes', 'Map integration', 'WhatsApp contact'],
  },
];
