// room object to store the created room IDs
let users = {};
let socketToRoom = {};

const connection = (socket) => {
  /* ------ CREATING AND JOINING ROOMS FOR CONNECTION BETWEEN USERS ------ */
  console.log('current user: ', socket.id);

  // handling Group Video Call (Used)
  socket.on('join room group', (roomID) => {
    // getting the room with the room ID and adding the user to the room
    if (users[roomID]) {
      users[roomID].push(socket.id);
    } else {
      users[roomID] = [socket.id];
    }
    console.log('current users in all rooms: ', users);

    // returning new room with all the attendees after new attendee joined
    socketToRoom[socket.id] = roomID;
    const usersInThisRoom = users[roomID].filter((id) => id !== socket.id);
    socket.join(roomID);
    console.log(`other users in this room ${roomID}: ${usersInThisRoom} except socket ${socket.id}`);
    global._io.in(roomID).emit('all users', users);
  });
  // sending signal to existing members when user join (Used)
  socket.on('sending signal to other peers', (payload) => {
    console.log('inside the server otherPeer signal currentPeerSocketId: ', payload.currentPeerSocketId);
    global._io.to(payload.otherPeerSocketIdToSignal).emit('new peer joined', {
      currentPeerSignal: payload.currentPeerSignal,
      currentPeerSocketId: payload.currentPeerSocketId,
    });
  });

  // signal recieved by the user who joined (Used)
  socket.on('returning signal back to the others', (payload) => {
    // console.log('insde the currentPeer otherPeer signal: ', payload.currentPeerSignal);
    console.log('inside the server currentPeer signal socketId: ', payload.currentPeerSocketId);
    global._io.to(payload.currentPeerSocketId).emit('receiving returned signal', {
      signal: payload.currentPeerSignal,
      id: socket.id,
    });
  });

  // handling user disconnect in group call (Used)
  socket.on('disconnect', () => {
    // getting the room array with all the participants
    const roomID = socketToRoom[socket.id];
    let usersInThisRoom = users[roomID];
    console.log(`current user left with id: ${socket.id}`);
    console.log(`current room users before delete left user: ${usersInThisRoom}`);
    if (usersInThisRoom) {
      // finding the person who left the room
      // creating a new array with the remaining people
      usersInThisRoom = usersInThisRoom.filter((id) => id !== socket.id);
      users[roomID] = usersInThisRoom;
    }
    console.log(`current room users after delete left user: ${usersInThisRoom}`);
    // Reset current users and socketToRoom and establish connection between them again
    users = {};
    socketToRoom = {};
    // emiting a signal and sending it to everyone that a user left
    socket.to(roomID).emit('user left', { userLeft: socket.id });
  });

  // Image uploading
  socket.on('submitImg', (filePreview) => {
    const roomID = socketToRoom[socket.id];
    const room = users[roomID];
    console.log('Client sent image', filePreview);
    // Client submit an image
    socket.to(room).emit('sentImg', filePreview); //the server send the image src to all clients
    socket.emit('sentImg', filePreview);
  });
};

module.exports = { connection };
