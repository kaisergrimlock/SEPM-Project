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

    return <audio muted playsInline autoPlay ref={ref} />;
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
      trickle: true,
      stream,
      config:{      iceServers: [
        "iphone-stun.strato-iphone.de:3478",
        "numb.viagenie.ca:3478",
        "stun.12connect.com:3478",
        "stun.12voip.com:3478",
        "stun.1und1.de:3478",
        "stun.3cx.com:3478",
        "stun.acrobits.cz:3478",
        "stun.actionvoip.com:3478",
        "stun.advfn.com:3478",
        "stun.altar.com.pl:3478",
        "stun.antisip.com:3478",
        "stun.avigora.fr:3478",
        "stun.bluesip.net:3478",
        "stun.cablenet-as.net:3478",
        "stun.callromania.ro:3478",
        "stun.callwithus.com:3478",
        "stun.cheapvoip.com:3478",
        "stun.cloopen.com:3478",
        "stun.commpeak.com:3478",
        "stun.cope.es:3478",
        "stun.counterpath.com:3478",
        "stun.counterpath.net:3478",
        "stun.dcalling.de:3478",
        "stun.demos.ru:3478",
        "stun.dus.net:3478",
        "stun.easycall.pl:3478",
        "stun.easyvoip.com:3478",
        "stun.ekiga.net:3478",
        "stun.epygi.com:3478",
        "stun.etoilediese.fr:3478",
        "stun.faktortel.com.au:3478",
        "stun.freecall.com:3478",
        "stun.freeswitch.org:3478",
        "stun.freevoipdeal.com:3478",
        "stun.gmx.de:3478",
        "stun.gmx.net:3478",
        "stun.halonet.pl:3478",
        "stun.hoiio.com:3478",
        "stun.hosteurope.de:3478",
        "stun.infra.net:3478",
        "stun.internetcalls.com:3478",
        "stun.intervoip.com:3478",
        "stun.ipfire.org:3478",
        "stun.ippi.fr:3478",
        "stun.ipshka.com:3478",
        "stun.it1.hr:3478",
        "stun.ivao.aero:3478",
        "stun.jumblo.com:3478",
        "stun.justvoip.com:3478",
        "stun.l.google.com:19302",
        "stun.linphone.org:3478",
        "stun.liveo.fr:3478",
        "stun.lowratevoip.com:3478",
        "stun.lundimatin.fr:3478",
        "stun.mit.de:3478",
        "stun.miwifi.com:3478",
        "stun.modulus.gr:3478",
        "stun.myvoiptraffic.com:3478",
        "stun.netappel.com:3478",
        "stun.netgsm.com.tr:3478",
        "stun.nfon.net:3478",
        "stun.nonoh.net:3478",
        "stun.nottingham.ac.uk:3478",
        "stun.ooma.com:3478",
        "stun.ozekiphone.com:3478",
        "stun.pjsip.org:3478",
        "stun.poivy.com:3478",
        "stun.powervoip.com:3478",
        "stun.ppdi.com:3478",
        "stun.qq.com:3478",
        "stun.rackco.com:3478",
        "stun.rockenstein.de:3478",
        "stun.rolmail.net:3478",
        "stun.rynga.com:3478",
        "stun.schlund.de:3478",
        "stun.sigmavoip.com:3478",
        "stun.sip.us:3478",
        "stun.sipdiscount.com:3478",
        "stun.sipgate.net:10000",
        "stun.sipgate.net:3478",
        "stun.siplogin.de:3478",
        "stun.sipnet.net:3478",
        "stun.sipnet.ru:3478",
        "stun.sippeer.dk:3478",
        "stun.siptraffic.com:3478",
        "stun.sma.de:3478",
        "stun.smartvoip.com:3478",
        "stun.smsdiscount.com:3478",
        "stun.solcon.nl:3478",
        "stun.solnet.ch:3478",
        "stun.sonetel.com:3478",
        "stun.sonetel.net:3478",
        "stun.sovtest.ru:3478",
        "stun.srce.hr:3478",
        "stun.stunprotocol.org:3478",
        "stun.t-online.de:3478",
        "stun.tel.lu:3478",
        "stun.telbo.com:3478",
        "stun.tng.de:3478",
        "stun.twt.it:3478",
        "stun.uls.co.za:3478",
        "stun.unseen.is:3478",
        "stun.usfamily.net:3478",
        "stun.viva.gr:3478",
        "stun.vivox.com:3478",
        "stun.vo.lu:3478",
        "stun.voicetrading.com:3478",
        "stun.voip.aebc.com:3478",
        "stun.voip.blackberry.com:3478",
        "stun.voip.eutelia.it:3478",
        "stun.voipblast.com:3478",
        "stun.voipbuster.com:3478",
        "stun.voipbusterpro.com:3478",
        "stun.voipcheap.co.uk:3478",
        "stun.voipcheap.com:3478",
        "stun.voipgain.com:3478",
        "stun.voipgate.com:3478",
        "stun.voipinfocenter.com:3478",
        "stun.voipplanet.nl:3478",
        "stun.voippro.com:3478",
        "stun.voipraider.com:3478",
        "stun.voipstunt.com:3478",
        "stun.voipwise.com:3478",
        "stun.voipzoom.com:3478",
        "stun.voys.nl:3478",
        "stun.voztele.com:3478",
        "stun.webcalldirect.com:3478",
        "stun.wifirst.net:3478",
        "stun.xtratelecom.es:3478",
        "stun.zadarma.com:3478",
        "stun1.faktortel.com.au:3478",
        "stun1.l.google.com:19302",
        "stun2.l.google.com:19302",
        "stun3.l.google.com:19302",
        "stun4.l.google.com:19302",
        "stun.nextcloud.com:443",
        "relay.webwormhole.io:3478"
      ]}
,
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
      trickle: true,
      stream,
      config: {      iceServers: [
        "iphone-stun.strato-iphone.de:3478",
        "numb.viagenie.ca:3478",
        "stun.12connect.com:3478",
        "stun.12voip.com:3478",
        "stun.1und1.de:3478",
        "stun.3cx.com:3478",
        "stun.acrobits.cz:3478",
        "stun.actionvoip.com:3478",
        "stun.advfn.com:3478",
        "stun.altar.com.pl:3478",
        "stun.antisip.com:3478",
        "stun.avigora.fr:3478",
        "stun.bluesip.net:3478",
        "stun.cablenet-as.net:3478",
        "stun.callromania.ro:3478",
        "stun.callwithus.com:3478",
        "stun.cheapvoip.com:3478",
        "stun.cloopen.com:3478",
        "stun.commpeak.com:3478",
        "stun.cope.es:3478",
        "stun.counterpath.com:3478",
        "stun.counterpath.net:3478",
        "stun.dcalling.de:3478",
        "stun.demos.ru:3478",
        "stun.dus.net:3478",
        "stun.easycall.pl:3478",
        "stun.easyvoip.com:3478",
        "stun.ekiga.net:3478",
        "stun.epygi.com:3478",
        "stun.etoilediese.fr:3478",
        "stun.faktortel.com.au:3478",
        "stun.freecall.com:3478",
        "stun.freeswitch.org:3478",
        "stun.freevoipdeal.com:3478",
        "stun.gmx.de:3478",
        "stun.gmx.net:3478",
        "stun.halonet.pl:3478",
        "stun.hoiio.com:3478",
        "stun.hosteurope.de:3478",
        "stun.infra.net:3478",
        "stun.internetcalls.com:3478",
        "stun.intervoip.com:3478",
        "stun.ipfire.org:3478",
        "stun.ippi.fr:3478",
        "stun.ipshka.com:3478",
        "stun.it1.hr:3478",
        "stun.ivao.aero:3478",
        "stun.jumblo.com:3478",
        "stun.justvoip.com:3478",
        "stun.l.google.com:19302",
        "stun.linphone.org:3478",
        "stun.liveo.fr:3478",
        "stun.lowratevoip.com:3478",
        "stun.lundimatin.fr:3478",
        "stun.mit.de:3478",
        "stun.miwifi.com:3478",
        "stun.modulus.gr:3478",
        "stun.myvoiptraffic.com:3478",
        "stun.netappel.com:3478",
        "stun.netgsm.com.tr:3478",
        "stun.nfon.net:3478",
        "stun.nonoh.net:3478",
        "stun.nottingham.ac.uk:3478",
        "stun.ooma.com:3478",
        "stun.ozekiphone.com:3478",
        "stun.pjsip.org:3478",
        "stun.poivy.com:3478",
        "stun.powervoip.com:3478",
        "stun.ppdi.com:3478",
        "stun.qq.com:3478",
        "stun.rackco.com:3478",
        "stun.rockenstein.de:3478",
        "stun.rolmail.net:3478",
        "stun.rynga.com:3478",
        "stun.schlund.de:3478",
        "stun.sigmavoip.com:3478",
        "stun.sip.us:3478",
        "stun.sipdiscount.com:3478",
        "stun.sipgate.net:10000",
        "stun.sipgate.net:3478",
        "stun.siplogin.de:3478",
        "stun.sipnet.net:3478",
        "stun.sipnet.ru:3478",
        "stun.sippeer.dk:3478",
        "stun.siptraffic.com:3478",
        "stun.sma.de:3478",
        "stun.smartvoip.com:3478",
        "stun.smsdiscount.com:3478",
        "stun.solcon.nl:3478",
        "stun.solnet.ch:3478",
        "stun.sonetel.com:3478",
        "stun.sonetel.net:3478",
        "stun.sovtest.ru:3478",
        "stun.srce.hr:3478",
        "stun.stunprotocol.org:3478",
        "stun.t-online.de:3478",
        "stun.tel.lu:3478",
        "stun.telbo.com:3478",
        "stun.tng.de:3478",
        "stun.twt.it:3478",
        "stun.uls.co.za:3478",
        "stun.unseen.is:3478",
        "stun.usfamily.net:3478",
        "stun.viva.gr:3478",
        "stun.vivox.com:3478",
        "stun.vo.lu:3478",
        "stun.voicetrading.com:3478",
        "stun.voip.aebc.com:3478",
        "stun.voip.blackberry.com:3478",
        "stun.voip.eutelia.it:3478",
        "stun.voipblast.com:3478",
        "stun.voipbuster.com:3478",
        "stun.voipbusterpro.com:3478",
        "stun.voipcheap.co.uk:3478",
        "stun.voipcheap.com:3478",
        "stun.voipgain.com:3478",
        "stun.voipgate.com:3478",
        "stun.voipinfocenter.com:3478",
        "stun.voipplanet.nl:3478",
        "stun.voippro.com:3478",
        "stun.voipraider.com:3478",
        "stun.voipstunt.com:3478",
        "stun.voipwise.com:3478",
        "stun.voipzoom.com:3478",
        "stun.voys.nl:3478",
        "stun.voztele.com:3478",
        "stun.webcalldirect.com:3478",
        "stun.wifirst.net:3478",
        "stun.xtratelecom.es:3478",
        "stun.zadarma.com:3478",
        "stun1.faktortel.com.au:3478",
        "stun1.l.google.com:19302",
        "stun2.l.google.com:19302",
        "stun3.l.google.com:19302",
        "stun4.l.google.com:19302",
        "stun.nextcloud.com:443",
        "relay.webwormhole.io:3478"
      ]}
 ,
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
        <audio
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
