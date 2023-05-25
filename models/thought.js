const { Schema, model } = require('mongoose');

// Schema to create Thought Model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //Use a getter method to format the timestamp on query
            get: (timestamp) => dateFormat(timestamp),
        },
        username: {
            type: String,
            requried: true,
        },
        reactions: {
            //Array of nested documents created with the `reactionSchema`
            reactions: [ReactionSchema],
        },
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

const User = model('user', userSchema);

module.exports = User;
