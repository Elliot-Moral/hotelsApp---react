import axios from "axios";
import { useState } from "react"

const useFetch = () => {

    const [response, setResponse] = useState();

    // #archivos de configuracion.
    // const config = {
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //     }
    // }

    function getHotel(url){
        axios.get(url)
        .then(res => setResponse(res.data))
        .catch(err => console.log(err))
    }

    return [response, getHotel];
}

export default useFetch