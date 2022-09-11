import mongoose from 'mongoose'

export const connectMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_TOKEN)
        console.log('connected to mongodb')
    } catch (error) {
        console.log(error)
    }
}