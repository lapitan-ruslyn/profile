import Image from "next/image";

// Update these values and arrays to personalize the profile.
const profile = {
  name: "Ruslyn Lapitan",
  age: "20",
  address: "Solano, Nueva Vizcaya",
  email: "ruslyn030106@gmail.com",
  bio: "Keeping things convenient.",
  about:
    "A 3rd-year BSIT student, majoring in Network Design and Management.",
  school: "Nueva Vizcaya State University",
  studies: "Software engineering and network design",
};

const projects = [
  {
    number: "01",
    category: "NETWORK MANAGEMENT",
    title: "Network Management & Monitoring Systems",
    subtitle: "Web-Based Topology Mapper and Real-Time Network Visualizer",
    overview:
      "A web dashboard that scans local or remote enterprise network segments to automatically discover connected devices, visualize network topology dynamically, and display live traffic analytics and node statuses.",
  },
  {
    number: "02",
    category: "WEB DEVELOPMENT",
    title: "Web-Based Bandwidth Allocator and Captive Portal System",
    overview:
      "A web portal interface managing guest network access, authenticating users, monitoring bandwidth consumption, and applying dynamic QoS (Quality of Service) rule sets per user session.",
  },
];

const contacts = [
  { name: "Twitter", href: "https://twitter.com/", mark: "𝕏" },
  { name: "LinkedIn", href: "https://www.linkedin.com/", mark: "in" },
  { name: "Email", href: `mailto:${profile.email}`, mark: "✉" },
  { name: "GitHub", href: "https://github.com/", mark: "⌘" },
];

export default function HomePage() {
  return (
    <main className="site-shell">
      <div className="page-glow page-glow-one" aria-hidden="true" />
      <div className="page-glow page-glow-two" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#home" aria-label={`${profile.name} home`}>
          <span className="brand-star" aria-hidden="true">✳</span>
          <span>RUSLYN<span className="brand-period">.</span></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-contact" href={`mailto:${profile.email}`}>
          Say hello <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> THE MAKER&apos;S SPACE</p>
          <h1 id="hero-title">
            Hello, I&apos;m
            <span className="name-line">Ruslyn<span className="name-star" aria-hidden="true">✦</span></span>
            <span className="surname">Lapitan.</span>
          </h1>
          <p className="hero-bio">{profile.bio}</p>
          <p className="hero-intro">{profile.about}</p>
          <a className="primary-link" href="#projects">
            Explore my work <span aria-hidden="true">↓</span>
          </a>
          <div className="hero-coordinates" aria-label={`Age ${profile.age}, ${profile.address}`}>
            <span>{profile.age} YEARS</span>
            <span className="coordinate-divider" aria-hidden="true">✳</span>
            <span>{profile.address.toUpperCase()}</span>
          </div>
        </div>

        <div className="portrait-scene">
          <span className="orbit orbit-one" aria-hidden="true" />
          <span className="orbit orbit-two" aria-hidden="true" />
          <span className="portrait-spark portrait-spark-one" aria-hidden="true">✦</span>
          <span className="portrait-spark portrait-spark-two" aria-hidden="true">✧</span>
          <figure className="portrait-frame">
            <Image
              className="portrait-image"
              src="/lynn.jpg"
              alt="Portrait of Ruslyn Lapitan"
              fill
              priority
              sizes="(max-width: 760px) 78vw, 440px"
            />
          </figure>
          <div className="portrait-caption">
            <span className="caption-star" aria-hidden="true">✳</span>
            <span>CURIOUS BY NATURE</span>
            <span>BUILDING WHAT CONNECTS US</span>
          </div>
          <span className="portrait-note" aria-hidden="true">a little wonder<br />in every detail</span>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>THOUGHTFUL SYSTEMS</span><i>✳</i><span>CURIOUS MINDS</span><i>✳</i>
          <span>CONNECTED IDEAS</span><i>✳</i><span>THOUGHTFUL SYSTEMS</span><i>✳</i>
          <span>CURIOUS MINDS</span><i>✳</i><span>CONNECTED IDEAS</span><i>✳</i>
        </div>
      </div>

      <section className="about-section section-wrap" id="about" aria-labelledby="about-title">
        <div className="section-heading">
          <p className="eyebrow"><span className="eyebrow-line" /> A LITTLE ABOUT ME</p>
          <h2 id="about-title">Everything is <span>connected.</span></h2>
        </div>
        <div className="about-grid">
          <p className="about-statement">
            I&apos;m a {profile.about.replace(/^A /, "")} I&apos;m drawn to the invisible
            threads that make technology feel seamless—and to making the complex
            feel a little more human.
          </p>
          <div className="about-facts">
            <div className="fact-card">
              <span className="fact-icon" aria-hidden="true">⌂</span>
              <div>
                <span className="fact-label">BACKGROUND &amp; STUDIES</span>
                <p>{profile.studies}</p>
              </div>
            </div>
            <div className="fact-card">
              <span className="fact-icon" aria-hidden="true">✧</span>
              <div>
                <span className="fact-label">EDUCATION</span>
                <p>{profile.school}<span className="fact-note">Currently studying</span></p>
              </div>
            </div>
            <div className="fact-card">
              <span className="fact-icon" aria-hidden="true">⌖</span>
              <div>
                <span className="fact-label">BASED IN</span>
                <p>{profile.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects" aria-labelledby="projects-title">
        <div className="section-wrap">
          <div className="projects-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> SELECTED WORK</p>
              <h2 id="projects-title">Ideas made <span>real.</span></h2>
            </div>
            <p className="projects-note">A couple of things I&apos;ve been dreaming up and building.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-content">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
                  <p className="project-overview">{project.overview}</p>
                </div>
                <span className="project-flower" aria-hidden="true">✳</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
        <p className="eyebrow"><span className="eyebrow-line" /> THE NEXT CONNECTION</p>
        <h2 id="contact-title">Have a good idea?<br /><span>Let&apos;s make it happen.</span></h2>
        <a className="contact-email" href={`mailto:${profile.email}`}>
          {profile.email}<span aria-hidden="true">↗</span>
        </a>
        <div className="social-links" aria-label="Social and contact links">
          {contacts.map((contact) => (
            <a
              className="social-link"
              href={contact.href}
              key={contact.name}
              aria-label={contact.name}
              target={contact.name === "Email" ? undefined : "_blank"}
              rel={contact.name === "Email" ? undefined : "noreferrer"}
            >
              <span className="social-mark" aria-hidden="true">{contact.mark}</span>
              <span>{contact.name}</span>
              {contact.name !== "Email" && <span className="social-arrow" aria-hidden="true">↗</span>}
            </a>
          ))}
        </div>
      </section>

      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="#home">
          <span className="brand-star" aria-hidden="true">✳</span>
          <span>RUSLYN<span className="brand-period">.</span></span>
        </a>
        <span>MADE WITH CURIOSITY <span className="footer-heart" aria-hidden="true">♥</span></span>
        <a href="#home" className="back-to-top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
