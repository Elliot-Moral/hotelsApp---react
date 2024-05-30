import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import './styles/FilterCity.css';
import { getHotelsThunk } from "../../store/slices/products.slice";
import { useDispatch } from "react-redux";

const FilterCity = ({setfromTo, setNameSearch, setcitySearch}) => {

    const [cities, getSities] = useFetch();

    
    useEffect(()=>{
        const url = 'https://hotels-api.academlo.tech/cities';
        getSities(url)
    }, [])
    
    const dispatch = useDispatch();

    function capturarIdCity(e){

        const id = e.target.getAttribute("id")
        const url = `https://hotels-api.academlo.tech/hotels${id ? `?cityId=${id}` : ''}`
        setcitySearch(id)
        dispatch(getHotelsThunk(url))

        //resetar para mejorar la esperiencia de usuario.
        setfromTo({
            from: '',
            to: Infinity
        })

        setNameSearch('')
        
    }

  return (
    <article>
        <h4>Cities</h4>
        <ul className="filterCity__ul" onClick={capturarIdCity}>
            <li  className="filterCity__item" >All Cities</li>
            {
                cities?.map(city => (
                    <li className="filterCity__item" key={city.id} id={city.id}>{city.name}</li>
                ))
            }
        </ul>


    </article>
  )
}

export default FilterCity