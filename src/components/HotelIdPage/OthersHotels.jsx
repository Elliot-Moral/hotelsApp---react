import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import HotelCard from "../HomePage/HotelCard";
import './styles/OthersHotels.css'

const OthersHotels = ({city, id}) => {

    const [ hotelByCity, getHotelByCity ] = useFetch();
  
    console.log(hotelByCity)
  
    useEffect(()=>{

        if(city){
            const url = `https://hotels-api.academlo.tech/hotels?cityId=${city?.id}`;
            getHotelByCity(url);
        }

    }, [city])

    return (
        <section>
            <h3>Others Hotels in your <span>{city?.country}</span></h3>
            <div className="conainter__othersHotels">
                {   //# hago el esfuerzo e enteder la linea siguiente del filter.
                    hotelByCity?.filter(hotel => hotel.id !== id).map(hotel => (
                        
                        //ojo respetar el nombre de las profs de cada componente.
                         <HotelCard
                            key={hotel.id}
                            hotel={hotel}
                        />  
                    ))
                }

            </div>
        </section>
    )
}

export default OthersHotels