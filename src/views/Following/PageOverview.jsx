import ChannelsDesktop from "../../components/Channels/ChannelsDesktop/ChannelsDesktop";
import CategoriesDesktop from "../../components/Categories/CategoriesDesktop/CategoriesDekstop";
import ShowMore from "../../components/Share/ShowMore";

const PageOverview = () => {
  return (
    <div className="overview-box">
      <ChannelsDesktop channelTitle="Live channels" />
      <ShowMore title="Show more" />
      <ChannelsDesktop channelTitle="Recommended channels" />
      <ShowMore title="Show more" />
      <ChannelsDesktop channelTitle="Latest videos" video={true} />
      <ShowMore title="Show more" />
      <CategoriesDesktop title="Live categories" />
      <ShowMore />
    </div>
  );
};

export default PageOverview;
