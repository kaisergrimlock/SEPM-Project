import React from 'react'
import {useState, useEffect} from 'react';
import Peer from 'peer.js';


function Call()  {
    const [peerId, setPeerId] = useState(''); //Caller id
    const [remotePeerIdValue, setRemotePeerIdValue] = useState(''); // Guest id
    const remoteVideoRef = useRef(null);
    const currentUserVideoRef = useRef(null);
    const peerInstance = useRef(null);

    useEffect(() => {
        const peer = new Peer();

        peer.on('open', (id) => {
        setPeerId(id)
        });

        peer.on('call', (call) => {
        var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;//get user media

        getUserMedia({audio: true }, (mediaStream) => {
            currentUserVideoRef.current.srcObject = mediaStream;
            currentUserVideoRef.current.play();
            call.answer(mediaStream)
            call.on('stream', function(remoteStream) {
            remoteVideoRef.current.srcObject = remoteStream
            remoteVideoRef.current.play();
            });
        });
        })

        peerInstance.current = peer;
    }, [])

    const call = (remotePeerId) => {
        var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        getUserMedia({audio: true }, (mediaStream) => {

        currentUserVideoRef.current.srcObject = mediaStream;
        currentUserVideoRef.current.play();

        const call = peerInstance.current.call(remotePeerId, mediaStream)

        call.on('stream', (remoteStream) => {
            remoteVideoRef.current.srcObject = remoteStream
            remoteVideoRef.current.play();
        });
        });
    }

    return (
        <div className="call-container">
            <h1>Current user id is {peerId}</h1>
            <input type="text" value={remotePeerIdValue} onChange={e => setRemotePeerIdValue(e.target.value)} />
            <button onClick={() => call(remotePeerIdValue)}>Call</button>
            <div className="user-call-container">
                <video ref={currentUserVideoRef} />
            </div>
            <div className="client-call-container">
                <video ref={remoteVideoRef} />
            </div>
        </div>
    );
}

export default Call