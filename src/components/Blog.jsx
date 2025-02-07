import React from "react";
import Container from "./common components/Container.jsx";
import Heading from "./common components/Heading.jsx";
import BlogCard from "./common components/BlogCard.jsx";
import BlogImage from "../assets/Blogs1.png";
import ProfileImage from "../assets/profile1.png";
import BlogImage2 from "../assets/Blogs2.png";
import BlogImage3 from "../assets/Blogs3.png";
import ProfileImage2 from "../assets/profile2.png";
import ProfileImage3 from "../assets/profile3.png";

const Blog = () => {
  return (
    <div className="bg-[#F2F2F2] py-[83px]">
      <Container>
        <div className="flex justify-center items-center ">
          <Heading
            className={
              "inline-block text-[44px] text-black-color font-nunito font-black leading-[133%]"
            }
            titleContent={"Our"}
            lastContent={"Blogs"}
          />
        </div>

        <div className="flex items-center justify-between mt-[72px]">
          <BlogCard
            image={BlogImage}
            heading={"Lorem Ipsum is "}
            info={
              "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. "
            }
            profile={ProfileImage}
            profileName={"Alex Liones"}
            time={"28,Aug 2020, 09:48:00"}
          />

          <BlogCard
            image={BlogImage2}
            heading={"Lorem Ipsum is "}
            info={
              "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. "
            }
            profile={ProfileImage2}
            profileName={"Alex Liones"}
            time={"28,Aug 2020, 09:48:00"}
          />

          <BlogCard
            image={BlogImage3}
            heading={"Lorem Ipsum is "}
            info={
              "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. "
            }
            profile={ProfileImage3}
            profileName={"Alex Liones"}
            time={"28,Aug 2020, 09:48:00"}
          />
        </div>
      </Container>
    </div>
  );
};

export default Blog;
