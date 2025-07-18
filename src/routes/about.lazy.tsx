import { createLazyFileRoute } from "@tanstack/react-router";
import ConstructionComponent from "@/components/construction-component";
import jerome from "../assets/team/jerome.png";
import { siteConfig } from "@/config";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="p-4">
      {/* Banner */}
      <h1 className="text-[min(14.5vw,10rem)] md:text-[min(15.5vw,10rem)] lg:text-[min(15.5vw,14rem)] font-bold font-glancyr leading-none">
        CORPORATE OVERVIEW
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
      {/* History */}
      <section className="py-[10%]">
        <div className="mb-10">
          <h1 className="text-[min(10vw,2rem)] md:text-[min(15.5vw,3rem)] lg:text-[min(12.5vw,4rem)] font-bold">
            History
          </h1>
        </div>
        <ConstructionComponent />
      </section>

      {/* Core Values */}
      <section className="pb-[15%]">
        <div className="mb-10">
          <h1 className="text-[min(10vw,2rem)] md:text-[min(15.5vw,3rem)] lg:text-[min(12.5vw,4rem)] font-bold">
            Core Values
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          {siteConfig.about.coreValues.map((value) => (
            <div
              key={value.number}
              className="w-full lg:w-1/3 flex flex-col gap-2 md:gap-5"
            >
              <strong className="text-[3rem] text-[#FF6E00]">
                {value.number}
              </strong>
              <strong className="text-[min(15vw,3rem)] md:text-[min(10vw,2.5rem)] lg:text-[min(15vw,3.5rem)]">
                {value.title}
              </strong>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Members */}
      <section className="pb-[15%]">
        <div className="mb-10">
          <h1 className="text-[min(10vw,2rem)] md:text-[min(15.5vw,3rem)] lg:text-[min(12.5vw,4rem)] font-bold">
            Team Members
          </h1>
        </div>

        <div className="flex gap-5">
          <div className="w-full flex flex-col gap-5">
            <div className="bg-[#2A2A2A] hover:bg-[#FF6E00] flex justify-start items-center gap-[5%] msm:gap-[10%] px-[5%] py-5 rounded-xl transition-all duration-300">
              <img
                src={jerome}
                alt="jerome"
                className="w-20 msm:w-30 md:w-35 lg:w-45 xl:w-50"
              />

              <div className="flex flex-col gap-2">
                <strong className="text-[min(15.5vw,.8rem)] msm:text-[min(10vw,1rem)] md:text-[min(10vw,2rem)] lg:md:text-[min(10vw,3rem)]">
                  Jerome Cabugwason
                </strong>
                <h1 className="text-[min(15.5vw,.7rem)] msm:text-[min(10vw,1rem)] md:text-[min(10vw,1.3rem)] lg:text-[1.5rem]">
                  CEO & Founder
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
