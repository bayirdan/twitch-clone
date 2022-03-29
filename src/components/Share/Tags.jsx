import { StyledTags } from "./Tags.styled";

const Tags = () => {
  return (
    <StyledTags>
      <div className="tags-box">
        <ul>
          <li>
            <div className="item">
              <span>Games</span>
              <div className="icon">
                <img
                  src="https://static.twitchcdn.net/assets/gaming-e9019587744b56b11b43.svg"
                  alt=""
                />
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <span>IRL</span>
              <div className="icon">
                <img
                  src="https://static.twitchcdn.net/assets/irl-baa32e8e64a6974282c0.svg"
                  alt=""
                />
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <span>Music</span>
              <div className="icon">
                <img
                  src="https://static.twitchcdn.net/assets/music-5fb4595a30d04d991e24.svg"
                  alt=""
                />
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <span>Esports</span>
              <div className="icon">
                <img
                  src="https://static.twitchcdn.net/assets/esports-7a078acca57531d11e29.svg"
                  alt=""
                />
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <span>Creative</span>
              <div className="icon">
                <img
                  src="https://static.twitchcdn.net/assets/creative-6423fb5fbcf31fadee38.svg"
                  alt=""
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </StyledTags>
  );
};

export default Tags;
