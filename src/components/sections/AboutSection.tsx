import React from "react";

function AboutSection() {
  return (
    <section className="px-4 border-x full-line-bottom relative">
      <h2 className="text-3xl font-semibold relative full-line-bottom ">
        About
      </h2>
      <div className="flex flex-col gap-4 py-4 font-mono text-sm ">
        <p className="tracking-wide">
          Привет! Я Илья — Java Full Stack разработчик с глубокой экспертизой в
          экосистеме Spring и современных веб-технологиях. Имея более 3 лет опыта,
          я создаю масштабируемые enterprise-приложения и интеллектуальные решения автоматизации.
        </p>
        <p className="tracking-wide">
          Моя основная экспертиза — Java backend разработка: Spring Boot, Spring Security,
          Spring Data JPA, Hibernate, с production-опытом в микросервисной архитектуре.
          На фронтенде я работаю с React, Next.js и TypeScript.
        </p>
        <p className="tracking-wide">
          Я успешно запустил 6+ production-приложений, включая AI-powered системы
          анализа документов, Telegram mini-apps и корпоративные интеграции.
          Опыт командного лидерства и полного цикла разработки.
        </p>
        <p className="tracking-wide">
          Крепкая база в системном дизайне, базах данных (PostgreSQL, Redis)
          и DevOps практиках (Docker, Kubernetes, CI/CD).
        </p>
        <p className="tracking-wide">
          Давайте свяжемся и построим что-то масштабируемое вместе!
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
