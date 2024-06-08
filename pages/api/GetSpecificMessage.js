import connectDB from "@/middleware/Connect";
import { ContactModel } from '@/models/ContactModel'

const handler = async (req, res) => {
    if (req.method === 'POST') {
        try {
            const { slug } = req.body
            const result = await ContactModel.findById(slug)
        res.status(200).json({message: result})
        } catch (error) {
            console.log(error)
            res.status(500).json({message: error})
        }
    } else {
        res.status(400).json({ message: 'This method is not allowed' })
    }
}

export default connectDB(handler)