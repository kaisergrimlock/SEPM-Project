const connection = (socket) => {
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
    socket.to(roomName).emit('user left', `user with id: ${socket.id} left ${roomName}`);
  });

  socket.on('message', (msg) => {
    console.log(`msg is ${msg} from ${socket.id}`);
    socket.emit('message', msg);
  });
};

module.exports = { connection };
