import { BriefcaseBusiness, Globe, Mail, MapPin, LaptopMinimal } from "lucide-react";
import React from "react";

function BioSection() {
  const bioData = [
    {
      id: 1,
      icon: BriefcaseBusiness,
      text: "Java Full Stack Разработчик | Spring Эксперт",
    },
    {
      id: 2,
      icon: LaptopMinimal,
      text: "Доступен для удаленной работы",
    },
    {
      id: 3,
      icon: MapPin,
      text: "Россия (Удаленно)",
    },
    // {
    //   id: 4,
    //   icon: Phone,
    //   text: "+7 (999) 999-99-99", // Placeholder phone
    // },
    {
      id: 5,
      icon: Mail,
      text: "ponsik123@gmail.com",
      href: "mailto:ponsik123@gmail.com",
    },
    {
      id: 6,
      icon: Globe,
      text: "ponsik.pro",
      href: "https://ru.ponsik.pro",
    },
  ];
  return (
    <section className="relative flex full-line-bottom h-auto border-x p-4 gap-2 flex-col items-center justify-center">
      {bioData.map((item, index) => (
        <div
          key={item.id}
          className="w-full flex items-center justify-start gap-4 font-mono text-sm "
        >
          <div className="bg-muted shrink-0  text-muted-foreground size-6 flex items-center justify-center rounded-sm ">
            <item.icon className="size-4" />
          </div>{" "}
          {item.type === "link" ? (
            <a
              target="_blank"
              href={
                item.title.includes(".pro")
                  ? `https://${item.title}`
                  : `mailto:${item.title}`
              }
              className="text-balance  hover:underline"
            >
              {item.title}
            </a>
          ) : (
            <span className="text-balance">{item.title}</span>
          )}
        </div>
      ))}
    </section>
  );
}

export default BioSection;
