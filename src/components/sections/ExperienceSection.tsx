import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { ArrowUpRight, Briefcase, CodeXml, GraduationCap, Lightbulb, ExternalLink } from "lucide-react";

function ExperienceSection() {
  const experienceData = [
    {
      company: "Enterprise FinTech System",
      role: "Java Full Stack Developer",
      duration: "May 2023 - Present",
      description:
        "Building unified enterprise architecture management systems. Responsible for full-cycle development from backend microservices to frontend interfaces.",
      tasks: [
        "Developing and maintaining microservices using Java 17 & Spring Boot 3.",
        "Building responsive frontend interfaces with React, Next.js, and TypeScript.",
        "Refactoring legacy code and optimizing database performance (PostgreSQL, Redis).",
        "Implementing event-driven architecture using Apache Kafka and RabbitMQ.",
        "Managing deployments via Kubernetes and Docker.",
        "Mentoring junior developers and conducting code reviews.",
      ],
      technologies: ["Java 17", "Spring Boot", "React", "Next.js", "Kafka", "Kubernetes", "Redis", "Docker"],
    },
    {
      company: "Corporate Solutions Developer",
      role: "Java Backend Developer",
      duration: "Jan 2022 - Mar 2023",
      description:
        "Digitalization of business processes and development of corporate software solutions.",
      tasks: [
        "Implemented complex business logic and REST APIs.",
        "Optimized database queries and Hibernate mappings for high load.",
        "Modernized legacy systems to modern Spring Boot stack.",
        "Set up monitoring (Grafana/Prometheus) and logging (ELK) systems.",
        "Participated in agile scrum processes and sprint planning.",
      ],
      technologies: ["Java 11", "Spring Boot", "Hibernate", "PostgreSQL", "Liquibase", "JUnit"],
    },
  ];

  const freelanceData = [
    {
      project: "Full Stack Consultancy",
      role: "Senior Developer",
      duration: "2021 - Present",
      description:
        "Delivering custom web solutions for international clients using modern Java & JS stack.",
      tasks: [
        "Architecting scalable SaaS applications.",
        "Developing Telegram Mini Apps and AI-integrated bots.",
        "Consulting on system design and cloud infrastructure.",
      ],
      technologies: ["FastAPI", "Python", "React", "Spring Cloud", "AI Integration"],
    },
  ];

  const educationData = [
    {
      institution: "MIREA - Russian Technological University",
      degree: "Bachelor of Engineering",
      duration: "2016 - 2020",
      description: "Material Science and Technology. Foundation in engineering principles and systematic approach.",
    },
  ];

  return (
    <section className="relative flex flex-col full-line-bottom " id="experience">
      {/* Experience Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-b ">
        {/* Left Column - Title */}
        <div className="p-8 md:p-12 md:sticky md:top-20 md:h-fit md:border-r border-b md:border-b-0 ">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-6 h-6 text-primary" />
            <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
              Career Path
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Work Experience
          </h2>
          <p className="text-muted-foreground leading-relaxed md:text-lg">
            A timeline of my professional journey, highlighting key roles,
            impactful projects, and technical growth in full-stack development.
          </p>

          <div className="mt-8 hidden md:block">
            {/* CV Download Link Placeholder */}
            {/* 
            <a
              href="/resume.pdf" 
              target="_blank"
              className="inline-flex items-center gap-2 text-primary hover:underline underline-offset-4"
            >
              Download Resume <ExternalLink className="w-4 h-4" />
            </a> 
            */}
          </div>
        </div>

        {/* Right Column - Accordion */}
        <div className="lining-tilt-background">
          <Accordion type="single" collapsible className="w-full">
            {experienceData.map((exp, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b last:border-b-0 px-6 md:px-10 py-2 group hover:bg-muted/30 transition-colors"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex flex-col items-start text-left w-full gap-2">
                    <div className="flex items-center justify-between w-full">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {exp.company}
                      </h3>
                      <span className="text-xs font-mono text-muted-foreground border px-2 py-1 rounded-full whitespace-nowrap ml-2">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-base text-foreground/80 font-medium">
                      {exp.role}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-2 pb-6 space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    <div>
                      <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                        <CodeXml className="w-4 h-4 text-primary" /> Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.tasks.map((task, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-2.5 py-1 rounded-md bg-secondary/50 text-secondary-foreground border border-secondary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Freelance Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-b">
        {/* Left Column */}
        <div className="p-8 md:p-12 md:sticky md:top-20 md:h-fit md:border-r border-b md:border-b-0 order-first ">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-6 h-6 text-primary" />
            <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
              Independent Work
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Freelance & Projects
          </h2>
          <p className="text-muted-foreground leading-relaxed md:text-lg">
            Selected consultancy projects and custom solutions developed for clients, showing adaptability and full-cycle delivery.
          </p>
        </div>

        {/* Right Column */}
        <div className="lining-tilt-background">
          <Accordion type="single" collapsible className="w-full">
            {freelanceData.map((project, index) => (
              <AccordionItem
                key={index}
                value={`freelance-${index}`}
                className="border-b last:border-b-0 px-6 md:px-10 py-2 group hover:bg-muted/30 transition-colors"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex flex-col items-start text-left w-full gap-2">
                    <div className="flex items-center justify-between w-full">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.project}
                      </h3>
                      <span className="text-xs font-mono text-muted-foreground border px-2 py-1 rounded-full whitespace-nowrap ml-2">
                        {project.duration}
                      </span>
                    </div>
                    <p className="text-base text-foreground/80 font-medium">
                      {project.role}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-2 pb-6 space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div>
                      <h4 className="text-sm font-semibold mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {project.tasks.map((task, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 rounded-md bg-secondary/50 text-secondary-foreground border border-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Education Section */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Column */}
        <div className="p-8 md:p-12 md:sticky md:top-20 md:h-fit md:border-r border-b md:border-b-0">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-6 h-6 text-primary" />
            <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
              Education
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Academic Background
          </h2>
        </div>

        {/* Right Column */}
        <div className="lining-tilt-background p-6 md:p-10 space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold">{edu.institution}</h3>
                <span className="text-xs font-mono text-muted-foreground border px-2 py-1 rounded-full whitespace-nowrap">
                  {edu.duration}
                </span>
              </div>
              <p className="text-base text-foreground/80 font-medium">{edu.degree}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;