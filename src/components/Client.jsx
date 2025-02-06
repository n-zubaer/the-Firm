import React from "react";
import Container from "./common components/Container";
import Heading from "./common components/Heading";
import ulmark from "../assets/question.png";
import clienImage from "../assets/clientBanner.png";

const Client = () => {
  const ulItems = [
    {
      id: 1,
      problem: "Loren rasion gravida auem is bibenua tase",
    },
    {
      id: 2,
      problem: "Lorem Ipsum is simply dummy text of the.",
    },
    {
      id: 3,
      problem: "Printing and typesetting industry. Lorem Ipsum",
    },
    {
      id: 4,
      problem: "When an unknown printer took a galley of type and scrambled it",
    },
  ];

  return (
    <div className="mt-[100px] bg-[#FBFBFB]">
      <Container>
        <div className="pt-[89px] pb-[98px] flex items-center gap-[114px] ">
          <div className="w-[71%]">
            <Heading
              className={
                "inline-block text-[44px] text-black-color font-nunito font-black leading-[133%]"
              }
              titleContent={"Frustration of"}
              lastContent={"Clients"}
            />
            <p className=" text-[18px] font-lora font-normal leading-[176%] mt-[22px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>

            <ul className="text-[18px] text-black-color font-lora font-normal  flex flex-col gap-[10px] mt-[26px] pl-[33px] leading-[176%]">
              {ulItems.map((item) => {
                return (
                  <div className="flex items-center gap-[10px] ">
                    <img src={ulmark} alt={ulmark} className="mr-[2px]" />
                    <li key={item.id}>{item.problem}</li>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="relative">
            <picture>
              <img src={clienImage} alt={{ clienImage }} />
            </picture>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Client;
