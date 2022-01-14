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

router.put('/users/:id', isAuthenticated, async function updateUser(req, res) {
  const id = parseInt(req.params.id);
  const user = await getUserByID(id);

  if (!user) {
    return res.json({
      message: `User (${id}) not found`,
      error: 1,
    });
  }
  const { firstName, lastName } = req.body;
  let userData = {
    firstName,
    lastName,
  };

  await user.update(userData);
  res.json({
    messge: `User (${id}) updated successfully`,
    id,
  });
});

router.get('/users/:id', isAuthenticated, async function getUser(req, res) {
  console.log(req?.params, 'request id');
  const id = parseInt(req.params.id);
  const user = await getUserByID(id);

  if (!user) {
    return res.json({
      message: `User (${id}) not found`,
      error: 1,
    });
  }
  res.json({
    user,
  });
});

router.delete(
  '/users/:id',
  isAuthenticated,
  async function deleteUser(req, res) {
    const id = parseInt(req.params.id);
    const user = await getUserByID(id);

    if (!user) {
      return res.json({
        message: `User (${id}) not found`,
        error: 1,
      });
    }
    user.destroy();
    res.json({
      messge: `User (${id}) deleted successfully`,
      id,
    });
  }
);

module.exports = router;
