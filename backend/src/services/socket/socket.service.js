let users = [];

const connection = (socket) => {
  console.log(`user connected id: ${socket.id}`);
  socket.on('joinRoom', (roomId) => {
    const newUser = { userId: socket.id, roomId };

    const isUserAlreadyConnected = users.some((user) => user.userId === newUser.userId);

    if (!isUserAlreadyConnected) {
      users.push(newUser);
      socket.join(newUser.roomId);
    } else {
      // Modify users based on room which user joined
      // eslint-disable-next-line array-callback-return
      users.map((user) => {
        if (user.userId === newUser.userId) {
          if (user.roomId !== newUser.roomId) {
            socket.leave(user.roomId);
            socket.join(newUser.roomId);
            // eslint-disable-next-line no-param-reassign
            user.roomId = newUser.roomId;
          }
        }
      });
    }

    console.log(`user with id: ${newUser.userId} joined room: ${newUser.roomId}`);
    console.log(`After join room, new users is`, users);
    socket.to(newUser.roomId).emit('newUserJoined', `new user with id: ${newUser.userId} joined room: ${newUser.roomId}`);
  });

  socket.on('disconnect', () => {
    console.log(`user disconnected id: ${socket.id}`);
    // console.log(socket.id + ' disconnected.')
    const disconnectedUser = users.filter((user) => user.userId === socket.id)[0];
    users = users.filter((user) => user.userId !== socket.id);
    console.log(`user ${disconnectedUser.userId} disconnected from ${disconnectedUser.roomId}`);
    console.log('users after someone disconnected', users);
    socket
      .to(disconnectedUser.roomId)
      .emit('userLeft', `user with id: ${disconnectedUser.userId} left room ${disconnectedUser.roomId}`);
  });

  //user call là người đang gọi, signal_data để mình chuyển video/audio/image cho phía bên kia
  socket.on('call_user', ({ user_call, signal_data, from, name }) => {
    console.log(`user with id: ${socket.id} is calling`);
    socket.to(user_call).emit('call_user', { signal: signal_data, from: from, name: name });
  });

  socket.on('answer_call', (data) => {
    console.log(`user with id: ${socket.id} answering call`);
    socket.to(data.to).emit('call_accepted', data.signal);
  });

  socket.on('message', (msg) => {
    console.log(`msg is ${msg} from ${socket.id}`);
    socket.emit('message', msg);
  });
};

module.exports = { connection };
