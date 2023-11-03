const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: process.env.RBAC_USER_ID
    },
    points: {
        type: Number,
        default: 0
    },
    correctSolves: {
        type: Number,
        default: 0
    },
    incorrectSolves: {
        type: Number,
        default: 0
    },
    subjects: Array,
    solvedChallenges: [
        {
            challengeId: String,
            name: String,
            points: Number,
            timeStamp: String,
            category: String
        }
    ],
    refreshToken: String
});

module.exports = mongoose.model('User', userSchema);