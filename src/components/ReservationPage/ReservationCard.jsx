import useCrudToken from "../../hooks/useCrudToken";

const ReservationCard = ({reservation, deleteReservation}) => {



    const initialDate = new Date(reservation.checkIn).getTime();
    const finalDate = new Date(reservation.checkOut).getTime();
    const reservacionDays = ( finalDate - initialDate) / (1000* 60 * 60 * 24);


    function handDelete(){
        const url = `https://hotels-api.academlo.tech/bookings/${reservation.id}`;
        deleteReservation(url, reservation.id, true);
    }

  return (
    <div>
        <div>
            <div>
                <img src={reservation?.hotel.images[0].url} alt="" />
            </div>
            <h3>{reservation?.hotel.name}</h3>
            <div>
                <span>{reservation?.hotel.city.name}, </span>
                <span>{reservation?.hotel.city.country}</span>
                <button>Rate an comments this visit...</button>
            </div>
        </div>
        <div>
            <ul>
                <li>
                    <span>Reservations Days </span>
                    <span>{reservacionDays}</span>
                </li>
                <li>
                    <span>Subtotal Price </span>
                    <span>{ reservacionDays * Number(reservation?.hotel.price) }</span>
                </li>
            </ul>
            <button onClick={handDelete}>Delete!</button>
        </div>
    </div>
  )
}

export default ReservationCard