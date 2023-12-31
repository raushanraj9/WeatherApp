import axios from "axios";


const fetchWeather=async()=>{
   
    try {
        const response=await axios.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2b32105c133a476d37233f0cb015d38e");
        const data =await response.data;
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }
}

export default fetchWeather