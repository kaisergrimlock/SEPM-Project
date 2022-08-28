// import React, { createContext, useState, useRef, useEffect } from "react";
// import { io } from "socket.io-client";
// import Peer from "simple-peer";
// import RecordRTC from "./RecordRTC";

// const SocketContext = createContext();

// const socket = io("http://localhost:3000");

// const ContextProvider = ({ children }) => {
//   const [callAccepted, setCallAccepted] = useState(false);
//   const [callEnded, setCallEnded] = useState(false);
//   const [stream, setStream] = useState("");
//   const [call, setCall] = useState({});
//   const [me, setMe] = useState("");
//   const [name, setName] = useState("");

//   const myVideo = useRef();
//   const userVideo = useRef();
//   const connectionRef = useRef();

//   useEffect(() => {
//     navigator.mediaDevices
//       .getUserMedia({ video: true, audio: true })
//       .then((currentStream) => {
//         setStream(currentStream);

// <<<<<<< HEAD
//             myVideo.current.srcObject = currentStream;
//           }).then(async (myVideo) => {
//               let recorder = RecordRTC(myVideo, {
//                 type: 'audio',
//               });
//               recorder.startRecording();
        
//               const sleep = m => new Promise(r => setTimeout(r, m));
//               await sleep(3000);
        
//               recorder.stopRecording(function() {
//                 let blob = recorder.getBlob();
//               });
//             })

//         socket.on('me', (id) => setMe(id));
//         socket.on('callUser', ({ from, name: callerName, signal }) => {
//           setCall({ isReceivingCall: true, from, name: callerName, signal });
//         })
//     }, [])
    
// //Mute Mic
//     const muteMic = () => {
//         myVideo.getAudioTracks().forEach(track => {
//             track.disable();
// =======
//         myVideo.current.srcObject = currentStream;
//       })
//       .then(async (myVideo) => {
//         let recorder = RecordRTC(myVideo, {
//           type: "audio",
// >>>>>>> minh-dev
//         });
//         recorder.startRecording();

// <<<<<<< HEAD
//     const unMuteMic = () => {
//       myVideo.getAudioTracks().forEach(track => {
//           track.enable();
// =======
//         const sleep = (m) => new Promise((r) => setTimeout(r, m));
//         await sleep(3000);

//         recorder.stopRecording(function () {
//           let blob = recorder.getBlob();
//           // invokeSaveAsDialog(blob);
//         });
// >>>>>>> minh-dev
//       });

//     socket.on("me", (id) => setMe(id));
//     socket.on("callUser", ({ from, name: callerName, signal }) => {
//       setCall({ isReceivingCall: true, from, name: callerName, signal });
//     });
//   }, []);
//   //Mute Mic
//   const muteMic = () => {
//     myVideo.getAudioTracks().forEach((track) => {
//       track.disable();
//     });
//   };

//   const unMuteMic = () => {
//     myVideo.getAudioTracks().forEach((track) => {
//       track.enable();
//     });
//   };

//   const answerCall = () => {
//     setCallAccepted(true);

//     const peer = new Peer({ initiator: false, trickle: false, stream });

//     peer.on("signal", (data) => {
//       socket.emit("answerCall", { signal: data, to: call.from });
//     });

//     peer.on("stream", (currentStream) => {
//       userVideo.current.srcObject = currentStream;
//     });

//     peer.signal(call.signal);

//     connectionRef.current = peer;
//   };

//   const callUser = (id) => {
//     const peer = new Peer({ initiator: true, trickle: false, stream });

//     peer.on("signal", (data) => {
//       socket.emit("callUser", {
//         userToCall: id,
//         signalData: data,
//         from: me,
//         name,
//       });
//     });

//     peer.on("stream", (currentStream) => {
//       userVideo.current.srcObject = currentStream;
//     });

//     socket.on("callAccepted", (signal) => {
//       setCallAccepted(true);

//       peer.signal(signal);
//     });

//     connectionRef.current = peer;
//   };

//   const leaveCall = () => {
//     setCallEnded(true);

//     connectionRef.current.destroy();

//     window.location.reload();
//   };

//   return (
//     <SocketContext.Provider
//       value={{
//         call,
//         callAccepted,
//         myVideo,
//         userVideo,
//         stream,
//         name,
//         setName,
//         callEnded,
//         me,
//         callUser,
//         leaveCall,
//         answerCall,
//         muteMic,
//         unMuteMic,
//       }}
//     >
//       {children}
//     </SocketContext.Provider>
//   );
// };

// export { ContextProvider, SocketContext };
