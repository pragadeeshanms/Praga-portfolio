import React, { useState } from "react";
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, Menu, X,
  Code2, Database, Globe, Sparkles, GraduationCap, BriefcaseBusiness,
  ExternalLink, Terminal, Send, CheckCircle2, Cpu, Layers3
} from "lucide-react";

const profile = {
  name: "Pragadeeshan MS",
  role: "Software Systems Student · Aspiring Full-Stack Developer",
  location: "Coimbatore, Tamil Nadu, India",
  email: "pragadeeshanms@gmail.com",
  phone: "+91 9677628822",
  github: "https://github.com/pragadeeshanms",
  linkedin: "https://www.linkedin.com/in/pragadeeshan-ms",
};

const projects = [
  {
    number: "01",
    name: "FLIPSKILL",
    type: "Skill Exchange Platform",
    description: "A platform designed to help people exchange skills, discover learning partners, and manage their learning profiles. The project focuses on a responsive user experience and practical full-stack application workflows.",
    highlights: [
      "Built responsive user interfaces with React.js, HTML, CSS and JavaScript.",
      "Implemented user authentication, profile management and CRUD operations.",
      "Managed application data with MongoDB and used GitHub for version control."
    ],
    stack: ["React.js", "JavaScript", "HTML", "CSS", "MongoDB", "GitHub"],
    icon: <Layers3 size={22} />
  },
  {
    number: "02",
    name: "PRANOVA",
    type: "AI Deep Fake Detection Platform",
    description: "A full-stack AI platform concept for identifying manipulated digital media. It brings together a media-upload experience, an analysis workflow, and a generated detection report in one interface.",
    highlights: [
      "Developed a full-stack platform for detecting manipulated digital media.",
      "Created responsive frontend components using React.js and JavaScript.",
      "Implemented media upload, analysis workflow and detection report generation."
    ],
    stack: ["React.js", "JavaScript", "AI", "Media Analysis", "Full Stack"],
    icon: <Sparkles size={22} />
  }
];

const skills = [
  { title: "Programming", items: ["Python", "C", "C++"], icon: <Code2 /> },
  { title: "Web technologies", items: ["HTML", "CSS", "React", "JavaScript", "PHP"], icon: <Globe /> },
  { title: "Database", items: ["MySQL", "CRUD", "Joins", "Relationships", "Stored Procedures", "MongoDB"], icon: <Database /> },
  { title: "Tools & testing", items: ["GitHub", "Eclipse IDE", "VS Code", "Testim AI", "Copilot", "Data Validation"], icon: <Terminal /> }
];

const education = [
  { period: "2024 — 2027", level: "B.Sc. — Software Systems", institution: "Sri Krishna Arts and Science College", detail: "Coimbatore, Tamil Nadu · CGPA: 7.0", current: true },
  { period: "2024", level: "Higher Secondary", institution: "St. James Matriculation Higher Secondary School", detail: "Tiruchirappalli, Tamil Nadu · 73%" },
  { period: "2022", level: "SSLC", institution: "St. James Matriculation Higher Secondary School", detail: "Tiruchirappalli, Tamil Nadu · 75%" }
];

const certifications = [
  ["Oracle Cloud Infrastructure", "Generative AI"],
  ["Microsoft", "Gen AI for Data Statistics"],
  ["IBM", "Python for Data Science, AI and Development"],
  ["Google Cloud", "Introduction to Generative AI"]
];

function SectionHeading({ eyebrow, title, text }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function submitContact(e) {
    e.preventDefault();
    setSending(true);
    setStatus("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not send message.");
      setStatus(data.message);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus(`${err.message} If you're running only the frontend, email me directly at ${profile.email}.`);
    } finally { setSending(false); }
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">P<span>.</span></span><span>PRAGADEESHAN<span className="brand-sub">PORTFOLIO</span></span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "nav open" : "nav"}>
          {[["Home","#home"],["Profile","#profile"],["Projects","#projects"],["Academics","#academics"],["Contact","#contact"]].map(([label,href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-resume" href={`mailto:${profile.email}?subject=Resume%20Request`}>Get in touch <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="pulse" /> OPEN TO LEARNING & OPPORTUNITIES</div>
            <p className="hero-intro">HELLO, I'M</p>
            <h1>Pragadeeshan<br/><span>MS.</span></h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-description">I enjoy turning ideas into useful digital experiences. I have hands-on experience with web application development, database management, and academic projects that bring frontend development and practical application workflows together.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-ghost" href="#contact">Let's connect <Mail size={16}/></a>
            </div>
            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
              <span><MapPin size={16}/> {profile.location}</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Developer themed illustration">
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="hero-glow"></div>
            <div className="code-window">
              <div className="window-bar"><div><i></i><i></i><i></i></div><span>developer.js</span><span className="window-dots">•••</span></div>
              <div className="code-content">
                <div><span className="line-no">01</span><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}</div>
                <div><span className="line-no">02</span>&nbsp;&nbsp;name: <span className="code-green">'Pragadeeshan'</span>,</div>
                <div><span className="line-no">03</span>&nbsp;&nbsp;focus: <span className="code-green">'Full Stack'</span>,</div>
                <div><span className="line-no">04</span>&nbsp;&nbsp;curiosity: <span className="code-orange">Infinity</span>,</div>
                <div><span className="line-no">05</span>&nbsp;&nbsp;building: <span className="code-green">'What's next'</span></div>
                <div><span className="line-no">06</span>{'}'};</div>
                <div className="code-cursor"><span className="line-no">07</span><span className="code-purple">console</span>.log(developer);<b></b></div>
              </div>
              <div className="window-footer"><span><span className="footer-dot"></span> JavaScript</span><span>UTF-8&nbsp;&nbsp; LF</span></div>
            </div>
            <div className="float-chip chip-react"><span>⚛</span> React.js</div>
            <div className="float-chip chip-db"><Database size={15}/> MySQL</div>
            <div className="float-chip chip-js">JS</div>
            <div className="hero-index">01 / 05</div>
          </div>
          <a className="scroll-cue" href="#profile"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
        </section>

        <section className="section-wrap profile-section" id="profile">
          <SectionHeading eyebrow="01 — ABOUT ME" title={<>A curious mind.<br/><span className="muted-title">A builder's mindset.</span></>} text="A little about who I am, what I work with, and what motivates me." />
          <div className="profile-grid">
            <div className="about-card">
              <span className="card-kicker">MY INTRODUCTION</span>
              <h3>Learning by building<br/>and building to learn.</h3>
              <p>I'm a B.Sc. Software Systems student at Sri Krishna Arts and Science College, Coimbatore. My practical exposure includes web application development and database management using Python, PHP, MySQL, CSS and JavaScript.</p>
              <p>Through academic and project work, I've explored SQL queries, CRUD operations, user-facing interfaces and application workflows. I'm interested in learning new technologies and growing into a developer who can contribute to meaningful products.</p>
              <a className="text-link" href={`mailto:${profile.email}`}>Let's talk <ArrowUpRight size={16}/></a>
            </div>
            <div className="quick-facts">
              <div className="fact"><span className="fact-icon"><GraduationCap/></span><div><small>EDUCATION</small><strong>B.Sc. Software Systems</strong><span>2024 — 2027</span></div></div>
              <div className="fact"><span className="fact-icon"><Code2/></span><div><small>FOCUS AREA</small><strong>Web Development</strong><span>Frontend & application workflows</span></div></div>
              <div className="fact"><span className="fact-icon"><MapPin/></span><div><small>BASED IN</small><strong>Coimbatore, India</strong><span>Tamil Nadu</span></div></div>
              <div className="fact"><span className="fact-icon"><Sparkles/></span><div><small>CURRENT MINDSET</small><strong>Always learning</strong><span>Exploring tools and technologies</span></div></div>
            </div>
          </div>
        </section>

        <section className="skills-section">
          <div className="section-wrap">
            <SectionHeading eyebrow="02 — TOOLKIT" title="Skills & technologies" text="Technologies and tools I've worked with through coursework and project experience." />
            <div className="skills-grid">{skills.map((group, i) => <article className="skill-card" key={group.title}><div className="skill-top"><span className="skill-icon">{group.icon}</span><span className="skill-number">0{i+1}</span></div><h3>{group.title}</h3><div className="tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div>
          </div>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <SectionHeading eyebrow="03 — SELECTED WORK" title={<>Projects that turn<br/><span className="muted-title">ideas into experiences.</span></>} text="A closer look at two projects from my academic and practical development journey." />
          <div className="project-list">{projects.map((project) => <article className="project-card" key={project.name}>
            <div className="project-visual"><div className="project-visual-top"><span>FEATURED PROJECT</span><span>{project.number}</span></div><div className="project-symbol">{project.icon}</div><div className="project-visual-name">{project.name}</div><div className="project-visual-type">{project.type}</div><div className="visual-grid"></div></div>
            <div className="project-info"><div className="project-meta"><span>{project.number} / PROJECT</span><span className="project-type">{project.type}</span></div><h3>{project.name}</h3><p className="project-description">{project.description}</p><ul>{project.highlights.map(point => <li key={point}>{point}</li>)}</ul><div className="tags project-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div><a className="text-link" href={profile.github} target="_blank" rel="noreferrer">Explore on GitHub <ArrowUpRight size={16}/></a></div>
          </article>)}</div>
          <div className="github-banner"><div className="github-icon"><Github size={27}/></div><div><span className="eyebrow">MORE CODE, MORE CURIOSITY</span><h3>Explore my GitHub profile</h3><p>Visit my profile to discover repositories, experiments and future projects.</p></div><a className="button button-primary" href={profile.github} target="_blank" rel="noreferrer">View repositories <ExternalLink size={16}/></a></div>
        </section>

        <section className="education-section" id="academics">
          <div className="section-wrap">
            <SectionHeading eyebrow="04 — THE JOURNEY" title="Academics & certifications" text="My educational background and certifications that support my learning journey." />
            <div className="journey-grid">
              <div className="education-column"><h3 className="column-title"><GraduationCap size={19}/> Education</h3><div className="timeline">{education.map((item) => <div className="timeline-item" key={item.level}><span className="timeline-dot"></span><span className="period">{item.period} {item.current && <em>CURRENT</em>}</span><h4>{item.level}</h4><strong>{item.institution}</strong><p>{item.detail}</p></div>)}</div></div>
              <div className="cert-column"><h3 className="column-title"><BriefcaseBusiness size={18}/> Certifications</h3><div className="cert-list">{certifications.map(([issuer, name], i) => <div className="cert-item" key={issuer}><span className="cert-number">0{i+1}</span><div><small>{issuer}</small><strong>{name}</strong></div><CheckCircle2 size={17}/></div>)}</div><div className="learning-note"><Cpu size={20}/><p><strong>Learning never stops.</strong><br/>I keep exploring how emerging tools and technologies can be applied to real-world problems.</p></div></div>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <SectionHeading eyebrow="05 — SAY HELLO" title={<>Have an idea?<br/><span className="muted-title">Let's connect.</span></>} text="Interested in opportunities, collaborations, or simply talking tech? Feel free to reach out." />
          <div className="contact-grid">
            <div className="contact-details"><a href={`mailto:${profile.email}`} className="contact-method"><span className="contact-icon"><Mail/></span><span><small>EMAIL ME</small><strong>{profile.email}</strong></span><ArrowUpRight/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-method"><span className="contact-icon"><Linkedin/></span><span><small>CONNECT ON LINKEDIN</small><strong>linkedin.com/in/pragadeeshan-ms</strong></span><ArrowUpRight/></a><a href={profile.github} target="_blank" rel="noreferrer" className="contact-method"><span className="contact-icon"><Github/></span><span><small>CHECK OUT MY CODE</small><strong>github.com/pragadeeshanms</strong></span><ArrowUpRight/></a><div className="contact-location"><MapPin size={17}/>{profile.location}</div></div>
            <form className="contact-form" onSubmit={submitContact}><div className="form-heading"><h3>Send a message</h3><span>I'll be glad to hear from you.</span></div><label>Your name<input name="name" value={form.name} onChange={update} placeholder="Enter your name" required /></label><label>Email address<input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" required /></label><label>Your message<textarea name="message" value={form.message} onChange={update} placeholder="Tell me what's on your mind..." rows="4" required /></label><button className="button button-primary submit-button" type="submit" disabled={sending}>{sending ? "Sending..." : "Send message"} <Send size={16}/></button>{status && <p className="form-status" role="status">{status}</p>}</form>
          </div>
        </section>
      </main>

      <footer className="footer"><div className="footer-inner"><a className="brand" href="#home"><span className="brand-mark">P<span>.</span></span><span>PRAGADEESHAN<span className="brand-sub">PORTFOLIO</span></span></a><p>Designed & built with curiosity. © {new Date().getFullYear()} Pragadeeshan MS.</p><div className="footer-socials"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail/></a></div></div></footer>
    </>
  );
}
export default App;