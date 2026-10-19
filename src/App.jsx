import { useEffect, useRef, useState } from 'react';
import tasnimPhoto from './assets/portrait-headshot-crop.png';
import { publicationLinks, publications, publicationStats } from './publications';
import './App.css';

const researchInterests = [
  'Climate Risk Decision Systems',
  'Data Infrastructure',
  'Policy Interface',
  'Immersive Visualization',
  'Scientific Visualization',
  'Sustainability',
  'Extreme Weather Events',
  'AR/VR',
  'IoT',
  'Machine Learning',
  'Computer Vision',
];

const bannerTags = ['Sustainability', 'Visualization'];

const themeOptions = [
  { value: 'earth', label: 'Earth & Forest' },
  { value: 'lavender', label: 'Lavender Ecosystems' },
  { value: 'twilight', label: 'Twilight Immersion' },
  { value: 'aurora', label: 'Aurora Earth' },
];

const skillGroups = [
  {
    category: 'Visualization & Immersion',
    description: 'Building spatial, interactive ways to explore complex systems.',
    items: ['Unity', 'Blender', 'VR/AR', 'Visual analytics', 'Digital twins'],
  },
  {
    category: 'Data Science & AI',
    description: 'Processing, modeling, and interpreting data-driven environmental workflows.',
    items: [
      'Python',
      'R',
      'Data analysis',
      'Data pipelines',
      'Machine learning basics',
      'Data-driven methods',
    ],
  },
  {
    category: 'Development & Engineering',
    description: 'Creating reliable workflows, integrations, and reproducible technical systems.',
    items: ['Git', 'C', 'C++', 'MATLAB', 'API-based data access', 'Data-sensitive development'],
  },
  {
    category: 'Geospatial & Environmental Analysis',
    description: 'Connecting spatial tools with environmental monitoring and preprocessing.',
    items: [
      'ArcGIS',
      'QGIS',
      'Environmental monitoring',
      'Data integration',
      'Data preprocessing',
    ],
  },
  {
    category: 'Research & Collaboration',
    description: 'Designing studies, communicating research, and shaping decision-support systems.',
    items: [
      'User studies',
      'Experimental design',
      'Performance evaluation',
      'LaTeX',
      'Figma',
      'Scalable data systems',
      'Integrated data-simulation workflows',
      'Data-driven decision support',
    ],
  },
];

const explorerProjects = [
  {
    title: 'Understanding Wind Dynamics in VR',
    impact:
      'Turns wind behavior around terrain and architecture into an immersive visual analytics experience for exploration and design insight.',
    detail:
      'A visual analytics project for studying wind patterns around terrain and architectural contexts inside VR.',
    technologies: ['Virtual Reality', 'Wind Dynamics', 'Terrain Analysis', 'Visual Analytics'],
    publicationLink: 'https://doi.org/10.13140/RG.2.2.36319.42404',
    icon: 'wind',
  },
  {
    title: 'FloodVis',
    impact:
      'Transforms climate ensemble flood projections into an immersive space where uncertainty becomes easier to see, compare, and discuss.',
    detail:
      'An immersive visualization project focused on making climate ensemble flood projections more legible for exploration and decision support.',
    technologies: ['Virtual Reality', 'Climate Data', 'Ensemble Visualization', 'Decision Support'],
    showcaseLink:
      'https://scads.ai/research/ai-algorithms-and-methods/scalable-visual-computing/projects/vr-floodvis/',
    icon: 'flood',
  },
  {
    title: 'ExtremeWeatherVis',
    impact:
      'Creates a VR environment for exploring extreme weather events across cities and supporting climate-risk communication.',
    detail:
      'A multi-city VR visualization approach for comparing extreme weather scenarios and communicating climate risk.',
    technologies: ['VR', 'Extreme Weather', 'Multi-City Analysis', 'Scientific Visualization'],
    publicationLink: 'https://doi.org/10.2312/envirvis.20241137',
    icon: 'storm',
  },
  {
    title: 'VRCellLabeler',
    impact:
      'Uses immersive interaction to make biological cell lineage labeling more spatial, intuitive, and collaborative.',
    detail:
      'An immersive labeling concept that brings biological cell lineage data into a spatial VR workflow.',
    technologies: ['Virtual Reality', 'Immersive Labeling', 'Biological Data', '3D Interaction'],
    icon: 'cell',
  },
  {
    title: 'TmoTA',
    impact:
      'Supports machine learning workflows with a responsive annotation tool for multiple object tracking datasets.',
    detail:
      'A practical annotation tool designed to make multiple object tracking data preparation faster and more responsive.',
    technologies: ['Computer Vision', 'Annotation Tools', 'Machine Learning', 'Object Tracking'],
    showcaseLink:
      'https://scads.ai/research/ai-algorithms-and-methods/scalable-visual-computing/projects/tmota/',
    publicationLink: 'https://doi.org/10.1145/3544548.3581185',
    icon: 'tracking',
  },
  {
    title: 'Secure Environmental Management with IoT & Blockchain',
    impact: 'Connecting environmental intelligence with secure, transparent data infrastructure.',
    detail:
      'A smart environmental management concept that uses IoT sensors for real-time environmental monitoring and blockchain to improve data security, transparency, and trust.',
    technologies: [
      'IoT',
      'Blockchain',
      'Environmental Monitoring',
      'Data Security',
      'Smart Systems',
      'Sustainability',
    ],
    icon: 'secure-nature',
  },
];

const contactLinks = [
  { label: 'Email', url: 'mailto:mto.cse@gmail.com' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/marzan-tasnim-oyshi-32323897/' },
  { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=aFlXPVMAAAAJ&hl=de' },
  {
    label: 'ResearchGate',
    url: 'https://www.researchgate.net/profile/Marzan-Tasnim-Oyshi?ev=hdr_xprf',
  },
];

const journeySummary = [
  { label: 'Current Role', value: 'Research Associate, IOER' },
  { label: 'Current Focus', value: 'Environmental Data Systems, FAIR Data Principles & Decision Support' },
  { label: 'PhD Candidate', value: 'TU Dresden' },
  { label: 'Research Areas', value: 'Visualization . Decision Support . Annotation . AI . Immersive Systems' },
];

const professionalJourney = [
  {
    title: 'Research Associate',
    organization: 'IOER',
    context: 'FDZ & Landscape, Ecosystem & Biodiversity',
    period: 'May 2025 - Present',
    icon: 'research',
    current: true,
    summary: 'Environmental data systems, geospatial datasets, and user-oriented decision support.',
    highlights: [
      'Data integration pipelines',
      'Environmental and geospatial datasets',
      'API-based data systems',
      'Data preprocessing and harmonization',
      'User-oriented decision-support systems',
      'Horizon Europe proposal development',
    ],
  },
  {
    title: 'Coordination Team Member',
    organization: 'Leibniz-Lab Systemic Sustainability',
    period: 'April 2024 - April 2025',
    icon: 'sustainability',
    summary: 'Sustainability assessment and dashboard-oriented decision support.',
    highlights: [
      'Sustainability dashboards',
      'Decision-support systems',
      'Data-driven sustainability assessment',
    ],
  },
  {
    title: 'Research Associate',
    organization: 'IOER',
    context: 'Spatial Information and Modeling',
    period: 'January 2024 - April 2025',
    icon: 'data',
    summary: 'Spatial information, modeling, and research data workflows.',
  },
  {
    title: 'Research Associate',
    organization: 'TU Dresden',
    context: 'Chair of Computer Graphics & Visualization / ScaDS.AI',
    period: 'April 2020 - December 2023',
    icon: 'visualization',
    summary: 'Visualization research, interactive systems, teaching, and academic support.',
    highlights: [
      'Teaching and supervision',
      'Data visualization',
      'Interactive systems',
      'Publications and conferences',
      'Academic operations',
      'Student support',
    ],
  },
  {
    title: 'Lecturer',
    organization: 'Daffodil International University',
    context: 'Computer Science & Engineering',
    period: 'May 2018 - March 2020',
    icon: 'teaching',
    summary: 'Computer science teaching, mentoring, and academic contribution.',
  },
  {
    title: 'Researcher',
    organization: 'TechSolutions Global',
    period: 'April 2018 - March 2020',
    icon: 'research',
    summary: 'Applied research and technology-oriented problem solving.',
  },
  {
    title: 'IoT Trainee',
    organization: 'Datasoft Systems Bangladesh Limited',
    period: 'October 2017 - March 2018',
    icon: 'data',
    summary: 'Early IoT systems training and sensor-oriented development foundations.',
  },
  {
    title: 'Researcher . Game Developer . 3D Modeler',
    organization: 'Data Angel Bangladesh Limited',
    period: 'February 2017 - May 2017',
    icon: 'visualization',
    summary: 'Interactive media, game development, and 3D modeling experience.',
  },
  {
    title: 'Content Developer . News Editor . Reporter',
    organization: 'Techworld BD',
    period: 'February 2015 - August 2015',
    icon: 'teaching',
    summary: 'Technology communication, writing, editing, and reporting.',
  },
];

const academicFormation = [
  {
    title: 'Doctoral Candidate (PhD)',
    organization: 'TU Dresden',
    context: 'Computer Graphics & Visualization',
    period: 'November 2022 - Expected 2026',
    icon: 'education',
    current: true,
    summary:
      'Immersive and data-driven decision support systems integrating heterogeneous environmental datasets.',
  },
  {
    title: 'M.Sc. Computer Science & Engineering',
    organization: 'Daffodil International University',
    period: '2019',
    icon: 'education',
    thesis: 'Environment Management using IoT-based Cost-Effective, Secured, Smart Sewerage and Air Pollution Monitoring System',
  },
  {
    title: 'B.Sc. Computer Science & Engineering',
    organization: 'Daffodil International University',
    period: '2017',
    icon: 'education',
    thesis: "Gamification in Children's Education",
  },
  {
    title: 'Erasmus Mundus Exchange Program',
    organization: 'Lodz University of Technology, Poland',
    period: '2015-2016',
    icon: 'education',
  },
];

function SocialIcon({ label }) {
  const iconText = {
    Email: '@',
    LinkedIn: 'in',
    'Google Scholar': 'G',
    ResearchGate: 'RG',
    ORCID: 'iD',
  };

  return (
    <span className={`social-icon social-${label.toLowerCase().replace(/\s+/g, '-')}`} aria-hidden="true">
      {iconText[label] || label.charAt(0)}
    </span>
  );
}

function JourneyIcon({ type }) {
  const iconText = {
    research: 'R',
    sustainability: 'S',
    data: 'D',
    visualization: 'V',
    teaching: 'T',
    education: 'E',
  };

  return (
    <span className={`journey-icon icon-${type}`} aria-hidden="true">
      {iconText[type] || 'R'}
    </span>
  );
}

function MilestoneCard({ item }) {
  return (
    <article className={`milestone-card ${item.current ? 'current' : ''}`}>
      <div className="milestone-top">
        <JourneyIcon type={item.icon} />
        <div>
          <p className="milestone-period">{item.period}</p>
          <h3>{item.title}</h3>
        </div>
        {item.current && <span className="current-badge">Current</span>}
      </div>
      <p className="milestone-org">{item.organization}</p>
      {item.context && <p className="milestone-context">{item.context}</p>}
      {item.summary && <p className="milestone-summary">{item.summary}</p>}
      {item.thesis && <p className="milestone-summary">Thesis: {item.thesis}</p>}
      {item.highlights && (
        <details className="milestone-details">
          <summary>Highlights</summary>
          <ul>
            {item.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </details>
      )}
    </article>
  );
}

function JourneyTimeline({ items }) {
  return (
    <div className="journey-timeline">
      {items.map((item) => (
        <MilestoneCard item={item} key={`${item.title}-${item.organization}-${item.period}`} />
      ))}
    </div>
  );
}

function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="section-header reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p className="section-intro">{children}</p>}
    </div>
  );
}

function PublicationStats({ stats }) {
  return (
    <div className="publication-stats reveal">
      {stats.map((stat) => (
        <div className="publication-stat" key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

function PublicationCard({ publication }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="publication-card reveal">
      <div className="publication-card-top">
        <span className="publication-badge">{publication.type}</span>
        <span className="publication-year">{publication.year}</span>
      </div>
      <h3>{publication.title}</h3>
      <p className="publication-authors">
        {publication.authors.map((author, index) => (
          <span
            className={author === 'Marzan Tasnim Oyshi' ? 'author-me' : undefined}
            key={`${publication.id}-${author}-${index}`}
          >
            {author}
            {index < publication.authors.length - 1 ? ', ' : ''}
          </span>
        ))}
      </p>
      <p className="publication-venue">{publication.venue}</p>
      <div className="publication-actions">
        <a href={publication.link}>{publication.doi}</a>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Hide abstract' : 'Show abstract'}
        </button>
      </div>
      {isOpen && <p className="publication-abstract">{publication.abstract}</p>}
    </article>
  );
}

function PublicationTimeline({ items }) {
  const groupedPublications = items.reduce((groups, publication) => {
    if (!groups[publication.year]) {
      groups[publication.year] = [];
    }

    groups[publication.year].push(publication);
    return groups;
  }, {});

  const years = Object.keys(groupedPublications).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="publication-timeline">
      {years.map((year) => (
        <div className="publication-year-group" key={year}>
          <div className="timeline-year">{year}</div>
          <div className="publication-list">
            {groupedPublications[year].map((publication) => (
              <PublicationCard publication={publication} key={publication.id} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectGlyph({ type }) {
  return (
    <span className={`project-glyph glyph-${type}`} aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

function ResearchExplorer({ projects }) {
  return (
    <div className="research-explorer reveal">
      {projects.map((project) => (
        <article className="explorer-stop" key={project.title}>
          <div className="explorer-content">
            <ProjectGlyph type={project.icon} />
            <div className="explorer-copy">
              <p className="card-label">Research Adventure</p>
              <h3>{project.title}</h3>
              <p>{project.impact}</p>
              <div className="project-tech-list" aria-label={`${project.title} technologies`}>
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <div className="project-actions">
                <details className="project-details">
                  <summary>Read more</summary>
                  <p>{project.detail}</p>
                </details>
                {project.showcaseLink && (
                  <a className="project-link" href={project.showcaseLink}>
                    View showcase
                  </a>
                )}
                {project.publicationLink && (
                  <a className="project-link" href={project.publicationLink}>
                    DOI
                  </a>
                )}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function ToolkitGroup({ group, index }) {
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window === 'undefined') {
      return true;
    }

    return window.matchMedia('(min-width: 761px)').matches || index === 0;
  });

  return (
    <article className={`skill-group ${isOpen ? 'is-open' : ''}`}>
      <button
        aria-expanded={isOpen}
        className="skill-group-toggle"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <span>{group.category}</span>
        <small>{group.description}</small>
      </button>
      {isOpen && (
        <div className="skill-pill-list">
          {group.items.map((skill) => (
            <span className="skill-pill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

function HeroArtwork() {
  return (
    <svg
      className="hero-art"
      viewBox="0 0 1200 760"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="skyGradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--art-sky-1)" />
          <stop offset="48%" stopColor="var(--art-sky-2)" />
          <stop offset="100%" stopColor="var(--art-sky-3)" />
        </linearGradient>
        <linearGradient id="landGradient" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="var(--art-land-1)" />
          <stop offset="48%" stopColor="var(--art-land-2)" />
          <stop offset="100%" stopColor="var(--art-land-3)" />
        </linearGradient>
        <linearGradient id="waterGradient" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="var(--art-water-1)" />
          <stop offset="55%" stopColor="var(--art-water-2)" />
          <stop offset="100%" stopColor="var(--art-water-3)" />
        </linearGradient>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="10" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="1200" height="760" rx="44" fill="url(#skyGradient)" />
      <path
        className="art-cloud"
        d="M70 210 C210 138 334 146 470 206 C610 268 734 250 876 168 C1012 90 1120 108 1198 160 L1198 0 L70 0 Z"
        fill="var(--art-cloud)"
        opacity="0.38"
      />
      <path
        className="art-grid"
        d="M112 106 H1074 M96 226 H1116 M76 346 H1146 M148 466 H1046 M236 586 H934 M190 88 V628 M390 70 V642 M590 92 V620 M790 72 V640 M990 102 V604"
        fill="none"
        stroke="var(--art-grid)"
        strokeWidth="1.4"
        opacity="0.28"
      />
      <path
        className="art-ring"
        d="M843 165 C965 195 1035 280 1002 370 C968 462 844 507 716 474 C592 442 522 356 554 266 C588 172 716 134 843 165 Z"
        fill="none"
        stroke="var(--art-ring-1)"
        strokeWidth="4"
        opacity="0.56"
      />
      <path
        className="art-ring delay"
        d="M810 208 C900 230 950 292 926 356 C902 425 810 457 716 432 C624 407 574 344 598 280 C623 214 718 185 810 208 Z"
        fill="none"
        stroke="var(--art-ring-2)"
        strokeWidth="2"
        opacity="0.28"
      />
      <path
        className="art-land"
        d="M0 512 C106 438 236 424 368 486 C522 558 618 470 754 418 C926 350 1062 418 1200 350 L1200 760 L0 760 Z"
        fill="url(#landGradient)"
      />
      <path
        className="art-land slow"
        d="M0 590 C146 532 278 548 418 604 C574 666 732 570 872 538 C1008 508 1102 560 1200 522 L1200 760 L0 760 Z"
        fill="var(--art-land-shadow)"
        opacity="0.42"
      />
      <path
        className="art-river"
        d="M130 760 C248 662 356 650 472 620 C596 588 672 516 778 514 C886 512 954 568 1084 548 C1128 542 1164 530 1200 512 L1200 760 Z"
        fill="url(#waterGradient)"
        opacity="0.86"
      />
      <path
        className="art-line"
        d="M178 420 C288 352 384 356 478 424 C574 494 674 486 768 410 C858 338 950 328 1052 382"
        fill="none"
        stroke="var(--art-line-1)"
        strokeLinecap="round"
        strokeWidth="3"
        opacity="0.82"
      />
      <path
        className="art-line delay"
        d="M210 468 C338 408 454 426 552 494 C654 564 770 548 884 470"
        fill="none"
        stroke="var(--art-line-2)"
        strokeLinecap="round"
        strokeWidth="2"
        opacity="0.72"
      />
      <g className="art-nodes" fill="var(--art-line-1)" opacity="0.92">
        <rect x="204" y="410" width="9" height="9" rx="2" />
        <rect x="472" y="420" width="9" height="9" rx="2" />
        <rect x="764" y="404" width="9" height="9" rx="2" />
        <rect x="1048" y="378" width="9" height="9" rx="2" />
        <rect x="550" y="490" width="8" height="8" rx="2" />
        <rect x="880" y="466" width="8" height="8" rx="2" />
      </g>
      <g className="art-bars" opacity="0.82" filter="url(#softGlow)">
        <rect x="118" y="318" width="12" height="76" rx="6" fill="var(--earth)" />
        <rect x="144" y="282" width="12" height="112" rx="6" fill="var(--art-cloud)" />
        <rect x="170" y="344" width="12" height="50" rx="6" fill="var(--cyan)" />
        <rect x="1028" y="246" width="12" height="86" rx="6" fill="var(--art-cloud)" />
        <rect x="1054" y="214" width="12" height="118" rx="6" fill="var(--cyan)" />
        <rect x="1080" y="276" width="12" height="56" rx="6" fill="var(--earth)" />
      </g>
    </svg>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Marzan Tasnim Oyshi. All rights reserved.</p>
    </footer>
  );
}

const navigationLinks = [
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'education', label: 'Education' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'publications', label: 'Publications' },
  { id: 'skills', label: 'Toolkit' },
  { id: 'contact', label: 'Contact' },
];

function App() {
  const [theme, setTheme] = useState('earth');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const themeDropdownRef = useRef(null);

  useEffect(() => {
    function closeThemeDropdown(event) {
      const dropdown = themeDropdownRef.current;
      if (dropdown && !dropdown.contains(event.target)) dropdown.open = false;
    }
    document.addEventListener('pointerdown', closeThemeDropdown);
    return () => document.removeEventListener('pointerdown', closeThemeDropdown);
  }, []);

  useEffect(() => {
    const sections = [...document.querySelectorAll('main section[id]')];
    let animationFrame;

    function updateActiveSection() {
      let current = 'home';
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 110) current = section.id;
      }
      // The last section may be too short to reach the top of the viewport.
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        current = sections.at(-1)?.id || current;
      }
      setActiveSection(current);
    }

    function scheduleUpdate() {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateActiveSection);
    }

    scheduleUpdate();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    window.addEventListener('hashchange', scheduleUpdate);
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      window.removeEventListener('hashchange', scheduleUpdate);
    };
  }, []);

  return (
    <div className={`portfolio-page theme-${theme}`}>
      <header className="site-header">
        <nav
          className="nav container"
          aria-label="Primary navigation"
          onKeyDown={(event) => {
            if (event.key === 'Escape' && isMenuOpen) {
              setIsMenuOpen(false);
              event.currentTarget.querySelector('.menu-toggle').focus();
            }
          }}
        >
          <a className="brand" href="#home" aria-label="MTO — back to home" aria-current={activeSection === 'home' ? 'location' : undefined} onClick={() => setIsMenuOpen(false)}>
            MTO
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="navigation-menu"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span aria-hidden="true">{isMenuOpen ? '✕' : '☰'}</span>
          </button>
          <div id="navigation-menu" className={`nav-actions${isMenuOpen ? ' is-open' : ''}`}>
            <div className="nav-links">
              {navigationLinks.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  aria-current={activeSection === id ? 'location' : undefined}
                  onClick={() => {
                    setActiveSection(id);
                    setIsMenuOpen(false);
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
            <div className="theme-picker">
              <span id="theme-label">Theme</span>
              <details
                className="theme-dropdown"
                ref={themeDropdownRef}
                onKeyDown={(event) => {
                  if (event.key === 'Escape') {
                    event.stopPropagation();
                    event.currentTarget.open = false;
                    event.currentTarget.querySelector('summary').focus();
                  }
                }}
              >
                <summary aria-label={`Choose theme: ${themeOptions.find((option) => option.value === theme).label}`}>
                  {themeOptions.find((option) => option.value === theme).label}
                </summary>
                <div className="theme-options" role="group" aria-labelledby="theme-label">
                {themeOptions.map((option) => (
                  <button
                    type="button"
                    key={option.value}
                    aria-pressed={theme === option.value}
                    onClick={() => {
                      setTheme(option.value);
                      themeDropdownRef.current.open = false;
                      themeDropdownRef.current.querySelector('summary').focus();
                    }}
                  >
                    {option.label}
                  </button>
                ))}
                </div>
              </details>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-banner">
            <div className="hero-scene" aria-hidden="true">
              <HeroArtwork />
              <div className="particle-field">
                <span className="particle p1" />
                <span className="particle p2" />
                <span className="particle p3" />
                <span className="particle p4" />
                <span className="particle p5" />
                <span className="particle p6" />
              </div>
            </div>

            <div className="banner-tags container" aria-label="Hero themes">
              {bannerTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="portrait-wrap">
              <div className="portrait-frame">
                <div className="profile-photo">
                  <img src={tasnimPhoto} alt="Marzan Tasnim Oyshi" />
                </div>
              </div>
              <div className="hero-affiliation" aria-label="Affiliation">
                <span>Founder, ImUrP</span>
                <span>Research Associate, IOER</span>
                <span>Doctoral Candidate, TU Dresden</span>
              </div>
            </div>
          </div>

          <div className="hero-content-panel container reveal">
            <p className="eyebrow">Scientist . Designer . Explorer</p>
            <h1>Marzan Tasnim Oyshi</h1>
            <p className="hero-intro">
              I explore how immersive technologies, climate intelligence, and
              data-driven systems can help people understand and navigate
              complex environmental challenges.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#research">
                View Research
              </a>
              <a className="button secondary" href="#contact">
                Contact Me
              </a>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="curved-divider" aria-hidden="true" />
          <div className="container about-grid">
            <SectionHeader eyebrow="About" title="Research that makes complex systems feel visible.">
              Marzan Tasnim Oyshi is a Research Associate and Doctoral Candidate
              affiliated with IOER and TU Dresden. Her work connects climate
              risk decision systems, data infrastructure, policy interfaces,
              immersive visualization, and sustainability-focused responses to
              extreme weather events.
            </SectionHeader>
            <div className="about-note reveal">
              <p>
                Her portfolio sits at the intersection of environmental
                questions and human understanding: how people see risk, move
                through data, and make decisions inside uncertain futures.
              </p>
            </div>
          </div>
        </section>

        <section className="section journey-section" id="journey">
          <div className="container">
            <SectionHeader
              eyebrow="Research & Professional Journey"
              title="From current environmental data systems back to technical foundations."
            >
              A compact path through research, sustainability, visualization,
              teaching, and technology work.
            </SectionHeader>
            <div className="journey-summary reveal" aria-label="Current research summary">
              {journeySummary.map((item) => (
                <div className="summary-chip" key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
            <JourneyTimeline items={professionalJourney} />
          </div>
        </section>

        <section className="section formation-section" id="education">
          <div className="container">
            <SectionHeader eyebrow="Academic Formation" title="Research training shaped by computing, visualization, and environmental systems.">
              Education is shown newest first, from the current PhD to early
              foundations in computer science and international exchange.
            </SectionHeader>
            <JourneyTimeline items={academicFormation} />
          </div>
        </section>

        <section className="section research-section" id="research">
          <div className="container">
            <SectionHeader eyebrow="Research Interests" title="A living map of inquiry.">
              These themes connect immersive technology, environmental systems,
              and scientific communication.
            </SectionHeader>
            <div className="interest-cloud">
              {researchInterests.map((interest, index) => (
                <span className={`interest-pill interest-${index + 1}`} key={interest}>
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <SectionHeader eyebrow="Research Explorer" title="Scientist . Designer . Explorer">
              A journey through climate research, immersive visualization,
              computer vision, and decision support systems.
            </SectionHeader>
            <ResearchExplorer projects={explorerProjects} />
          </div>
        </section>

        <section className="section publications-section" id="publications">
          <div className="container">
            <SectionHeader eyebrow="Publications" title="Research outputs and scholarly writing.">
              Publications are grouped by year with the newest entries first.
              DOI links are shown where publicly available from ResearchGate.
            </SectionHeader>
            <PublicationStats stats={publicationStats} />
            <div className="publication-links reveal" aria-label="External researcher profiles">
              {publicationLinks.map((link) => (
                <a
                  href={link.url}
                  key={link.label}
                  rel={link.url.startsWith('http') ? 'noreferrer' : undefined}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                >
                  <SocialIcon label={link.label} />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
            <PublicationTimeline items={publications} />
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container skills-grid">
            <SectionHeader eyebrow="Explorer's Toolkit" title="A research ecosystem for insight.">
              The technologies, methods, and platforms I use to transform
              complex environmental challenges into meaningful insights.
            </SectionHeader>
            <div className="skill-constellation reveal">
              {skillGroups.map((group, index) => (
                <ToolkitGroup group={group} index={index} key={group.category} />
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="contact-panel reveal">
              <div>
                <p className="eyebrow">Contact</p>
                <h2>Open to research conversations and collaborations.</h2>
                <p>
                  Reach out by email or connect through researcher and
                  professional profiles.
                </p>
              </div>
              <div className="contact-links">
                {contactLinks.map((link) => (
                  <a
                    href={link.url}
                    key={link.label}
                    rel={link.url.startsWith('http') ? 'noreferrer' : undefined}
                    target={link.url.startsWith('http') ? '_blank' : undefined}
                  >
                    <SocialIcon label={link.label} />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
