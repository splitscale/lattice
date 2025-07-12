import React from "react";
import team from "@/assets/icons/users.png";
import verified from "@/assets/icons/verified.png";

const Home: React.FC = () => {
  const carouselItems = [
    { text: "Lorem Ipsum", color: "" },
    { text: "●", color: "" },
    { text: "Lorem Ipsum", color: "text-[#FF6E00]" },
    { text: "●", color: "" },
    { text: "Lorem Ipsum", color: "" },
    { text: "●", color: "" },
    { text: "Lorem Ipsum", color: "text-[#FF6E00]" },
    { text: "●", color: "" },
  ];

  return (
    <div className="p-4">
      {/* Banner */}
      <h1 className="text-[13rem] font-bold font-glancyr leading-none">
        INNOVATIVE SOLUTIONS
      </h1>

      {/* Carousel */}
      <div className="overflow-hidden">
        <div className="flex animate-infinite-scroll ">
          {[...carouselItems, ...carouselItems, ...carouselItems].map(
            (item, index) => (
              <div
                key={index}
                className={`text-[2rem] flex-none px-2 ${item.color} ${
                  item.text !== "●" ? "font-glancyr" : ""
                }`}
              >
                {item.text}
              </div>
            )
          )}
        </div>
      </div>

      {/* Why Choose Us? */}
      <section className="py-[5%]">
        <div className="mb-10">
          <h1 className="text-[4rem] font-bold"> Why Choose Us? </h1>
        </div>
        <div className="flex justify-between items-center gap-7">
          <div className="w-2/6 bg-black rounded-xl px-8 py-12">
            <img src={team} alt="team" className="mb-5" />
            <h1 className="text-[#FF6E00] text-[2rem]">Expert Team</h1>
            <p className="py-2">
              Intuitive iOS and Android apps designed for seamless functionality
              and brand alignment.
            </p>
          </div>

          <div className="w-2/6 bg-black rounded-xl px-8 py-12">
            <img src={verified} alt="verified" className="mb-5" />
            <h1 className="text-[#FF6E00] text-[2rem]">Quality Assured</h1>
            <p className="py-2">
              Intuitive iOS and Android apps designed for seamless functionality
              and brand alignment.
            </p>
          </div>

          <div className="w-2/6 bg-black rounded-xl px-8 py-12">
            <img src={team} alt="team" className="mb-5" />
            <h1 className="text-[#FF6E00] text-[2rem]">Verified Results</h1>
            <p className="py-2">
              Intuitive iOS and Android apps designed for seamless functionality
              and brand alignment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
