import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ClaudeIconIcon, DockerIcon, FastApiIcon, GithubActionsIcon, GithubTwoIcon, GitIcon, JavaIcon, JavascriptIcon, KafkaIcon, KubernetesIcon, NextjsIcon, OpenaiIcon, PostgresqlIcon, PythonIcon, FileTypeReactjsIcon, RedisIcon, ShadcnuiIcon, SpringIcon, TailwindcssIcon, TypescriptIcon } from "../Icons";
function TechStackSection() {
  const techStack = [
    { name: "Java", icon: JavaIcon },
    { name: "Spring Boot", icon: SpringIcon },
    { name: "Python", icon: PythonIcon },
    { name: "FastAPI", icon: FastApiIcon },
    { name: "TypeScript", icon: TypescriptIcon },
    { name: "JavaScript", icon: JavascriptIcon },
    { name: "React", icon: FileTypeReactjsIcon },
    { name: "Next.js", icon: NextjsIcon },
    { name: "PostgreSQL", icon: PostgresqlIcon },
    { name: "Redis", icon: RedisIcon },
    { name: "Kafka", icon: KafkaIcon },
    { name: "Docker", icon: DockerIcon },
    { name: "Kubernetes", icon: KubernetesIcon },
    { name: "Git", icon: GitIcon },
    { name: "GitHub", icon: GithubTwoIcon },
    { name: "GitHub Actions", icon: GithubActionsIcon },
    { name: "TailwindCSS", icon: TailwindcssIcon },
    { name: "Shadcn UI", icon: ShadcnuiIcon },
    { name: "OpenAI", icon: OpenaiIcon },
    { name: "Claude AI", icon: ClaudeIconIcon },
  ];
  return (
    <section className=" z-10 border-x full-line-bottom relative">
      <h2 className="pl-4 text-3xl font-semibold relative full-line-bottom ">
        Tech Stack
      </h2>
      <div className="relative">
        <div className=" absolute size-full [--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center bg-zinc-950/0.75 dark:bg-white/0.75 z-10" />
        <div className="flex flex-wrap gap-4 p-4 ">
          {techStack.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div key={index} className="w-fit z-50">
                <Tooltip>
                  <TooltipTrigger asChild className="cursor-pointer">
                    <IconComponent />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tech.name}</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TechStackSection;

