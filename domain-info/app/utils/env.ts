import dotenv from 'dotenv';
dotenv.config();

const env = {
    API_KEY: process.env.NEXT_PUBLIC_API_KEY,
    API_URL: process.env.NEXT_PUBLIC_API_URL
};

export default env;