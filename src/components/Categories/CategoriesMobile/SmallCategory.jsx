import { StyledSmallCategory } from "./SmallCategory.styled";

import { FaCircle } from "react-icons/fa";

const SmallCategory = ({ game }) => {
  const titleTrim = (title) => {
    if (title.length < 11) return title;
    return title.slice(0, 10) + "...";
  };
  return (
    <StyledSmallCategory>
      <div className="game-box">
        <div className="game-img">
          <img src={game.image} />
        </div>
        <div className="game-name">{titleTrim(game.name)}</div>
        <div className="game-viewer">
          <FaCircle className="viewer-icon" /> {game.viewer}
        </div>
      </div>
    </StyledSmallCategory>
  );
};

export default SmallCategory;
