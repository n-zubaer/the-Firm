import React from "react";
import Button from "./Button.jsx";

const BlogCard = ({ image, heading, info, profile, profileName, time }) => {
  return (
    <div className="card hover:shadow-md shadow-[#ede1af]">
      <picture>
        <img src={image} alt={image} />
      </picture>
      <div className="mt-[28px] pl-[21px] border-b-[#ddd8d8] border-b">
        <h3 className="text-[24px] text-black-color font-bold font-nunito">
          {heading}
        </h3>
        <p className="text-[17px] text-black-color font-normal font-lora leading-[176%] mt-[9px] mb-[27px]">
          {info}
        </p>
      </div>

      <div className="flex items-center justify-between mt-[18px]">
        <div className="flex items-center">
          <img src={profile} alt={profile} />
          <h4 className="text-[14px] text-black-color font-normal font-nunito ml-[7px]">
            {profileName}
          </h4>
        </div>

        <div>
          <p className="text-[10px] font-normal font-nunito text-black-color pr-[21px]">
            {time}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center mt-[32px]">
        <Button
          btncontent="Read More"
          btnDesign="bg-black-color text-[18px] font-bold font-nunito text-whtie-color py-[10px] px-[22px] rounded-[5px] cursor-pointer hover:bg-yellow-color hover:text-white"
        />
      </div>
    </div>
  );
};

export default BlogCard;
