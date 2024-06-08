import connectDB from "@/middleware/Connect";
import { ContactModel } from '@/models/ContactModel'

const handler = async (req, res) => {
    if (req.method === 'POST') {
        // console.log(req.body)
        const {
            name,
            email,
            country,
            occupation,
            mobilenumber,
            servicetype,
            companyname,
            message
          } = req.body
        const tempMessage = new ContactModel({
            name,
            email,
            phone_number:mobilenumber,
            occupation: occupation,
            company_inquiry_type: servicetype,
            company:companyname,
            message
        })
        const result = await tempMessage.save()
        res.status(200).json({message: result})
    } else {
        res.status(400).json({ message: 'This method is not allowed' })
    }
}

export default connectDB(handler)