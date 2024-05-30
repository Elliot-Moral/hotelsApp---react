import axios from "axios";
import { useState } from "react"
import getConfigToken from "../services/getConfigToken.js";


const useCrudToken = () => {

    const [response, setResponse]= useState();
    
    // Read
    function getItems(url, withToken){
        axios.get(url, withToken ? getConfigToken() : {})
        .then(res => {
            setResponse(res.data)
        })
        .catch(err => {
            console.log(err)
            if(err?.response.status === 401 || err?.response.status === 403){
                localStorage.removeItem('token')
                localStorage.removeItem('userLogged')
            }
        })
    }

    // Create
    function postItems(url, data, withToken){
        axios.post(url, data, withToken ? getConfigToken() : {})
        .then(res => {
            console.log(res.data)
            setResponse(response ? [...response, res.data] : [res.data])
        })
        .catch(err => {
            console.log(err)
            if(err.response.data == 'Forbidden'){
                alert('debes loguearte!!!');
            }
        })
        
    }

    function UpdateItems(url, data ){
        axios.update(url, data, withToken ? getConfigToken() : {})
        .then(res => setResponse(res.data))
        .catch(err => console.log(err))
        
    }

    function deleteItems(url, id, withToken){

        axios.delete(url, withToken ? getConfigToken() : {})
        .then(res => {
            console.log(res.data)
            setResponse( response.filter( (e) =>  e.id !== id) );
        })
        .catch(err => {
            console.log(err)

            if(err?.response.status === 401 || err?.response.status === 403){
                localStorage.removeItem('token')
                localStorage.removeItem('userLogged')
            }
        })
        
    }

    return [response, getItems, postItems, deleteItems];
}

export default useCrudToken