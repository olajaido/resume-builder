const express = require('express');
const {
  getResumes,
  getResume,
  createResume,
  updateResume,
  deleteResume,
} = require('../controllers/resumeController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// Protect all routes
router.use(protect);

// Routes
router.route('/')
  .get(getResumes)
  .post(createResume);

router.route('/:id')
  .get(getResume)
  .put(updateResume)
  .delete(deleteResume);

module.exports = router;
