import React from "react";
import Container from "./common components/Container";
import Heading from "./common components/Heading";
import Button2 from "./common components/Button2";
import BrandImage from "../assets/brand.png";
import Brandlogo from "../assets/brandLogo.png";

const Reason = () => {
  return (
    <div className="bg-[#F2F2F2] py-[97px] ">
      <Container>
        <div className="flex flex-col justify-center items-center">
          <Heading
            className={
              "inline-block text-[44px] text-black-color font-nunito font-black leading-[133%] "
            }
            titleContent={"Reason to Choose "}
            lastContent={"Us"}
          />
          <p className="w-[848px] text-[18px] text-black-color font-normal font-lora leading-[176%] text-center mt-[28px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>

          <div className="flex justify-between items-center gap-x-[70px] mt-[50px]">
            <Button2
              design={
                "customBtn px-[14px] py-[12px] text-ash-color rounded-[5px] text-[18px] font-nunito font-bold bg-whtie-color border-none"
              }
              btnContent={"Market Research"}
            />

            <Button2
              design={
                "customBtn px-[37px] py-[12px] text-ash-color rounded-[5px] text-[18px] font-nunito font-bold bg-whtie-color"
              }
              btnContent={"Branding"}
            />

            <Button2
              design={
                "customBtn px-[33px] py-[12px] text-ash-color rounded-[5px] text-[18px] font-nunito font-bold bg-whtie-color"
              }
              btnContent={"Reporting"}
            />

            <Button2
              design={
                "customBtn px-[21px] py-[12px] text-ash-color rounded-[5px] text-[18px] font-nunito font-bold bg-whtie-color"
              }
              btnContent={"Data Analysis"}
            />
          </div>
        </div>

        <div className="bg-whtie-color rounded-[30px] mt-[60px] flex items-center justify-center gap-x-[60px]   ">
          <div className="py-[67px] pl-[41px]  w-[50%]">
            <picture>
              <img src={BrandImage} alt={BrandImage} />
            </picture>
          </div>

          <div className="flex w-[50%] pr-[45px]">
            <picture>
              <img src={Brandlogo} alt={Brandlogo} />
            </picture>
            <div>
              <Heading
                className={
                  "inline-block text-[40px] text-black-color font-nunito font-bold mb-[17px]  leading-[133%]"
                }
                lastContent={"Branding"}
              />
              <p className="text-[18px] font-lora font-normal text-black-color leading-[176%] max-w-[645px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Reason;
