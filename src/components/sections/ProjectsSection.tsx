import React from "react";
import { FolderGit2, Globe } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

function ProjectsSection() {
  /* eslint-disable react/no-unescaped-entities */
  const projects = [
    {
      title: "Интеллектуальная Аналитика Документов",
      links: [
        {
          icon: FolderGit2,
          href: "https://github.com/ponsikk", // Placeholder
          label: "Исходный код",
        },
      ],
      description:
        "Корпоративная система анализа документов с использованием RAG (Retrieval-Augmented Generation). Позволяет загружать архивы PDF/DOCX и получать ответы по их содержанию с цитированием.",
      features: [
        "Обработка и векторизация больших объемов документации.",
        "Интеграция с LLM (OpenAI/Local Models) для генерации ответов.",
        "Ролевая модель доступа и админ-панель для управления базой знаний.",
      ],
      technologies: ["Python", "FastAPI", "React", "PostgreSQL", "LangChain", "Docker"],
      badges: ["AI/ML", "Enterprise", "Full Stack"],
    },
    {
      title: "Telegram Recruiting Bot",
      links: [
        {
          icon: FolderGit2,
          href: "https://github.com/ponsikk",
          label: "Source",
        },
      ],
      description:
        "Автоматизированный бот для HR-департамента. Проводит первичный скрининг кандидатов, собирает резюме и назначает собеседования, интегрируясь с календарем.",
      features: [
        "Интерактивные сценарии опросов кандидатов.",
        "Парсинг резюме и автоматическое заполнение профиля.",
        "Админ-панель для рекрутеров (Web App) внутри Telegram.",
      ],
      technologies: ["Java", "Spring Boot", "Telegram API", "MongoDB", "React"],
      badges: ["Bot", "Automation", "Spring"],
    },
    {
      title: "Crypto Arbitrage Scanner",
      links: [
        {
          icon: FolderGit2,
          href: "https://github.com/ponsikk",
          label: "Backend",
        },
      ],
      description:
        "Система мониторинга криптовалютных бирж в реальном времени. Обнаруживает арбитражные возможности и отправляет уведомления с низкой задержкой.",
      features: [
        "Подключение к WebSocket потокам Binance, Bybit, OKX.",
        "Высокопроизводительное ядро матчинга ордеров.",
        "Уведомления в Telegram и Discord с задержкой < 100мс.",
      ],
      technologies: ["Go", "Redis", "WebSockets", "Docker"],
      badges: ["High Load", "Crypto", "Backend"],
    },
  ];

  return (
    <section className="relative flex flex-col full-line-bottom " id="projects">
      {/* Projects Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {/* Left Column - Title */}
        <div className="p-8 md:p-12 md:sticky md:top-20 md:h-fit md:border-r border-b md:border-b-0 ">
          <div className="flex items-center gap-3 mb-4">
            <FolderGit2 className="w-6 h-6 text-primary" />
            <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
              Портфолио
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Избранные Проекты
          </h2>
          <p className="text-muted-foreground leading-relaxed md:text-lg">
            Подборка проектов, демонстрирующих мои навыки в Full Stack разработке, архитектуре систем и AI-интеграциях.
          </p>

          <div className="mt-8">
            <Link
              href="https://github.com/ponsikk"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full gap-2"
              )}
            >
              <FolderGit2 className="w-4 h-4" /> Все проекты на GitHub
            </Link>
          </div>
        </div>

        {/* Right Column - Accordion */}
        <div className="lining-tilt-background">
          <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
            {projects.map((project, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b last:border-b-0 px-6 md:px-10 py-2 group hover:bg-muted/30 transition-colors"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex flex-col items-start text-left w-full gap-3">
                    <div className="flex items-center justify-between w-full">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {/* Mobile-friendly badges */}
                      <div className="flex gap-2 md:hidden">
                        {project.badges.slice(0, 1).map((badge, i) => (
                          <Badge key={i} variant="secondary" className="text-[10px] px-1.5 h-5">{badge}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="hidden md:flex gap-2">
                      {project.badges.map((badge, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">{badge}</Badge>
                      ))}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-2 pb-6 space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div>
                      <h4 className="text-sm font-semibold mb-3">Ключевые особенности</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold mb-3">Стек технологий</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-2.5 py-1 rounded-md bg-secondary/50 text-secondary-foreground border border-secondary font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      {project.links.map((link, i) => (
                        <Link
                          key={i}
                          href={link.href}
                          target="_blank"
                          className={cn(
                            buttonVariants({ variant: "outline", size: "sm" }),
                            "gap-2"
                          )}
                        >
                          <link.icon className="w-4 h-4" />
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
