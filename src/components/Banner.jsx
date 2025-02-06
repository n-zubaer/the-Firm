import React from "react";
import Container from "./common components/Container.jsx";
import Button from "./common components/Button.jsx";
import BannerImage from "../assets/banner.png";

const Banner = () => {
  return (
    <div class="bg-[url(./src/assets/banner_bg.png)] w-full bg-cover bg-no-repeat bg-center relative ">
      <Container>
        <div className="flex items-center justify-between">
          <div className="w-[50%] pt-[176px] pb-[150px]">
            <h1 className="text-[48px] text-black-color font-black font-nunito leading-[133%] z-10">
              Get Bussiness <br /> Solutions with
              <span className="text-[52px] font-black font-nunito">
                {" "}
                TheFirm
              </span>
            </h1>
            <p className="text-[18px] text-black-color font-normal font-lora mt-[28px] leading-[176%] max-w-[70%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.
            </p>
            <div className="mt-[32px]">
              <Button
                btncontent="Get in Touch"
                btnDesign="bg-black-color text-[18px] font-bold font-nunito text-whtie-color py-[10px] px-[22px] rounded-[5px] cursor-pointer hover:bg-yellow-color hover:text-white"
              />
            </div>
          </div>
          <div className="absolute  right-49 bottom-[-27px] z-[-10] ">
            <picture>
              <img
                src={BannerImage}
                alt={BannerImage}
                className="h-full w-full object-cover rounded-3xl shadow-amber-50"
              />
            </picture>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
