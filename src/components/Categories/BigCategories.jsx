import { useSelector } from "react-redux";

import BigCategory from "./BigCategory";

const BigCategories = () => {
  const { games } = useSelector((state) => state.category);
  const browseCategory = [...games, ...games];

  return (
    <>
      <div className="big-categories-box">
        {browseCategory.map((game, index) => {
          return <BigCategory game={game} key={index} />;
        })}
      </div>
    </>
  );
};

export default BigCategories;
