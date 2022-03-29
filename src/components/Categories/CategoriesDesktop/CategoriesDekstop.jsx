import { StyledCategoriesDesktop } from "./CategoryDesktop.styled";

import { useSelector } from "react-redux";

import CategoryDesktop from "./CategoryDesktop";

const CategoriesDesktop = () => {
  const { games } = useSelector((state) => state.category);

  return (
    <StyledCategoriesDesktop>
      <div className="categories-box">
        <h1>
          <span>Categories</span> we think you’ll like
        </h1>
        <div className="list">
          {games.map((game, index) => {
            return <CategoryDesktop game={game} key={index} />;
          })}
        </div>
      </div>
    </StyledCategoriesDesktop>
  );
};

export default CategoriesDesktop;
