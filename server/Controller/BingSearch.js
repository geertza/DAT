const axios = require("axios")
require('dotenv').config()
const rawGallery =[]
let   imageGallery =[]
const apiKey= process.env.BINGAPI
// const url = `https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=${data}&safeSearch=Strict&imageType=Transparent`;
function search(image,option) {
  console.log('ing,opt',image,option)
    if (option === 'bg'){
      return  axios.get(`https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=background${image}&safeSearch=Strict`, {
        headers: {
          "Ocp-Apim-Subscription-Key": apiKey ,
          }
        })
    }
    else
    {
      console.log('char option pass')
     
  return  axios.get(`https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=${image}&safeSearch=Strict&imageType=Transparent`, {
      headers: {
        "Ocp-Apim-Subscription-Key": apiKey
        }
      })
     
      
}}
module.exports = search;
// data.value[1].contentUrl