import React from "react";
import Container from "./common components/Container.jsx";
import Heading from "./common components/Heading.jsx";
import Button from "./common components/Button.jsx";
import ResearchImage from "../assets/Reasearce.png";

const Research = () => {
  return (
    <div className="py-[100px]">
      <Container>
        <div className="flex flex-col justify-center items-center">
          <Heading
            className={
              "inline-block text-[44px] text-black-color font-nunito font-black leading-[133%]"
            }
            titleContent={"Our Research & Case"}
            lastContent={"Studies"}
          />
          <p className="text=[18] text-black-color font-normal font-lora leading-[176%] w-[762px] text-center mt-[28px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
        </div>

        <div className="flex justify-center items-center gap-x-[109px] mt-[60px]">
          <div className="w-[44%]">
            <Heading
              className={"text-[30px] text-black-color font-nunito font-bold"}
              titleContent={"Lorem Ipsum is simply"}
            />
            <p className="text-[18px] text-black-color font-normal font-lora leading-[176%] mb-[21px] mt-[13px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took.
            </p>
            <Button
              btnDesign={
                "bg-black-color text-[18px] font-bold font-nunito text-whtie-color py-[10px] px-[22px] rounded-[5px] cursor-pointer hover:bg-yellow-color hover:text-white"
              }
              btncontent={"Read More"}
            />
          </div>
          <div className="">
            <picture>
              <img
                src={ResearchImage}
                alt={ResearchImage}
                className="border-white border-5 rounded-3xl"
              />
            </picture>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Research;
