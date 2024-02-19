let asyncHandler = require("express-async-handler");
const { cerateUserValidation } = require("../models/User");

/**
 * @desc  Create New User
 * @route /api/auth/signUp
 * @method Post
 * @access public
 */

exports.createNewUser = asyncHandler((req, res) => {
  return res.json(req.body);
});
exports.test = asyncHandler((req, res) => {
  return res.json(req.params);
});
