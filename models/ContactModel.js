import mongoose from "mongoose";

const ContactModel = mongoose.models.ContactModel || 
    mongoose.model("ContactModel", new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone_number: {
            type: Number,
            required: true
        },
        occupation:{
            type: String,
            required: true
        },
        company_inquiry_type: {
            type: String,
            required: true
        },
        company: {
            type: String
        },
        message: {
            type: String,
            required: true
        }
    }))

    module.exports = { ContactModel }