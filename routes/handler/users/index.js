const login = require("./login");
const logout = require("./logout");
const update = require("./update");
const destroy = require("./destroy");
const getUser = require("./getUser");
const getAllUsers = require("./getAllUsers");
const getOneUser = require("./getOneUser");
const register = require("./register");
const edit = require("./edit");

module.exports = {
  register,
  login,
  update,
  getUser,
  getAllUsers,
  getOneUser,
  logout,
  destroy,
  edit,
};
