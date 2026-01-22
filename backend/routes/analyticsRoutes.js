const express = require('express');
const router = express.Router();
const { getSalesData } = require('../controllers/analyticsController.js');
const { protect, admin } = require('../middleware/authMiddleware.js');

router.route('/').get(protect, admin, getSalesData);

module.exports = router;
