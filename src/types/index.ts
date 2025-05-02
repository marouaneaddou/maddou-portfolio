// Navigation
export interface NavItem {
  path: string;
  icon: React.ElementType;
  label: string;
}

// Blog & Challenges
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export interface Challenge {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  completedDate: string;
  timeComplexity: string;
  spaceComplexity: string;
  category: string;
  description: string;
  solution?: {
    code: string;
    explanation: string;
  };
}

// Projects
// export interface Project {
//   id: number;
//   title: string;
//   type: string;
//   date: string;
//   projectId: string;
//   description: string;
//   technologies: string[];
//   image: string;
//   githubLink: string;
// }

// Certificates
export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  description: string;
  skills: string[];
  image: string;
  verifyLink: string;
}

// Contact Form
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Profile Information
export interface ProfileInfo {
  name: string;
  title: string;
  location: string;
  availability: string;
  bio: string;
  avatarUrl: string;
  coverUrl: string;
}

// Social Links
export interface SocialLink {
  icon: React.ElementType;
  label: string;
  url: string;
  isExternal: boolean;
}

// Quick Links
export interface QuickLink {
  title: string;
  description: string;
  path: string;
}

// Particles Background Props
export interface ParticlesBackgroundProps {
  className?: string;
}




export interface item  {
  path: string,
  icon:  React.ElementType,
  label: string,
}

export interface TechStack {
  category  : string,
  stack     : string[]
  icon      : React.ElementType
}

export interface Education {
  title : string,
  institution : string,
  date    : string
}

export interface Problem {
  id    : number,
  title   :   string,
  difficulty  :   'Easy' | 'Medium' | 'Hard',
  description :   string,
  leetCodeUrl: string,
  githubSolutionUrl: string,
}

export interface Project {
  id    : number,
  name   :   string,
  project  :   string,
  description :   string,
  technologies: string[],
  githubUrl: string,
}
