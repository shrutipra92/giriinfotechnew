import mongoose from "mongoose"

const JobModal = mongoose.models.JobModal || 
    mongoose.model('JobModal', new mongoose.Schema({
        mainHeading: {
            type: String,
            required: true
        },
        subHeading: {
            type: String,
            required: true
        },
        roleDetails: {
            type: [String],
            required: true
        },
        qualifications: {
            type: [String],
            required: true
        },
        benefits: {
            type: [String],
            required: true
        },
        essentialCompetencies: {
            type: [String],
            required: true
        },
        place: {
            type: [String],
            required: true
        },
        preferedCompetencies: {
            type: [String],
            required: true
        },
        conclusion: {
            type: String,
            required: true
        }
    }))

    module.exports = { JobModal }