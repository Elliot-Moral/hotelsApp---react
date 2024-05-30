import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHotelsThunk } from '../store/slices/products.slice';
import HotelCard from '../components/HomePage/HotelCard';
import './styles/HomePage.css'
import FilterName from '../components/HomePage/FilterName';
import FilterCity from '../components/HomePage/FilterCity';
import FilterPrice from '../components/HomePage/FilterPrice';

const HomePage = () => {

    //ojo estado solo para ser usardo por el componente FilterName
    const [nameSearch, setNameSearch] = useState('')

    //ojo estado solo para ser usardo por el componente FilterCity
    const [citySearch, setcitySearch] = useState('')

    //ojo estado solo para ser usardo por el componente FilterCity
    const [fromTo, setfromTo] = useState({
        from: 0,
        to: Infinity
    })



   const produtos = useSelector(state => state.products)
   console.log("🚀 ~ HomePage ~ produtos:", produtos)


   const dispatch = useDispatch();

   useEffect(()=>{
    const rul = 'https://hotels-api.academlo.tech/hotels';
    dispatch(getHotelsThunk(rul));
    
}, [])

function cbFilter(hotel){
    
    //## Este filtro usa un estado citySearch que se usa como prod en el componente
    //## filtrar desde el frond.
    // const filterCity = hotel.city.id == citySearch
    
    /*## METODO includes() ES UNA MARAVILLA DE LA INGENERIA UFFF LO AMO!!!!*/
    const filterName = hotel.name.toLowerCase().includes(nameSearch)
    const price = Number(hotel.price)
    
    const filterByPrice = price >= fromTo.from && price <= fromTo.to;

    return filterName && filterByPrice;

   }
    
  return (
    <div className='container__home'>

        <FilterName setNameSearch={setNameSearch}/>

        <aside className='container__aside'>
            <section className='container__filters'>
                <h3>Filters</h3>
                <FilterPrice setfromTo={setfromTo}/>
                <FilterCity 
                    setfromTo={setfromTo}
                    setNameSearch={setNameSearch}
                    setcitySearch={setcitySearch}
                />
            </section>
        </aside>

        <div className='container__cards'>
            {
                produtos?.filter(cbFilter).map(hotel => (
                    <HotelCard
                        key={hotel.id}
                        hotel={hotel}
                    />               
                ))
            }
        </div>



    </div>
  )
}

export default HomePage