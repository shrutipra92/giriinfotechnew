import mongoose from 'mongoose'

function formatDate(date) {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }
  
  const currentDate = new Date(); // Get the current date
  const formattedDate = formatDate(currentDate);

const ContentModel = mongoose.models.ContentModel ||
    mongoose.model('ContentModel', new mongoose.Schema({
        blogID: {
            type: String,
            required: true
        },
        heading: {
            type: String,
            required: true
        },
        paragraphs: {
            type: [String],
            required: true
        }
    }))

const BlogModel = mongoose.models.BlogModel || 
    mongoose.model('BlogModel', new mongoose.Schema({
        bannerLink:{
            type: String,
            required: true
        },
        categories: {
            type: [String],
            required: true
        },
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        posintgDate: {
            type: String,
            default: formattedDate
        }
    }))

    module.exports = { BlogModel, ContentModel }