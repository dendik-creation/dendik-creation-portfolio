const categories = [
  "Frontend",
  "Backend",
  "Fullstack",
  "Restful API",
  "Edu Game",
  "Builder",
] as const;
const techStack = [
  "HTML",
  "CSS",
  "Javascript",
  "PHP",
  "React Js",
  "Tailwind CSS",
  "Bootstrap",
  "Vue Js",
  "Laravel",
  "Wordpress",
] as const;

type Category = (typeof categories)[number];
type TechStack = (typeof techStack)[number];

export type ProjectList = {
  number?: string;
  categories: Category[];
  techStack: TechStack[];
  title: string;
  description: string;
  image?: string;
  preview?: string;
  github?: string;
}[];

export type SingleProject = {
  number?: string;
  categories: Category[];
  techStack: TechStack[];
  title: string;
  description: string;
  image?: string;
  preview?: string;
  github?: string;
};
