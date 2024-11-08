import React, { memo } from "react";
import Company from "../../component/company/Company";
import Carousel from "../../component/corousel/Carousel";

const About = () => {
  return (
    <>
      <Company />
      <Carousel />
    </>
  );
};

export default memo(About);
