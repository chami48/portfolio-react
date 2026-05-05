import React, { useEffect, useState } from 'react';
import {
  Briefcase,
  Code2,
  ExternalLink,
  Github,
  Home,
  Linkedin,
  Instagram,
  Mail,
  Menu,
  MessageSquare,
  User,
  X
} from 'lucide-react';
import './App.css';

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'education', label: 'Education', icon: User },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'certifications', label: 'Certifications', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: MessageSquare }
];

const skillFilters = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];

const skills = [
  { name: 'React', level: 78, icon: '⚛️', category: 'Frontend' },
  { name: 'Tailwind CSS', level: 72, icon: '🎨', category: 'Frontend' },
  { name: 'HTML/CSS', level: 90, icon: '🌐', category: 'Frontend' },
  { name: 'Next.js', level: 65, icon: '🧭', category: 'Frontend' },
  { name: 'JavaScript', level: 82, icon: '🧩', category: 'Frontend' },
  { name: 'Node.js', level: 70, icon: '📦', category: 'Backend' },
  { name: 'Express', level: 60, icon: '⚡', category: 'Backend' },
  { name: 'PHP', level: 58, icon: '🐘', category: 'Backend' },
  { name: 'Kotlin', level: 66, icon: '📱', category: 'Backend' },
  { name: 'MongoDB', level: 75, icon: '🍃', category: 'Database' },
  { name: 'MySQL', level: 72, icon: '🐬', category: 'Database' },
  { name: 'Postman', level: 70, icon: '📬', category: 'Tools' },
  { name: 'Git', level: 75, icon: '🔧', category: 'Tools' },
  { name: 'GitHub', level: 70, icon: '🐙', category: 'Tools' },
  { name: 'Figma', level: 80, icon: '✨', category: 'Tools' }
];

const projects = [
   {
    title: 'Vertex - Smart Campus Operations Hub',
    description:
      'Vertex is a modern web-based system designed to streamline university operations through efficient resource and facility management. I contributed to the booking module, enabling users to request, manage, and track reservations with conflict prevention, structured workflows, and role-based access control.',
    technologies: ['java', 'Spring Boot', 'MySQL'],
    image: 'vertex.jpeg',
    github: 'https://github.com/chami48/Vertex-Smart-Campus-Operation-Hub',
    demo: 'https://smartcampus-mu.vercel.app/'
  },
  {
    title: 'HireSmart - Internship & Job Preparation Platform',
    description:
      'A comprehensive platform for internship and job preparation with features like resume building, interview practice, and job matching. I developed the user authentication and job listing modules.',
    technologies: ['T3 Stack', 'Next.js', 'Prisma', 'Tailwind CSS','tRPC'],
    image: 'hiresmart.jpeg',
    github: 'https://github.com/chami48/Internship-and-Job-preparation-platform'
  },

  {
    title: 'Smart Horana Urban Council System',
    description:
      'A municipal management system with citizen service requests, permit & license handling, online payments, HR & salary management, and admin dashboards. I completed the finance & payment module.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: 'urbancouncil.png',
    github: 'https://github.com/chami48/Urban-Council-Management-System'
  },
  {
    title: 'Event Planning System',
    description:
      'A full-featured web system where event planners can create packages, manage bookings, add vendors, upload media, and handle payments with CRUD operations.',
    technologies: ['Java', 'JSP', 'Servlet', 'MySQL', 'Tomcat'],
    image: 'eventplanning.jpg',
    github: 'https://github.com/chami48/Online-Event-Planning-System'
  },
  {
    title: 'Period Tracker App – Figma UI',
    description:
      'A mobile UI design focused on menstrual cycle tracking, symptom recording, reminders, and personalized wellbeing insights.',
    technologies: ['Figma', 'UX Design'],
    image: 'periodtracker.jpg',
    github: 'https://github.com/chami48/Period-Tracker-UI-Design',
    demo: 'https://www.figma.com/design/zfysbKgup2QapgLR71TiIk/MAD-LAB-EXAM-01?node-id=0-1&t=3KETTCKaS6o4tRP2-1'
  },
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio website showcasing projects and skills with modern design, smooth animations, and responsive layout.',
    technologies: ['React', 'CSS3', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    github: 'https://github.com/chami48/portfolio-react/',
    demo: 'https://dilmi-chamya-personal-profile.netlify.app/'
  },
  {
    title: 'WellnessMate App – Mobile (Kotlin)',
    description:
      'A wellness and habit-tracking mobile application with daily goals, water tracking, reminders, mood logging, and progress visibility.',
    technologies: ['Kotlin', 'Android Studio', 'MVVM'],
    image: 'habitracker.png',
    github: 'https://github.com/chami48/WellnesMate',
    demo: 'https://drive.google.com/file/d/1xqC-ZXy4mlq_ra-6H5LPYzSkBFufVvUM/view?usp=drive_link'
  },
  {
    title: 'Aurose-Online Fashion Store',
    description:
      'A modern e-commerce fashion platform featuring product listings, cart management, customer accounts, order processing, and admin inventory control.',
    technologies: ['HTML', 'CSS', 'PHP', 'XAMPP'],
    image: 'aurose.png',
    github: 'https://github.com/chami48/fashion-store',
    demo: 'https://chami48.github.io/fashion-store/'
  }
];

const certifications = [
 
  {
    title: 'AWS Artificial Intelligence Practitioner Learning Plan',
    issuer: 'Amazon Web Services (AWS)',
    year: '2026',
    description:
      'Completed foundational learning in artificial intelligence, machine learning, generative AI, and responsible AI practices through AWS.',
    skills: ['AI', 'Machine Learning', 'Generative AI'],
    logo: '/certificate/aws-logo.png',
    image: '/certificate/aws.png',
    link: '/certificate/aws.png'
  },
  {
    title: 'MongoDB Atlas Administrator Path',
    issuer: 'MongoDB University',
    year: '2026',
    description:
      'Completed administrator-focused learning covering MongoDB Atlas, cloud database operations, deployment, and data management essentials.',
    skills: ['MongoDB', 'Database Admin', 'Cloud'],
    logo: '/certificate/mongo-logo.png',
    image: '/certificate/mongo.png',
    link: '/certificate/mongodb.png'
  },
  {
    title: 'Bring AI to Work Workshop',
    issuer: 'Google Workspace',
    year: '2026',
    description:
      'Participated in a practical AI workshop focused on applying Google Workspace AI tools to improve productivity and daily workflows.',
    skills: ['AI Tools', 'Productivity', 'Google Workspace'],
    logo: '/certificate/google-logo.png',
    image: '/certificate/google-workspace.png',
    link: '/certificate/Bring-ai-to-workshop.png'
  },
  {
    title: 'Python for Beginners',
    issuer: 'University of Moratuwa CODL',
    year: '2024',
    description:
      'Completed an online Python beginner programme covering programming fundamentals, syntax, logic building, and problem solving.',
    skills: ['Python', 'Programming', 'Problem Solving'],
    image: '/certificate/python.png',
    logo: '/certificate/moratuwa-logo.png',
    link: '/certificate/python-for-beginers.png'
  },
   {
    title: 'AI/ML Engineer - Stage 1',
    issuer: 'SLIIT',
    year: '2026',
    description:
      'Completed foundational learning in artificial intelligence and machine learning concepts through SLIIT CODL.',
    skills: ['AI', 'Machine Learning', 'Python'],
    image: '/certificate/ai-ml-engineer-stage1.png',
    logo: '/certificate/sliit-logo.png',
    isOngoing: true
  }
];

const educationItems = [
  {
    title: 'BSc (Hons) in Information Technology',
    focus: 'Specializing in Information Technology',
    school: 'Sri Lanka Institute of Information Technology (SLIIT)',
    meta: '2023 - Present · Current CGPA: 3.61'
  },
  {
    title: 'G.C.E. Advanced Level',
    focus: 'Physical Science Stream',
    school: 'Sacred Heart Convent, Galle',
    meta: '2022 · B, B, C (Z Score- 1.248) — Maths, Physics, Chemistry'
  },
  {
    title: 'G.C.E. Ordinary Level',
    focus: 'General Curriculum',
    school: 'MR/ Deniyaya Central College',
    meta: '2018'
  }
];

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeSkillFilter, setActiveSkillFilter] = useState('All');
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'education', 'skills', 'certifications', 'projects', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (event) => {
      if (!isMobile) {
        setMousePosition({ x: event.clientX, y: event.clientY });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const filteredSkills =
    activeSkillFilter === 'All'
      ? skills
      : skills.filter((skill) => skill.category === activeSkillFilter);

  return (
    <div
      className="app-root min-h-screen"
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`
      }}
    >
      <div className="starfield" aria-hidden="true">
        <span />
      </div>
      <div className="cursor-glow" aria-hidden="true" />

      <nav className={scrolled ? 'nav nav-scrolled' : 'nav'}>
        <div className="nav-inner">
          <div className="nav-logo">Dilmi</div>
          <div className="nav-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={activeSection === item.id ? 'nav-link active' : 'nav-link'}
                onClick={() => scrollToSection(item.id)}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="nav-mobile">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={activeSection === item.id ? 'nav-link active' : 'nav-link'}
                onClick={() => scrollToSection(item.id)}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main>
        <section id="home" className="hero reveal">
          <div className="hero-inner">
            <div className="hero-badge">
              <span className="badge-dot" />
              Open to Internship Opportunities
            </div>
            <div className="hero-grid">
              <div className="hero-copy">
                <h1 className="hero-title">Crafting Beautiful & Functional Web Experiences</h1>
                <h2 className="hero-subtitle">Information Technology Undergraduate</h2>
                <p className="hero-text">
                  Hey, I&apos;m Dilmi Chamya. Passionate undergraduate seeking internship opportunities in Software
                  Engineering, Frontend/Backend Development, Full-Stack Development, UI/UX Design, and QA Testing. I
                  love building innovative solutions and learning new technologies.
                </p>
                <div className="hero-actions">
                  <a className="btn btn-primary" href="/resume.pdf" download>
                    Download Resume
                  </a>
                </div>
                <div className="social-row">
                  <a
                    className="social-link"
                    href="https://github.com/chami48"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={22} strokeWidth={1.5} />
                  </a>
                  <a
                    className="social-link"
                    href="https://www.linkedin.com/in/dilmi-chamya-4892b02b7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={22} strokeWidth={1.5} />
                  </a>
                  <a className="social-link" href="mailto:dilmichamya@example.com">
                    <Mail size={22} strokeWidth={1.5} />
                  </a>

                  <a
                    className="social-link"
                    href="https://www.instagram.com/chamya_nadakanda?igsh=dmJsY3lxbDYwYXA%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram size={22} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section reveal">
          <div className="section-header">
            <span className="section-kicker">Academic Journey</span>
            <h2 className="section-title">Education</h2>
            <p className="section-subtitle">My academic journey and qualifications.</p>
          </div>
          <div className="education-grid">
            <div className="education-card">
              <div className="education-header">
                <span className="education-label">Education</span>
              </div>
              <div className="education-list">
                {educationItems.map((item) => (
                  <article key={item.title} className="education-item">
                    <h3>{item.title}</h3>
                    <p className="education-focus">{item.focus}</p>
                    <p className="education-school">{item.school}</p>
                    <p className="education-meta">{item.meta}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section reveal">
          <div className="section-header">
            <span className="section-kicker">My Expertise</span>
            <h2 className="section-title">Skills & Technologies</h2>
          </div>
          <div className="skills-shell">
            <div className="skills-orbit" aria-hidden="true" />
            <div className="skills-filters">
              {skillFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={activeSkillFilter === filter ? 'filter-pill active' : 'filter-pill'}
                  onClick={() => setActiveSkillFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="skills-grid">
              {filteredSkills.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-level">{skill.level}%</div>
                  <div className="skill-bar">
                    <span className="skill-bar-fill" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="section certifications-section reveal">
          <div className="section-header">
            <span className="section-kicker">Credentials</span>
            <h2 className="section-title">Licenses & Certifications</h2>
            <p className="section-subtitle">Professional certifications and continuous learning achievements</p>
          </div>
          <div className="certifications-grid">
            {certifications.map((cert) => (
              <article key={cert.title} className="cert-card">
                <div className="cert-card-header">
                  <div className="cert-logo" aria-hidden="true">
                    <img src={cert.logo} alt="" />
                  </div>
                  <div>
                    <h3>{cert.title}</h3>
                    <p>
                      {cert.issuer} - {cert.year}
                    </p>
                  </div>
                </div>

                <div className="cert-preview">
                  <img src={cert.image} alt={`${cert.title} certificate`} />
                </div>

                <p className="cert-description">{cert.description}</p>

                <div className="cert-tags">
                  {cert.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                {cert.isOngoing ? (
                  <button className="cert-link ongoing" type="button" disabled>
                    Ongoing
                  </button>
                ) : (
                  <button className="cert-link" type="button" onClick={() => setSelectedCertificate(cert)}>
                    <ExternalLink size={16} /> View Certificate
                  </button>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section reveal">
          <div className="section-header">
            <span className="section-kicker">My Work</span>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Explore my academic and personal projects that demonstrate my technical abilities.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-media">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={18} /> Code
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={18} /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section reveal">
          <div className="section-header">
            <span className="section-kicker">Let&apos;s Connect</span>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              I&apos;m actively seeking internship opportunities where I can apply my skills, contribute to meaningful
              projects, and grow as a software professional. Let&apos;s connect and build something amazing together!
            </p>
          </div>

          <div className="contact-card">
            <a className="btn btn-primary" href="mailto:dilmichamya48@gmail.com">
              <Mail size={20} /> Send Me an Email
            </a>
            <div className="contact-social">
              <a
                className="social-link"
                href="https://github.com/chami48"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={26} />
              </a>
              <a
                className="social-link"
                href="https://www.linkedin.com/in/dilmi-chamya-4892b02b7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={26} />
              </a>
              <a className="social-link" href="mailto:dilmichamya48@gmail.com">
                <Mail size={26} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {selectedCertificate && (
        <div className="certificate-modal" role="dialog" aria-modal="true" aria-label="Certificate preview">
          <button
            className="certificate-modal-backdrop"
            type="button"
            aria-label="Close certificate preview"
            onClick={() => setSelectedCertificate(null)}
          />
          <div className="certificate-modal-panel">
            <div className="certificate-modal-header">
              <span>Certificate Preview</span>
              <button type="button" onClick={() => setSelectedCertificate(null)} aria-label="Close certificate preview">
                <X size={20} />
              </button>
            </div>
            <h3>{selectedCertificate.title}</h3>
            <div className="certificate-modal-image">
              <img src={selectedCertificate.image} alt={`${selectedCertificate.title} certificate`} />
            </div>
            <a className="certificate-open-link" href={selectedCertificate.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} /> Open Certificate
            </a>
          </div>
        </div>
      )}

      <footer className="footer">
        <p>© 2025 Dilmi Chamya. All rights reserved.</p>
        <span>Designed & Built with React</span>
      </footer>
    </div>
  );
}
