import { Schema, model, type Document } from 'mongoose';

interface IScore extends Document {
    userId: Schema.Types.ObjectId;
    score: number;
    category?: string;
    difficulty?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const scoreSchema = new Schema<IScore>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        score: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
        },
        difficulty: {
            type: String,
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        timestamps: true, // Adds `createdAt` and `updatedAt` fields automatically
    }
);

const Score = model<IScore>('Score', scoreSchema);

export default Score;
