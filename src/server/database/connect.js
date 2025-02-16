import mongoose from 'mongoose';    

const connectDatabase = async () => {
    try {
      await mongoose.connect('mongodb://172.19.0.1:27017/tasks');
      console.log('MongoDB connected');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
  
  export default connectDatabase;