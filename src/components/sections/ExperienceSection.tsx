import React from "react";
import {
  Briefcase,
  CodeXml,
  ExternalLink,
  GraduationCap,
  Lightbulb,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

function ExperienceSection() {
  const experienceData = [
    {
      company: "Enterprise FinTech System",
      role: "Java Full Stack Разработчик",
      duration: "Май 2023 - Наст. время",
      description:
        "Разработка единых систем управления корпоративной архитектурой. Ответственность за полный цикл разработки: от микросервисов до фронтенда.",
      tasks: [
        "Разработка и поддержка микросервисов на Java 17 и Spring Boot 3.",
        "Создание адаптивных интерфейсов на React, Next.js и TypeScript.",
        "Рефакторинг легаси-кода и оптимизация производительности БД (PostgreSQL, Redis).",
        "Внедрение событийно-ориентированной архитектуры (Kafka, RabbitMQ).",
        "Управление развертыванием через Kubernetes и Docker.",
        "Менторство младших разработчиков и проведение код-ревью.",
      ],
      technologies: ["Java 17", "Spring Boot", "React", "Next.js", "Kafka", "Kubernetes", "Redis", "Docker"],
    },
    {
      company: "Corporate Solutions Developer",
      role: "Java Backend Разработчик",
      duration: "Янв 2022 - Мар 2023",
      description:
        "Цифровизация бизнес-процессов и разработка корпоративного ПО.",
      tasks: [
        "Реализация сложной бизнес-логики и REST API.",
        "Оптимизация SQL-запросов и маппинга Hibernate для высоких нагрузок.",
        "Модернизация легаси-систем на современный стек Spring Boot.",
        "Настройка мониторинга (Grafana/Prometheus) и логирования (ELK).",
        "Участие в Agile/Scrum процессах и планировании спринтов.",
      ],
      technologies: ["Java 11", "Spring Boot", "Hibernate", "PostgreSQL", "Liquibase", "JUnit"],
    },
  ];

  const freelanceData = [
    {
      project: "Full Stack Консалтинг",
      role: "Senior Разработчик",
      duration: "2021 - Наст. время",
      description:
        "Разработка кастомных веб-решений для международных клиентов с использованием современного стека Java & JS.",
      tasks: [
        "Проектирование масштабируемых SaaS-приложений.",
        "Разработка Telegram Mini Apps и ботов с AI-интеграцией.",
        "Консультации по системному дизайну и облачной инфраструктуре.",
      ],
      technologies: ["FastAPI", "Python", "React", "Spring Cloud", "AI Integration"],
    },
  ];

  const educationData = [
    {
      institution: "РТУ МИРЭА",
      degree: "Бакалавр техники и технологии",
      duration: "2016 - 2020",
      description: "Материаловедение и технологии материалов. Фундаментальная инженерная подготовка.",
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
              Карьерный путь
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Опыт работы
          </h2>
          <p className="text-muted-foreground leading-relaxed md:text-lg">
            Таймлайн моего профессионального пути: ключевые роли, значимые проекты и технический рост.
          </p>

          <div className="mt-8 hidden md:block">
            {/* CV Download Link Placeholder */}
            {/* 
            <a
              href="/resume_ru.pdf" 
              target="_blank"
              className="inline-flex items-center gap-2 text-primary hover:underline underline-offset-4"
            >
              Скачать резюме <ExternalLink className="w-4 h-4" />
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
                        <CodeXml className="w-4 h-4 text-primary" /> Ключевые задачи
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
                      <h4 className="text-sm font-semibold mb-3">Технологии</h4>
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
              Независимая работа
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Фриланс и Проекты
          </h2>
          <p className="text-muted-foreground leading-relaxed md:text-lg">
            Избранные консалтинговые проекты и решения для клиентов, демонстрирующие гибкость и delivery-скиллы.
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
                      <h4 className="text-sm font-semibold mb-3">Достижения</h4>
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
              Образование
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Академический бэкграунд
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