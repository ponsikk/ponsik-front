import Image from "next/image";
import React from "react";
import MyImage from "../../../public/myImage.jpg";
import { VerifiedFilledIcon } from "../Icons";
import { FlipSentences } from "../ui/FlipSentences";

function ProfileSection() {
  // EN version
  // const flipSentences = [
  //   "Java Full Stack Developer building enterprise applications.",
  //   "Spring Framework specialist with production experience.",
  //   "Backend architect crafting scalable microservices.",
  //   "Team Lead delivering production-ready solutions.",
  // ];

  // RU version
  const flipSentences = [
    "Java Backend разработчик enterprise-приложений.",
    "Fullstack: Java/Python backend, React/Telegram Bot frontend.",
    "Проектирую микросервисную архитектуру на Spring.",
    "Развиваю навыки в Rust и Web3-технологиях.",
    "Создаю Telegram-ботов и мини-приложения.",
  ];

  return (
    <section className="relative flex full-line-bottom h-auto border-x  ">
      <div className="shrink-0 border-r ">
        <div className="p-1">
          <Image
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`Ilya avatar`}
            src={MyImage.src}
            width={512}
            height={512}
            quality={100}
            priority
            unoptimized
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex justify-between grow items-end pb-1 px-4 lining-tilt-background">
          <span className="line-clamp-1 font-mono text-xs text-zinc-300 select-none dark:text-zinc-800 tracking-wider">
            Открыт для предложений
          </span>
        </div>
        <div className=" border-t">
          <h1 className=" pl-4 py-0.5 font-semibold  select-none text-2xl flex items-center font-mono  ">
            Ilya&nbsp;
            <VerifiedFilledIcon />{" "}
          </h1>
        </div>
        <div className="h-9 border-t flex items-center justify-start  py-1 pl-4  md:h-auto">
          <FlipSentences sentences={flipSentences} />
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
