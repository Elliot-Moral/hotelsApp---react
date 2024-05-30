import { useForm } from "react-hook-form"
import './styles/FilterPrice.css'

const FilterPrice = ({setfromTo}) => {

    const {handleSubmit, reset, register} = useForm()

    function submit(data){
        const from = Number(data.from)
        const to = Number(data.to)

        setfromTo({
            from: data.from === '' ? 0 : from , 
            to: data.to === '' ? Infinity : to
        })

        reset({
            from: '',
            to:''
        })
    }

  return (
    <article>
      <h4>Price</h4>
      <form className="price__from" onSubmit={handleSubmit(submit)}>
        <label>
          <span className="price__span">From</span>
          <input className="price__input" {...register('from')}type="number" />
        </label>
        <label>
          <span className="price__span">To</span>
          <input className="price__input" {...register('to')} type="number" />
        </label>
        <button className="price__btn">Submit</button>
      </form>
    </article>
  )
}

export default FilterPrice