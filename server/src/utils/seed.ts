import bcrypt from 'bcryptjs';
import { User } from '../models/index.js';
import db from '../config/connection.js';

const seedDatabase = async (): Promise<void> => {
    try {
        // Connect to the database
        await db();
        console.log('Connected to MongoDB for seeding.');

        // Clear existing data 
        await User.deleteMany({});
        console.log('Cleared existing User data.');

        // Create seed data with hashed passwords
        const seedUsers = [
            {
                username: 'admin',
                email: 'adminUser@email.com',
                password: 'adminPassword',
            },
            {
                username: 'testUser',
                email: 'testUser@email.com',
                password: 'testPassword',
            },
        ];

        // Hash the passwords before inserting into the database
        for (const user of seedUsers) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
        }

        // Insert seed data into the database
        const insertedUsers = await User.insertMany(seedUsers);
        console.log('Seed data added:', insertedUsers);

        console.log('Seeding complete.');
    } catch (error) {
        console.error('Error during database seeding:', error);
        process.exit(1); // Exit the process with an error code
    }
};

export default seedDatabase;
