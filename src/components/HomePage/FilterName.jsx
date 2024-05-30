import React, { useRef } from 'react'
import './styles/FilterName.css'

const FilterName = ({setNameSearch}) => {

    const inputSearch = useRef();

    function capturarName(e){
        e.preventDefault()
        setNameSearch(inputSearch.current.value.trim().toLowerCase())
    }
  return (
    <div className='container__filtername'>
        <form className='name__form' onSubmit={capturarName}>
            <input type="text" name="" id="" ref={inputSearch}/>
            <button>Search</button>
        </form>
    </div>

  )
}

export default FilterName