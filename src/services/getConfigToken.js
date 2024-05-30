
const getConfigToken = () => {
  return {

        // peticion a un endpoint protegido
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
        
    }
}

export default getConfigToken