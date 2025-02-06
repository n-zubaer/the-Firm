import React from "react";
import Container from "./common components/Container";
import Heading from "./common components/Heading";
import Slider from "react-slick";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoLogoWindows,
} from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaEdge, FaFirefox, FaOpera, FaSafari } from "react-icons/fa";
import { FaBrave } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";

const Partner = () => {
  const allIcons = [
    {
      id: 1,
      icon: <IoLogoWindows />,
    },
    {
      id: 2,
      icon: <FcGoogle />,
    },
    {
      id: 3,
      icon: <FaFirefox />,
    },
    {
      id: 4,
      icon: <FaSafari />,
    },

    {
      id: 5,
      icon: <FaBrave />,
    },

    {
      id: 6,
      icon: <VscVscode />,
    },
    {
      id: 7,
      icon: <FaEdge />,
    },
    {
      id: 7,
      icon: <FaOpera />,
    },
  ];
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          position: "absolute",
          height: "50px",
          width: "50px",
          left: "-2%",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: "3",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <div className="flex justify-center items-center h-full animate-pulse rounded-full text-white bg-black-color">
          <IoIosArrowBack />
        </div>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          position: "absolute",
          height: "50px",
          width: "50px",
          right: "-2%",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: "3",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <div className="flex justify-center items-center h-full animate-pulse rounded-full text-white bg-black-color">
          <IoIosArrowForward />
        </div>
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Container>
      <div className="py-[100px]">
        <div className="flex items-center justify-center">
          <Heading
            className={
              "inline-block text-[44px] text-black-color font-nunito font-black leading-[133%]"
            }
            titleContent={"Our"}
            lastContent={"Partner"}
          />
        </div>
        <div className="slider-container mt-[50px]">
          <Slider {...settings}>
            {allIcons?.map((item) => (
              <div key={item.id} className="px-[34px] cursor-pointer ">
                <span className=" w-[240px] h-[120px] bg-gray-color flex justify-center items-center text-[64px] rounded-md">
                  {item.icon}
                </span>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Container>
  );
};

export default Partner;
