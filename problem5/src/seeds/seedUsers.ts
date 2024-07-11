import sequelize from '../config/database';
import User from '../models/user';
import * as dotenv from 'dotenv';
import bcrypt from 'bcryptjs';

dotenv.config();

const seedUsers = async () => {
    const users = [
        { name: 'John Doe', email: 'john@example.com', password: bcrypt.hashSync('password123') },
        { name: 'Jane Doe', email: 'jane@example.com', password: bcrypt.hashSync('password123') },
    ];

    try {
        await sequelize.sync({ force: true }); // This will drop the table if it already exists
        await User.bulkCreate(users);
        console.log('Users seeded successfully');
    } catch (err) {
        console.error('Error seeding users:', err);
    } finally {
        await sequelize.close();
    }
};

seedUsers();
