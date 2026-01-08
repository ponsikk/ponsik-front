import React from "react";

function AboutSection() {
  return (
    <section className="px-4 border-x full-line-bottom relative">
      <h2 className="text-3xl font-semibold relative full-line-bottom ">
        About
      </h2>
      <div className="flex flex-col gap-4 py-4 font-mono text-sm ">
        <p className="tracking-wide">
          Привет! Я Илья - Java Fullstack разработчик, работаю с Spring Framework,
          Python/FastAPI и React. Имею более 3 лет опыта в масштабируемых
          enterprise-приложениях, интегрирую AI в бизнес-процессы и разрабатываю
          приложения и ботов от нуля до продакшена.
        </p>
        <p className="tracking-wide">
          Мой основной стек - Java backend-разработка на Spring Framework
          с production-опытом в микросервисной архитектуре. На фронтенде
          работаю с React, Next.js и TypeScript.
        </p>
        <p className="tracking-wide">
          Веду проекты от идеи до продакшена: AI-интеграции, Telegram-боты, mini-apps.
        </p>
        <p className="tracking-wide">
          Работаю с современными технологиями и базами данных (PostgreSQL, Redis, Kafka),
          имею опыт в DevOps (Docker, Kubernetes, CI/CD).
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
