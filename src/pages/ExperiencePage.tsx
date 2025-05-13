import { Building2, Calendar } from "lucide-react"


const technologies = ["Node.js", "TypeScript", "PostgreSQL"]
const ExperiencePage = () => {
    return (
        <>
            <div className="container  mx-auto mt-4">
                <div className=" max-w-4xl bg-white bg-opacity-10 backdrop-blur-[10px] mx-auto border rounded-md border-white/10 grid ">
                        <div className="m-4 grid 
                        gap-4 p-5">

                            <h1 className="text-3xl font-bold mb-8 flex items-center gap-3 ">
                                <Building2 className="" />
                                Professional Experience
                            </h1>

                            <div className="space-y-8">
                                <div  className="bg-white/5 rounded-xl p-6 border border-white/10 w-full">
                                    <h3 className="text-xl font-semibold">Backend Developer Intern</h3>
                                    <div className="text-white/70 space-y-2 mt-2 mb-4">
                                        <p className="text-lg">Escodeve</p>
                                        <div className="flex items-center gap-4 text-sm">
                                          <span className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            Present
                                          </span>
                                        </div>
                                    </div>
                                    <p className="text-white/80 mb-6">Developed web applications using Node.js (Hono framework) and TypeScript, designed PostgreSQL 
                                                    databases, and created API documentation with OpenAPI.</p>
                                    <div className="mt-6">
                                    <h4 className="font-medium text-lg mb-3">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                      {technologies.map((tech, i) => (
                                        <span
                                          key={i}
                                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm"
                                        >
                                          {tech}
                                        </span>
                                      ))}
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default ExperiencePage
