export interface Project {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  technologies: string[];
}

export interface Experience {
  companyName: string;
  companyLogo: string;
  isCurrent: boolean;
  position: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}
