import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/schemaai';
    
    if (!mongoUri.includes('localhost') && !process.env.MONGODB_URI) {
      console.warn('⚠️ Warning: Using local MongoDB. Set MONGODB_URI env var for production.');
    }

    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('✅ MongoDB connected successfully');
    return true;
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    // Don't exit process - allow app to start without DB for testing
    console.warn('⚠️ Continuing without database - schemas will not persist');
    return false;
  }
};

export default connectDB;
