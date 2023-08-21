import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserScheme = new Schema({
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    username: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: 'username',
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false,
    }
})

export const User = model('User', UserScheme);