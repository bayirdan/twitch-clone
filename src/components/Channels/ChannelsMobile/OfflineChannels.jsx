import OfflineChannel from "./OfflineChannel";
import { useSelector } from "react-redux";

const OfflineChannels = () => {
  const { users } = useSelector((state) => state.user);
  return (
    <>
      {users.map((user, index) => {
        if (index < 3) {
          return <OfflineChannel key={index} user={user} />;
        }
      })}
    </>
  );
};

export default OfflineChannels;
