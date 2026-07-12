"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
    ArrowRight,
    Sparkles,
    ExternalLink,
    LayoutGrid,
    Filter,
    // project-specific
    Scissors,           // JT Makeovers
    FlaskConical,       // RAYS & RZILSS – pharma/lab
    BrainCircuit,       // GPT Fine-Tuning
    FileCode2,          // Multi-Format Data Conversion
    Lightbulb,          // AI Advisory
    ScanSearch,         // Web Scraping / GIS
    GraduationCap,      // AI Educational Platform
    LayoutDashboard,    // Scalable Web & App Platform
    Scale,              // Legal Discovery
    TrendingUp,
    CheckCircle2,
    Zap,
} from "lucide-react";

// ─── Portfolio Data ────────────────────────────────────────────────
const categories = ["All", "LLM Engineering", "AI / ML", "Web & Mobile"];

const projects = [
    {
        id: 8,
        title: "JT Makeovers",
        subtitle: "Beauty Salon Website",
        category: "Web & Mobile",
        tags: ["Web Design", "Beauty & Wellness", "SEO", "Responsive UI"],
        description:
            "Designed and developed a stunning, fully responsive website for Jyoti Tomar Makeover — a professional bridal and event makeup artist based in Delhi NCR. Showcases services, portfolio, and seamless booking.",
        outcome: "Live website driving bookings & enquiries",
        industry: "Beauty & Wellness",
        Icon: Scissors,
        gradient: "from-rose-500 to-pink-500",
        glowColor: "rgba(244,63,94,0.35)",
        borderGradient: "from-rose-400 via-pink-400 to-fuchsia-400",
        featured: true,
        liveUrl: "https://www.jtmakeovers.in/",
        metrics: [
            { label: "Conversion Rate", value: "↑ 3×" },
            { label: "Pages", value: "8+" },
            { label: "Load Speed", value: "<2s" },
        ],
        emoji: "💄",
    },
    {
        id: 9,
        title: "RAYS & RZILSS",
        subtitle: "Pharma Career Platform",
        category: "Web & Mobile",
        tags: ["Web Design", "EdTech", "SEO", "Job Placement", "Responsive UI"],
        description:
            "High-converting website for Eastern India's only pharma training institute with a written 100% job placement guarantee. 15+ years of expertise, 5,000+ careers built.",
        outcome: "Live platform driving pharma enrolments",
        industry: "EdTech / Pharma",
        Icon: FlaskConical,
        gradient: "from-blue-600 to-indigo-600",
        glowColor: "rgba(37,99,235,0.35)",
        borderGradient: "from-blue-400 via-indigo-400 to-violet-400",
        featured: true,
        liveUrl: "https://raysnrzilss.in/",
        metrics: [
            { label: "Placement Rate", value: "100%" },
            { label: "Careers Built", value: "5,000+" },
            { label: "Years Active", value: "15+" },
        ],
        emoji: "🧪",
    },
    {
        id: 1,
        title: "Fine-Tuning GPT",
        subtitle: "Custom Dataset LLM",
        category: "LLM Engineering",
        tags: ["GPT Fine-Tuning", "Python", "LangChain", "NLP"],
        description:
            "Fine-tuned a GPT model tailored to a specific custom dataset for client Charles. Delivered a robust, production-ready solution optimized for domain-specific use cases with high accuracy.",
        outcome: "Production-ready custom GPT model",
        industry: "AI / LLM",
        Icon: BrainCircuit,
        gradient: "from-violet-600 to-purple-600",
        glowColor: "rgba(124,58,237,0.35)",
        borderGradient: "from-violet-400 via-purple-400 to-fuchsia-400",
        featured: true,
        metrics: [
            { label: "Model Accuracy", value: "94%+" },
            { label: "Training Epochs", value: "50+" },
            { label: "Dataset Size", value: "Custom" },
        ],
        emoji: "🧠",
    },
    {
        id: 2,
        title: "Multi-Format Converter",
        subtitle: "Data Conversion App",
        category: "Web & Mobile",
        tags: ["Python", "LangChain", "React", "Django"],
        description:
            "Application for client Muad that accepts data in PDF, JSON, and GeoJSON and automatically generates conversion code. Handles diverse data formats with AI-powered code generation.",
        outcome: "Fully automated multi-format conversions",
        industry: "SaaS / Data",
        Icon: FileCode2,
        gradient: "from-blue-600 to-cyan-500",
        glowColor: "rgba(6,182,212,0.35)",
        borderGradient: "from-blue-400 via-cyan-400 to-teal-400",
        featured: true,
        metrics: [
            { label: "Formats Supported", value: "10+" },
            { label: "Auto-generated code", value: "Yes" },
            { label: "Avg. Conversion", value: "<1s" },
        ],
        emoji: "📄",
    },
    {
        id: 3,
        title: "AI Advisory",
        subtitle: "Startup AI Strategy",
        category: "AI / ML",
        tags: ["Fine-Tuning", "RAG", "AI Strategy", "LLM"],
        description:
            "Comprehensive AI strategies, tools, and methodologies for startup client EvulKing. Delivered in-depth documentation on Fine-Tuning, RAG, and tools like JsonLink with detailed use cases.",
        outcome: "Actionable AI roadmap delivered",
        industry: "Startup / Consulting",
        Icon: Lightbulb,
        gradient: "from-amber-500 to-yellow-400",
        glowColor: "rgba(245,158,11,0.35)",
        borderGradient: "from-amber-400 via-yellow-400 to-orange-400",
        featured: true,
        metrics: [
            { label: "AI Modules", value: "5+" },
            { label: "Docs Delivered", value: "15+" },
            { label: "ROI Impact", value: "High" },
        ],
        emoji: "💡",
    },
    {
        id: 4,
        title: "Geodata Scraper",
        subtitle: "Web Scraping System",
        category: "Web & Mobile",
        tags: ["Selenium", "Shell Programming", "Sentinel Hub", "Google Cloud"],
        description:
            "Built a web scraping system for client AutoCad to extract coordinates, locations, and map data. A powerful automated tool that collects, processes, and stores location-based data efficiently.",
        outcome: "Fully automated geodata pipeline",
        industry: "GIS / Startup",
        Icon: ScanSearch,
        gradient: "from-teal-500 to-emerald-600",
        glowColor: "rgba(16,185,129,0.35)",
        borderGradient: "from-teal-400 via-emerald-400 to-green-400",
        featured: false,
        metrics: [
            { label: "Data Sources", value: "Multi" },
            { label: "GeoJSON Output", value: "Yes" },
            { label: "Automation", value: "100%" },
        ],
        emoji: "🗺️",
    },
    {
        id: 5,
        title: "AI EdTech Platform",
        subtitle: "Educational AI System",
        category: "AI / ML",
        tags: ["Flask", "Python", "GenAI", "Multimedia AI"],
        description:
            "Dual-mode educational platform for client Sabdelgawad with AI-generated learning materials, multimedia integration, dynamic testing features, and an admin dashboard with advanced analytics.",
        outcome: "Full EdTech platform with AI content gen",
        industry: "Education",
        Icon: GraduationCap,
        gradient: "from-orange-500 to-red-500",
        glowColor: "rgba(249,115,22,0.35)",
        borderGradient: "from-orange-400 via-red-400 to-pink-400",
        featured: false,
        metrics: [
            { label: "AI Modules", value: "Dual-mode" },
            { label: "Assessment Types", value: "5+" },
            { label: "Dashboard", value: "Admin+" },
        ],
        emoji: "🎓",
    },
    {
        id: 6,
        title: "AI Report Platform",
        subtitle: "Scalable Web & App",
        category: "Web & Mobile",
        tags: ["React", "Node.js", "Django", "OpenAI GPT", "PostgreSQL"],
        description:
            "Scalable web and mobile platform for client James Munoz with AI integration for customizable reports, user role management, and cross-platform accessibility. Features auto-save drafts and multi-role access.",
        outcome: "Cross-platform AI report platform launched",
        industry: "Enterprise / SaaS",
        Icon: LayoutDashboard,
        gradient: "from-indigo-600 to-blue-600",
        glowColor: "rgba(99,102,241,0.35)",
        borderGradient: "from-indigo-400 via-blue-400 to-sky-400",
        featured: false,
        metrics: [
            { label: "User Roles", value: "Multi" },
            { label: "Report Templates", value: "Pre-loaded" },
            { label: "Platforms", value: "Web + App" },
        ],
        emoji: "📊",
    },
    {
        id: 7,
        title: "Legal Discovery AI",
        subtitle: "Automation Software",
        category: "LLM Engineering",
        tags: ["Python", "NLP", "PDF Parsing", "AI/ML"],
        description:
            "Software for client Jeff Schwartz to automate extraction of critical information from legal discovery PDF documents. Handles both form-based and free-form types, extracting parties and discovery questions.",
        outcome: "Dramatic reduction in manual legal review",
        industry: "Legal Tech",
        Icon: Scale,
        gradient: "from-pink-600 to-rose-500",
        glowColor: "rgba(219,39,119,0.35)",
        borderGradient: "from-pink-400 via-rose-400 to-red-400",
        featured: false,
        metrics: [
            { label: "PDF Types", value: "Form + Free" },
            { label: "Time Saved", value: "80%+" },
            { label: "Accuracy", value: "High" },
        ],
        emoji: "⚖️",
    },
];

// ─── Stats ─────────────────────────────────────────────────────────
const stats = [
    { value: "9+", label: "Projects Delivered" },
    { value: "5+", label: "Domains Served" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Coverage" },
];

// ─── Category Pill ─────────────────────────────────────────────────
function CategoryPill({ label, active, onClick }) {
    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${active
                    ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/30 scale-105"
                    : "bg-gray-100 dark:bg-slate-800 text-muted-foreground hover:bg-gray-200 dark:hover:bg-slate-700"
                }`}
        >
            {label}
        </motion.button>
    );
}

// ─── Floating Particles ────────────────────────────────────────────
function FloatingParticles({ color }) {
    const particles = [
        { size: 4, x: "15%", y: "20%", delay: 0 },
        { size: 3, x: "80%", y: "15%", delay: 0.5 },
        { size: 5, x: "70%", y: "75%", delay: 1 },
        { size: 3, x: "25%", y: "80%", delay: 1.5 },
        { size: 2, x: "55%", y: "35%", delay: 0.75 },
    ];
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
            {particles.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                    style={{
                        width: p.size,
                        height: p.size,
                        left: p.x,
                        top: p.y,
                        background: color,
                    }}
                    animate={{
                        y: [0, -10, 0],
                        x: [0, 4, 0],
                        scale: [1, 1.4, 1],
                    }}
                    transition={{
                        duration: 2.5 + i * 0.3,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

// ─── Project Card ──────────────────────────────────────────────────
function ProjectCard({ project, index }) {
    const { Icon } = project;
    const [flipped, setFlipped] = useState(false);
    const cardRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

    function handleMouseMove(e) {
        const rect = cardRef.current?.getBoundingClientRect();
        if (!rect) return;
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    }
    function handleMouseLeave() {
        mouseX.set(0);
        mouseY.set(0);
        setFlipped(false);
    }

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.4, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ perspective: 1000 }}
            className="relative"
        >
            <motion.div
                ref={cardRef}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="group relative flex flex-col h-full"
            >
                {/* ── Animated border ring ── */}
                <div
                    className={`absolute -inset-[1.5px] rounded-[20px] bg-gradient-to-r ${project.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[0.5px]`}
                />

                {/* ── Card body ── */}
                <div
                    onClick={() => project.liveUrl && window.open(project.liveUrl, "_blank")}
                    className={`relative flex flex-col flex-1 bg-white dark:bg-[#0d1117] backdrop-blur-xl rounded-[18px] p-6 transition-all duration-500 overflow-hidden ${project.liveUrl ? "cursor-pointer" : ""
                        }`}
                    style={{
                        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 20px 60px ${project.glowColor}, 0 4px 24px rgba(0,0,0,0.15)`;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.08)";
                    }}
                >
                    {/* Floating particles */}
                    <FloatingParticles color={project.glowColor} />

                    {/* Gradient background wash on hover */}
                    <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 rounded-[18px]`}
                    />

                    {/* ── Header ── */}
                    <div className="relative z-10 flex items-start justify-between mb-5">
                        {/* Icon with pulse ring */}
                        <div className="relative">
                            <motion.div
                                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} blur-md opacity-0 group-hover:opacity-60`}
                                transition={{ duration: 0.4 }}
                            />
                            <motion.div
                                whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                                className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                            >
                                <Icon className="w-7 h-7 text-white" strokeWidth={1.8} />
                            </motion.div>
                            {/* Emoji badge */}
                            <span className="absolute -top-2 -right-2 text-base leading-none select-none">
                                {project.emoji}
                            </span>
                        </div>

                        {/* Industry pill + featured */}
                        <div className="flex flex-col items-end gap-2">
                            <span
                                className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white shadow-sm`}
                            >
                                {project.industry}
                            </span>
                            {project.featured && (
                                <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-2.5 py-0.5 rounded-full border border-amber-200 dark:border-amber-700/40">
                                    <Sparkles className="w-3 h-3" />
                                    Featured
                                </span>
                            )}
                        </div>
                    </div>

                    {/* ── Title ── */}
                    <div className="relative z-10 mb-1">
                        <h3 className={`text-lg font-extrabold tracking-tight group-hover:bg-gradient-to-r group-hover:${project.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                            {project.title}
                        </h3>
                        <p className="text-xs font-semibold text-muted-foreground/70 uppercase tracking-widest mt-0.5">
                            {project.subtitle}
                        </p>
                    </div>

                    {/* ── Description ── */}
                    <p className="relative z-10 text-muted-foreground text-sm leading-relaxed mt-3 mb-4 flex-1">
                        {project.description}
                    </p>

                    {/* ── Tags ── */}
                    <div className="relative z-10 flex flex-wrap gap-1.5 mb-4">
                        {project.tags.map((tag, i) => (
                            <motion.span
                                key={tag}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.06 + i * 0.05 }}
                                whileHover={{ scale: 1.08 }}
                                className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-slate-800/80 text-muted-foreground border border-transparent hover:border-current transition-all duration-200 cursor-default"
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </div>

                    {/* ── Metrics row ── */}
                    <div className="relative z-10 grid grid-cols-3 gap-2 mb-4 p-3 rounded-xl bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-700/50">
                        {project.metrics.map((m) => (
                            <div key={m.label} className="text-center">
                                <p
                                    className={`text-sm font-extrabold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                                >
                                    {m.value}
                                </p>
                                <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">
                                    {m.label}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* ── Outcome bar ── */}
                    <div className={`relative z-10 flex items-center gap-2 p-3 rounded-xl bg-gradient-to-r ${project.gradient} bg-opacity-10 mb-4`}
                        style={{ background: `${project.glowColor.replace("0.35", "0.08")}` }}
                    >
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-500" />
                        <span className="text-sm font-semibold text-foreground">{project.outcome}</span>
                    </div>

                    {/* ── CTA ── */}
                    <div className="relative z-10 flex items-center justify-between">
                        <Link
                            href="/contact"
                            onClick={(e) => e.stopPropagation()}
                            className={`inline-flex items-center gap-1 text-sm font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200`}
                        >
                            Discuss Similar
                            <motion.span whileHover={{ x: 4 }} className="inline-block">
                                <ArrowRight className="w-4 h-4" style={{ color: "currentcolor" }} />
                            </motion.span>
                        </Link>

                        {project.liveUrl && (
                            <motion.span
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gray-100 dark:bg-slate-800 px-2.5 py-1 rounded-full"
                            >
                                <ExternalLink className="w-3 h-3" />
                                Live Site
                            </motion.span>
                        )}
                    </div>

                    {/* ── Bottom gradient line ── */}
                    <div
                        className={`absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r ${project.gradient} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}

// ─── Main Page Component ───────────────────────────────────────────
export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filtered =
        activeCategory === "All"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* ── Hero Section ─────────────────────────────────────────── */}
            <section className="relative w-full pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
                {/* Ambient blobs */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px]" />
                    <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-accent/10 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                        {/* ── Left: Text Content ── */}
                        <div className="flex-1 text-center lg:text-left">
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-300 dark:border-purple-700/50 text-purple-700 dark:text-purple-300 font-medium text-sm mb-6"
                            >
                                <LayoutGrid className="w-4 h-4 mr-2" />
                                Our Work
                            </motion.div>

                            {/* Heading */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55, delay: 0.1 }}
                                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6 syntalix-heading"
                            >
                                Our{" "}
                                <span className="syntalix-gradient-text">Portfolio</span>
                            </motion.h1>

                            {/* Sub-heading */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55, delay: 0.2 }}
                                className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 syntalix-body"
                            >
                                A curated selection of projects where we turned complex challenges into
                                elegant, production-grade solutions — spanning AI infrastructure, LLM
                                engineering, agentic systems, and modern web &amp; mobile applications.
                            </motion.p>

                            {/* CTAs */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55, delay: 0.3 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            >
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
                                >
                                    Start Your Project
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                                <a
                                    href="#portfolio-grid"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-foreground font-bold hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-300 shadow-sm"
                                >
                                    Browse Work
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </motion.div>
                        </div>

                        {/* ── Right: Portfolio Image ── */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 40 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                            className="flex-1 flex justify-center lg:justify-end relative"
                        >
                            {/* Glow behind image */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/30 via-indigo-500/20 to-transparent blur-3xl pointer-events-none" />

                            <motion.div
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-full max-w-[520px]"
                            >
                                <Image
                                    src="/portfolio png/portfolio.png"
                                    alt="Syntalix Portfolio Showcase"
                                    width={520}
                                    height={420}
                                    priority
                                    className="w-full h-auto rounded-2xl drop-shadow-[0_20px_60px_rgba(139,92,246,0.35)]"
                                />
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ── Stats Strip ──────────────────────────────────────────── */}
            <section className="py-10 border-y border-border bg-gray-50/50 dark:bg-slate-900/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i, duration: 0.45 }}
                                className="text-center group cursor-default"
                            >
                                <p className="text-3xl md:text-4xl font-extrabold syntalix-gradient-text mb-1 group-hover:scale-110 transition-transform duration-300 inline-block">
                                    {stat.value}
                                </p>
                                <p className="text-sm text-muted-foreground">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Portfolio Grid ────────────────────────────────────────── */}
            <section id="portfolio-grid" className="py-20 md:py-28">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Section header */}
                    <div className="text-center mb-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-700/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4"
                        >
                            <Zap className="w-3.5 h-3.5" />
                            Interactive Cards
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 syntalix-heading">
                            Explore Our Projects
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg syntalix-body">
                            Hover to reveal metrics &amp; details. Filter by domain to find work most
                            relevant to your industry.
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-3 justify-center mb-12">
                        <Filter className="w-5 h-5 text-muted-foreground self-center mr-1" />
                        {categories.map((cat) => (
                            <CategoryPill
                                key={cat}
                                label={cat}
                                active={activeCategory === cat}
                                onClick={() => setActiveCategory(cat)}
                            />
                        ))}
                    </div>

                    {/* Cards Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {filtered.map((project, index) => (
                                <ProjectCard key={project.id} project={project} index={index} />
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Empty state */}
                    {filtered.length === 0 && (
                        <div className="text-center py-20 text-muted-foreground">
                            <p className="text-lg">No projects found in this category yet.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* ── Technologies Section ──────────────────────────────────── */}
            <section className="py-16 bg-gray-50 dark:bg-slate-900/30 border-y border-border">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-8">
                        Technologies We Master
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {[
                            "Python", "PyTorch", "TensorFlow", "LangChain", "LangGraph",
                            "OpenAI", "HuggingFace", "FastAPI", "Next.js", "React",
                            "React Native", "Node.js", "PostgreSQL", "Redis", "Docker",
                            "Kubernetes", "AWS", "GCP", "Azure", "Pinecone",
                        ].map((tech) => (
                            <motion.span
                                key={tech}
                                whileHover={{ scale: 1.08, y: -2 }}
                                className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-sm font-medium text-foreground/80 hover:border-primary/40 hover:text-primary transition-all duration-200 cursor-default"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA Section ──────────────────────────────────────────── */}
            <section className="py-20 md:py-28 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[10%] right-[10%] w-[35%] h-[35%] bg-secondary/10 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 syntalix-heading">
                            Ready to Be Our{" "}
                            <span className="syntalix-gradient-text">Next Success Story</span>?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-10 syntalix-body">
                            Whether you need a custom AI model, a production-ready LLM pipeline,
                            an autonomous agent system, or a full-stack application — our team is
                            ready to bring your vision to life. Start with a free consultation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
                            >
                                Get a Free Consultation
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link
                                href="/case-studies"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-foreground font-bold hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-300 shadow-sm"
                            >
                                View Case Studies
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
