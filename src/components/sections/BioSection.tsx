import { BriefcaseBusiness, CodeXml, Globe, Mail, MapPin, LaptopMinimal } from "lucide-react";
import React from "react";

function BioSection() {
  const bioData = [
    {
      icon: CodeXml,
      title: "Java Full Stack Developer | Spring Expert",
      type: "text",
    },
    { icon: LaptopMinimal, title: "Available for Remote Work", type: "text" },
    { icon: MapPin, title: "Russia (Remote)", type: "text" },
    { icon: Mail, title: "ponsik123@gmail.com", type: "link" },
    { icon: Globe, title: "ponsik.pro", type: "link" },
  ];
  return (
    <section className="relative flex full-line-bottom h-auto border-x p-4 gap-2 flex-col items-center justify-center">
      {bioData.map((item, index) => (
        <div
          key={index}
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
