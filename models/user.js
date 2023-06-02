const { Schema, model } = require('mongoose');

// Schema to create User Model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            trim: true,
            required: true,
            //"username is required" ??
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/.+\@.+\..+/],
        },
        thoughts: {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        },
        friends: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const User = model('User', userSchema);

module.exports = User;
