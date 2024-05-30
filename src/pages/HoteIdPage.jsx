import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
// import { boxicons } from 
import OthersHotels from "../components/HotelIdPage/OthersHotels";
import MapHotel from "../components/HotelIdPage/MapHotel";
import FormReservation from "../components/HotelIdPage/FormReservation";
//Pigeon-maps es una libreria.
import './styles/HoteIdPage.css'


const HomeIdPage = () => {

  //## const idHotel = useParams(); //  retorno => {id: '1'}
  //## Mejor asi.

  const { id } = useParams(); 
  
  const [ hotel, getHotel ] = useFetch();
  

  useEffect(()=>{
    const url = `https://hotels-api.academlo.tech/hotels/${id}`;
    getHotel(url);
  }, [id])

  //genearar estrellas segun el ranking
  function generateStarts(number){
    let index = 0;
    let arr_start = [];
    for (let index = 0; index < number; index++) {
      arr_start.push('star')
    }
    return arr_start;
  }

  return (
    <article className="container__pageid">

      <div className="pageid__mainInfo">
          <h2>{hotel?.name}</h2>

          <div className="pageid__starts">
            {
              (

                hotel?.rating[0] > 0 ? generateStarts(Number(hotel?.rating[0])).map(star => (
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZtJREFUSEu11T1oFkEQxvFf8KMStDBqKQQJNtrYBCKIomIULNROFAULu3RCtFUsraxsVLQUokgIaCAoqSwSG7USS7URQrQwfuzACsfl3nv35M3CcXd7s/PfmWdmb8g6j6F19q8LYCNe4DeOYbVkc10A5/EwO43nR4MGLGFfdvoW+wcJOIyXNYeHMN8PUpqi55ioOXuK04MAjOIdawriT9JkBB/bINUIjuAkduRrZ74PY0MPJ7/wFV/wuXKPiOdiTRWwjC39Qi78HrBddcDVtOO7hQ7azCJ1l3C/Doj3y7jXkO9S7necxcy/BU1VdA6PEZ3bZYQW0eGL1UW9yvQEprGpkPABx1NqPtXt2/og9AhdSsZBvG4ybAMsYKzEezr4bqRob3YBRP5/dNAhdh9RrBm9IhjHq8Ldh1k03FaslGpwDbcbAHfy3GTDtzPptH1SCniGUxXjOIsupLk3ee5ALuU9FZvonyulgKjp7fiZxbuVn6vrN2MqzV/PWkWJ7i4FzGJbOikv4n0fLfbiAb7haCmgg77tpqU/nP8G/gU/zz8ZHLjd4wAAAABJRU5ErkJggg=="/>
                )) : ''
              )
            }
          </div>
          <span>{hotel?.rating}</span>
      </div>


      <div className="pageid__images">

          <div className="page__img">
            <img src={hotel?.images[0].url} alt="" />
          </div>

          {
            hotel && (
              <MapHotel lat={hotel?.lat} lon={hotel?.lon}/>
            )
          }

      </div>


      <div>{hotel?.city.name}, {hotel?.city.country}</div>
      <div>
        <i className="bx bx-map"></i>
        <address>{hotel?.address}</address>
      </div>
      <p>{hotel?.description}</p>

      <section>
        {
          localStorage.getItem("token") ? (  <FormReservation hotelId={hotel?.id}/> ) 
          : <h3>If you want to do a reservation login <Link to="/login" >Login In</Link> </h3>
        }
       
      </section>
        
      <OthersHotels city={hotel?.city} id={hotel?.id}/>
   


    </article>
  )
}

export default HomeIdPage