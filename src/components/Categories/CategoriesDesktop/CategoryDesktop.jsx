import { StyledCategoryDesktop } from "./CategoryDesktop.styled";

import { FaEllipsisV } from "react-icons/fa";

const CategoryDesktop = ({ game }) => {
  return (
    <StyledCategoryDesktop>
      <div className="game-box">
        <div className="game-picture">
          <img src={game.image} alt="" />
        </div>
        <div className="game-name">
          <div className="name">{game.name}</div>
          <div className="other-icon">
            <FaEllipsisV />
          </div>
        </div>
        <div className="game-viewers">{game.viewer} viewers</div>
        <div className="tags">
          <div className="tag">English</div>
        </div>
      </div>
    </StyledCategoryDesktop>
  );
};

export default CategoryDesktop;
