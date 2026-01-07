import React from "react";

function AboutSection() {
  return (
    <section className="px-4 border-x full-line-bottom relative">
      <h2 className="text-3xl font-semibold relative full-line-bottom ">
        About
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Main Bio Text */}
        <div className="md:col-span-12 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              <span className="text-primary">Java Full Stack Engineer </span>
              crafting scalable enterprise solutions.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl">
              I am a passionate software developer specializing in the{" "}
              <span className="text-foreground font-semibold">
                Spring Ecosystem
              </span>{" "}
              and modern web technologies. With over{" "}
              <span className="text-foreground font-semibold">
                3 years of production experience
              </span>
              , I build robust microservices, optimize high-load databases, and create intuitive frontend interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base text-muted-foreground">
            <p>
              My expertise lies in designing event-driven architectures using{" "}
              <strong className="text-foreground">Apache Kafka</strong> and{" "}
              <strong className="text-foreground">RabbitMQ</strong>, managing containerized environments with{" "}
              <strong className="text-foreground">Kubernetes</strong>, and implementation of complex business logic.
              I pride myself on writing clean, testable code and mentoring junior developers in best practices.
            </p>
            <p>
              Beyond backend, I am proficient in the modern JavaScript stack, using{" "}
              <strong className="text-foreground">React</strong> and{" "}
              <strong className="text-foreground">Next.js</strong> to deliver full-stack applications.
              I am always eager to tackle challenging problems, whether it's optimizing SQL queries or architecting a new system from scratch.
            </p>
          </div>

          {/* Key Stats / Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t font-mono text-sm">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">3+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">6+</div>
              <div className="text-muted-foreground">Production Apps</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">15+</div>
              <div className="text-muted-foreground">Microservices</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-muted-foreground">System Stability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
