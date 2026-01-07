import { Phone, Mail, MapPin, Globe, Briefcase, User, Linkedin, Facebook } from "lucide-react";

export const portfolioConfig = {
  // Personal Information
  name: "Ilya",
  nameRu: "Илья",
  title: "Java Full Stack Developer",
  description: "Building scalable enterprise applications with Java, Spring & modern frontend",
  descriptionRu: "Создаю масштабируемые enterprise-приложения на Java, Spring и современном frontend",
  location: "Russia (Remote)",
  email: "ponsik123@gmail.com",
  // phone: "+1 (555) 123-4567", // Optional
  website: "https://ponsik.pro",

  // Social Media Links
  socialLinks: {
    github: "https://github.com/ponsikk",
    telegram: "https://t.me/ponsikkkk",
    twitter: "https://x.com/ponsiktwi",
    reddit: "https://www.reddit.com/user/Ponsik/",
    discord: ".pons",
    // linkedin: "https://linkedin.com/in/yourprofile",
    // facebook: "https://facebook.com/yourprofile",
  },

  // SEO Configurations
  seo: {
    title: "Ilya - Java Full Stack Developer",
    description: "Portfolio of a Java Full Stack Developer specializing in Spring Boot, Microservices, and React. Building scalable enterprise solutions.",
    ogImage: "/og-image.jpg", // Add your Open Graph image in public folder
    url: "https://ponsik.pro",
    twitterHandle: "@ponsiktwi",
    keywords: [
      "Java Developer",
      "Full Stack Developer",
      "Spring Boot",
      "React",
      "Next.js",
      "Microservices",
      "Portfolio",
      "Russia",
      "Software Engineer",
      "Backend"
    ],
    authors: [{ name: "Ilya", url: "https://ponsik.pro" }],
    creator: "Ilya",
    siteName: "Portfolio",
    locale: "en_US",
    type: "website",
  },
};
