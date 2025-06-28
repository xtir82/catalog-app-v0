import dbConnect from '../lib/db';

(async () => {
    try {
        await dbConnect();
        console.log('Connection successful');
        process.exit(0);
    } catch (error) {
        console.error('Connection failed:', error);
        process.exit(1);
    }
})();