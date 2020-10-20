import axios from "axios"



 export default function Api(image,option) {
        console.log('opt',option,image) 
        return axios({
            method:'get',
            url:`http://localhost:5000/user/bing/${image}/${option}`,
        //    headers: {"Access-Control-Allow-Origin": "*"}
        })
        
    }


    
      
