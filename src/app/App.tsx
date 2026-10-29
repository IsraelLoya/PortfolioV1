import { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronDown, Linkedin, Mail, MapPin, Moon, Phone, Sun } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import israelHeadshot from "../imports/image.png";

function Navigation({
  isLightMode,
  onToggleTheme,
}: {
  isLightMode: boolean;
  onToggleTheme: () => void;
}) {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About me' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contacts', label: 'Contacts' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1f1f1f]/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-['Poppins:Regular',_sans-serif] text-[18px] transition-colors duration-200 ${
                  activeSection === item.id ? 'text-[#f8f7f9]' : 'text-[#f8f7f9]/70 hover:text-[#f8f7f9]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={isLightMode ? "Switch to dark mode" : "Switch to light mode"}
              title={isLightMode ? "Switch to dark mode" : "Switch to light mode"}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-[#f8f7f9]/70 transition-all duration-300 hover:border-[#7cf5a5]/70 hover:bg-[#7cf5a5]/10 hover:text-[#7cf5a5] hover:shadow-[0_0_20px_rgba(124,245,165,0.18)]"
            >
              {isLightMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
            <div className="h-11 w-px bg-[#f8f7f9]" />
            <a
              href="https://www.linkedin.com/in/israel-loya-28186317b"
              target="_blank"
              rel="noreferrer"
              className="font-['Poppins:Medium',_sans-serif] text-[16px] text-[#f8f7f9]/70 transition-colors duration-200 hover:text-[#f8f7f9]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[905px] h-[897px]">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1417 1409">
              <defs>
                <filter id="blur" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                  <feGaussianBlur stdDeviation="128" />
                </filter>
              </defs>
              <ellipse
                cx="708.5"
                cy="704.5"
                rx="452.5"
                ry="448.5"
                fill="var(--hero-glow)"
                filter="url(#blur)"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9]">
              HI, I'M ISRAEL LOYA
            </h2>
            <h1 className="font-['Poppins:Bold',_sans-serif] text-[56px] lg:text-[88px] leading-[0.92] text-[#f8f7f9]">
              SECURITY<br />&amp; TECH
            </h1>
          </div>
          
          <button 
            onClick={scrollToProjects}
            className="group border-2 border-[#f8f7f9] px-8 py-4 rounded-2xl transition-all duration-300 hover:border-[#7cf5a5] hover:bg-[#7cf5a5] hover:shadow-[0_0_28px_rgba(124,245,165,0.22)]"
          >
            <span className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9] group-hover:text-[#1f1f1f] transition-colors duration-300">
              VIEW MY PROJECTS
            </span>
          </button>
        </div>

        {/* Right content - Background-removed headshot */}
        <div className="relative">
          <div className="relative h-[600px] w-full overflow-visible lg:h-[800px]">
            <div className="absolute inset-x-[12%] bottom-[5%] h-1/2 rounded-full bg-white/[0.06] blur-3xl" />
            <ImageWithFallback
              src={israelHeadshot}
              alt="Israel Loya"
              className="relative h-full w-full origin-bottom scale-[1.08] object-contain object-bottom lg:scale-[1.12]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-['Poppins:Bold',_sans-serif] text-[96px] text-[#f8f7f9] mb-12">
          About me
        </h2>
        
        <div className="max-w-4xl">
          <p className="font-['Poppins:Regular',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5] mb-8">
            I’m a federal security professional with hands-on experience in technical equipment, workplace safety, documentation, employee training, and problem resolution.
          </p>
          <p className="font-['Poppins:Regular',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5]">
            Alongside my work with the Transportation Security Administration, I’m pursuing a bachelor’s degree in Software Development at Collin College and bring years of practical experience building, maintaining, and troubleshooting custom computers.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-16">
          <h3 className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9] mb-8">
            CORE SKILLS
          </h3>
          <div className="flex max-w-5xl flex-wrap gap-3">
            {[
              "Hardware Troubleshooting",
              "PC Assembly",
              "Windows Configuration",
              "Technical Support",
              "Employee Training",
              "Safety Inspections",
              "Documentation",
              "Problem Solving",
              "Java",
              "Python",
              "HTML",
              "CSS",
              "Bootstrap",
              "React",
              "JavaScript",
              "SQL",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/20 px-4 py-2 font-['Poppins:Medium',_sans-serif] text-[16px] text-[#f8f7f9]/60 transition-all duration-300 hover:border-[#7cf5a5]/70 hover:bg-[#7cf5a5]/10 hover:text-[#7cf5a5] hover:shadow-[0_0_20px_rgba(124,245,165,0.2)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <h3 className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9] mb-8">
            EDUCATION
          </h3>
          <div className="max-w-4xl space-y-8">
            <div>
              <h4 className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-1">
                BACHELOR OF APPLIED TECHNOLOGY (BAT) IN SOFTWARE DEVELOPMENT
              </h4>
              <p className="font-['Poppins:ExtraLight',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-3">
                Collin College · In Progress
              </p>
              <p className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5]">
                Coursework includes software engineering, application architecture, database management, full-stack development, and systems analysis.
              </p>
            </div>
            <div>
              <h4 className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-1">
                HIGH SCHOOL DIPLOMA
              </h4>
              <p className="font-['Poppins:ExtraLight',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
                Memorial Preparatory School · 2016 — 2018
              </p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mt-16">
          <h3 className="font-['Poppins:Bold',_sans-serif] text-[24px] text-[#f8f7f9] mb-8">
            Experience
          </h3>
          <div className="space-y-12">
            <ExperienceItem
              title="COLLATERAL DUTY SAFETY OFFICER"
              period="U.S. Department of Homeland Security · Aug 2026 — Present"
              description="Conduct workplace safety inspections to identify hazards, unsafe conditions, and operational risks. Document findings, coordinate corrective actions, maintain safety and incident records, and collaborate with employees and management to strengthen hazard awareness and support a proactive safety culture."
            />
            <ExperienceItem
              title="CERTIFIED COACH / EMPLOYEE TRAINER"
              period="U.S. Department of Homeland Security · Jul 2023 — Present"
              description="Train and mentor newly hired Transportation Security Officers on screening equipment, operational procedures, and workplace safety. Observe performance, evaluate procedural compliance, provide constructive feedback, and reinforce consistency, accuracy, accountability, and continuous improvement."
            />
            <ExperienceItem
              title="TRANSPORTATION SECURITY OFFICER (TSO)"
              period="Transportation Security Administration, U.S. Department of Homeland Security · Aug 2019 — Present · Dallas–Fort Worth Metroplex"
              description="Operate and troubleshoot X-ray, Advanced Imaging Technology, Explosives Trace Detection, and metal detection systems. Conduct passenger and baggage screening, maintain operational and incident records, report equipment or procedural concerns, and collaborate with supervisors, law enforcement, and maintenance personnel in a high-volume security environment."
            />
            <ExperienceItem
              title="ELECTRICAL INSTALLATION TECHNICIAN"
              period="Price Electrical · 2018 — Dec 2022 · Royse City, Texas"
              description="Completed rough-in and trim-out wiring for new residential construction in compliance with NEC requirements. Installed panels, breakers, outlets, switches, lighting, grounding systems, and service connections; interpreted blueprints, verified loads, and helped diagnose wiring faults and circuit failures."
            />
            <ExperienceItem
              title="SHIFT LEAD"
              period="Academy Sports + Outdoors · Jan 2018 — Dec 2018 · Garland, Texas"
              description="Led team members during assigned shifts, organized daily work, and supported efficient store operations. Read and followed planograms to ensure merchandise and store displays were set up accurately."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ title, period, description }: { title: string; period: string; description: string }) {
  return (
    <div className="max-w-4xl">
      <h4 className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-1">
        {title}
      </h4>
      <p className="font-['Poppins:ExtraLight',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-3">
        {period}
      </p>
      <p className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] leading-[1.5]">
        {description}
      </p>
    </div>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "Custom PC Building & System Optimization",
      period: "Personal Project · Ongoing",
      description: "Design, assemble, configure, and maintain custom desktop computers based on performance goals, budget, and component compatibility. Install Windows, drivers, applications, and system updates; complete hardware upgrades; and troubleshoot boot, thermal, performance, hardware, and software issues."
    },
    {
      title: "IT Help Desk Ticketing Dashboard",
      period: "Concept Project · In Progress",
      description: "A support dashboard for logging, prioritizing, assigning, and resolving technical issues. Planned features include ticket status tracking, searchable troubleshooting notes, device details, response metrics, and a clean workflow for common hardware, software, account, and connectivity requests."
    },
    {
      title: "Home Network Monitoring Lab",
      period: "Technical Lab · In Progress",
      description: "A hands-on networking environment for practicing device discovery, IP configuration, connectivity testing, performance monitoring, and basic security hardening. The lab documents network layouts, troubleshooting steps, observed issues, and practical improvements for a reliable home network."
    },
    {
      title: "Equipment Inventory Management App",
      period: "Software Development Project · In Progress",
      description: "A responsive application concept for tracking computers, peripherals, maintenance history, and equipment assignments. Planned functionality includes searchable records, status filters, asset details, service reminders, and simple reporting for organized inventory management."
    },
    {
      title: "Security Procedure Knowledge Base",
      period: "Documentation Project · In Progress",
      description: "A structured knowledge base concept that turns technical and operational procedures into clear, searchable guides. The project focuses on concise step-by-step instructions, consistent documentation, revision tracking, and quick access to troubleshooting and safety information."
    },
    {
      title: "Personal Portfolio Website",
      period: "Web Development Project · Ongoing",
      description: "A responsive React portfolio designed to present professional experience, education, certifications, technical skills, and project work. The site includes accessible navigation, persistent light and dark themes, reusable content sections, and polished interactions across desktop and mobile layouts."
    }
  ];
  const [openProject, setOpenProject] = useState(projects[0].title);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="mb-12 font-['Poppins:Bold',_sans-serif] text-[96px] text-[#f8f7f9]">
          Projects
        </h2>

        <p className="mb-8 font-['Poppins:Regular',_sans-serif] text-[18px] text-[#f8f7f9]/50">
          Select a project to learn more about it.
        </p>

        <div className="max-w-4xl">
          {projects.map((project) => (
            <ProjectItem
              key={project.title}
              title={project.title}
              period={project.period}
              description={project.description}
              isOpen={openProject === project.title}
              onToggle={() =>
                setOpenProject((current) =>
                  current === project.title ? "" : project.title
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectItem({
  title,
  period,
  description,
  isOpen,
  onToggle,
}: {
  title: string;
  period: string;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border-b transition-colors duration-300 ${
        isOpen ? "border-[#7cf5a5]/40" : "border-white/10"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group flex w-full cursor-pointer items-start justify-between gap-4 rounded-md py-7 text-left outline-none transition-all focus-visible:ring-2 focus-visible:ring-[#7cf5a5]/60"
      >
        <div className="relative pl-8">
          <div className="absolute left-0 top-[9px] h-[12px] w-[12px] rounded-[4px] bg-white/60 transition-all duration-300 group-hover:bg-[#7cf5a5] group-hover:shadow-[0_0_14px_rgba(124,245,165,0.5)]" />
          <h3 className="mb-1 font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] transition-colors duration-300 group-hover:text-[#7cf5a5]">
            {title}
          </h3>
          <p className="font-['Poppins:ExtraLight',_sans-serif] text-[18px] text-[rgba(248,247,249,0.5)]">
            {period}
          </p>
        </div>
        <ChevronDown
          className={`mt-1 h-6 w-6 shrink-0 text-white/35 transition-all duration-300 group-hover:text-[#7cf5a5] ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-7 pl-8 pr-12">
          <p className="font-['Poppins:Medium',_sans-serif] text-[20px] leading-[1.6] text-[rgba(248,247,249,0.5)]">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}

function CertificationsSection() {
  const certifications = [
    {
      title: "TECHNICAL SUPPORT FUNDAMENTALS",
      year: "2023",
      organization: "Google"
    },
    {
      title: "COMPTIA A+ CERTIFICATION",
      year: "In Progress",
      organization: "CompTIA"
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-['Poppins:Bold',_sans-serif] text-[96px] text-[#f8f7f9] mb-12">
          Certifications
        </h2>
        
        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <div key={index} className="max-w-4xl relative">
              <div className="pl-8 relative">
                <div className="absolute left-[-9px] top-[11px] h-[15px] w-[15px] rounded-[5px] bg-white/80 blur-[0.5px]" />
                <h3 className="font-['Poppins:ExtraBold',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-1">
                  {cert.title}
                </h3>
                <p className="font-['Poppins:ExtraLight',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)] mb-2">
                  {cert.year}
                </p>
                <p className="font-['Poppins:Medium',_sans-serif] text-[24px] text-[rgba(248,247,249,0.5)]">
                  {cert.organization}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactsSection() {
  const contactItems = [
    {
      label: "Email",
      value: "izzyloya1234@gmail.com",
      href: "mailto:izzyloya1234@gmail.com",
      icon: Mail,
    },
    {
      label: "Phone",
      value: "(469) 982-3003",
      href: "tel:+14699823003",
      icon: Phone,
    },
    {
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/israel-loya-28186317b",
      icon: Linkedin,
    },
    {
      label: "Location",
      value: "Dallas, Texas",
      icon: MapPin,
    },
  ];

  return (
    <section id="contacts" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 md:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="mb-5 font-['Poppins:Bold',_sans-serif] text-[14px] uppercase tracking-[0.24em] text-[#7cf5a5]">
                Get in touch
              </p>
              <h2 className="font-['Poppins:Bold',_sans-serif] text-[56px] leading-[1] text-[#f8f7f9] md:text-[72px]">
                Let&apos;s connect.
              </h2>
              <p className="mt-7 max-w-xl font-['Poppins:Regular',_sans-serif] text-[20px] leading-[1.6] text-[#f8f7f9]/50">
                Have an opportunity, project, or role in mind? I&apos;d be glad to hear from you and discuss how my security, technical support, and software development experience can help.
              </p>
              <a
                href="mailto:izzyloya1234@gmail.com"
                className="mt-9 inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 font-['Poppins:Bold',_sans-serif] text-[16px] text-[#f8f7f9]/70 transition-all duration-300 hover:border-[#7cf5a5]/70 hover:bg-[#7cf5a5]/10 hover:text-[#7cf5a5] hover:shadow-[0_0_20px_rgba(124,245,165,0.2)]"
              >
                Send me an email
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <div className="mb-8 flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.06] text-[#7cf5a5]">
                        <Icon className="h-5 w-5" />
                      </div>
                      {item.href && (
                        <ArrowUpRight className="h-5 w-5 text-white/25 transition-colors duration-300 group-hover:text-[#7cf5a5]" />
                      )}
                    </div>
                    <p className="font-['Poppins:Medium',_sans-serif] text-[14px] uppercase tracking-[0.16em] text-white/35">
                      {item.label}
                    </p>
                    <p className="mt-2 break-words font-['Poppins:Medium',_sans-serif] text-[17px] text-[#f8f7f9]/80 transition-colors duration-300 group-hover:text-[#f8f7f9]">
                      {item.value}
                    </p>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === "LinkedIn" ? "_blank" : undefined}
                    rel={item.label === "LinkedIn" ? "noreferrer" : undefined}
                    className="group rounded-[20px] border border-white/10 bg-[#1f1f1f] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#7cf5a5]/40 hover:bg-[#7cf5a5]/[0.04]"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="group rounded-[20px] border border-white/10 bg-[#1f1f1f] p-6"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [isLightMode, setIsLightMode] = useState(() => {
    return window.localStorage.getItem("portfolio-theme") === "light";
  });

  useEffect(() => {
    const theme = isLightMode ? "light" : "dark";
    window.localStorage.setItem("portfolio-theme", theme);
    document.documentElement.style.colorScheme = theme;
  }, [isLightMode]);

  return (
    <div className={`portfolio-shell min-h-screen ${isLightMode ? "theme-light" : "theme-dark"}`}>
      <Navigation
        isLightMode={isLightMode}
        onToggleTheme={() => setIsLightMode((currentMode) => !currentMode)}
      />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactsSection />
      </main>
    </div>
  );
}
