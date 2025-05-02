// import React from 'react';
// import { Code2, Blocks, Database, Terminal, Globe, Cpu, Layout, Server, Wrench } from 'lucide-react';

// function AboutPage() {
//   return (
//     <div className="max-w-4xl mx-auto p-4 md:p-8">
//       <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/10 p-8">
//         <h1 className="text-3xl font-bold mb-8">About Me</h1>
        
//         <div className="mb-12">
//           <h2 className="text-xl font-semibold mb-4">Who I Am</h2>
//           <p className="text-white/80 leading-relaxed">
//             I am a passionate self-taught developer with a strong drive for creating modern web applications. 
//             Through dedicated self-study and hands-on project work, I've developed a solid foundation in 
//             full-stack development. I love turning complex problems into simple, beautiful, and intuitive 
//             solutions.
//           </p>
//           <p className="text-white/80 leading-relaxed mt-4">
//             My journey in web development started with a curiosity about how things work on the internet, 
//             which led me to dive deep into modern web technologies. I'm constantly learning and exploring 
//             new technologies to improve my skills and create better user experiences.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div>
//             <h2 className="text-xl font-semibold mb-4">Technologies</h2>
//             <div className="space-y-4">
//               <div>
//                 <h3 className="font-medium mb-2 flex items-center gap-2">
//                   <Layout className="w-5 h-5" />
//                   Frontend
//                 </h3>
//                 <div className="flex flex-wrap gap-2">
//                   {['React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'].map((skill) => (
//                     <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <div>
//                 <h3 className="font-medium mb-2 flex items-center gap-2">
//                   <Server className="w-5 h-5" />
//                   Backend & Databases
//                 </h3>
//                 <div className="flex flex-wrap gap-2">
//                   {['Django', 'Django REST Framework', 'PostgreSQL', 'REST APIs'].map((skill) => (
//                     <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <div>
//                 <h3 className="font-medium mb-2 flex items-center gap-2">
//                   <Cpu className="w-5 h-5" />
//                   Programming Languages
//                 </h3>
//                 <div className="flex flex-wrap gap-2">
//                   {['C', 'C++', 'Python', 'JavaScript'].map((skill) => (
//                     <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <div>
//                 <h3 className="font-medium mb-2 flex items-center gap-2">
//                   <Wrench className="w-5 h-5" />
//                   Tools & DevOps
//                 </h3>
//                 <div className="flex flex-wrap gap-2">
//                   {['Git', 'Docker', 'VS Code', 'Linux', 'Terminal'].map((skill) => (
//                     <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <h2 className="text-xl font-semibold mb-4">Education</h2>
//             <div className="space-y-6">
//               <div className="flex items-start gap-3">
//                 <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
//                   <Code2 className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="font-medium">Self-Taught Developer</h3>
//                   <p className="text-sm text-white/60">Online Learning Platforms • 2022-Present</p>
//                   <ul className="mt-2 space-y-2 text-sm text-white/80">
//                     <li>• Completed comprehensive web development courses</li>
//                     <li>• Participated in coding challenges and hackathons</li>
//                     <li>• Built real-world projects from scratch</li>
//                     <li>• Active member of developer communities</li>
//                     <li>• Regular contributor to open-source projects</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AboutPage;



import {PanelsTopLeft , Server, Cpu, Wrench, GraduationCap} from "lucide-react"
import { TechStack , Education} from "../types"

const techStack : TechStack[] = [
    {category: "Frontend",stack: ["React", "TypeScript","Tailwind CSS", "HTML5", "CSS3"],icon:PanelsTopLeft},
    {category: "Backend & Databases", stack:["Django", "Django REST Framework", "PostgreSQL", "REST APIs"], icon:Server},
    {category: "Programming Languages", stack:["C", "C++", "Python" ,"JavaScript"], icon:Cpu},
    {category: "Tools & DevOps", stack:["Git", "Docker", "VS Code", "Linux", "Terminal"], icon:Wrench},
]

const Educations : Education [] = [
    {
      title: "Architect of Digital Technologies",
      institution: "1337 Coding School",
      date: "2022 – 2025"
    },
    {
        title: "Specialized Technician Diploma – Electromechanics of Automated Systems",
        institution: "OFPPT – ISTA Oujda",
        date: "2019 – 2021"
    },
    {
        title: "High School Diploma – Physical Sciences",
        institution: "Lycée El Fath, Jerada",
        date: "2019"
    },
]

const AboutPage = () => {
    return (
        <>
            <div className="container  mx-auto">
                <div className="max-w-4xl bg-white bg-opacity-10 backdrop-blur-[10px] mx-auto border rounded-md border-white/10">
                    <div className="m-4 grid 
                        gap-4 grid-cols-1 
                        md:grid-cols-2 
                        [grid-template-areas:'first''second''third']
                        md:[grid-template-areas:'first_first''second_third']">
                                        <div className="" style={{ gridArea: 'first' }}>
                                            <h1 className="font-bold text-3xl mb-5 text-white">About Me</h1>
                                            <h2  className="font-bold text-xl mb-2 text-white">Who I Am</h2>
                                            <p className="text-white/70">
                                                Hi! I'm Marouane, a <strong>Full Stack Developer</strong> and <strong>Computer Science student</strong> passionate about software engineering and the world of technology.<br/><br/>

                                                I have a strong interest in <strong>backend development</strong>, where I enjoy understanding how things work under the hood and building robust, efficient systems. I love exploring <strong>C/C++</strong> for system-level programming and constantly challenge myself with coding problems to improve my logic and problem-solving abilities.<br/><br/>

                                                Learning is my fuel — whether it's modern web development or low-level architecture, I’m always looking to grow and build meaningful projects.
                                            </p>
                                        </div>
                                        <div className="[grid-area: first]">
                                            <h1 className="font-bold text-xl mb-2 text-white">Technologies</h1>
                                            <div> 
                                            {techStack.map( ({ category, stack, icon:Icon}) => (
                                                <div key={category}>
                                                    <span className="flex mb-2  text-white">
                                                        <Icon className="mr-2"/>
                                                        {category}
                                                    </span>
                                                    <div className="mb-2">
                                                        {stack.map( (tech) => (
                                                        
                                                            <span key={tech} className="p-2 inline-block border border-white/10 rounded-md bg-white/5 mr-2 mb-2  text-white">{tech} </span>
                                                        
                                                        ) )}
                                                    </div>
                                                </div>
                                                    )
                                                )
                                            }
                                            </div>
                                        </div>
                                        <div className="[grid-area: second]">
                                            
                                            <h1 className="font-bold text-xl mb-2 text-white flex"> <GraduationCap className="mr-2"/> Education</h1> 
                                            <ul className="list-none">
                                                {Educations.map( (edu , index) => (
                                                    <li key={index} className="border border-white/10 rounded-md bg-white/5 p-4 mr-2 mb-2 text-white">
                                                        <h3 className="text-lg font-semibold">{edu.title}</h3>
                                                        <p className="text-sm">{edu.institution} - <span>{edu.date}</span></p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage