import mongoose from 'mongoose'

const connectDB = handler => async (req, res) => {

    try {

        if (mongoose.connections[0].readyState) { return handler(req, res) }
        await mongoose.connect(process.env.MONGO_URI)
        // remember to add the enviorment variable when uploadingto to server
        // mongoose.connect(process.env.MONGO_URI).then((res)=>{
        //     console.log('Connected')
        // }).catch((err) =>{
        //     console.log("error connecting", err)
        // })
        return handler(req, res)

    } catch (error) {
        console.log(error)
    }

}

export default connectDB