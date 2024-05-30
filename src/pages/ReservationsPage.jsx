import { useEffect } from "react";
import useCrudToken from "../hooks/useCrudToken";
import ReservationCard from "../components/ReservationPage/ReservationCard";
import './styles/ReservationsPage.css'


const ReservationsPage = () => {

    const [reservations, getReservations, ,deleteReservation] = useCrudToken();

    console.log(reservations)

    useEffect(()=>{
        const url = "https://hotels-api.academlo.tech/bookings"
        getReservations(url, true)
    }, [])

  return (
      <article className="conainter__reservation">
        <h2 className="reservation__title">Active Reservations</h2>
        <div className="container__reser_cards">
            {
                
                reservations?.length > 0 ? (reservations?.map( reservation => (
                    <ReservationCard 
                        key={reservation.id}
                        reservation={reservation}
                        deleteReservation={deleteReservation}
                    />
                ))) 
                
                : <h3  className="reservation__title">YOU NOT HAVE ANY RESERVATIONS 😩😭😩🤬</h3>
                
            }
        </div>
    </article>
  )
}

export default ReservationsPage