import React from "react";

function AboutSection() {
  return (
    <section className="px-4 border-x full-line-bottom relative">
      <h2 className="text-3xl font-semibold relative full-line-bottom ">
        About
      </h2>
      <div className="flex flex-col gap-4 py-4 font-mono text-sm ">
        <p className="tracking-wide">
          Hi there! I&apos;m Ilya — a Java Full Stack developer with deep expertise in
          the Spring ecosystem and modern web technologies. With 3+ years of experience,
          I build scalable enterprise applications and intelligent automation solutions.
        </p>
        <p className="tracking-wide">
          My core expertise is Java backend development: Spring Boot, Spring Security,
          Spring Data JPA, Hibernate, with production experience in microservice architecture.
          On the frontend, I work with React, Next.js, and TypeScript.
        </p>
        <p className="tracking-wide">
          I&apos;ve successfully launched 6+ production applications, including AI-powered
          document analysis systems, Telegram mini-apps, and enterprise integrations.
          Experience in team leadership and full development cycle.
        </p>
        <p className="tracking-wide">
          Strong foundation in system design, databases (PostgreSQL, Redis),
          and DevOps practices (Docker, Kubernetes, CI/CD).
        </p>
        <p className="tracking-wide">
          Let&apos;s connect and build something scalable together!
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
