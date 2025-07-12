import React from "react";
import { siteConfig } from "@/config";
import { useTheme } from "../theme-provider";

const Home: React.FC = () => {
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
      <section className="py-[15%]">
        <div className="mb-10">
          <h1 className="text-[min(10vw,2rem)]  md:text-[min(15.5vw,3rem)] lg:text-[min(12.5vw,4rem)] font-bold">
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
    </div>
  );
};

export default Home;
