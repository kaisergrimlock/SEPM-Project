const connection = (socket) => {
  socket.emit("me", socket.id);
  console.log(`user connected id: ${socket.id}`);
  let roomName;
  socket.on('join room', (room) => {
    roomName = room;
    console.log(`user with id: ${socket.id} joined room: ${roomName}`);
    socket.join(roomName);
    socket.to(roomName).emit('new user joined', `new user with id: ${socket.id} joined ${roomName}`);
  });

  socket.on('disconnect', () => {
    console.log(`user disconnected id: ${socket.id}`);
    socket.broadcast.emit("callEnded")
    socket.to(roomName).emit('user left', `user with id: ${socket.id} left ${roomName}`);
  });


  //user call là người đang gọi, signalData để mình chuyển video/audio/image cho phía bên kia
  socket.on('call_user', ({userToCall, signalData, from, name}) => {
    console.log(`user with id: ${socket.id} is calling`)
    socket.to(userToCall).emit('call_user', {signal: signalData, from: from, name: name})
  })

  socket.on('answer_call', (data) => {
    console.log(`user with id: ${socket.id} answering call`)
    socket.to(data.to).emit('call_accepted', data.signal)
  })

  socket.on('message', (msg) => {
    console.log(`msg is ${msg} from ${socket.id}`);
    socket.emit('message', msg);
  });
};

module.exports = { connection };
