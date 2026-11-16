import { useEffect, useMemo, useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  ArrowUp,
  BrainCircuit,
  Check,
  Code2,
  Copy,
  Database,
  Download,
  ExternalLink,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MonitorCog,
  Send,
  Smartphone,
  Sparkles,
  Terminal,
  Workflow,
  X,
} from 'lucide-react';
import { experience, profile, projects, skillGroups } from './data.js';

const navItems = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Experience', 'experience'],
  ['Contact', 'contact'],
];

function BrandMark() {
  return <span className="brand-mark" aria-label="Pranav initials">P<span>A</span></span>;
}

function useSectionTracking() {
  const [active, setActive] = useState('home');
  useEffect(() => {
    const ids = [...new Set(['home', ...navItems.map(([, id]) => id)])];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.15, 0.35, 0.6] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return active;
}

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function ProjectVisual({ type }) {
  if (type === 'agro') {
    return (
      <div className="visual-art art-agro" aria-hidden="true">
        <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
        <div className="plant-stem"><i /><b /><em /></div>
        <div className="art-chip chip-top">FIELD / 047</div><div className="art-chip chip-bottom">HEALTH SIGNAL</div>
        <span className="art-cross cross-a">+</span><span className="art-cross cross-b">+</span>
      </div>
    );
  }
  if (type === 'travix') {
    return (
      <div className="visual-art art-travix" aria-hidden="true">
        <div className="map-grid" />
        <svg className="route-line" viewBox="0 0 440 240" fill="none"><path d="M48 184 C98 182 89 86 169 102 S235 204 279 136 S342 56 393 72" stroke="currentColor" strokeWidth="2" strokeDasharray="5 7" /><circle cx="48" cy="184" r="7" /><circle cx="169" cy="102" r="6" /><circle cx="279" cy="136" r="6" /><circle cx="393" cy="72" r="8" /></svg>
        <div className="map-label label-a">START</div><div className="map-label label-b">DESTINATION</div>
        <div className="map-coordinate">10° 46' N<br />76° 11' E</div>
      </div>
    );
  }
  if (type === 'anshu') {
    return (
      <div className="visual-art art-anshu" aria-hidden="true">
        <div className="assistant-ring ring-a" /><div className="assistant-ring ring-b" />
        <div className="assistant-core"><span>AN</span><i /></div>
        <div className="assistant-node node-a"><Terminal size={15} /></div><div className="assistant-node node-b"><Workflow size={15} /></div><div className="assistant-node node-c"><MonitorCog size={15} /></div>
        <div className="assistant-caption">LOCAL SYSTEM / ONLINE</div>
      </div>
    );
  }
  if (type === 'nutrition') {
    return (
      <div className="visual-art art-nutrition" aria-hidden="true">
        <div className="nutrition-plate"><div className="plate-food food-one" /><div className="plate-food food-two" /><div className="plate-food food-three" /></div>
        <div className="nutrition-tag tag-protein">PROTEIN <b>↗</b></div><div className="nutrition-tag tag-energy">NUTRIENTS <b>+</b></div>
        <span className="nutrition-dot dot-one" /><span className="nutrition-dot dot-two" />
      </div>
    );
  }
  return (
    <div className="visual-art art-mood" aria-hidden="true">
      <div className="mood-face"><span /><i /><b /><em /></div>
      <div className="mood-wave wave-one" /><div className="mood-wave wave-two" />
      <div className="mood-tag">FACE + TEXT <span>↗</span></div>
      <div className="mood-dot dot-a" /><div className="mood-dot dot-b" /><div className="mood-dot dot-c" />
    </div>
  );
}

function SectionHeading({ eyebrow, title, detail, light = false }) {
  return (
    <div className={`section-heading ${light ? 'section-heading-light' : ''}`} data-reveal>
      <div className="section-eyebrow"><span className="eyebrow-line" />{eyebrow}</div>
      <div className="section-heading-row">
        <h2>{title}</h2>
        {detail && <p>{detail}</p>}
      </div>
    </div>
  );
}

function ProjectCard({ project, onOpen, index }) {
  return (
    <article className={`project-card project-${project.visual}`} data-reveal style={{ '--reveal-delay': `${index * 90}ms` }}>
      <button className="project-card-button" onClick={() => onOpen(project)} aria-label={`View ${project.name} case study`}>
        <div className="project-art-wrap"><ProjectVisual type={project.visual} /><span className="project-index">{project.number} / 05</span></div>
        <div className="project-card-content">
          <div className="project-meta"><span>{project.category}</span><span className="project-open-icon"><ArrowUpRight size={18} /></span></div>
          <h3>{project.name}</h3>
          <p className="project-tagline">{project.tagline}</p>
          <p className="project-summary">{project.summary}</p>
          <div className="tag-row">{project.stack.map((tag) => <span className="tech-tag" key={tag}>{tag}</span>)}</div>
          <span className="case-link">Explore case study <ArrowRight size={15} /></span>
        </div>
      </button>
    </article>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;
    const previousFocus = document.activeElement;
    const dialog = document.querySelector('.case-modal');
    const getFocusable = () => dialog?.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ) || [];
    getFocusable()[0]?.focus();
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key === 'Tab') {
        const focusable = getFocusable();
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('modal-open');
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('modal-open');
      previousFocus?.focus?.();
    };
  }, [project, onClose]);

  if (!project) return null;
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="case-modal" role="dialog" aria-modal="true" aria-labelledby="case-title">
        <div className="modal-topline"><span>PROJECT CASE STUDY / {project.number}</span><button className="icon-button modal-close" onClick={onClose} aria-label="Close case study"><X size={20} /></button></div>
        <div className="modal-hero"><div><span className="project-category">{project.category}</span><h2 id="case-title">{project.name}</h2><p>{project.tagline}</p></div><div className={`modal-art modal-art-${project.visual}`}><ProjectVisual type={project.visual} /></div></div>
        <div className="case-content-grid">
          <div className="case-main-copy">
            <div className="case-block"><span className="case-kicker">01 — OBJECTIVE</span><p>{project.objective}</p></div>
            <div className="case-block"><span className="case-kicker">02 — THE CHALLENGE</span><p>{project.problem}</p></div>
            <div className="case-block"><span className="case-kicker">03 — THE APPROACH</span><p>{project.solution}</p></div>
            <div className="case-block"><span className="case-kicker">04 — MY CONTRIBUTION</span><p>{project.contribution}</p></div>
          </div>
          <aside className="case-sidebar">
            <div className="case-side-block"><span className="case-kicker">KEY FEATURES</span><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div>
            <div className="case-side-block"><span className="case-kicker">TECH STACK</span><div className="tag-row">{project.technologies.map((technology) => <span className="tech-tag" key={technology}>{technology}</span>)}</div></div>
            {project.note && <p className="case-note">{project.note}</p>}
          </aside>
        </div>
        <div className="modal-footer">
          <div className="case-footer-links">
            {project.links?.github && <a href={project.links.github} target="_blank" rel="noreferrer">GitHub <ExternalLink size={13} /></a>}
            {project.links?.demo && <a href={project.links.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={13} /></a>}
            {!project.links?.github && !project.links?.demo && <span>Repository and live demo links can be added when they are public.</span>}
          </div>
          <button className="text-button" onClick={onClose}>Close case study <X size={15} /></button>
        </div>
      </section>
    </div>
  );
}

function Header({ active, mobileOpen, setMobileOpen }) {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="brand" href="#home" onClick={() => setMobileOpen(false)}><BrandMark /><span className="brand-name">PRANAV<span> / DEVELOPER</span></span></a>
        <nav className={`nav-links ${mobileOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={() => setMobileOpen(false)}>{label}</a>)}
        </nav>
        <div className="nav-actions"><a className="nav-resume" href={profile.resumePath} download>Download Resume <Download size={14} /></a><button className="mobile-menu-button" onClick={() => setMobileOpen((open) => !open)} aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={mobileOpen}>{mobileOpen ? <X size={22} /> : <Menu size={22} />}</button></div>
      </div>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Abstract visual representing connected software systems">
      <div className="hero-visual-grid" />
      <div className="hero-visual-top"><span><i /> BUILD / EXPLORE / REFINE</span><span>PA—001</span></div>
      <div className="hero-orbit orbit-large"><div className="orbit-marker marker-one" /><div className="orbit-marker marker-two" /><div className="orbit-marker marker-three" /></div>
      <div className="hero-orbit orbit-small" />
      <div className="hero-core"><div className="core-inner"><span>PA</span><small>CREATE<br />WITH INTENT</small></div></div>
      <div className="hero-data-card data-card-top"><span className="data-card-icon"><Code2 size={15} /></span><div><small>FOCUS AREA</small><b>Software + AI</b></div></div>
      <div className="hero-data-card data-card-bottom"><span className="data-card-icon"><Layers3 size={15} /></span><div><small>BUILDING</small><b>Useful experiences</b></div></div>
      <div className="hero-visual-foot"><span>INDEPENDENT THINKING</span><span>↗ 01—04</span></div>
    </div>
  );
}

function ContactForm() {
  const [feedback, setFeedback] = useState('');
  const [messageDraft, setMessageDraft] = useState('');
  const [copied, setCopied] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setMessageDraft('');
    setCopied(false);
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const message = String(form.get('message') || '').trim();
    if (!name || !email || !message) {
      setFeedback('Please complete all fields before preparing your message.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFeedback('Please enter a valid email address so a reply can reach you.');
      return;
    }
    const draft = `Hi Pranav,\n\n${message}\n\nFrom: ${name}\nReply to: ${email}`;
    setMessageDraft(draft);
    setCopied(false);
    if (profile.email) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${encodeURIComponent(draft)}`;
      setFeedback('Your email app has been asked to open with this message. Sending is completed in your email app.');
    } else {
      setFeedback('Your message is validated and ready. Delivery is not connected yet—add your email in src/data.js or connect a form service before launch.');
    }
  }

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(messageDraft);
      setCopied(true);
    } catch {
      setFeedback('Clipboard access was unavailable. Select and copy the prepared message manually.');
    }
  }

  return (
    <div className="contact-form-wrap">
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-row"><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" type="text" autoComplete="name" placeholder="How should I address you?" required /></div>
        <div className="form-row"><label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></div>
        <div className="form-row"><label htmlFor="contact-message">Your message</label><textarea id="contact-message" name="message" rows="4" placeholder="Tell me a little about what you have in mind…" required /></div>
        <button className="button button-primary form-submit" type="submit">Prepare message <Send size={16} /></button>
        <p className="form-helper">This form validates your message in the browser. It does not silently send or store your details.</p>
        {feedback && <div className="form-feedback" role="status"><span>{feedback}</span>{messageDraft && <button type="button" className="copy-draft" onClick={copyDraft}>{copied ? <Check size={14} /> : <Copy size={14} />}{copied ? 'Copied' : 'Copy message'}</button>}</div>}
      </form>
    </div>
  );
}


export default function App() {
  const active = useSectionTracking();
  useReveal();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showTop, setShowTop] = useState(false);
  const featuredProjects = useMemo(() => projects.filter((project) => project.featured), []);
  const secondaryProjects = useMemo(() => projects.filter((project) => !project.featured), []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 560);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => { if (event.key === 'Escape') setMobileOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <>
      <Header active={active} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main id="main">
        <section className="hero-section" id="home">
          <div className="hero-shell page-shell">
            <div className="hero-copy">
              <div className="availability-label"><span className="status-pulse" /> SOFTWARE DEVELOPMENT <span className="availability-divider">/</span> AI APPLICATIONS</div>
              <p className="hero-pretitle">HELLO, I'M PRANAV <span>—</span></p>
              <h1>I build thoughtful<br /><span>digital experiences.</span></h1>
              <p className="hero-description">A computer science developer exploring the space between well-crafted software, useful products, and applied AI.</p>
              <div className="hero-cta-row"><a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a><a className="button button-secondary" href="#contact">Let's connect <ArrowDownRight size={17} /></a></div>
              <div className="hero-social-row"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={12} /></a>{profile.linkedin ? <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={12} /></a> : <span className="social-placeholder"><Linkedin size={16} /> LinkedIn <small>URL to add</small></span>}<span className="hero-location"><MapPin size={14} /> Kerala, India</span></div>
            </div>
            <HeroVisual />
            <div className="hero-bottom-line"><span>SCROLL TO EXPLORE</span><div className="scroll-line"><i /></div><span>01 — 05</span></div>
          </div>
        </section>

        <section className="intro-strip" aria-label="Areas of interest"><div className="page-shell intro-strip-inner"><span>THINGS I LIKE TO BUILD</span><div><i />Web applications</div><div><i />Mobile experiences</div><div><i />AI-powered tools</div><div><i />Useful automation</div></div></section>

        <section className="section about-section" id="about">
          <div className="page-shell">
            <SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Curious by nature.<br /><span>Practical by design.</span></>} detail="I like understanding how things work, then turning that understanding into something people can use." />
            <div className="about-layout">
              <div className="about-copy" data-reveal>
                <p className="about-lead">I'm Pranav, a B.Tech Computer Science and Engineering developer from Kerala, India.</p>
                <p>My work spans web and mobile development, backend systems, and applied machine learning. I enjoy moving between the details of implementation and the bigger question of what makes a product genuinely useful.</p>
                <p>I approach projects by breaking complex ideas into manageable parts, learning what I need along the way, and improving the experience through iteration. I’m especially interested in building software that connects clean interfaces with dependable systems.</p>
                <a className="inline-link" href="#projects">A closer look at my work <ArrowUpRight size={16} /></a>
              </div>
              <div className="about-principles" data-reveal>
                <div className="principle-card"><span className="principle-icon"><Layers3 size={19} /></span><div><h3>Build with intent</h3><p>Start with the problem, not the technology.</p></div><span className="principle-number">01</span></div>
                <div className="principle-card"><span className="principle-icon"><Workflow size={19} /></span><div><h3>Learn by making</h3><p>Turn curiosity into working, testable ideas.</p></div><span className="principle-number">02</span></div>
                <div className="principle-card"><span className="principle-icon"><Sparkles size={19} /></span><div><h3>Keep it useful</h3><p>Value clarity, reliability, and real-world impact.</p></div><span className="principle-number">03</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="page-shell">
            <SectionHeading eyebrow="TOOLS OF THE TRADE" title={<>A toolkit for turning<br /><span>ideas into software.</span></>} detail="A growing set of technologies I use to explore, design, and build across the stack." />
            <div className="skills-grid">
              {skillGroups.map((group, index) => <article className="skill-card" data-reveal key={group.title} style={{ '--reveal-delay': `${index * 80}ms` }}><div className="skill-card-top"><span>{group.eyebrow}</span><span className="skill-card-icon">{index === 0 ? <Code2 size={20} /> : index === 1 ? <Database size={20} /> : index === 2 ? <BrainCircuit size={20} /> : <Smartphone size={20} />}</span></div><h3>{group.title}</h3><p>{group.description}</p><div className="skill-pills">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}
            </div>
            <p className="skills-footnote"><span>NOTE</span> This list reflects technologies used across my projects; it is not a proficiency ranking.</p>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="page-shell">
            <SectionHeading eyebrow="SELECTED WORK / FIVE PROJECTS" title={<>Projects with a<br /><span>purpose behind them.</span></>} detail="A selection of applications and experiments across AI, mobile, web, and automation." />
            <div className="projects-featured-grid">{featuredProjects.map((project, index) => <ProjectCard project={project} onOpen={setSelectedProject} index={index} key={project.id} />)}</div>
            <div className="more-projects-heading" data-reveal><div><span className="section-eyebrow"><span className="eyebrow-line" /> MORE EXPLORATIONS</span><h3>Other ideas I’ve been building.</h3></div><span className="more-projects-count">02 PROJECTS</span></div>
            <div className="projects-secondary-grid">{secondaryProjects.map((project, index) => <ProjectCard project={project} onOpen={setSelectedProject} index={index + 3} key={project.id} />)}</div>
            <div className="projects-note" data-reveal><span className="note-symbol">↗</span><p>Project repositories and live demos will be linked here when they are ready to share publicly. The case studies describe the work without inventing deployment or usage claims.</p></div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="page-shell">
            <SectionHeading eyebrow="WHERE I'VE LEARNED" title={<>Experience &amp;<br /><span>recognition.</span></>} detail="A starting point built through hands-on project work and a focused internship experience." />
            <div className="experience-layout">
              <div className="experience-column" data-reveal>
                <div className="column-label"><span>EXPERIENCE</span><span>01 ENTRY</span></div>
                {experience.map((item) => (
                  <article className="experience-item" key={item.company}>
                    <div className="timeline-marker"><i /></div>
                    <div className="experience-meta"><span>{item.date}</span><span className="experience-type">INTERNSHIP</span></div>
                    <h3>{item.role}</h3><h4>{item.company}</h4><p>{item.description}</p>
                    <div className="tag-row">{item.tags.map((tag) => <span className="tech-tag" key={tag}>{tag}</span>)}</div>
                  </article>
                ))}
              </div>
              <div className="achievement-column" data-reveal><div className="column-label"><span>ACHIEVEMENT</span><span>01 RECOGNITION</span></div><article className="achievement-card"><div className="achievement-mark"><span>03</span><small>PLACE</small></div><div className="achievement-copy"><span className="achievement-kicker">HACKATHON RECOGNITION</span><h3>Think2Impact<br />Hackathon</h3><p>Recognised with 3rd place.</p></div><ArrowUpRight className="achievement-arrow" size={22} /></article><p className="achievement-caption">A milestone that encouraged me to keep building, collaborating, and testing ideas.</p></div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="page-shell contact-shell">
            <div className="contact-left" data-reveal><div className="section-eyebrow"><span className="eyebrow-line" /> HAVE A PROJECT IN MIND?</div><h2>Let's make<br /><span>something useful.</span></h2><p>I'm interested in software development opportunities, meaningful collaborations, and conversations about building better products.</p><div className="contact-direct-links"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a>{profile.email ? <a href={`mailto:${profile.email}`}><Mail size={17} /> {profile.email} <ArrowUpRight size={14} /></a> : <span className="contact-placeholder"><Mail size={17} /> Professional email <small>to add</small></span>}{profile.linkedin ? <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></a> : <span className="contact-placeholder"><Linkedin size={17} /> LinkedIn <small>URL to add</small></span>}</div></div>
            <div className="contact-right" data-reveal><div className="contact-form-heading"><span>DROP A NOTE</span><MessageCircle size={19} /></div><ContactForm /></div>
          </div>
        </section>
      </main>
      <footer className="site-footer"><div className="page-shell footer-inner"><a className="brand footer-brand" href="#home"><BrandMark /><span className="brand-name">PRANAV<span> / DEVELOPER</span></span></a><p>Designed with curiosity. Built with intent.</p><div className="footer-right"><span>© {new Date().getFullYear()} PRANAV</span><a href="#home">BACK TO TOP <ArrowUp size={13} /></a></div></div></footer>
      {showTop && <a className="back-to-top" href="#home" aria-label="Back to top"><ArrowUp size={18} /></a>}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
