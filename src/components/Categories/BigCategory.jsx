import { StyledBigCategory } from "./BigCategory.styled";

const BigCategory = ({ game }) => {
  return (
    <StyledBigCategory>
      <div className="big-category-box">
        <div className="game-image">
          <img src={game.image} alt="" />
        </div>
        <div className="game-info">
          <div className="name">{game.name}</div>
          <div className="viewers">{game.viewer} Viewers</div>
          <div className="tags">
            <ul>
              <li>Shooter</li>
              <li>Action</li>
              <li>Strategy</li>
            </ul>
          </div>
        </div>
      </div>
    </StyledBigCategory>
  );
};

export default BigCategory;
