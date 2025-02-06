import React from "react";
import Logo from "../assets/header.png";
import Container from "./common components/Container.jsx";
import Button from "../components/common components/Button.jsx";

const Header = () => {
  const menuitem = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "Solutions",
    },
    {
      id: 3,
      name: "Cases",
    },
    {
      id: 4,
      name: "About Us",
    },
    {
      id: 5,
      name: "Blog",
    },
    {
      id: 6,
      name: "Contact Us",
    },
  ];
  return (
    <Container>
      <div className="mt-[24px] flex items-center justify-between">
        <picture>
          <img src={Logo} alt={Logo} className="cursor-pointer" />
        </picture>
        <div className="flex items-center ">
          <div className={"mr-[50px]"}>
            <ul className="flex items-center gap-x-[48px]">
              {menuitem.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href=""
                      className="menu font-nunito text-[18px] text-black-color font-bold"
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <Button
            btncontent="Get in Touch"
            btnDesign="bg-black-color text-[18px] font-bold font-nunito text-whtie-color py-[10px] px-[22px] rounded-[5px] cursor-pointer hover:bg-yellow-color "
          />
        </div>
      </div>
    </Container>
  );
};

export default Header;
