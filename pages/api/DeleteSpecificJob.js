import connectDB from "@/middleware/Connect";
import { JobModal } from '@/models/Job'

const handler = async (req, res) => {
    if (req.method === 'POST') {
        try {
            const { confirmationBoxShow } = req.body
            console.log(confirmationBoxShow)
            const result = await JobModal.findByIdAndDelete(confirmationBoxShow)
            console.log(result)
        res.status(200).json({success: true})
        } catch (error) {
            console.log(error)
            res.status(500).json({message: error})
        }
    } else {
        res.status(400).json({ message: 'This method is not allowed' })
    }
}

export default connectDB(handler)