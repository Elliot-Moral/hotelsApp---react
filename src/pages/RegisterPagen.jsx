import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth";

const RegisterPagen = () => {

const {register, handleSubmit, reset} = useForm();
const [createUser] = useAuth()

function capturarDatos(data){
    createUser(data)
    reset({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        gender: 'male'
    })
}

  return (
    <section>
        <form onSubmit={handleSubmit(capturarDatos)}>
            <h2>Register</h2>
            <div>
                <label>
                    <span>First name</span>
                    <input {...register('firstName')} type="text" />
                </label>
                <label>
                    <span>Last name</span>
                    <input {...register('lastName')} type="text" />
                </label>
                <label>
                    <span>Email</span>
                    <input {...register('email')}  type="email" />
                </label>
                <label>
                    <span>Password</span>
                    <input {...register('password')} type="password" />
                </label>
                <label>
                    <span>Gender</span>
                    <select {...register('gender')}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>
            </div>
            <button>Submit</button>    
            </form>
    </section>
  )
}

export default RegisterPagen