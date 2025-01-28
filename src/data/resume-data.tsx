import {
  NSNLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Emre Bozkurt",
  initials: "EB",
  location: "Istanbul, Turkey",
  locationLink: "https://www.google.com/maps/place/Istanbul",
  about:
    "Detail-oriented Full Stack Developer dedicated to building high-quality products.",
  summary: (
    <>
      Backend-focused Full Stack Developer specializing in high-performance
      Golang applications, scalable PHP applications, and real-time collaboration
      systems. Experienced in technical architecture design.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/35993608?v=4",
  personalWebsiteUrl: "https://emreb.dev",
  contact: {
    email: "emre@emreb.dev",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/bozkurtemre",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bozkurrtemre/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/emrebdev",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Anadolu University",
      degree: "Bachelor's Degree in Management Information Systems",
      start: "2020",
      end: "2025",
    },
    {
      school: "Beykent University",
      degree: "Associate's Degree in Computer Programming",
      start: "2018",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Teknasyon",
      link: "https://teknasyon.com",
      badges: ["Hybrid", "PHP", "Golang", "Symfony", "Fiber"],
      title: "Software Developer",
      logo: NSNLogo,
      start: "2024",
      end: null,
      description: (
        <>
          Developed and maintained high-performance PHP applications for Mobile and Web Applications.
        </>
      ),
    },
    {
      company: "EasyCep",
      link: "https://easycep.com",
      badges: [
        "Hybrid",
        "PHP",
        "Phalcon",
        "Laravel",
        "Python",
        "AWS",
        "Docker",
        "CI/CD",
      ],
      title: "Software Developer",
      logo: NSNLogo,
      start: "2022",
      end: "2024",
      description: (
        <>
          Developed and maintained high-performance PHP applications for E-commerce (B2B, B2C).
          <ul className="list-inside list-disc">
            <li>
              Led backend team, building a high-performance API for a mobile app
            </li>
            <li>
              Implemented CI/CD pipelines for improved deployment reliability
            </li>
            <li>
              Established monitoring and alerting for improved system reliability
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "UBIT",
      link: "https://www.ubit.com.tr",
      badges: ["Hybrid", "Android", "Java", "Kotlin", "PHP", "Laravel"],
      title: "Android Developer → PHP Developer",
      logo: NSNLogo,
      start: "2021",
      end: "2022",
      description: (
        <>
          Developed Android app for a podcast social media. <br />
          Developed PHP applications for E-commerce and Education platforms.
          <ul className="list-inside list-disc">
            <li>
              Led web team, building call center ticketing system with Laravel
            </li>
            <li>
              Led web development team across multiple successful client projects
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Netwo",
      link: "https://netstok.org/pages/index.php",
      badges: ["On Site", "Android", "Java", "Kotlin", "PHP", "Laravel"],
      title: "Android Developer → PHP Developer",
      logo: NSNLogo,
      start: "2020",
      end: "2021",
      description: (
        <>
          Developed Android app for a delivery service, improving order tracking and delivery times.
          Developed PHP applications for E-commerce and Marketing platforms.
        </>
      ),
    },
    {
      company: "Netwo",
      link: "https://netstok.org/pages/index.php",
      badges: ["On Site", "Android", "Java", "Kotlin"],
      title: "Android Developer (Intern)",
      logo: NSNLogo,
      start: "2020",
      end: "2020",
      description: (
        <>
          Developed Android app for a delivery service, improving order tracking and delivery times.
        </>
      ),
    },
  ],
  skills: [
    "PHP",
    "Phalcon",
    "Laravel",
    "Symfony",
    "Golang",
    "Fiber",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "RabbitMQ",
    "Docker",
    "CI/CD",
    "Design Systems",
    "System Architecture",
  ],
} as const;
