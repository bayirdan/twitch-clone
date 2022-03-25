import { useEffect } from "react";
import { mobileSlide } from "../../../helper/helper";
import { useSelector } from "react-redux";

import { StyledSmallCategories } from "./SmallCategory.styled";

import SmallCategory from "./SmallCategory";

const SmallCategories = () => {
  const { games } = useSelector((state) => state.category);
  useEffect(() => {
    const categorySlide = document.querySelector(".small-categories-box");
    mobileSlide(categorySlide);
  });
  return (
    <StyledSmallCategories>
      <div className="small-categories-box">
        <div className="small-categories">
          {games.map((game, index) => {
            return <SmallCategory game={game} key={index} />;
          })}
        </div>
      </div>
    </StyledSmallCategories>
  );
};

export default SmallCategories;
