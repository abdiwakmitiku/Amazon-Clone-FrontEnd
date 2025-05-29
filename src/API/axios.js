import axios from "axios";

const axiosInstance = axios.create({

         // Local Instance of Firebase Functions
    // baseURL: "http://127.0.0.1:5001/clone-28ad8/us-central1/api",

        // Deployed Version Of Amazon Server On Render.Com
   baseURL:"https://amazon-clone-backend-vly0.onrender.com",
})

export {axiosInstance}