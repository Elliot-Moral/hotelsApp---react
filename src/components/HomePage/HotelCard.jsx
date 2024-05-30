import { useNavigate } from 'react-router-dom'
import './styles/HotelCard.css'

const HotelCard = ({ hotel }) => {

  const navegateTo = useNavigate()
  function navegateToHotelId(){
    navegateTo(`/hotel/${hotel.id}`)
  }

  return (
    <article className='container__card'>
      <header className='hotel__header'>
        <img src={hotel.images[0].url} alt="" />
      </header>
      <section className='hotel__data'>
        <h3>{hotel.name}</h3>
        <div>{hotel.rating}</div>
        <div>{hotel.city.name}, {hotel.city.country}</div>
        <div>${hotel.price}</div>
      </section>
      <footer className='hotel__body'>
        <button onClick={navegateToHotelId}>See more...</button>
      </footer>
    </article>
  )
}

export default HotelCard