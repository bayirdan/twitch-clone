import ChannelsDesktop from "../../components/Channels/ChannelsDesktop/ChannelsDesktop";

const PageVideos = () => {
  return (
    <>
      <div className="overview-page">
        <ChannelsDesktop channelTitle="Latest videos" video={true} />
        <ChannelsDesktop video={true} />
        <ChannelsDesktop video={true} />
        <ChannelsDesktop video={true} />
      </div>
    </>
  );
};

export default PageVideos;
