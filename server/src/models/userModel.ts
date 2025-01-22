import { Schema, model, type Document } from 'mongoose';

interface IUser extends Document {
    username: string;
    password: string;
    email: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const userSchema = new Schema<IUser>(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        timestamps: true, // Adds `createdAt` and `updatedAt` fields automatically
    }
);

const User = model<IUser>('User', userSchema);

export default User;
