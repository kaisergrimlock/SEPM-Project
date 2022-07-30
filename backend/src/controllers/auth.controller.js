const { ResponseService, AuthService, JwtService } = require('../services');
const { catchAsync } = require('../utils');
const { OneDayToSecond } = require('../config/constant/time');

const register = catchAsync(async (req, res) => {
  const { name, email, password } = req.body;
  const user = await AuthService.register(name, email, password);
  res.status(201).json(ResponseService.newSucess(user));
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  const userId = await AuthService.login(email, password);

  // After validation, now we provide frontend jwt for authentication later
  const { accessToken, refreshToken } = await JwtService.generateJWT(userId);

  res.cookie('refreshToken', refreshToken, { maxAge: OneDayToSecond, httpOnly: true });
  res.status(201).json(ResponseService.newSucess({ accessToken }));
});

// If refresh valid => generate new access and refresh token
// else throw error => login again
const verifyRefreshToken = catchAsync(async (req, res) => {
  const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;
  const { refreshToken } = req.cookies;

  const decoded = await JwtService.authenticateJWT(refreshToken, refreshTokenSecret);

  const { id } = decoded;

  const tokens = await JwtService.generateJWT(id);

  res.cookie('refreshToken', tokens.refreshToken, { maxAge: OneDayToSecond, httpOnly: true });
  res.status(201).json(ResponseService.newSucess({ accessToken: tokens.accessToken }));
});

const logout = catchAsync(async (req, res) => {
  res.cookie('refreshToken', '');
  res.status(200).json(ResponseService.newSucess());
});

module.exports = { register, login, logout, verifyRefreshToken };
