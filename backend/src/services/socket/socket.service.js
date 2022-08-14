const connection = (socket) => {
  /* ------ CREATING AND JOINING ROOMS FOR CONNECTION BETWEEN USERS ------ */

  // room object to store the created room IDs
  const rooms = {};
  const users = {};
  const socketToRoom = {};

  // when the user is forming a connection with socket.io
  // handling one on one video call (Used)
  socket.on('join room', (roomID) => {
    // if the room is already created, that means a person has already joined the room
    // then take the new user and push them into the same room
    // else create a new room
    if (rooms[roomID]) {
      rooms[roomID].push(socket.id);
    } else {
      rooms[roomID] = [socket.id];
    }

    // finding otherUSer - see if id is of the other user
    const otherUser = rooms[roomID].find((id) => id !== socket.id);
    // if someone has joined then we get the id of the other user
    if (otherUser) {
      socket.emit('other user', otherUser);
      socket.to(otherUser).emit('user joined', socket.id);
    }
  });

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
