import React from 'react'
import { useForm } from 'react-hook-form';
import useCrudToken from '../../hooks/useCrudToken';

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
    <form onSubmit={handleSubmit(submit)}>
        <h3>if you want a room book, please, give me your:</h3>
        <label>
            <span>Check-in</span>
            <input {...register('checkIn')} type="date" />
        </label>
        <label>
            <span>Check-out</span>
            <input  {...register('checkOut')} type="date" />
        </label>
        <button>Reservar now!</button>
    </form>
  )
}

export default FormReservation