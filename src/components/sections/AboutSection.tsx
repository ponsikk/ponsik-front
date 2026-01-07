import React from "react";
import { usePortfolioConfig } from "@/hooks/usePortfolioConfig";

function AboutSection() {
  const { config } = usePortfolioConfig();

  return (
    <section className="border-x full-line-bottom  p-8 md:p-12 relative overflow-hidden">
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Main Bio Text */}
        <div className="md:col-span-12 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              <span className="text-primary">Java Full Stack Инженер, </span>
              создающий масштабируемые enterprise-решения.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl">
              Я профессиональный разработчик ПО, специализирующийся на{" "}
              <span className="text-foreground font-semibold">
                экосистеме Spring
              </span>{" "}
              и современных веб-технологиях. Имея более{" "}
              <span className="text-foreground font-semibold">
                3 лет опыта в production
              </span>
              , я создаю надежные микросервисы, оптимизирую высоконагруженные базы данных и разрабатываю интуитивные frontend-интерфейсы.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base text-muted-foreground">
            <p>
              Моя экспертиза включает проектирование событийно-ориентированной архитектуры с использованием{" "}
              <strong className="text-foreground">Apache Kafka</strong> и{" "}
              <strong className="text-foreground">RabbitMQ</strong>, управление контейнеризированными средами в{" "}
              <strong className="text-foreground">Kubernetes</strong> и реализацию сложной бизнес-логики.
              Я горжусь тем, что пишу чистый, тестируемый код и помогаю младшим разработчикам осваивать лучшие практики.
            </p>
            <p>
              Помимо бэкенда, я владею современным JavaScript-стеком, используя{" "}
              <strong className="text-foreground">React</strong> и{" "}
              <strong className="text-foreground">Next.js</strong> для создания Full Stack приложений.
              Всегда готов решать сложные задачи, будь то оптимизация SQL-запросов или проектирование, архитектура новой системы с нуля.
            </p>
          </div>

          {/* Key Stats / Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t font-mono text-sm">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">3+</div>
              <div className="text-muted-foreground">Года опыта</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">6+</div>
              <div className="text-muted-foreground">Продакшен приложений</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">15+</div>
              <div className="text-muted-foreground">Микросервисов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-muted-foreground">Стабильность систем</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
