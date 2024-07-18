import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Aaryan Mishra",
  EMAIL: "aaryan.mshra@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "home page of my portfolio",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "My blogs",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "My work experience.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "My projects",
};

export const SOCIALS: Socials = [
  {
    NAME: "Twitter-X",
    HREF: "https://x.com/callmeaaryan",
  },
  {
    NAME: "github",
    HREF: "https://github.com/mshra",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/callmeaaryan/",
  },
];
