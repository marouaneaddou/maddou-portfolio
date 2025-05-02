// import React from 'react';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
// import { Github, Linkedin, Mail, MapPin, Calendar, Download, ChevronRight, Code2, BookOpen, FileCode } from 'lucide-react';
// import { ProfileInfo, SocialLink, QuickLink } from '../types';

// const HomePage: React.FC = () => {
//   const profileInfo: ProfileInfo = {
//     name: 'Maroune Addou',
//     title: 'Software Developer',
//     location: 'San Francisco, CA',
//     availability: 'Available for hire',
//     bio: 'Passionate software engineer specialized in building scalable web applications using modern technologies. Expert in C/C++, Python, and web development with Django and React. Currently focused on creating innovative solutions that make a difference.',
//     avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
//     coverUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1920&auto=format&fit=crop&q=80'
//   };

//   const quickLinks: QuickLink[] = [
//     {
//       title: 'Featured Projects',
//       description: 'Explore my latest software development projects and applications.',
//       path: '/projects',
//       icon: FileCode
//     },
//     {
//       title: 'Technical Blog',
//       description: 'Read my articles about software development and coding challenges.',
//       path: '/blog',
//       icon: BookOpen
//     }
//   ];

//   const socialLinks: SocialLink[] = [
//     {
//       icon: Github,
//       label: 'Github',
//       url: '#',
//       isExternal: true
//     },
//     {
//       icon: Linkedin,
//       label: 'LinkedIn',
//       url: '#',
//       isExternal: true
//     },
//     {
//       icon: Mail,
//       label: 'Email',
//       url: '/contact',
//       isExternal: false
//     }
//   ];

//   return (
//     <div className="min-h-[calc(100vh-4rem)] flex flex-col">
//       {/* Hero Section */}
//       <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/10">
//         <div className="relative">
//           {/* Cover Image with Gradient Overlay */}
//           <div className="relative h-48 md:h-64 lg:h-80">
//             <img 
//               src={profileInfo.coverUrl}
//               alt="Cover"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
//           </div>

//           {/* Profile Content */}
//           <div className="relative px-6 pb-8 md:px-8">
//             {/* Profile Image */}
//             <div className="absolute -top-16 left-6 md:left-8">
//               <div className="relative">
//                 <img 
//                   src={profileInfo.avatarUrl}
//                   alt="Profile"
//                   className="w-32 h-32 rounded-2xl border-4 border-orange-yellow shadow-xl object-cover"
//                 />
//                 <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white/10 rounded-br-lg backdrop-blur-sm border border-white/20 flex items-center justify-center">
//                   <Code2 className="w-4 h-4" />
//                 </div>
//               </div>
//             </div>

//             {/* Profile Info */}
//             <div className="pt-20">
//               <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
//                 <div>
//                   <h1 className="text-3xl md:text-4xl font-bold mb-2">{profileInfo.name}</h1>
//                   <p className="text-orange-yellow text-lg mb-4">{profileInfo.title}</p>
//                   <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm">
//                     <div className="flex items-center gap-1">
//                       <MapPin className="w-4 h-4" />
//                       {profileInfo.location}
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <Calendar className="w-4 h-4" />
//                       {profileInfo.availability}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex gap-3">
//                   <a 
//                     href="/resume.pdf" 
//                     className="inline-flex items-center gap-2 bg-orange-yellow text-black font-medium hover:bg-orange-yellow/90 px-4 py-2 rounded-lg transition-colors"
//                   >
//                     <Download className="w-4 h-4" />
//                     Resume
//                   </a>
//                   <Link 
//                     to="/contact" 
//                     className="inline-flex items-center gap-2 border border-white/20 hover:border-orange-yellow px-4 py-2 rounded-lg transition-colors"
//                   >
//                     <Mail className="w-4 h-4" />
//                     Contact
//                   </Link>
//                 </div>
//               </div>

//               <div className="mt-8">
//                 <p className="text-white/80 leading-relaxed text-lg">
//                   {profileInfo.bio}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Quick Links Section */}
//         <div className="px-6 md:px-8 py-8 border-t border-white/10">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {quickLinks.map((link, index) => {
//               const Icon = link.icon;
//               return (
//                 <Link 
//                   key={index}
//                   to={link.path} 
//                   className="group bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/10 border border-white/10 transition-all"
//                 >
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="p-2 bg-white/10 rounded-lg">
//                       <Icon className="w-5 h-5" />
//                     </div>
//                     <h3 className="text-xl font-semibold">{link.title}</h3>
//                   </div>
//                   <p className="text-white/70 mb-4">{link.description}</p>
//                   <span className="text-orange-yellow group-hover:translate-x-1 transition-transform inline-flex items-center">
//                     View Details <ChevronRight className="w-4 h-4 ml-1" />
//                   </span>
//                 </Link>
//               );
//             })}
//           </div>
//         </div>

//         {/* Social Links Section */}
//         <div className="px-6 md:px-8 py-6 bg-white/5 border-t border-white/10">
//           <div className="flex flex-wrap gap-4">
//             {socialLinks.map((link, index) => {
//               const Icon = link.icon;
//               return link.isExternal ? (
//                 <a 
//                   key={index}
//                   href={link.url} 
//                   className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 border border-white/10 transition-all"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Icon className="w-5 h-5" />
//                   {link.label}
//                   <ChevronRight className="w-4 h-4" />
//                 </a>
//               ) : (
//                 <Link 
//                   key={index}
//                   to={link.url} 
//                   className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 border border-white/10 transition-all"
//                 >
//                   <Icon className="w-5 h-5" />
//                   {link.label}
//                   <ChevronRight className="w-4 h-4" />
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;



import { Download , Mail , MapPin , Github, Linkedin,} from "lucide-react"
import { Link } from "react-router-dom"
import bg from "../assets/bg.avif"
import resume from "../assets/Marounae_Addou.pdf"
import profile from "../assets/profile.png"

const HomePage = () => {
    return (
        <>
            <div className="container  mx-auto">
                <div className=" max-w-4xl bg-white bg-opacity-10 backdrop-blur-[10px] mx-auto border rounded-md border-white/10 grid 
                    gap-2 grid-cols-1 
                    md:grid-cols-2 
                    [grid-template-areas:'first''second''third''Fourth''Fifth''Sixth''Seventh'] 
                    md:[grid-template-areas:'first_first''second_third''Fourth_Fourth''Fifth_Sixth''Seventh_Seventh']">
                    
                    <div className="" style={{gridArea: 'first'}}>
                        <img className="object-cover h-[12.75rem] w-full md:w-full" src={bg} alt="" />
                        <img className="w-36 ml-5 mt-[-4.5rem]" src={ profile } alt="" />
                    </div>
                    <div className=" mr-5 ml-5" style={{ gridArea: 'second' }}>
                        <h1 className="text-white font-bold text-xl mb-2">Marouane Addou</h1>
                        <p className=" text-orange-yellow text-xl">Software Developer</p>
                        <span className="flex justify-between text-white/70 w-[264px] mt-5 md:mb-0 mb-4">
                            <MapPin />
                            Oujda, Oriental Region, Morocco
                        </span>
                    </div>
                    <div className="flex mr-5 ml-5 md:justify-end" style={{ gridArea: 'third' }}>
                            <a target="_blank" href={resume} className="w-30 mr-2 h-10 bg-orange-yellow flex justify-between p-3 border w-26  border-white/10 rounded-md items-center">
                                <Download className="w-4 mr-1"/>
                                <span>Resume</span>
                            </a>
                            <Link to="/contact" className="w-30 h-10  text-white flex justify-between p-3 border w-26  border-white/10 rounded-md items-center">
                                <Mail className="w-4 mr-1"/>
                                <span>Contact</span>
                            </Link>
                    </div>
                    <div className="text-white/80 mt-4  mb-5 " style={{ gridArea: 'Fourth' }}>
                        <div className="mr-5 ml-5 mb-5 text-lg">
                            Dedicated computer science student with a strong foundation in software development and a 
                            passion for learning. Experienced in working with JavaScript, React, and C++, 
                            currently focused on building innovative solutions and enhancing problem-solving skills through hands-on projects
                        </div>
                        <span className="border border-white/10 w-full inline-block"></span>
                    </div>
                    <div className="mr-5 ml-5 p-6 border border-white/10 rounded-md  bg-white/5" style={{ gridArea: 'Fifth' }}>
                        <Link to="/About" className="  ">
                            <h1 className="text-white font-bold mb-2">About me</h1>
                            <p className="text-white/70 mb-2">Learn more about my journey, skils, and experience.</p>
                            <p className=" text-orange-yellow ">View Details &gt; </p>
                        </Link>
                    </div>
                    <div className=" p-6 ml-5 mr-5 border border-white/10 rounded-md  bg-white/5" style={{ gridArea: 'Sixth' }}>
                        <Link to="/Blog" className="">
                            <h1 className="text-white font-bold mb-2">Coding Challenge</h1>
                            <p className="text-white/70 mb-2">Check out my solutions to varous programming problems</p>
                            <p className=" text-orange-yellow ">View Details  &gt; </p>
                        </Link>
                    </div>
                    <div className=" flex p-5 bg-white/5 mt-5 border-t border-white/10 " style={{gridArea: 'Seventh'}}>
                        <div className="grid  grid-cols-1 gap-4
                    md:grid-cols-3 
                    [grid-template-areas:'first''second''third']
                    md:[grid-template-areas:'first_second_third'] w-full
                    ">
                        <Link target="_blank" to="https://github.com/marouaneaddou" className="text-white  flex p-4 border border-white/10 bg-white/5 rounded-md " style={{ gridArea: 'first' }}>
                            <Github className="mr-2"/>
                            <span> Github <span className="ml-2"> &gt; </span> </span>
                        </Link>
                        <Link target="_blank" to="https://www.linkedin.com/in/marouane-addou-303997202/" className="text-white flex  p-4 border border-white/10 bg-white/5 rounded-md" style={{ gridArea: 'second' }}>
                            <Linkedin className="mr-2"/>
                            <span> Linkedin<span className="ml-2"> &gt; </span> </span>
                        </Link>
                        <Link to="/contact" className="text-white flex  p-4 border border-white/10 bg-white/5 rounded-md" style={{ gridArea: 'third' }}>
                            <Mail className="mr-2"/>
                            <span> Email <span className="ml-2"> &gt; </span>  </span>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage 