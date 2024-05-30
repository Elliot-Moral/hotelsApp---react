import React from 'react'
import { useForm } from 'react-hook-form';
import useCrudToken from '../../hooks/useCrudToken';
import './styles/FormReservation.css'


const FormReservation = ({hotelId}) => {

const {register, handleSubmit, reset} = useForm();

const [ ,,CreateReservation ] = useCrudToken()

function submit(data) {
    const url = "https://hotels-api.academlo.tech/bookings"

    const objData = {
        ...data,
        hotelId
    }
    CreateReservation(url, objData, true)

    reset({
        checkIn:'', 
        checkOut:''
    })
}

  return (
    <form className='container__reservationForm' onSubmit={handleSubmit(submit)}>
        <h3 className='reservationForm__title'>To Make A Reservation</h3>
        <div className='reservationForm__data'>
            <label>
                <span>Check-in</span>
                <input {...register('checkIn')} type="date" />
            </label>
            <label>
                <span>Check-out</span>
                <input  {...register('checkOut')} type="date" />
            </label>      
        </div>

        <button className='reservationForm__btn'>Reservar now!</button>
    </form>
  )
}

export default FormReservation