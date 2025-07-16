import { siteConfig } from "@/config";
import { useTheme } from "./theme-provider";

import { MoveRight } from "lucide-react";
import ConstructionComponent from "./construction-component";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <div className="p-4">
      {/* Banner */}
      <h1 className="text-[min(14.5vw,10rem)] md:text-[min(15.5vw,10rem)] lg:text-[min(15.5vw,14rem)] font-bold font-glancyr leading-none">
        INNOVATIVE SOLUTIONS
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
      {/* Why Choose Us? */}
      <section className="py-[10%]">
        <div className="mb-10">
          <h1 className="text-[min(10vw,2rem)] md:text-[min(15.5vw,3rem)] lg:text-[min(12.5vw,4rem)] font-bold">
            Why Choose Us?
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-7">
          {siteConfig.home.choose.map((item, index) => (
            <div
              key={index}
              className="w-full lg:h-[min(38vw,19rem)] lg:w-2/6 bg-card rounded-xl px-8 py-12"
            >
              <img
                src={theme === "dark" ? item.icon.dark : item.icon.light}
                alt={item.alt}
                className="mb-5 w-10 h-10"
              />
              <h1 className="text-[#FF6E00] text-[2rem] py-2">{item.title}</h1>
              <p className="py-2">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Our Services */}
      <section className="pb-[15%]">
        <div className="mb-10">
          <h1 className="text-[min(10vw,2rem)] md:text-[min(15.5vw,3rem)] lg:text-[min(12.5vw,4rem)] font-bold">
            Our Services
          </h1>
        </div>
        <div className="flex flex-col justify-between items-center gap-8">
          {[
            siteConfig.home.services.slice(0, 2),
            siteConfig.home.services.slice(2, 4),
          ].map((servicePair, index) => (
            <div key={index} className="w-full flex flex-col lg:flex-row gap-8">
              {servicePair.map((service) => (
                <div
                  key={service.id}
                  className={`md:${service.width} bg-card p-8 rounded-xl`}
                >
                  <div className="bg-[#FF6E00] w-max py-3 px-6 rounded-lg">
                    <strong>{service.id}</strong>
                  </div>
                  <h1 className="text-[min(10vw,2.5rem)] font-bold py-3">
                    {service.title}
                  </h1>
                  <p className="text-[1.2rem]">{service.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      {/* Our Projects */}
      <section className="pb-[15%]">
        <div className="mb-10">
          <h1 className="text-[min(10vw,2rem)] md:text-[min(15.5vw,3rem)] lg:text-[min(12.5vw,4rem)] font-bold">
            Projects
          </h1>
        </div>
        <div className="flex flex-col gap-[5rem] md:gap-[10rem]">
          {siteConfig.home.projects.map((item, index) => (
            <div key={index} className="w-full flex flex-col lg:flex-row gap-5">
              <div className="w-full lg:w-1/2">
                <img
                  src={item.imageSrc}
                  alt="project"
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col gap-5 lg:gap-0">
                <strong className="text-[clamp(2rem,8vw,3.3rem)] lg:text-[clamp(1.8rem,4vw,2.5rem)] xl:text-[clamp(2rem,4vw,3.3rem)] text-[#FF6E00] leading-tight">
                  {item.title}
                </strong>
                <p className="text-base xl:text-[1.3rem] flex-1 flex items-center px-0">
                  {item.description}
                </p>
                <div className="flex items-center gap-3">
                  <h2 className="text-base xl:text-[1.3rem] hover:text-[#FF6E00] transition-all cursor-pointer">
                    View Demo
                  </h2>
                  <MoveRight />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center items-center mt-15">
          <button className="bg-[#FF6E00] hover:bg-[#FF4F00] px-10 py-3 md:px-20 md:py-5 text-white md:text-[1.5rem] transition-colors duration-300 rounded-full cursor-pointer">
            All Projects
          </button>
        </div>
      </section>

      {/* Contact */}
      <section className="pb-[15%]">
        <div className="mb-10">
          <h1 className="text-[min(10vw,2rem)] md:text-[min(15.5vw,3rem)] lg:text-[min(12.5vw,4rem)] font-bold">
            Contact Us
          </h1>
        </div>
        <ConstructionComponent />
      </section>
    </div>
  );
};

export default Hero;
