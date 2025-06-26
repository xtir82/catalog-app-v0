import connectDB from '../lib/db';

(async () => {
    try {
        await connectDB();
        console.log('Connection successful');
        process.exit(0);
    } catch (error) {
        console.error('Connection failed:', error);
        process.exit(1);
    }
})();