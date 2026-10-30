import { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronDown, Linkedin, Mail, MapPin, Menu, Moon, Phone, Sun, X } from "lucide-react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsMobileMenuOpen(false);
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
    <nav className="fixed inset-x-0 top-0 z-[100] border-b border-white/15 bg-[#1f1f1f] shadow-[0_8px_30px_rgba(0,0,0,0.18)] md:bg-[#1f1f1f]/90 md:backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 md:py-5">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="font-['Poppins:Bold',_sans-serif] text-[16px] tracking-[0.08em] text-[#f8f7f9] md:hidden"
          >
            IL
          </button>

          <div className="hidden items-center gap-6 md:flex lg:gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-['Poppins:Regular',_sans-serif] text-[16px] transition-colors duration-200 lg:text-[18px] ${
                  activeSection === item.id ? 'text-[#f8f7f9]' : 'text-[#f8f7f9]/70 hover:text-[#f8f7f9]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={isLightMode ? "Switch to dark mode" : "Switch to light mode"}
              title={isLightMode ? "Switch to dark mode" : "Switch to light mode"}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-[#f8f7f9]/70 transition-all duration-300 hover:border-[#7cf5a5]/70 hover:bg-[#7cf5a5]/10 hover:text-[#7cf5a5] hover:shadow-[0_0_20px_rgba(124,245,165,0.18)]"
            >
              {isLightMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
            <div className="hidden h-11 w-px bg-[#f8f7f9] sm:block" />
            <a
              href="https://www.linkedin.com/in/israel-loya-28186317b"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Israel Loya on LinkedIn"
              className="flex h-10 items-center gap-2 font-['Poppins:Medium',_sans-serif] text-[16px] text-[#f8f7f9]/70 transition-colors duration-200 hover:text-[#7cf5a5]"
            >
              <Linkedin className="h-5 w-5 sm:hidden" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((current) => !current)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="flex h-10 items-center justify-center gap-2 rounded-full border border-white/20 px-3 text-[#f8f7f9]/70 transition-all hover:border-[#7cf5a5]/70 hover:text-[#7cf5a5] md:hidden"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="hidden font-['Poppins:Medium',_sans-serif] text-[13px] min-[380px]:inline">
                {isMobileMenuOpen ? "CLOSE" : "MENU"}
              </span>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div id="mobile-navigation" className="grid gap-1 border-t border-white/10 pt-4 mt-4 md:hidden">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`rounded-xl px-4 py-3 text-left font-['Poppins:Medium',_sans-serif] text-[16px] transition-colors ${
                  activeSection === item.id
                    ? "bg-[#7cf5a5]/10 text-[#7cf5a5]"
                    : "text-[#f8f7f9]/70 hover:bg-white/[0.05] hover:text-[#f8f7f9]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
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
    <section id="home" className="relative flex min-h-screen scroll-mt-20 items-center justify-center overflow-hidden pt-28 lg:pt-20">
      {/* Background blur effect */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 sm:h-[760px] sm:w-[760px] lg:h-[897px] lg:w-[905px]">
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

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-0 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12">
        {/* Left content */}
        <div className="order-2 space-y-7 lg:order-1">
          <div className="space-y-4">
            <h2 className="font-['Poppins:Bold',_sans-serif] text-[18px] text-[#f8f7f9] sm:text-[21px] lg:text-[24px]">
              HI, I'M ISRAEL LOYA
            </h2>
            <h1 className="font-['Poppins:Bold',_sans-serif] text-[48px] leading-[0.92] text-[#f8f7f9] sm:text-[64px] lg:text-[88px]">
              SECURITY<br />&amp; TECH
            </h1>
          </div>
          
          <button 
            onClick={scrollToProjects}
            className="group w-full rounded-2xl border-2 border-[#f8f7f9] px-6 py-3.5 transition-all duration-300 hover:border-[#7cf5a5] hover:bg-[#7cf5a5] hover:shadow-[0_0_28px_rgba(124,245,165,0.22)] sm:w-auto sm:px-8 sm:py-4"
          >
            <span className="font-['Poppins:Bold',_sans-serif] text-[18px] text-[#f8f7f9] transition-colors duration-300 group-hover:text-[#1f1f1f] sm:text-[21px] lg:text-[24px]">
              VIEW MY PROJECTS
            </span>
          </button>
        </div>

        {/* Right content - Background-removed headshot */}
        <div className="relative order-1 mx-auto mb-7 flex w-full justify-center lg:order-2 lg:mb-0 lg:block">
          <div className="relative h-[230px] w-[230px] rounded-full border-2 border-[#7cf5a5]/45 bg-white/[0.04] p-2 shadow-[0_0_40px_rgba(124,245,165,0.14)] sm:h-[280px] sm:w-[280px] lg:hidden">
            <div className="h-full w-full overflow-hidden rounded-full">
              <ImageWithFallback
                src={israelHeadshot}
                alt="Israel Loya"
                className="h-full w-full scale-[1.1] object-contain object-top"
              />
            </div>
          </div>

          <div className="relative hidden h-[800px] w-full overflow-visible lg:block">
            <div className="absolute inset-x-[12%] bottom-[5%] h-1/2 rounded-full bg-white/[0.06] blur-3xl" />
            <ImageWithFallback
              src={israelHeadshot}
              alt="Israel Loya"
              className="relative h-full w-full origin-bottom scale-[1.12] object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-20 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-8 font-['Poppins:Bold',_sans-serif] text-[48px] leading-none text-[#f8f7f9] sm:text-[64px] lg:mb-12 lg:text-[96px]">
          About me
        </h2>
        
        <div className="max-w-4xl">
          <p className="mb-6 font-['Poppins:Regular',_sans-serif] text-[18px] leading-[1.65] text-[rgba(248,247,249,0.5)] sm:text-[21px] lg:mb-8 lg:text-[24px]">
            I’m a versatile operations and technology professional with experience in federal security, workplace safety, employee development, technical support, and procedural compliance. My work includes operating and monitoring screening systems, performing equipment readiness checks, compiling operational data, documenting findings, and coordinating corrective actions.
          </p>
          <p className="font-['Poppins:Regular',_sans-serif] text-[18px] leading-[1.65] text-[rgba(248,247,249,0.5)] sm:text-[21px] lg:text-[24px]">
            Alongside my work with the Transportation Security Administration, I’m pursuing a Bachelor of Applied Technology in Software Development at Collin College. I build and troubleshoot custom PCs, configure Windows systems, and develop responsive websites and web applications using modern development tools.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-12 sm:mt-16">
          <h3 className="mb-6 font-['Poppins:Bold',_sans-serif] text-[20px] text-[#f8f7f9] sm:mb-8 sm:text-[24px]">
            CORE SKILLS
          </h3>
          <div className="flex max-w-5xl flex-wrap gap-3">
            {[
              "Hardware Troubleshooting",
              "PC Assembly",
              "Windows Configuration",
              "Technical Support",
              "Screening Equipment",
              "Equipment Readiness Checks",
              "Operational Data Reporting",
              "Employee Training",
              "Safety Inspections",
              "Hazard Identification",
              "SOP Compliance",
              "Technical Documentation",
              "Problem Solving",
              "Java",
              "Python",
              "C++",
              "HTML",
              "CSS",
              "Bootstrap",
              "React",
              "JavaScript",
              "TypeScript",
              "Vite",
              "SQL",
              "Git & GitHub",
              "Vercel",
              "Microsoft Office",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/20 px-3.5 py-2 font-['Poppins:Medium',_sans-serif] text-[14px] text-[#f8f7f9]/60 transition-all duration-300 hover:border-[#7cf5a5]/70 hover:bg-[#7cf5a5]/10 hover:text-[#7cf5a5] hover:shadow-[0_0_20px_rgba(124,245,165,0.2)] sm:px-4 sm:text-[16px]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-12 sm:mt-16">
          <h3 className="mb-6 font-['Poppins:Bold',_sans-serif] text-[20px] text-[#f8f7f9] sm:mb-8 sm:text-[24px]">
            EDUCATION
          </h3>
          <div className="max-w-4xl space-y-8">
            <div>
              <h4 className="mb-1 font-['Poppins:ExtraBold',_sans-serif] text-[20px] text-[rgba(248,247,249,0.5)] sm:text-[24px]">
                BACHELOR OF APPLIED TECHNOLOGY (BAT) IN SOFTWARE DEVELOPMENT
              </h4>
              <p className="mb-3 font-['Poppins:ExtraLight',_sans-serif] text-[18px] text-[rgba(248,247,249,0.5)] sm:text-[22px] lg:text-[24px]">
                Collin College · In Progress
              </p>
              <p className="font-['Poppins:Medium',_sans-serif] text-[18px] leading-[1.65] text-[rgba(248,247,249,0.5)] sm:text-[21px] lg:text-[24px]">
                Coursework and applied projects cover software development fundamentals, responsive web applications, React and Vite workflows, Git and GitHub version control, Vercel deployment, Java, Python, C++, SQL, relational database design, debugging, testing, and the software development lifecycle.
              </p>
            </div>
            <div>
              <h4 className="mb-1 font-['Poppins:ExtraBold',_sans-serif] text-[20px] text-[rgba(248,247,249,0.5)] sm:text-[24px]">
                HIGH SCHOOL DIPLOMA
              </h4>
              <p className="font-['Poppins:ExtraLight',_sans-serif] text-[18px] text-[rgba(248,247,249,0.5)] sm:text-[22px] lg:text-[24px]">
                Memorial Preparatory School · 2016 — 2018
              </p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mt-12 sm:mt-16">
          <h3 className="mb-6 font-['Poppins:Bold',_sans-serif] text-[20px] text-[#f8f7f9] sm:mb-8 sm:text-[24px]">
            Experience
          </h3>
          <div className="space-y-10 sm:space-y-12">
            <ExperienceItem
              title="SAFETY OFFICER"
              period="U.S. Department of Homeland Security · Transportation Security Administration · Aug 2026 — Present"
              description={[
                "Conduct routine workplace and operational-area safety inspections to identify hazards, unsafe conditions, ergonomic concerns, and practices that may increase the risk of employee injury.",
                "Prepare clear inspection notes and safety reports, maintain documentation of observations, and communicate identified concerns and recommendations to supervisors and relevant personnel.",
                "Collaborate with the facility safety team, supervisors, and employees to review workplace concerns, share observations, coordinate inspections, and help develop practical solutions to reduce operational risks.",
                "Participate in safety discussions and team initiatives by communicating reported hazards, contributing to incident-prevention efforts, following up on assigned actions, and helping reinforce consistent safety practices across work areas.",
                "Coordinate with management and employees to track reported hazards, monitor corrective-action progress, and support timely resolution and follow-up.",
                "Promote safety awareness through employee engagement, briefings, reminders, and communication of safe work practices and hazard-prevention procedures.",
                "Support compliance with agency safety policies, operational procedures, inspection practices, and incident or hazard-reporting requirements.",
                "Identify recurring trends and potential risk areas, elevate concerns, and contribute practical recommendations to strengthen prevention efforts and day-to-day workplace safety.",
              ]}
            />
            <ExperienceItem
              title="CERTIFIED COACH / EMPLOYEE TRAINER"
              period="U.S. Department of Homeland Security · Transportation Security Administration · Jul 2023 — Present"
              description={[
                "Deliver hands-on onboarding and coaching for newly hired officers on screening equipment, passenger-screening procedures, alarm resolution, documentation, and workplace safety requirements.",
                "Demonstrate equipment operation and standard procedures, observe practical performance, assess proficiency, document training progress, and provide timely, constructive feedback.",
                "Support qualification and continued development by reinforcing procedural consistency, screening accuracy, professional communication, sound decision-making, and accountability.",
              ]}
            />
            <ExperienceItem
              title="TRANSPORTATION SECURITY OFFICER (TSO)"
              period="U.S. Department of Homeland Security · Transportation Security Administration · Aug 2019 — Present"
              description={[
                "Operate, monitor, and troubleshoot X-ray, Advanced Imaging Technology (AIT), Explosives Trace Detection (ETD), and walk-through/handheld metal detection systems to support effective passenger and baggage screening.",
                "Conduct passenger, baggage, and property screening in accordance with TSA directives, standard operating procedures, regulatory requirements, and established security protocols.",
                "Perform routine equipment readiness checks and approved calibration or verification procedures; identify irregular readings, document equipment status, and coordinate maintenance when issues arise.",
                "Collect and compile hourly operational figures, screening activity counts, and other performance data for shift reports; verify entries for accuracy and provide information to supervisors.",
              ]}
            />
            <ExperienceItem
              title="ELECTRICAL INSTALLATION TECHNICIAN"
              period="Price Electrical · 2018 — Dec 2022"
              description={[
                "Installed and wired electrical systems in residential new-construction projects; interpreted blueprints and electrical plans, routed and terminated wiring, assisted with device and fixture installation, used hand and power tools, and helped troubleshoot installation issues. Followed job-site safety practices, coordinated with crew members and contractors, and supported inspections and project deadlines.",
              ]}
            />
            <ExperienceItem
              title="SHIFT LEAD"
              period="Academy Sports + Outdoors · Jan 2018 — Dec 2018"
              description={[
                "Supported daily retail operations by coordinating team assignments, assisting with opening and closing procedures, maintaining merchandising and planogram standards, monitoring task completion, resolving routine customer concerns, and helping keep the sales floor organized, safe, and customer-ready.",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({
  title,
  period,
  description,
}: {
  title: string;
  period: string;
  description: string[];
}) {
  return (
    <div className="max-w-4xl">
      <h4 className="mb-1 font-['Poppins:ExtraBold',_sans-serif] text-[20px] text-[rgba(248,247,249,0.5)] sm:text-[24px]">
        {title}
      </h4>
      <p className="mb-3 font-['Poppins:ExtraLight',_sans-serif] text-[17px] leading-[1.5] text-[rgba(248,247,249,0.5)] sm:text-[21px] lg:text-[24px]">
        {period}
      </p>
      <ul className="space-y-3">
        {description.map((item) => (
          <li
            key={item}
            className="flex gap-3 font-['Poppins:Medium',_sans-serif] text-[17px] leading-[1.65] text-[rgba(248,247,249,0.5)] sm:text-[20px] lg:text-[24px]"
          >
            <span aria-hidden="true">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "Custom PC Building & System Optimization",
      period: "Personal Project · Ongoing",
      description: "Build, upgrade, configure, and maintain custom desktop computers from component selection through final setup. Complete compatibility checks, configure BIOS and UEFI settings, install Windows, drivers, applications, updates, and peripherals, and methodically troubleshoot boot, stability, performance, connectivity, hardware, and software issues."
    },
    {
      title: "IT Help Desk Ticketing Dashboard",
      period: "Under Construction",
      description: "A support dashboard for logging, prioritizing, assigning, and resolving technical issues. Planned features include ticket status tracking, searchable troubleshooting notes, device details, response metrics, and a clean workflow for common hardware, software, account, and connectivity requests."
    },
    {
      title: "Home Network Monitoring Lab",
      period: "Under Construction",
      description: "A hands-on networking environment for practicing device discovery, IP configuration, connectivity testing, performance monitoring, and basic security hardening. The lab documents network layouts, troubleshooting steps, observed issues, and practical improvements for a reliable home network."
    },
    {
      title: "Equipment Inventory Management App",
      period: "Under Construction",
      description: "A responsive application concept for tracking computers, peripherals, maintenance history, and equipment assignments. Planned functionality includes searchable records, status filters, asset details, service reminders, and simple reporting for organized inventory management."
    },
    {
      title: "Security Procedure Knowledge Base",
      period: "Under Construction",
      description: "A structured knowledge base concept that turns technical and operational procedures into clear, searchable guides. The project focuses on concise step-by-step instructions, consistent documentation, revision tracking, and quick access to troubleshooting and safety information."
    },
    {
      title: "Personal Portfolio Website",
      period: "Live Project · This Portfolio",
      description: "A responsive React and Vite portfolio designed to present professional experience, education, certifications, technical skills, and project work. The site uses Git and GitHub for version control and includes accessible navigation, persistent light and dark themes, reusable content sections, and polished interactions across desktop and mobile layouts."
    }
  ];
  const [openProject, setOpenProject] = useState(projects[0].title);

  return (
    <section id="projects" className="relative scroll-mt-20 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-8 font-['Poppins:Bold',_sans-serif] text-[48px] leading-none text-[#f8f7f9] sm:text-[64px] lg:mb-12 lg:text-[96px]">
          Projects
        </h2>

        <p className="mb-6 font-['Poppins:Regular',_sans-serif] text-[16px] text-[#f8f7f9]/50 sm:mb-8 sm:text-[18px]">
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
        className="group flex w-full cursor-pointer items-start justify-between gap-3 rounded-md py-5 text-left outline-none transition-all focus-visible:ring-2 focus-visible:ring-[#7cf5a5]/60 sm:gap-4 sm:py-7"
      >
        <div className="relative pl-6 sm:pl-8">
          <div className="absolute left-0 top-[7px] h-[10px] w-[10px] rounded-[3px] bg-white/60 transition-all duration-300 group-hover:bg-[#7cf5a5] group-hover:shadow-[0_0_14px_rgba(124,245,165,0.5)] sm:top-[9px] sm:h-[12px] sm:w-[12px] sm:rounded-[4px]" />
          <h3 className="mb-1 font-['Poppins:ExtraBold',_sans-serif] text-[20px] leading-tight text-[rgba(248,247,249,0.5)] transition-colors duration-300 group-hover:text-[#7cf5a5] sm:text-[24px]">
            {title}
          </h3>
          <p className="font-['Poppins:ExtraLight',_sans-serif] text-[15px] text-[rgba(248,247,249,0.5)] sm:text-[18px]">
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
        <div className="pb-6 pl-6 pr-2 sm:pb-7 sm:pl-8 sm:pr-12">
          <p className="font-['Poppins:Medium',_sans-serif] text-[17px] leading-[1.65] text-[rgba(248,247,249,0.5)] sm:text-[20px]">
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
    }
  ];

  return (
    <section id="certifications" className="relative scroll-mt-20 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-8 font-['Poppins:Bold',_sans-serif] text-[44px] leading-none text-[#f8f7f9] sm:text-[64px] lg:mb-12 lg:text-[96px]">
          Certifications
        </h2>
        
        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <div key={index} className="max-w-4xl relative">
              <div className="relative pl-6 sm:pl-8">
                <div className="absolute left-0 top-[7px] h-[10px] w-[10px] rounded-[3px] bg-white/80 blur-[0.5px] sm:left-[-9px] sm:top-[11px] sm:h-[15px] sm:w-[15px] sm:rounded-[5px]" />
                <h3 className="mb-1 font-['Poppins:ExtraBold',_sans-serif] text-[20px] leading-tight text-[rgba(248,247,249,0.5)] sm:text-[24px]">
                  {cert.title}
                </h3>
                <p className="mb-2 font-['Poppins:ExtraLight',_sans-serif] text-[18px] text-[rgba(248,247,249,0.5)] sm:text-[24px]">
                  {cert.year}
                </p>
                <p className="font-['Poppins:Medium',_sans-serif] text-[18px] text-[rgba(248,247,249,0.5)] sm:text-[24px]">
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
      value: "IsraelLoya2222@gmail.com",
      href: "mailto:IsraelLoya2222@gmail.com",
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
    <section id="contacts" className="relative scroll-mt-20 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-5 sm:rounded-[32px] sm:p-8 md:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="mb-5 font-['Poppins:Bold',_sans-serif] text-[14px] uppercase tracking-[0.24em] text-[#7cf5a5]">
                Get in touch
              </p>
              <h2 className="font-['Poppins:Bold',_sans-serif] text-[44px] leading-[1] text-[#f8f7f9] sm:text-[56px] md:text-[72px]">
                Let&apos;s connect.
              </h2>
              <p className="mt-6 max-w-xl font-['Poppins:Regular',_sans-serif] text-[17px] leading-[1.65] text-[#f8f7f9]/50 sm:mt-7 sm:text-[20px]">
                Have an opportunity, project, or role in mind? I&apos;d be glad to discuss how my federal security, workplace safety, technical support, and software development experience can help your team.
              </p>
              <a
                href="mailto:IsraelLoya2222@gmail.com"
                className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/20 px-6 py-3 font-['Poppins:Bold',_sans-serif] text-[16px] text-[#f8f7f9]/70 transition-all duration-300 hover:border-[#7cf5a5]/70 hover:bg-[#7cf5a5]/10 hover:text-[#7cf5a5] hover:shadow-[0_0_20px_rgba(124,245,165,0.2)] sm:mt-9 sm:w-auto"
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
                    className="group rounded-[20px] border border-white/10 bg-[#1f1f1f] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#7cf5a5]/40 hover:bg-[#7cf5a5]/[0.04] sm:p-6"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="group rounded-[20px] border border-white/10 bg-[#1f1f1f] p-5 sm:p-6"
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
