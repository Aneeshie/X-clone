import mongoose from "mongoose"

const connectMongoDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to mongoDB", conn.connection.host);
  }catch(error){
    console.error(`Error : ${error}`);
  }
}

export default connectMongoDb;
