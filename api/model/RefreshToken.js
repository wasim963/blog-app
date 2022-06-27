const mongoose = require('mongoose');

const RefreshTokenSchema = new mongoose.Schema( {
    title:  {
        type: String,
        required: true,
        unique: true
    },
    userId:  {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true } )

module.exports = mongoose.model( 'RefreshToken', RefreshTokenSchema )