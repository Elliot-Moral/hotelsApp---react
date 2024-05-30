import { useEffect } from "react";
import useCrudToken from "../hooks/useCrudToken";
import ReservationCard from "../components/ReservationPage/ReservationCard";

const ReservationsPage = () => {

    const [reservations, getReservations, ,deleteReservation] = useCrudToken();

    console.log(reservations)

    useEffect(()=>{
        const url = "https://hotels-api.academlo.tech/bookings"
        getReservations(url, true)
    }, [])

  return (
      <article>
        <h2>Active Reservations</h2>
        <div>
            {
                
                reservations?.length > 0 ? (reservations?.map( reservation => (
                    <ReservationCard 
                        key={reservation.id}
                        reservation={reservation}
                        deleteReservation={deleteReservation}
                    />
                ))) 
                
                : <h3>YOU NOT HAVE ANY RESERVATIONS 😩😭😩🤬</h3>
                
            }
        </div>
    </article>
  )
}

export default ReservationsPage