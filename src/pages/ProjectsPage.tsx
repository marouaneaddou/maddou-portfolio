// import React from 'react';
// import { Code2, Calendar, ExternalLink } from 'lucide-react';

// function ProjectsPage() {
//   const projects = [
//     {
//       id: 1,
//       title: 'E-Commerce Platform',
//       type: 'Full Stack Project',
//       date: 'March 2024',
//       projectId: 'PROJ-ECOM-2024',
//       description: 'A complete e-commerce solution with user authentication, product management, and secure payment processing.',
//       technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
//       image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=80',
//       githubLink: 'https://github.com/yourusername/ecommerce-platform'
//     },
//     {
//       id: 2,
//       title: 'Task Management App',
//       type: 'Team Project',
//       date: 'January 2024',
//       projectId: 'PROJ-TASK-2024',
//       description: 'A collaborative task management application with real-time updates and team collaboration features.',
//       technologies: ['React', 'WebSocket', 'MongoDB', 'Express', 'Tailwind CSS'],
//       image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&auto=format&fit=crop&q=80',
//       githubLink: 'https://github.com/yourusername/task-manager'
//     },
//     {
//       id: 3,
//       title: 'Weather Dashboard',
//       type: 'Frontend Project',
//       date: 'December 2023',
//       projectId: 'PROJ-WTHR-2023',
//       description: 'An interactive weather dashboard with location-based forecasts and data visualization.',
//       technologies: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
//       image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop&q=80',
//       githubLink: 'https://github.com/yourusername/weather-dashboard'
//     }
//   ];

//   return (
//     <div className="max-w-4xl mx-auto p-4 md:p-8">
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold mb-4">Projects</h1>
//         <p className="text-white/70">
//           A showcase of my development projects and technical achievements
//         </p>
//       </div>

//       <div className="grid gap-6">
//         {projects.map((project) => (
//           <div key={project.id} className="bg-black/50 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/10">
//             <div className="md:flex">
//               <div className="md:w-1/3">
//                 <img 
//                   src={project.image}
//                   alt={project.title}
//                   className="h-48 md:h-full w-full object-cover"
//                 />
//               </div>
//               <div className="p-6 md:w-2/3">
//                 <div className="flex items-center gap-3 mb-2">
//                   <Code2 className="w-6 h-6 text-white" />
//                   <h2 className="text-xl font-semibold">{project.title}</h2>
//                 </div>
                
//                 <div className="flex items-center gap-4 text-sm text-white/70 mb-4">
//                   <span className="bg-white/5 border border-white/10 px-2 py-1 rounded">
//                     {project.type}
//                   </span>
//                   <div className="flex items-center gap-1">
//                     <Calendar className="w-4 h-4" />
//                     {project.date}
//                   </div>
//                 </div>

//                 <p className="text-white/80 mb-4">{project.description}</p>

//                 <div className="mb-4">
//                   <div className="text-sm text-white/70 mb-2">Technologies Used</div>
//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((tech, index) => (
//                       <span 
//                         key={index} 
//                         className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-sm"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <div className="text-sm">
//                     <span className="text-white/70">Project ID: </span>
//                     <span className="font-mono">{project.projectId}</span>
//                   </div>
//                   <a 
//                     href={project.githubLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
//                   >
//                     View Code <ExternalLink className="w-4 h-4" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProjectsPage;

import {Project} from "../types"
import { Code , Github } from 'lucide-react';

const projects : Project[] = [
    {
      id: 1,
      name: "Multiplayer Pong Game Website",
      project: "Full Stack Application",
      description: "Developed a real-time multiplayer Pong game using Django, WebSockets, and Vanilla JavaScript. Managed server-side communication and game session handling with Redis. Created a REST API for game actions and implemented the game interface and logic on the client side.",
      technologies: ["Django", "WebSockets", "REST API", "Redis", "Vanilla JavaScript"],
      githubUrl: ""
    },
    {
      id: 2,
      name: "Web Server Project (C++98)",
      project: "Backend Application",
      description: "Built a custom web server from scratch in C++98, handling GET, POST, and DELETE HTTP requests. Implemented non-blocking multiplexing and CGI for serving dynamic content. Managed error handling and HTTP parsing.",
      technologies: ["C++98", "HTTP", "Non-blocking Multiplexing", "CGI"],
      githubUrl: ""
    },
    {
      id: 3,
      name: "Inception Project (Docker Containers)",
      project: "System Administration",
      description: "Created and managed Docker containers from scratch with Docker Compose orchestration. Configured networking, container communication, persistent storage, and streamlined deployment of a multi-service application.",
      technologies: ["Docker", "Docker Compose", "Networking", "Containerization"],
      githubUrl: ""
    },
    {
      id: 4,
      name: "MiniShell Project",
      project: "System Programming",
      description: "Developed a shell program in C to mimic basic Bash functionality, including process creation, I/O redirection, piping, and signal handling. Focused on system calls, file descriptors, and robust error management.",
      technologies: ["C", "Unix/Linux", "System Calls", "File Descriptors", "Process Management"],
      githubUrl: ""
    }
  ];
  

const ProjectPage = () => {
    return (
        <>
            <div className="container  mx-auto">
                <div className="max-w-xl mx-auto ">
                    <div className="mb-5">
                        <h1 className="text-white text-2xl font-bold mb-4">Projects</h1>
                        <p className="text-white/70">A showcase of my development projects and technical achievements</p>
                    </div>
                    <div className="grid gap-4 grid-cols-1">
                        {projects.map((project) => (
                            <div key={project.id} className="p-5 bg-black   border rounded-md border-white/10">
                                <h1 className="text-white mb-4">
                                    <Code className="mr-2 inline"/> <span >{project.name}</span>
                                </h1>
                                <div className=" text-white mb-2 w-48 p-2 bg-white/10 border rounded-md border-white/10 ">{project.project}
                                </div>
                                <p className="mb-2 text-white/70">{project.description}</p>
                                <div className="mb-4">
                                    <p className="text-white">Technologies Used</p>
                                    <div className="mt-4 md:flex">
                                        {project.technologies.map((teck) => (
                                            <p className="mb-2 md:mb-0 text-white p-2 mr-2 border rounded-md border-white/10 " key={teck}>{teck}</p>
                                        ))}
                                    </div>
                                </div>
                                <a href={project.githubUrl} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=" bg-orange-yellow  flex justify-between p-3 border  w-48 border-white/10 rounded-md items-center">
                                    <span>Source Code</span>
                                    <Github className=" ml-1"/>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectPage