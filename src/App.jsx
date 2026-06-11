import { useState } from 'react';
import tasnimPhoto from './assets/IMG_7278.jpeg';
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

const skills = [
  'Visualization',
  'AR/VR',
  'Machine Learning',
  'IoT',
  'Computer Vision',
  'Data Analysis',
  'Sustainability Research',
];

const projectPlaceholders = [
  {
    label: 'Research Project',
    title: 'Climate Risk Decision Systems',
    description:
      'A placeholder for research work connecting data infrastructure, environmental risk, and decision support.',
  },
  {
    label: 'Publication',
    title: 'Publication Details Coming Soon',
    description:
      'A placeholder for peer-reviewed articles, conference papers, reports, or other research outputs.',
  },
  {
    label: 'Visualization Work',
    title: 'Immersive and Scientific Visualization',
    description:
      'A placeholder for AR/VR, scientific visualization, and interactive data exploration work.',
  },
];

const contactLinks = ['Email', 'LinkedIn', 'Google Scholar', 'ResearchGate'];

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

function App() {
  const [theme, setTheme] = useState('earth');

  return (
    <div className={`portfolio-page theme-${theme}`}>
      <header className="site-header">
        <nav className="nav container" aria-label="Primary navigation">
          <a className="brand" href="#home">
            MTO
          </a>
          <div className="nav-actions">
            <div className="nav-links">
              <a href="#about">About</a>
              <a href="#research">Research</a>
              <a href="#projects">Projects</a>
              <a href="#publications">Publications</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>
            <label className="theme-picker">
              <span>Theme</span>
              <select value={theme} onChange={(event) => setTheme(event.target.value)}>
                {themeOptions.map((option) => (
                  <option value={option.value} key={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
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

            <div className="portrait-wrap reveal">
              <div className="portrait-frame">
                <img
                  className="profile-photo"
                  src={tasnimPhoto}
                  alt="Marzan Tasnim Oyshi"
                />
              </div>
              <div className="hero-affiliation" aria-label="Affiliation">
                <span>Research Associate, IOER</span>
                <span>Doctoral Candidate, TU Dresden</span>
              </div>
            </div>
          </div>

          <div className="hero-content-panel container reveal">
            <p className="eyebrow">Scientist . Designer . Explorer</p>
            <h1>Marzan Tasnim Oyshi</h1>
            <p className="hero-tagline">Where data becomes experience.</p>
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
            <SectionHeader eyebrow="Projects / Publications" title="Work in progress, ready to evolve.">
              Project and publication details can be updated later as titles,
              links, abstracts, and collaborators become ready to share.
            </SectionHeader>
            <div className="project-grid">
              {projectPlaceholders.map((project) => (
                <article className="project-card reveal" key={project.title}>
                  <p className="card-label">{project.label}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </article>
              ))}
            </div>
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
                <a href={link.url} key={link.label}>
                  {link.label}
                </a>
              ))}
            </div>
            <PublicationTimeline items={publications} />
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container skills-grid">
            <SectionHeader eyebrow="Skills" title="Tools for seeing, sensing, and explaining change.">
              A research and technical skill set for building, analyzing, and
              communicating complex climate and visualization work.
            </SectionHeader>
            <div className="skill-constellation reveal">
              {skills.map((skill) => (
                <span className="skill-pill" key={skill}>
                  {skill}
                </span>
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
                  Placeholder profile links are included for now and can be
                  replaced with direct URLs when available.
                </p>
              </div>
              <div className="contact-links">
                {contactLinks.map((link) => (
                  <a href="#" key={link}>
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
