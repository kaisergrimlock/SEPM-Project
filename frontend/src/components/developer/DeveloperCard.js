import React from "react";

export const DeveloperCard = ({ image, name, education, role }) => {
  return (
    <div className={`w-1/4 h-auto rounded-md flex justify-center z-10`} id='dev-card'>
      <img
        src={image}
        alt={name}
        className="object-contain h-[380px] rounded-md"
      />

      <div className={`bg-black/50 absolute -bottom-50 break-words h-[381px] inline-flex items-end rounded-md opacity-0`} id="dev-info">
        <div className="bg-navy leading-10 text-white px-2 h-fit rounded-b-md inline-block">
          <h1 className="text-center font-semibold">{name}</h1>
          <div className="px-4 py-1">
            <ul className="list-disc text-[14px]">
              <li>{education}</li>
              <li>Role: {role}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
