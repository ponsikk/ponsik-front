"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { ArrowUpRight, CodeXml, GraduationCap, Lightbulb } from "lucide-react";

function ExperienceSection() {
  const [openItem, setOpenItem] = useState("experience-1");
  const [openFreelanceItem, setOpenFreelanceItem] = useState("");
  const [openEducationItem, setOpenEducationItem] = useState("");
  return (
    <section className=" border-x  full-line-bottom relative">
      <h2 className=" text-3xl pl-4 font-semibold relative full-line-bottom ">
        Experience{" "}
      </h2>
      <div className=" full-line-bottom relative ">
        {experienceData.map((exp, index) => (
          <div key={index} className="relative pl-10">
            {index !== experienceData.length - 1 && (
              <div className="absolute left-6 top-5 h-full w-px bg-border" />
            )}

            <div className="absolute left-3 top-5 z-10">
              <div
                className="flex size-6 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground  "
                aria-hidden="true"
              >
                <exp.icon className="size-4" />
              </div>
            </div>

            {/* Accordion */}
            <Accordion
              type="single"
              collapsible
              value={openItem}
              className="border-b-0"
              onValueChange={setOpenItem}
            >
              <AccordionItem value={`experience-${exp.id}`}>
                <AccordionTrigger className="border-b-0">
                  <div className="flex-1 flex flex-col items-start justify-center py-4 pl-4 gap-1 h-full">
                    <h3 className="text-balance  font-medium text-base leading-snug flex gap-2 font-mono items-center justify-center">
                      {exp.company}
                      {exp.job ? (
                        <a
                          href={exp.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ArrowUpRight className="size-4 text-muted-foreground hover:text-primary" />
                        </a>
                      ) : (
                        <span className="   size-2 border-2 border-white animate-ping bg-green-500  dark:border-gray-800 rounded-full"></span>
                      )}
                    </h3>
                    <span className="text-muted-foreground font-normal text-sm">
                      {exp.duration}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 border-b-0!">
                  <div className="prose prose-sm max-w-none font-mono text-foreground prose-zinc dark:prose-invert prose-headings:font-sans prose-headings:font-semibold prose-headings:text-balance prose-h2:border-b prose-h2:border-edge prose-h2:pb-2 prose-h2:text-2xl prose-lead:text-base prose-a:font-medium prose-a:break-words prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:border-edge">
                    {exp.job ? (
                      <p>
                        I am a <strong>{exp.title}</strong> at {exp.company},
                        {exp.description}
                      </p>
                    ) : (
                      <p> {exp.description}</p>
                    )}
                    <ul>
                      {exp.tasks.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.badge.map((badge, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded-lg bg-zinc-50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground dark:bg-zinc-900"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
      <div className="px-4 py-2   ">
        <h3 className="text-primary font-medium ">Freelancing</h3>
      </div>
      <div className=" full-line-bottom relative ">
        {freelanceData.map((freelancing, index) => (
          <div key={index} className="relative pl-10">
            {index !== freelanceData.length - 1 && (
              <div className="absolute left-6 top-5 h-full w-px bg-border" />
            )}

            <div className="absolute left-3 top-5 z-10">
              <div
                className="flex size-6 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground  "
                aria-hidden="true"
              >
                <freelancing.icon className="size-4" />
              </div>
            </div>

            {/* Accordion */}
            <Accordion
              type="single"
              collapsible
              value={openFreelanceItem}
              className="border-b-0"
              onValueChange={setOpenFreelanceItem}
            >
              <AccordionItem value={`experience-${freelancing.id}`}>
                <AccordionTrigger className="border-b-0">
                  <div className="flex-1 flex flex-col items-start justify-center py-4 pl-4 gap-1 h-full">
                    <h3 className="text-balance font-mono  font-medium text-base leading-snug flex gap-2 items-center justify-center">
                      {freelancing.project}

                      <a
                        href={freelancing.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ArrowUpRight className="size-4 text-muted-foreground hover:text-primary" />
                      </a>
                    </h3>
                    <span className="text-muted-foreground font-normal text-sm">
                      {freelancing.duration}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 border-b-0!">
                  <div className="prose prose-sm max-w-none font-mono text-foreground prose-zinc dark:prose-invert prose-headings:font-sans prose-headings:font-semibold prose-headings:text-balance prose-h2:border-b prose-h2:border-edge prose-h2:pb-2 prose-h2:text-2xl prose-lead:text-base prose-a:font-medium prose-a:break-words prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:border-edge">
                    <p> {freelancing.description}</p>

                    <ul>
                      {freelancing.tasks.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {freelancing.badge.map((badge, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded-lg bg-zinc-50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground dark:bg-zinc-900"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
      <div className="px-4 py-2   ">
        <h3 className="text-primary font-medium ">Education</h3>
      </div>
      <div className=" full-line-bottom relative ">
        {educationData.map((institute, index) => (
          <div key={index} className="relative pl-10">
            {index !== educationData.length - 1 && (
              <div className="absolute left-6 top-5 h-full w-px bg-border" />
            )}

            <div className="absolute left-3 top-5 z-10">
              <div
                className="flex size-6 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground  "
                aria-hidden="true"
              >
                <institute.icon className="size-4" />
              </div>
            </div>

            {/* Accordion */}
            <Accordion
              type="single"
              collapsible
              value={openEducationItem}
              className="border-b-0"
              onValueChange={setOpenEducationItem}
            >
              <AccordionItem value={`experience-${index}`}>
                <AccordionTrigger className="border-b-0">
                  <div className="flex-1 flex flex-col items-start justify-center py-4 pl-4  gap-1 h-full">
                    <h3 className="text-balance font-mono  font-medium text-base leading-snug flex gap-2 items-center justify-center">
                      {institute.institution}

                    </h3>
                    <span className="text-muted-foreground font-normal text-sm">
                      {institute.duration}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 border-b-0!">
                  <div className="prose prose-sm max-w-none font-mono text-foreground prose-zinc dark:prose-invert prose-headings:font-sans prose-headings:font-semibold prose-headings:text-balance prose-h2:border-b prose-h2:border-edge prose-h2:pb-2 prose-h2:text-2xl prose-lead:text-base prose-a:font-medium prose-a:break-words prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:border-edge">
                    <p> {institute.description}</p>

                    <ul>
                      {institute.points.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>

                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;

export const DiscountIcon = ({
  size = 24,
  color = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <g xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
      <path
        strokeWidth="2"
        d="M10.51 3.665a2 2 0 0 1 2.98 0l.7.782a2 2 0 0 0 1.601.663l1.05-.058a2 2 0 0 1 2.107 2.108l-.058 1.049a2 2 0 0 0 .663 1.6l.782.7a2 2 0 0 1 0 2.981l-.782.7a2 2 0 0 0-.663 1.601l.058 1.05a2 2 0 0 1-2.108 2.107l-1.049-.058a2 2 0 0 0-1.6.663l-.7.782a2 2 0 0 1-2.981 0l-.7-.782a2 2 0 0 0-1.601-.663l-1.05.058a2 2 0 0 1-2.107-2.108l.058-1.049a2 2 0 0 0-.663-1.6l-.782-.7a2 2 0 0 1 0-2.981l.782-.7a2 2 0 0 0 .663-1.601l-.058-1.05A2 2 0 0 1 7.16 5.053l1.049.058a2 2 0 0 0 1.6-.663l.7-.782Z"
      />
      <path
        strokeLinejoin="round"
        strokeWidth="3"
        d="M9.5 9.5h.01v.01H9.5zm5 5h.01v.01h-.01z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m15 9l-6 6"
      />
    </g>
  </svg>
);

export const CoinIcon = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      d="M6 2h12v2H6V2zM4 6V4h2v2H4zm0 12V6H2v12h2zm2 2v-2H4v2h2zm12 0v2H6v-2h12zm2-2v2h-2v-2h2zm0-12h2v12h-2V6zm0 0V4h-2v2h2zm-9-1h2v2h3v2h-6v2h6v6h-3v2h-2v-2H8v-2h6v-2H8V7h3V5z"
    />
  </svg>
);

const experienceData = [
  {
    id: 1,
    title: "Java Full Stack Developer | Team Lead",
    company: "Tech Company",
    icon: CodeXml,
    job: true,
    location: "Remote",
    href: "https://github.com/ponsikk",
    duration: "Full-Time | Jun 2024 - Present",
    description: `Full Stack development of enterprise applications with AI integrations. Leading a small team and delivering production-ready solutions.`,
    tasks: [
      "Developed 6+ production applications from scratch (full development cycle)",
      "Designed backend architecture using Spring Boot and microservices patterns",
      "Created document analysis systems for government sector clients",
      "Integrated AI services (OpenAI, Claude, local models like Whisper, Qwen)",
      "Led a small team (PM, QA, Developer) and managed project delivery",
      "Deployed applications on VPS with Docker and CI/CD pipelines",
    ],
    badge: [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "AI APIs",
      "Team Lead",
      "FastAPI",
      "Next.js",
      "Telegram Mini-Apps",
    ],
  },
  {
    id: 2,
    title: "Java Backend Developer",
    company: "Self-Education & Pet Projects",
    icon: CodeXml,
    job: true,
    location: "Remote",
    href: "https://github.com/ponsikk",
    duration: "Full-Time | Oct 2023 - Jun 2024",
    description: `Deep dive into Java ecosystem and backend development best practices.`,
    tasks: [
      "Studied Spring Boot, Spring Security, Spring Data JPA in depth",
      "Worked with PostgreSQL, Redis, and Kafka for message queues",
      "Built REST APIs with proper authentication and authorization",
      "Implemented multithreading and performance optimization techniques",
      "Created pet projects with full CI/CD on Docker",
    ],
    badge: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Hibernate",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "Docker",
      "Git",
    ],
  },
  {
    id: 3,
    title: "Open for Opportunities",
    company: "Looking for New Challenges",
    job: false,
    icon: Lightbulb,
    location: "Russia (Remote)",
    href: "",
    duration: "Full-Time | Current",
    description: `Looking for opportunities in Java backend or Full Stack development.`,
    tasks: [
      "Strong expertise in Java Spring ecosystem and backend architecture",
      "Experience with React/Next.js for frontend development",
      "Hands-on with AI integrations and LLM APIs",
      "Flexible for both Part-time and Full-time positions",
      "Open to remote work worldwide",
    ],
    badge: ["Open to Work", "Remote", "Java", "Full Stack"],
  },
];

const freelanceData = [
  {
    id: 1,
    project: "AI Document Analyzer",
    icon: CodeXml,
    location: "Remote",
    href: "https://github.com/ponsikk",
    duration: "Freelance | 2024",
    description: `Document analysis system for government sector using LLM for intelligent processing of PDF, DOCX, and HTML documents.`,
    tasks: [
      "Built RAG-like processing for archives with 30-50 documents",
      "Implemented chain-of-thought prompting for complex analysis",
      "Created Telegram mini-app interface for easy access",
      "Deployed local AI models on client servers",
      "Developed full-stack application with FastAPI and React",
    ],
    badge: [
      "Python",
      "FastAPI",
      "OpenAI API",
      "React",
      "Docker",
      "LangChain",
      "RAG",
      "Telegram Bot",
    ],
  },
  {
    id: 2,
    project: "Telegram Mini-Apps Suite",
    icon: CodeXml,
    location: "Remote",
    href: "https://github.com/ponsikk",
    duration: "Freelance | 2024",
    description: `Suite of 6+ Telegram mini-applications for various business needs including procurement analysis and document processing.`,
    tasks: [
      "Developed complete applications from architecture to deployment",
      "Integrated multiple LLM providers (OpenAI, Claude, local models)",
      "Implemented async processing for large document batches",
      "Set up Docker Compose deployments on VPS",
      "Created admin panels and analytics dashboards",
    ],
    badge: [
      "TypeScript",
      "React",
      "Next.js",
      "Python",
      "FastAPI",
      "Docker",
      "PostgreSQL",
      "AI Integration",
    ],
  },
];

const educationData = [
  {
    duration: "2023 - Present",
    institution: "Self-Education in Software Development",
    icon: GraduationCap,
    description:
      "Intensive self-study in Java ecosystem, Spring Framework, and modern web development.",
    points: [
      "8 months of deep Java learning (JVM, GC, multithreading, Spring)",
      "Spring Boot, Spring Security, Spring Data JPA, Hibernate",
      "Databases: PostgreSQL, Redis, Kafka",
      "DevOps: Docker, Kubernetes (basics), CI/CD",
    ],
  },
  {
    duration: "University",
    institution: "Higher Education",
    icon: GraduationCap,
    description:
      "Higher technical education in Materials Science with strong analytical foundation.",
    points: [
      "Materials Science degree",
      "Strong analytical and problem-solving skills",
      "Technical foundation for engineering mindset",
      "English B2 level",
    ],
  },
];