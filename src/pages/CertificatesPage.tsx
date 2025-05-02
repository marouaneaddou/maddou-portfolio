// import React from 'react';
// import { Award, Calendar, ExternalLink } from 'lucide-react';

// function CertificatesPage() {
//   const certificates = [
//     {
//       id: 1,
//       title: 'React Development',
//       issuer: 'freeCodeCamp',
//       date: 'March 2024',
//       credentialId: 'CERT-REACT-2024',
//       description: 'Advanced React development including hooks, context, and modern best practices.',
//       skills: ['React', 'Redux', 'React Router', 'Hooks', 'Context API'],
//       image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80',
//       verifyLink: 'https://www.freecodecamp.org/certification/your-username/responsive-web-design'
//     },
//     {
//       id: 2,
//       title: 'Full Stack JavaScript',
//       issuer: 'The Odin Project',
//       date: 'January 2024',
//       credentialId: 'CERT-FSJS-2024',
//       description: 'Comprehensive full-stack JavaScript development with Node.js and Express.',
//       skills: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
//       image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
//       verifyLink: 'https://www.theodinproject.com/paths/full-stack-javascript'
//     },
//     {
//       id: 3,
//       title: 'Web Development Fundamentals',
//       issuer: 'Coursera',
//       date: 'December 2023',
//       credentialId: 'CERT-WEB-2023',
//       description: 'Core web development concepts including HTML, CSS, and JavaScript.',
//       skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Web Accessibility'],
//       image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=80',
//       verifyLink: 'https://www.coursera.org/account/accomplishments/verify/your-credential'
//     }
//   ];

//   return (
//     <div className="max-w-4xl mx-auto p-4 md:p-8">
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold mb-4">Certificates</h1>
//         <p className="text-white/70">
//           Professional certifications and course completions
//         </p>
//       </div>

//       <div className="grid gap-6">
//         {certificates.map((certificate) => (
//           <div key={certificate.id} className="bg-black/50 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/10">
//             <div className="md:flex">
//               <div className="md:w-1/3">
//                 <img 
//                   src={certificate.image}
//                   alt={certificate.title}
//                   className="h-48 md:h-full w-full object-cover"
//                 />
//               </div>
//               <div className="p-6 md:w-2/3">
//                 <div className="flex items-center gap-3 mb-2">
//                   <Award className="w-6 h-6 text-white" />
//                   <h2 className="text-xl font-semibold">{certificate.title}</h2>
//                 </div>
                
//                 <div className="flex items-center gap-4 text-sm text-white/70 mb-4">
//                   <span className="bg-white/5 border border-white/10 px-2 py-1 rounded">
//                     {certificate.issuer}
//                   </span>
//                   <div className="flex items-center gap-1">
//                     <Calendar className="w-4 h-4" />
//                     {certificate.date}
//                   </div>
//                 </div>

//                 <p className="text-white/80 mb-4">{certificate.description}</p>

//                 <div className="mb-4">
//                   <div className="text-sm text-white/70 mb-2">Skills Covered</div>
//                   <div className="flex flex-wrap gap-2">
//                     {certificate.skills.map((skill, index) => (
//                       <span 
//                         key={index} 
//                         className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-sm"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <div className="text-sm">
//                     <span className="text-white/70">Credential ID: </span>
//                     <span className="font-mono">{certificate.credentialId}</span>
//                   </div>
//                   <a 
//                     href={certificate.verifyLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
//                   >
//                     Verify <ExternalLink className="w-4 h-4" />
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

// export default CertificatesPage;