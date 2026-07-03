import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Download, Mail, Github, Linkedin, ExternalLink,
  Code2, Cpu, Globe, Database, Wrench, Sparkles, MapPin, Phone,
  GraduationCap, Award, Send, ChevronDown,
} from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { Reveal } from "@/components/portfolio/Reveal";
import { CERTIFICATIONS } from "@/data/certifications";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sankar Rao Kandi — AI & Software Developer" },
      { name: "description", content: "Computer Engineering graduate building AI, full-stack, and Android applications — including a production QR Library system used by Government Polytechnic Anakapalli." },
      { property: "og:title", content: "Sankar Rao Kandi — AI & Software Developer" },
      { property: "og:description", content: "Portfolio: production AI, full-stack, and Android projects that solve real problems." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

/* ---------------- DATA ---------------- */

const STATS = [
  { value: "4+", label: "Real-world projects shipped" },
  { value: "92%", label: "Diploma CGPA, Computer Engg." },
  { value: "100K+", label: "Images trained on for PDDS" },
  { value: "1", label: "System live in college library" },
];

const SKILLS: { title: string; icon: typeof Code2; items: string[] }[] = [
  { title: "Languages", icon: Code2, items: ["Python", "Java", "C", "JavaScript"] },
  { title: "AI / ML", icon: Cpu, items: ["TensorFlow", "Keras", "OpenCV", "NumPy", "Pandas"] },
  { title: "Frontend", icon: Globe, items: ["React", "Vite", "HTML", "CSS", "TypeScript"] },
  { title: "Backend & DB", icon: Database, items: ["Spring Boot", "JWT Auth", "MySQL", "Firebase", "Firestore"] },
  { title: "Mobile", icon: Sparkles, items: ["Android Studio", "On-device TFLite"] },
  { title: "Tools", icon: Wrench, items: ["Git", "GitHub", "Vercel", "VS Code"] },
];

const PROJECTS = [
  {
    n: "01",
    title: "QR Based Library Management System",
    hook: "A production library platform — actively running in the Government Polytechnic Anakapalli library.",
    desc: "Real-time Admin, Student, and Staff portals with QR-driven issue & return, a relevance-based search engine, bulk Excel import, automated No-Dues certificates, and a transactions analytics dashboard.",
    tags: ["React", "Vite", "Firebase", "Firestore", "QR"],
    href: "https://github.com/",
    demo: "#",
    badge: "In Production",
  },
  {
    n: "02",
    title: "Research Nest",
    hook: "Full-stack platform for the entire lifecycle of student research projects.",
    desc: "Role-based portals for Admin, Staff, and Students with a GitHub-inspired file collaboration system (version history + rollback), real-time group chat, automated assessments, and a certificate approval pipeline.",
    tags: ["Spring Boot", "Spring Security", "JWT", "MySQL", "React", "TypeScript"],
    href: "https://github.com/",
    demo: "#",
    badge: "Full-stack",
  },
  {
    n: "03",
    title: "Plant Disease Detection System",
    hook: "On-device Android app that diagnoses 40 plant diseases from a single leaf photo.",
    desc: "Trained a CNN on 100,000+ leaf images and deployed it on Android for fully offline inference. Includes multilingual disease info and is optimized for real-time predictions in the field.",
    tags: ["Python", "TensorFlow", "Keras", "Android", "Computer Vision"],
    href: "https://github.com/",
    demo: "#",
    badge: "AI / Mobile",
  },
  {
    n: "04",
    title: "IoT Energy Monitoring Meter",
    hook: "Smart real-time energy monitor with remote tracking and usage analytics.",
    desc: "Sensor-based data collection feeding a real-time energy dashboard, supporting remote monitoring and smarter power-management decisions.",
    tags: ["IoT", "Embedded", "Sensors", "Wireless"],
    href: "https://github.com/",
    demo: "#",
    badge: "IoT",
  },
];

const TIMELINE = [
  { year: "2026", title: "Graduated — Diploma in Computer Engineering", body: "Built Research Nest and pushed into scalable full-stack and backend architecture." },
  { year: "2025", title: "Started internship at HMIES Solutions", body: "Joined as a Computer Engineering Intern, shipping software with Java, GitHub, and Vercel." },
  { year: "2025", title: "Shipped real-world systems", body: "Plant Disease Detection, IoT Energy Meter, and the QR Library System deployed in college." },
  { year: "2024", title: "Foundations in software & web", body: "Built up the core: data structures, web tech, system logic, and project execution." },
  { year: "2023", title: "Started Diploma in CE", body: "Began at Government Polytechnic, Anakapalli and got hooked on programming." },
];

// From LinkedIn — "Experience"
const WORK_EXPERIENCE = [
  {
    role: "Computer Engineering Intern",
    company: "HMIES Solutions (OPC) Pvt Ltd",
    period: "November 2025 – May 2026 · 7 months",
    location: "Visakhapatnam",
    points: [
      "Worked on software development projects using Java alongside modern tooling like GitHub and Vercel.",
      "Collaborated with the team to analyze requirements, build solutions, and test applications.",
      "Gained hands-on experience in programming, debugging, and software deployment following industry best practices.",
    ],
  },
];

// From LinkedIn — "Top Skills"
const CORE_STRENGTHS = ["Time Management", "Self-Management", "OpenCV"];

/* ---------------- PAGE ---------------- */

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */

const ROLES = [
  "Full-Stack Developer",
  "AI / ML Developer",
  "Android Developer",
];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = ROLES[i % ROLES.length];
    const t = setTimeout(() => {
      if (!del) {
        const next = full.slice(0, text.length + 1);
        setText(next);
        if (next === full) setTimeout(() => setDel(true), 1400);
      } else {
        const next = full.slice(0, text.length - 1);
        setText(next);
        if (next === "") { setDel(false); setI((v) => v + 1); }
      }
    }, del ? 35 : 70);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="text-accent">
      {text}
      <span className="inline-block w-[2px] h-[1em] translate-y-[3px] bg-accent ml-0.5 animate-pulse" />
    </span>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* background grid + glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.25] dark:opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(to right, color-mix(in oklab, var(--color-foreground) 8%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--color-foreground) 8%, transparent) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "radial-gradient(ellipse at top, black 40%, transparent 75%)",
          }}
        />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[820px] rounded-full blur-3xl opacity-30"
             style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--color-accent) 60%, transparent), transparent)" }} />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Open to internships & full-time roles
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-balance"
        >
          Hi, I'm <span className="text-foreground">Sankar Rao Kandi</span>.
          <br />
          I build things that <span className="text-accent">actually ship</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground"
        >
          Computer Engineering graduate and <Typewriter />. From an on-device Android plant-disease detector to a full-stack library platform live in my college — I like turning messy real-world problems into clean, working software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition hover:opacity-90">
            View Projects <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-medium hover:border-accent/50 hover:text-accent transition">
            <Download className="h-4 w-4" /> Download Resume
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium text-foreground/80 hover:text-accent transition">
            Get in touch <Mail className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex items-center gap-4 text-muted-foreground"
        >
          {/* TODO: replace with your real GitHub profile URL */}
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent transition"><Github className="h-5 w-5" /></a>
          <a href="https://www.linkedin.com/in/sankar-rao-kandi-3488b03b7" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent transition"><Linkedin className="h-5 w-5" /></a>
          <a href="mailto:kandishankar023@gmail.com" aria-label="Email" className="hover:text-accent transition"><Mail className="h-5 w-5" /></a>
        </motion.div>

        <a href="#about" className="mt-16 hidden sm:flex items-center gap-2 text-xs text-muted-foreground hover:text-accent">
          Scroll <ChevronDown className="h-3.5 w-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">{kicker}</p>
      <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-balance">{title}</h2>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker="About" title="A short story of what I build and why." />
        <div className="grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-3 space-y-4 text-foreground/85 leading-relaxed">
            <p>
              I'm a Computer Engineering graduate from Government Polytechnic, Anakapalli, fascinated by the space where AI, software engineering, and real product thinking overlap.
            </p>
            <p>
              I learn best by shipping. Most of what I know comes from building things end-to-end — picking a real problem, designing a system around it, and then debugging the dozen unglamorous issues nobody warned me about.
            </p>
            <p>
              That habit has produced an on-device AI plant-disease detector, an IoT energy monitor, and a QR-based library platform that's currently running in my college's library. Right now I'm going deeper on full-stack architecture and ML systems, and I'm looking for a place where I can keep doing that with a strong engineering team.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-3">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-surface p-4">
                  <div className="font-display text-2xl font-bold text-accent">{s.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-border bg-surface p-4">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Currently focused on</div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {["AI / ML", "Full-stack", "Android", "System design", "Real-time apps"].map((t) => (
                  <span key={t} className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs text-accent">{t}</span>
                ))}
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-border bg-surface p-4">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Core strengths</div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {CORE_STRENGTHS.map((t) => (
                  <span key={t} className="rounded-full border border-border bg-background/40 px-2.5 py-1 text-xs text-foreground/80">{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SKILLS ---------------- */

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24 sm:py-32 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker="Skills" title="The tools I actually reach for." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((g, idx) => {
            const Icon = g.icon;
            return (
              <Reveal key={g.title} delay={idx * 0.05}>
                <div className="group h-full rounded-xl border border-border bg-surface p-5 transition hover:border-accent/40 hover:bg-surface-elevated">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-8 w-8 place-items-center rounded-md bg-accent/15 text-accent">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="font-display font-semibold">{g.title}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {g.items.map((s) => (
                      <span key={s} className="rounded-md border border-border bg-background/40 px-2.5 py-1 text-xs text-foreground/80">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS ---------------- */

function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24 sm:py-32 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker="Projects" title="Things I've built — most impressive first." />
        <div className="grid gap-5 lg:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <article className="group relative h-full rounded-2xl border border-border bg-surface p-6 sm:p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-accent)_40%,transparent),0_20px_60px_-20px_color-mix(in_oklab,var(--color-accent)_35%,transparent)]">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-xs text-muted-foreground">{p.n}</span>
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-accent">
                    {p.badge}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-xl sm:text-2xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-accent/90">{p.hook}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-md border border-border bg-background/40 px-2 py-0.5 text-[11px] text-foreground/80">{t}</span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent transition">
                    <Github className="h-4 w-4" /> Code
                  </a>
                  {p.demo && p.demo !== "#" && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent transition">
                      <ExternalLink className="h-4 w-4" /> Demo
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- EXPERIENCE / EDUCATION ---------------- */

function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24 sm:py-32 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker="Journey" title="Experience & education." />


        {/* Work Experience */}
        <div className="mb-12 space-y-4">
          {WORK_EXPERIENCE.map((job) => (
            <Reveal key={job.company}>
              <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display font-semibold text-base sm:text-lg">{job.role}</h3>
                    <p className="text-sm text-accent">{job.company}</p>
                  </div>
                  <div className="text-right text-xs text-muted-foreground shrink-0">
                    <p>{job.period}</p>
                    <p>{job.location}</p>
                  </div>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Timeline */}
          <div className="lg:col-span-3">
            <ol className="relative border-l border-border pl-6">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.05}>
                  <li className="mb-8 last:mb-0">
                    <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-sm font-semibold text-accent">{t.year}</span>
                      <h3 className="font-display text-base sm:text-lg font-semibold">{t.title}</h3>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{t.body}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* Education */}
          <div className="lg:col-span-2 space-y-4">
            <Reveal>
              <div className="rounded-xl border border-border bg-surface p-5">
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-semibold">Diploma in Computer Engineering</h3>
                    <p className="text-sm text-muted-foreground">Government Polytechnic, Anakapalli · 2023 – 2026</p>
                    <p className="mt-1 text-sm"><span className="text-accent font-medium">92%</span> · Graduated</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="rounded-xl border border-border bg-surface p-5">
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-semibold">Secondary School</h3>
                    <p className="text-sm text-muted-foreground">Seetanjali High School, Visakhapatnam · 2023</p>
                    <p className="mt-1 text-sm"><span className="text-accent font-medium">93%</span></p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
/* ---------------- CERTIFICATIONS ---------------- */

function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24 py-24 sm:py-32 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker="Certifications" title="Certificates & recognitions." />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.06}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition duration-300 hover:-translate-y-1 hover:border-accent/50">
                <div className="aspect-[4/3] w-full border-b border-border bg-background/40">
                  <CertThumb src={c.image} alt={c.title} />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display font-semibold leading-snug">{c.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {c.org} · {c.date}
                  </p>
                  <p className="mt-2.5 text-sm text-foreground/75">{c.note}</p>
                  {c.credentialUrl && (
                    <a
                      href={c.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:opacity-80 transition"
                    >
                      View credential <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Shows the certificate image; falls back to an icon placeholder if the
 *  image is missing (e.g. before you've added the file to /public/certificates). */
function CertThumb({ src, alt }: { src?: string; alt: string }) {
  const [failed, setFailed] = useState(!src);

  if (!src || failed) {
    return (
      <div className="grid h-full w-full place-items-center">
        <Award className="h-10 w-10 text-muted-foreground/40" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

/* ---------------- CONTACT ---------------- */

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${data.get("name") ?? ""}`);
    const body = encodeURIComponent(`${data.get("message") ?? ""}\n\n— ${data.get("name") ?? ""} (${data.get("email") ?? ""})`);
    window.location.href = `mailto:kandishankar023@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-32 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker="Contact" title="Open to internships and software / ML roles — let's talk." />

        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2 space-y-4">
            <p className="text-muted-foreground">
              The fastest way to reach me is email. I usually reply within a day.
            </p>
            <div className="space-y-3 text-sm">
              <a href="mailto:kandishankar023@gmail.com" className="flex items-center gap-3 group">
                <span className="grid h-9 w-9 place-items-center rounded-md bg-accent/15 text-accent"><Mail className="h-4 w-4" /></span>
                <span className="group-hover:text-accent transition">kandishankar023@gmail.com</span>
              </a>
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-md bg-accent/15 text-accent"><Phone className="h-4 w-4" /></span>
                <span>+91 95021 14387</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-md bg-accent/15 text-accent"><MapPin className="h-4 w-4" /></span>
                <span>Visakhapatnam, Andhra Pradesh</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              {/* TODO: replace with your real GitHub profile URL */}
              <a href="https://github.com/Sankar-Rao-K" target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface hover:text-accent hover:border-accent/50 transition" aria-label="GitHub"><Github className="h-4 w-4" /></a>
              <a href="https://www.linkedin.com/in/sankar-rao-kandi-3488b03b7" target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface hover:text-accent hover:border-accent/50 transition" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-accent/40 bg-accent/10 px-3 py-2 text-sm text-accent hover:bg-accent hover:text-accent-foreground transition">
                <Download className="h-4 w-4" /> Resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-surface p-6 sm:p-7 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@email.com" />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground" htmlFor="message">Message</label>
                <textarea
                  id="message" name="message" required rows={5}
                  placeholder="What are you working on?"
                  className="mt-1.5 w-full resize-none rounded-md border border-border bg-background/50 px-3 py-2.5 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:opacity-90 transition">
                {sent ? "Opening your mail client…" : "Send message"} <Send className="h-4 w-4" />
              </button>
              <p className="text-xs text-muted-foreground">Submitting opens your email client with the message pre-filled.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs font-medium text-muted-foreground" htmlFor={name}>{label}</label>
      <input
        id={name} name={name} type={type} required placeholder={placeholder}
        className="mt-1.5 w-full rounded-md border border-border bg-background/50 px-3 py-2.5 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
      />
    </div>
  );
}
