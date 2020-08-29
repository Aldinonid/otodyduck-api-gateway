const login = require("./login");
const logout = require("./logout");
const update = require("./update");
const destroy = require("./destroy");
const getUser = require("./getUser");
const register = require("./register");

module.exports = {
  register,
  login,
  update,
  getUser,
  logout,
  destroy,
};
