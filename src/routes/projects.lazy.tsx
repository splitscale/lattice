import { siteConfig } from "@/config";
import { createLazyFileRoute } from "@tanstack/react-router";
import {
  FolderCode,
  PaintbrushVertical,
  Telescope,
  Workflow,
} from "lucide-react";

export const Route = createLazyFileRoute("/projects")({
  component: Projects,
});

const development = [
  {
    title: "Discovery",
    description: "Understand, Research, Plan",
    icon: <Telescope size={48} color="#ffffff" className="w-5 lg:w-8" />,
  },
  {
    title: "Design",
    description: "Create, Prototype, Iterate",
    icon: (
      <PaintbrushVertical size={48} color="#ffffff" className="w-5 lg:w-8" />
    ),
  },
  {
    title: "Develop",
    description: "Code, Test, Optimize",
    icon: <FolderCode size={48} color="#ffffff" className="w-5 lg:w-8" />,
  },
  {
    title: "Delivery",
    description: "Deploy, Launch, Support",
    icon: <Workflow size={48} color="#ffffff" className="w-5 lg:w-8" />,
  },
];

function Projects() {
  return (
    <div className="p-4">
      {/* Banner */}
      <h1 className="text-[min(14.5vw,10rem)] md:text-[min(15.5vw,10rem)] lg:text-[min(15.5vw,14rem)] font-bold font-glancyr leading-none">
        SIGNATURE OFFERINGS
      </h1>
      {/* Carousel */}
      <div className="overflow-hidden">
        <div className="flex animate-infinite-scroll ">
          {[
            ...siteConfig.home.carousel,
            ...siteConfig.home.carousel,
            ...siteConfig.home.carousel,
          ].map((item, index) => (
            <div
              key={index}
              className={`lg:text-[2rem] flex-none px-2 ${item.color} ${
                item.text !== "●" ? "font-glancyr" : ""
              }`}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
      {/* Projects Overview */}
      <section className="py-[10%]">
        <div className="mb-10">
          <h1 className="text-[min(10vw,2rem)] md:text-[min(15.5vw,3rem)] lg:text-[min(12.5vw,4rem)] font-bold">
            Projects
          </h1>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-full flex flex-col gap-5 md:flex-row md:px-5 justify-between items-center">
            {siteConfig.home.projects.map((proj, key) => (
              <div
                key={key}
                className="relative md:w-[48%] group overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  src={proj.imageSrc}
                  alt={proj.title}
                  className="w-full h-auto transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-40"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                    <h1 className="text-[3rem] font-bold mb-2">{proj.title}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>{" "}
      </section>

      {/* Development Process */}
      <section className="pb-[15%]">
        <div className="mb-10">
          <h1 className="text-[min(10vw,2rem)] md:text-[min(15.5vw,3rem)] lg:text-[min(12.5vw,4rem)] font-bold">
            Development Process
          </h1>
        </div>

        <div className="flex gap-5">
          <div className="w-full flex flex-col gap-5">
            {development.map((item, index) => (
              <div
                key={index}
                className="bg-[#2A2A2A] hover:bg-[#FF6E00] flex justify-start items-center gap-[5%] msm:gap-[10%] px-[5%] py-5 rounded-xl transition-all duration-300"
              >
                <div className="w-full flex justify-between items-center ">
                  <strong className="text-[min(15.5vw,1rem)] msm:text-[min(10vw,1.3rem)] md:text-[min(10vw,2rem)] lg:md:text-[min(10vw,4rem)]">
                    {item.title}
                  </strong>
                  <h1 className=" msm:w-max text-[min(15.5vw,.5rem)] msm:text-[min(10vw,.6rem)] md:text-[min(10vw,1rem)] ">
                    {item.description}
                  </h1>
                  {item.icon}
                  <Telescope size={48} color="#ffffff" className="w-5 lg:w-8" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
