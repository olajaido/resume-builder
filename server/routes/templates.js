const express = require('express');
const {
  getTemplates,
  getTemplate,
} = require('../controllers/templateController');

const router = express.Router();

// Routes
router.get('/', getTemplates);
router.get('/:name', getTemplate);

module.exports = router;
