import connectDB from "@/middleware/Connect";
import { JobModal } from '@/models/Job'

const handler = async (req, res) => {
    if (req.method === 'POST') {
        try {
            const { slug } = req.body
            console.log(slug)
            const result = await JobModal.findById(slug)
            console.log(result)
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