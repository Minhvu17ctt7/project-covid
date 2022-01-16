const express = require('express');
const router = express.Router();

const { userController } = require('../controllers');

router.get('/categories', userController.getList);
router.get('/categories/:id', userController.detail);
router.get('/', userController.index);

module.exports = router;
