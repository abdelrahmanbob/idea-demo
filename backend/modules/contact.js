const mongoose = require('mongoose'); // Import Mongoose
const validator = require('validator'); // Import validator package
const bcrypt = require('bcrypt'); // Import bcrypt for encryption

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return validator.isAlpha(v, 'en-US', { ignore: ' ' }); // Validates that the name contains only letters and spaces
            },
            message: 'Name should contain only letters and spaces'
        }
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: validator.isEmail,
            message: 'Invalid email format'
        }
    },
    message: {
        type: String,
        required: true,
        default: null
    }
});

// Pre-save hook to encrypt email
contactSchema.pre('save', async function (next) {
    if (this.isModified('email')) {
        const salt = await bcrypt.genSalt(10); // Generate salt
        this.email = await bcrypt.hash(this.email, salt); // Encrypt email
    }
    next();
});

module.exports = mongoose.model('Contact', contactSchema); // Export the model

