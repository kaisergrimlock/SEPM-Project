import React, { useEffect, useRef } from 'react'

// Streaming Video of the user
export const Video = ({peer, peerID}) => {
    const ref = useRef();

    useEffect(() => {
      peer.on("stream", (stream) => {
        ref.current.srcObject = stream;
      });

      console.log("PeerID", peerID);
      console.log("Peer", peer);
    }, [peerID, peer]);

    return <video className="groupVideo" playsInline autoPlay ref={ref} />;
  };
