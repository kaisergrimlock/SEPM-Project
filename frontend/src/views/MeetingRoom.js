import { Room } from "../components/room/Room";
import { useParams } from "react-router-dom";

export const MeetingRoom = () => {
  const { meetingRoomId } = useParams();

  return (
    <>
      <Room meetingRoomId={meetingRoomId} />
    </>
  );
};
