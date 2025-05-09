const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    displayName: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    previewImage: {
      type: String,
      required: true,
    },
    structure: {
      type: Object,
      required: true,
    },
    isDefault: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Template = mongoose.model('Template', templateSchema);

module.exports = Template;
