import Channel from "./Channel";
import { useSelector } from "react-redux";

const Channels = () => {
  const { users } = useSelector((state) => state.user);
  return (
    <>
      {users.map((user, index) => (
        <Channel user={user} key={index} imageId={index} />
      ))}
    </>
  );
};

export default Channels;
