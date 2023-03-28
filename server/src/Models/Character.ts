import { Schema, model } from 'mongoose'

const Character = new Schema({
    characterName: {
        type: String,
        minLength: 1,
        maxLength: 30,
        require: true,
    },
    image: {
        type: String
    },
    description: {
        type: String,
    },
    favoriteItem: {
        type: String,
        maxLength: 50
    }
},
    {
        timestamps: true
    }
)

export default model('Character', Character)