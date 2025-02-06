import React from "react";
import Container from "../components/common components/Container.jsx";
import BusinessImage from "../assets/PerfectLeft.png";
import Heading from "./common components/Heading.jsx";
import Button from "../components/common components/Button.jsx";

const Business = () => {
  return (
    <div className="py-[100px]">
      <Container>
        <div className="flex items-center justify-center gap-x-[160px]">
          <div>
            <img src={BusinessImage} alt={BusinessImage} />
          </div>

          <div className="max-w-[445px]">
            <Heading
              className={
                "inline-block text-[44px] text-black-color font-nunito font-black leading-[133%] "
              }
              titleContent={"Perfect Solution for Your"}
              lastContent={"Bussiness"}
            />
            <p className="text-[18px] font-normal font-lora text-black-color leading-[176%] mt-[18px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
            <Button
              btncontent="Read More"
              btnDesign="bg-black-color text-[18px] font-bold font-nunito text-whtie-color py-[12px] px-[30px] rounded-[5px] cursor-pointer hover:bg-yellow-color mt-[40px] transition delay-150 duration-30 ease-in-out "
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Business;
