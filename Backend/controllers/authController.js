// Kenny: lógica registro/login, usa servicios y valida con JWT
exports.register = async (req, res) => {
  // validar datos...
  const user = await userService.create(req.body);
  res.json({ id: user.id, username: user.username });
};
exports.login = async (req, res) => {
  const token = await userService.authenticate(req.body);
  res.json({ token });
};
