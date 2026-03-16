"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Home,
  User,
  Code2,
  Briefcase,
  FolderOpen,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Download,
  ChevronDown,
  Terminal,
  Zap,
  Database,
  Globe,
  Server,
  Sparkles,
  Send,
  BookOpen,
  Cpu,
  BarChart3,
} from "lucide-react";

// Navigation items
const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "contact", label: "Contact", icon: Mail },
];

// Skills data
const skills = [
  {
    category: "Research & Data Science",
    icon: BarChart3,
    items: [
      { name: "Statistical Modeling", level: 95 },
      { name: "Computational Intelligence", level: 90 },
      { name: "Machine Learning", level: 88 },
      { name: "Data Science", level: 92 },
    ],
  },
  {
    category: "Software Engineering",
    icon: Code2,
    items: [
      { name: "Python", level: 90 },
      { name: "Full Stack Development", level: 85 },
      { name: "Optimization Algorithms", level: 88 },
      { name: "Web3 / Blockchain", level: 75 },
    ],
  },
  {
    category: "Mathematics",
    icon: Database,
    items: [
      { name: "Combinatorial", level: 92 },
      { name: "Neural Networks", level: 85 },
      { name: "SIR Modeling", level: 90 },
      { name: "Game Theory", level: 82 },
    ],
  },
];

// Experience data
const experiences = [
  {
    title: "Lecturer & Researcher",
    company: "Universitas Tulungagung",
    period: "Current",
    description:
      "Conducting research and teaching in Mathematics, Computational Intelligence, and Data Science. Published multiple papers in indexed journals with 52+ citations on Google Scholar.",
    tech: ["Statistical Modeling", "Machine Learning", "Research", "Data Science"],
  },
  {
    title: "Research Collaborator",
    company: "Academic Research Projects",
    period: "2023 - Present",
    description:
      "Collaborating on various research projects including SIR Model applications in disease dynamics, IoT and smart infrastructure, and optimization algorithms.",
    tech: ["Python", "TensorFlow", "IoT", "Neural Networks"],
  },
  {
    title: "Software Developer",
    company: "Independent / Open Source",
    period: "Ongoing",
    description:
      "Developing software solutions focusing on optimization algorithms, Web3 applications, and blockchain projects. Exploring cutting-edge technologies.",
    tech: ["Full Stack", "Web3", "Blockchain", "Optimization"],
  },
];

// Projects data
const projects = [
  {
    title: "SIR Model with Machine Learning",
    description:
      "Advanced mathematical SIR model applications in disease dynamics leveraging machine learning for predictive analytics and epidemiological studies.",
    image: "/project1.png",
    tech: ["Python", "Machine Learning", "SIR Model", "Data Science"],
    link: "https://conference.unita.ac.id/index.php/conference/article/view/260",
    github: "https://github.com/lutfananas",
  },
  {
    title: "IoT & Smart Infrastructure",
    description:
      "Research on Internet of Things integration for smart and sustainable cities, focusing on technology integration and infrastructure optimization.",
    image: "/project2.png",
    tech: ["IoT", "Smart Cities", "Infrastructure", "Sustainability"],
    link: "https://conference.unita.ac.id/index.php/conference/article/view/485",
    github: "https://github.com/lutfananas",
  },
  {
    title: "Optimization Algorithms (LUNA)",
    description:
      "Development and implementation of optimization algorithms including harmony search and evolutionary algorithms for construction and engineering applications.",
    image: "/project1.png",
    tech: ["Python", "Optimization", "Algorithms", "Engineering"],
    link: "https://conference.unita.ac.id/index.php/conference/article/view/135",
    github: "https://github.com/lutfananas",
  },
  {
    title: "Project-Based Learning Model",
    description:
      "Implementation of project-based learning models for mathematics education, published in Innovative: Journal of Social Science Research with 31+ citations.",
    image: "/project2.png",
    tech: ["Education", "Mathematics", "Research", "Pedagogy"],
    link: "https://j-innovative.org/index.php/Innovative/article/view/3155",
    github: "https://github.com/lutfananas",
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function CVPage() {
  const [activeSection, setActiveSection] = useState("home");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsNavOpen(false);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-neon-cyan/5 blur-3xl"
        />
        <motion.div
          style={{ y: backgroundY }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-neon-purple/5 blur-3xl"
        />
        <motion.div
          style={{ y: backgroundY }}
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-neon-teal/5 blur-3xl"
        />
      </div>

      {/* Side Navigation - Desktop */}
      <nav className="fixed left-0 top-0 h-full w-20 hidden lg:flex flex-col items-center justify-center z-50 bg-background/50 backdrop-blur-sm border-r border-border">
        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-3 rounded-lg transition-all duration-300 group ${
                activeSection === item.id
                  ? "text-neon-cyan bg-neon-cyan/10"
                  : "text-muted-foreground hover:text-neon-cyan hover:bg-neon-cyan/5"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-8 bg-neon-cyan rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="absolute left-full ml-3 px-2 py-1 bg-card rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {item.label}
              </span>
            </motion.button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 h-16 lg:hidden z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="flex items-center justify-between px-4 h-full">
          <span className="text-gradient-animate font-bold text-lg">LAZ</span>
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="p-2 text-neon-cyan"
          >
            {isNavOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 bg-card border-b border-border p-4"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                    activeSection === item.id
                      ? "text-neon-cyan bg-neon-cyan/10"
                      : "text-muted-foreground hover:text-neon-cyan hover:bg-neon-cyan/5"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Main Content */}
      <main className="lg:ml-20">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center relative px-4 pt-16 lg:pt-0"
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-sm mb-8">
                <Sparkles className="w-4 h-4" />
                <span>Open for Collaboration</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
            >
              <span className="text-gradient-animate">Lutfan Anas Zahir</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8"
            >
              <span className="text-glow-cyan">Lecturer & Researcher</span> &{" "}
              <span className="text-glow-purple">Software Engineer</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
            >
              Specializing in Computational Intelligence, Data Science, and Optimization Algorithms. 
              Passionate about Web3, Blockchain, and building innovative solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="btn-glow-primary px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </button>
              <a
                href="https://scholar.google.com/citations?user=XX4gE9oAAAAJ&hl=id"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-futuristic px-8 py-3 rounded-lg font-semibold flex items-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                Google Scholar
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex justify-center gap-6 mt-12"
            >
              {[
                { icon: Github, href: "https://github.com/lutfananas", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/lutfan-anas-zahir-23b008266", label: "LinkedIn" },
                { icon: Globe, href: "https://www.researchgate.net/profile/Lutfan-Zahir-2", label: "ResearchGate" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-card border border-border hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300 hover:glow-cyan"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-muted-foreground cursor-pointer"
                onClick={() => scrollToSection("about")}
              >
                <ChevronDown className="w-8 h-8" />
              </motion.div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 left-10 hidden lg:block">
            <div className="w-20 h-20 border border-neon-cyan/30 rounded-lg rotate-45 animate-float" />
          </div>
          <div className="absolute bottom-1/4 right-10 hidden lg:block">
            <div className="w-16 h-16 border border-neon-purple/30 rounded-full animate-float" style={{ animationDelay: "1s" }} />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Profile Image */}
              <motion.div variants={fadeInUp} className="relative">
                <div className="relative aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-2xl transform rotate-6" />
                  <div className="absolute inset-0 glass-card rounded-2xl overflow-hidden">
                    <img 
                      src="/profile.png" 
                      alt="Lutfan Anas Zahir" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Floating badges */}
                  <div className="absolute -top-4 -right-4 px-4 py-2 bg-card border border-neon-cyan/30 rounded-lg text-neon-cyan text-sm animate-float">
                    <BookOpen className="w-4 h-4 inline mr-2" />
                    52+ Citations
                  </div>
                  <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-card border border-neon-purple/30 rounded-lg text-neon-purple text-sm animate-float" style={{ animationDelay: "0.5s" }}>
                    <Cpu className="w-4 h-4 inline mr-2" />
                    11+ Publications
                  </div>
                </div>
              </motion.div>

              {/* About Content */}
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-gradient-animate">About Me</span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I&apos;m a Lecturer and Researcher at Universitas Tulungagung with expertise in 
                    Mathematics, Computational Intelligence, and Data Science. My research focuses 
                    on optimization algorithms, statistical modeling, and machine learning applications.
                  </p>
                  <p>
                    I&apos;m passionate about Software Engineering, Web3, and Blockchain applications. 
                    Currently diving deep into full stack development while exploring cutting-edge 
                    technologies in the crypto and blockchain space.
                  </p>
                  <p>
                    I&apos;m always open to collaborating on crypto markets, indicators, web3 programs, 
                    and blockchain projects. My goal is to bridge the gap between academic research 
                    and practical technological applications.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[
                    { label: "Google Scholar Citations", value: "52+" },
                    { label: "Publications", value: "11+" },
                    { label: "Research Areas", value: "5+" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-4 glass-card rounded-lg">
                      <div className="text-2xl md:text-3xl font-bold text-neon-cyan">{stat.value}</div>
                      <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-4 md:px-8 bg-grid-pattern">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-gradient-animate">Expertise & Skills</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  A combination of academic research expertise and practical software engineering skills.
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid md:grid-cols-3 gap-8"
              >
                {skills.map((category) => (
                  <motion.div
                    key={category.category}
                    variants={fadeInUp}
                    className="glass-card glass-card-hover p-6 rounded-xl"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-lg bg-neon-cyan/10">
                        <category.icon className="w-6 h-6 text-neon-cyan" />
                      </div>
                      <h3 className="text-xl font-semibold">{category.category}</h3>
                    </div>

                    <div className="space-y-4">
                      {category.items.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between text-sm mb-2">
                            <span>{skill.name}</span>
                            <span className="text-neon-cyan">{skill.level}%</span>
                          </div>
                          <div className="progress-futuristic">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.2 }}
                              className="progress-futuristic-fill"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Additional Skills Tags */}
              <motion.div variants={fadeInUp} className="mt-12 text-center">
                <p className="text-muted-foreground mb-4">Research Interests & Technologies:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    "LUNA Algorithm", "Web3", "Blockchain", "Neural Networks", 
                    "SIR Modeling", "Game Theory", "IoT", "Smart Cities",
                    "TensorFlow", "Python", "Full Stack", "Data Analytics"
                  ].map((tech) => (
                    <span key={tech} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-gradient-animate">Experience & Research</span>
                </h2>
                <p className="text-muted-foreground">
                  Academic and professional journey in research and technology.
                </p>
              </motion.div>

              <div className="timeline-futuristic">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="timeline-item"
                  >
                    <div className="glass-card glass-card-hover p-6 rounded-xl ml-4">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-neon-cyan">{exp.title}</h3>
                          <p className="text-muted-foreground">{exp.company}</p>
                        </div>
                        <span className="badge-futuristic">{exp.period}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <span key={tech} className="badge-futuristic text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-4 md:px-8 bg-grid-pattern">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-gradient-animate">Research & Projects</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Selected research publications and ongoing projects in computational intelligence and software development.
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-8"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="group glass-card glass-card-hover rounded-xl overflow-hidden"
                  >
                    {/* Project Image */}
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-lg bg-neon-cyan/20 text-neon-cyan hover:bg-neon-cyan hover:text-background transition-all"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-lg bg-neon-cyan/20 text-neon-cyan hover:bg-neon-cyan hover:text-background transition-all"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-neon-cyan transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span key={tech} className="text-xs px-2 py-1 rounded bg-neon-cyan/10 text-neon-cyan">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-gradient-animate">Get In Touch</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Interested in collaborating on Web3, Blockchain, or Research projects? Let&apos;s connect!
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div className="glass-card p-6 rounded-xl">
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Name</label>
                      <input
                        type="text"
                        className="input-futuristic w-full rounded-lg"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                      <input
                        type="email"
                        className="input-futuristic w-full rounded-lg"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Message</label>
                      <textarea
                        className="input-futuristic w-full rounded-lg min-h-[120px] resize-none"
                        placeholder="Your message..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-glow-primary w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                  <div className="glass-card p-6 rounded-xl">
                    <h3 className="text-lg font-semibold mb-4 text-neon-cyan">Academic Profiles</h3>
                    <div className="space-y-4">
                      <a 
                        href="https://scholar.google.com/citations?user=XX4gE9oAAAAJ&hl=id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-muted-foreground hover:text-neon-cyan transition-colors"
                      >
                        <BookOpen className="w-5 h-5 text-neon-cyan" />
                        <span>Google Scholar Profile</span>
                      </a>
                      <a 
                        href="https://www.researchgate.net/profile/Lutfan-Zahir-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-muted-foreground hover:text-neon-cyan transition-colors"
                      >
                        <Database className="w-5 h-5 text-neon-cyan" />
                        <span>ResearchGate Profile</span>
                      </a>
                      <a 
                        href="https://sinta.kemdiktisaintek.go.id/authors/profile/6001192"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-muted-foreground hover:text-neon-cyan transition-colors"
                      >
                        <BarChart3 className="w-5 h-5 text-neon-cyan" />
                        <span>SINTA Profile</span>
                      </a>
                    </div>
                  </div>

                  <div className="glass-card p-6 rounded-xl">
                    <h3 className="text-lg font-semibold mb-4 text-neon-cyan">Social Profiles</h3>
                    <div className="flex gap-4">
                      {[
                        { icon: Github, href: "https://github.com/lutfananas", label: "GitHub" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/lutfan-anas-zahir-23b008266", label: "LinkedIn" },
                        { icon: Globe, href: "https://www.researchgate.net/profile/Lutfan-Zahir-2", label: "ResearchGate" },
                      ].map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 hover:bg-neon-cyan hover:text-background transition-all duration-300"
                          aria-label={social.label}
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="glass-card p-6 rounded-xl bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10">
                    <p className="text-sm text-muted-foreground">
                      I&apos;m actively looking to collaborate on <span className="text-neon-cyan">crypto markets</span>, 
                      <span className="text-neon-cyan"> indicators</span>, 
                      <span className="text-neon-cyan"> web3 programs</span>, and 
                      <span className="text-neon-cyan"> blockchain projects</span>. 
                      Feel free to reach out for research collaborations or exciting tech projects!
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-border">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-gradient-animate font-bold text-xl mb-4">LAZ</div>
            <p className="text-muted-foreground text-sm mb-4">
              Lutfan Anas Zahir | Lecturer • Researcher • Software Engineer
            </p>
            <div className="divider-glow max-w-xs mx-auto mb-4" />
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Lutfan Anas Zahir. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
