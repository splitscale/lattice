import { Construction } from "lucide-react";

function ConstructionComponent() {
  return (
    <div className="w-full flex flex-col  items-center text-center">
      <Construction size={98} strokeWidth={1.25} />{" "}
      <h1 className="text-[3rem] text-[#FF6E00] font-bold"> 503 </h1>
      <strong className="text-[2rem]">Service Unavailable</strong>
      <p className="py-5">
        This section is under construction and will be available soon!
      </p>
      <p>Error Code: 503 | Service Unavailable</p>
    </div>
  );
}

export default ConstructionComponent;
