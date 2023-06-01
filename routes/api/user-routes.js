const router = require('express').Router();
const {
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
    //have not yet done controllers
} = require('../../controllers/userControllers');

// /api/user
router.route('/').get(getUser).post(createUser);

// /api/user/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/user/:userId/friend/friendIs
router.route('/:userId/friends/friendId').post().delete();


module.exports = router;
