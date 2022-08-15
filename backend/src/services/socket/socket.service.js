const connection = (socket) => {
  /* ------ CREATING AND JOINING ROOMS FOR CONNECTION BETWEEN USERS ------ */

  // room object to store the created room IDs
  const users = {};
  const socketToRoom = {};

  // handling Group Video Call (Used)
  socket.on('join room group', (roomID) => {
    // getting the room with the room ID and adding the user to the room
    if (users[roomID]) {
      users[roomID].push(socket.id);
    } else {
      users[roomID] = [socket.id];
    }

    // returning new room with all the attendees after new attendee joined
    socketToRoom[socket.id] = roomID;
    const usersInThisRoom = users[roomID].filter((id) => id !== socket.id);
    socket.emit('all users', usersInThisRoom);
  });

  // sending signal to existing members when user join (Used)
  socket.on('sending signal', (payload) => {
    global._io.to(payload.userToSignal).emit('user joined', {
      signal: payload.signal,
      callerID: payload.callerID,
    });
  });

  // signal recieved by the user who joined (Used)
  socket.on('returning signal', (payload) => {
    global._io.to(payload.callerID).emit('receiving returned signal', {
      signal: payload.signal,
      id: socket.id,
    });
  });

  // handling user disconnect in group call (Used)
  socket.on('disconnect', () => {
    // getting the room array with all the participants
    const roomID = socketToRoom[socket.id];
    let room = users[roomID];

    if (room) {
      // finding the person who left the room
      // creating a new array with the remaining people
      room = room.filter((id) => id !== socket.id);
      users[roomID] = room;
    }

    // emiting a signal and sending it to everyone that a user left
    socket.broadcast.emit('user left', socket.id);
  });
};

module.exports = { connection };
