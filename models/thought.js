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
        },
        username: {
            type: String,
            requried: true,
        },
        // reactions: {
        //     //Array of nested documents created with the `reactionSchema`
        //     reactions: [thoughtSchema],
        // },
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
