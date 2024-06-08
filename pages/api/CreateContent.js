import connectDB from '@/middleware/Connect'
import { ContentModel } from '@/models/BlogModel'

const handler = async (req, res) => {

    if(req.method === 'POST'){

        try {

            const tempBlog = new ContentModel(req.body)
            const result = await tempBlog.save()
            res.status(200).json({blog: result})
            
        } catch (error) {
            res.status(500).json({ error: error })
        }

    } else {
        res.status(400).json({ message: 'This method is not allowed' })
    }

}

export default connectDB(handler)