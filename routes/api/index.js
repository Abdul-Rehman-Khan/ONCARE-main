const router = require('express').Router();
const isAuthenticated = require('../../config/middleware/isAuthenticated');
const db = require('../../models');

const getUserByEmail = async (email) => {
  return await db.User.findOne({ where: { email } });
};
const getUserByID = async (id) => {
  return await db.User.findOne({ where: { id } });
};

router.get('/users', isAuthenticated, async function getAllUsers(_, res) {
  const users = await db.User.findAll({
    attributes: ['id', 'firstName', 'lastName', 'email', 'createdAt'],
  });
  res.json({ users });
});

module.exports = router;
