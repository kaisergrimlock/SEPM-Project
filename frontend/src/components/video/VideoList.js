import React from "react";
import { Video } from "./Video";

export const VideoList = ({userVideo, peers, className}) => {
  return (
    <div className={`videos flex ${className}`}>
      <video className="groupVideo" muted ref={userVideo} autoPlay playsInline />
      {peers.map((peer) => {
        return (
          <Video key={peer.peerID} peer={peer.peer} peerID={peer.peerID} />
        );
      })}
    </div>
  );
};
