import connectDB from '@/middleware/Connect'
import { JobModal } from '@/models/Job'

const handler = async (req, res) => {

    if(req.method === 'GET'){

        try {

            const result = await JobModal.find()
            res.status(200).json({job:result})
            
        } catch (error) {
            res.status(500).json({ error: error })
        }

    } else {
        res.status(400).json({ message: 'This method is not allowed' })
    }

}

export default connectDB(handler)