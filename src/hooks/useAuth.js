import axios from "axios"

const useAuth = () => {
    
    //# Register
    function createUser(data){
        const url = "https://hotels-api.academlo.tech/users";
        axios.post(url, data)
        .then(resp => console.log(resp.data))
        .catch(err => console.log(err))
    }

    //# Login.
    function loginUser(data){
        const url = "https://hotels-api.academlo.tech/users/login";
        axios.post(url, data)
        .then(resp => {
            console.log(resp.data)
            //#local estorage permite 2 argumentos, nombre y el valor en string
            localStorage.setItem('token', resp.data.token)
            localStorage.setItem('userLogged', JSON.stringify(resp.data.user))
        })
        .catch(err => console.log(err))
    }

    return [ createUser, loginUser ];
}

export default useAuth