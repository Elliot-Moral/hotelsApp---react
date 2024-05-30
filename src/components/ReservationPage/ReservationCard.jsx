import useCrudToken from "../../hooks/useCrudToken";
import './styles/ReservationCard.css'



const ReservationCard = ({reservation, deleteReservation}) => {



    const initialDate = new Date(reservation.checkIn).getTime();
    const finalDate = new Date(reservation.checkOut).getTime();
    const reservacionDays = ( finalDate - initialDate) / (1000* 60 * 60 * 24);


    function handDelete(){
        const url = `https://hotels-api.academlo.tech/bookings/${reservation.id}`;
        deleteReservation(url, reservation.id, true);
    }

  return (
    <div className="container__reservationCard">

        <div className="reservationCard__main">

            <div className="reservationCard__image">
                <img src={reservation?.hotel.images[0].url} alt="" />
            </div>

            <div className="reservationCard__info">
                <h3>{reservation?.hotel.name}</h3>
                <span>{reservation?.hotel.city.name}, </span>
                <span>{reservation?.hotel.city.country}</span>
                <br />
                <button>Rate an comments this visit...</button>
            </div>

        </div>

        <div className="reservationCard__data">
            <ul className="reservationCard__ul">
                <li className="li_item">
                    <span>Reservations Days </span>
                    <span className="li_data">{reservacionDays}</span>
                </li>
                <li className="li_item">
                    <span>Subtotal Price </span>
                    <span className="li_data" >{ reservacionDays * Number(reservation?.hotel.price) }</span>
                </li>
            </ul>
            <button className="reservationCard__btn" onClick={handDelete}>Delete!</button>
        </div>
    </div>
  )
}

export default ReservationCard