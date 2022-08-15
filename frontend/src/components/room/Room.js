import React, { useRef, useEffect, useState } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";
// import { RoomFooter } from "../footer/RoomFooter";
import { RoomHeader } from "../header/RoomHeader";
// import { NavButtons } from "./NavButtons";
import { RoomContent } from "./RoomContent";

export const Room = (props) => {
  const [images, setImages] = useState([]);

  let [currentImage, setCurrentImage] = useState("");

  const [colorPicked, setColorPicked] = useState("#6DA8D6");
  const handleClickedImage = (id) => {
    setCurrentImage(images[id]);
    // console.log(currentImage)
  };

  let handleImages = (e) => {
    const filePreview = URL.createObjectURL(e.target.files[0]);
    setCurrentImage(filePreview);
    setImages((prevImage) => [...prevImage, filePreview]);
  };

  const onChangeColorPicked = (e, cursorImage) => {
    setColorPicked(e.target.value);
    document.body.style.cursor = `url(${currentImage})`;
  };

  // socket
  // Streaming Video of the user
  const Video = (props) => {
    const ref = useRef();

    useEffect(() => {
      props.peer.on("stream", (stream) => {
        ref.current.srcObject = stream;
      });
    }, []);

    return <video class="groupVideo" playsInline autoPlay ref={ref} />;
  };

  // setting the constraints of video box
  // const videoConstraints = {
  //   height: window.innerHeight / 2,
  //   width: window.innerWidth / 2,
  // };

  // variables for different functionalities of video call
  const [peers, setPeers] = useState([]);
  const socketRef = useRef();
  const userVideo = useRef();
  const peersRef = useRef([]);
  const userStream = useRef();
  const meetingRoomId = props.meetingRoomId;

  useEffect(() => {
    socketRef.current = io.connect("/");

    // asking for audio and video access
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      // streaming the audio and video
      userVideo.current.srcObject = stream;
      userStream.current = stream;

      socketRef.current.emit("join room group", meetingRoomId);

      // getting all user for the new user joining in
      socketRef.current.on("all users", (users) => {
        const peers = [];

        // adding the new user to the group
        users.forEach((userID) => {
          const peer = createPeer(userID, socketRef.current.id, stream);
          peersRef.current.push({
            peerID: userID,
            peer,
          });
          peers.push({
            peerID: userID,
            peer,
          });
        });
        setPeers(peers);
      });

      // sending signal to existing users after new user joined
      socketRef.current.on("user joined", (payload) => {
        const peer = addPeer(payload.signal, payload.callerID, stream);
        peersRef.current.push({
          peerID: payload.callerID,
          peer,
        });

        const peerObj = {
          peer,
          peerID: payload.callerID,
        };

        setPeers((users) => [...users, peerObj]);
      });

      // exisisting users recieving the signal
      socketRef.current.on("receiving returned signal", (payload) => {
        const item = peersRef.current.find((p) => p.peerID === payload.id);
        item.peer.signal(payload.signal);
      });

      // handling user disconnecting
      socketRef.current.on("user left", (id) => {
        // finding the id of the peer who just left
        const peerObj = peersRef.current.find((p) => p.peerID === id);
        if (peerObj) {
          peerObj.peer.destroy();
        }

        // removing the peer from the arrays and storing remaining peers in new array
        const peers = peersRef.current.filter((p) => p.peerID !== id);
        peersRef.current = peers;
        setPeers(peers);
      });
    });
  }, []);

  // creating a peer object for newly joined user
  function createPeer(userToSignal, callerID, stream) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });

    peer.on("signal", (signal) => {
      socketRef.current.emit("sending signal", {
        userToSignal,
        callerID,
        signal,
      });
    });

    return peer;
  }

  // adding the newly joined peer to the room
  function addPeer(incomingSignal, callerID, stream) {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    });

    peer.on("signal", (signal) => {
      socketRef.current.emit("returning signal", { signal, callerID });
    });

    peer.signal(incomingSignal);
    return peer;
  }

  // Toggle Video
  let isVideo = true;
  let colorVideo = "#bc1823";
  function toggleVideo() {
    document.getElementById("avv").style.backgroundColor = colorVideo;
    if (isVideo) {
      colorVideo = "#302b70";
    } else {
      colorVideo = "#bc1823";
    }
    isVideo = !isVideo;
    userStream.current.getVideoTracks()[0].enabled = isVideo;
  }

  // Toggle Audio

  function toggleAudio(isMutedState) {
    userStream.current.getAudioTracks()[0].enabled = isMutedState;
  }

  // Hanging up the call
  function handleHangUp() {
    userStream.current.getAudioTracks()[0].enabled = false;
    window.location.replace("/");
  }

  return (
    <div className="w-full h-screen bg-lightBlue2 ">
      <RoomHeader
        meetingRoomId={meetingRoomId}
        handleImages={handleImages}
        handleHangUp={handleHangUp}
        toggleAudio={toggleAudio}
      />
      <div class="videos">
        <video
          class="groupVideo"
          unmuted
          ref={userVideo}
          autoPlay
          playsInline
        />
        {peers.map((peer) => {
          return (
            <Video class="groupVideo" key={peer.peerID} peer={peer.peer} />
          );
        })}
      </div>
      <RoomContent
        currentImage={currentImage}
        images={images}
        handleClickedImage={handleClickedImage}
        colorPicked={colorPicked}
        onChangeColorPicked={onChangeColorPicked}
      />
    </div>
  );
  // (
  //   <div class="row group-call">
  //     <div col="col-12">
  //       <div class="videos">
  //         <video
  //           class="groupVideo"
  //           muted
  //           ref={userVideo}
  //           autoPlay
  //           playsInline
  //         />
  //         {peers.map((peer) => {
  //           return (
  //             <Video class="groupVideo" key={peer.peerID} peer={peer.peer} />
  //           );
  //         })}
  //       </div>

  //       <div id="button-box">
  //         <button id="av" onClick={toggleAudio}>
  //           {" "}
  //           <i class="fas fa-microphone-slash"></i>{" "}
  //         </button>
  //         <button id="end" onClick={hangUp}>
  //           {" "}
  //           <i class="fas fa-phone-square-alt fa-3x"></i>{" "}
  //         </button>
  //         <button id="avv" onClick={toggleVideo}>
  //           {" "}
  //           <i class="fas fa-video"></i>{" "}
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );
};
