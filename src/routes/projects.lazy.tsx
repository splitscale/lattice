import ConstructionComponent from "@/components/construction-component";
import { siteConfig } from "@/config";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/projects")({
  component: Projects,
});

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
      <section className="py-[10%]">
        <div className="mb-10">
          <h1 className="text-[min(10vw,2rem)] md:text-[min(15.5vw,3rem)] lg:text-[min(12.5vw,4rem)] font-bold">
            Projects Overview
          </h1>
        </div>
        <ConstructionComponent />
      </section>
    </div>
  );
}

export default Projects;
