import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

const LoginPage = () => {

    const {register, handleSubmit, reset} = useForm();
    const [createUser, loginUser] = useAuth()

    function capturarDatos(data){
        loginUser(data)
        // console.log(data)
        reset({
            email: '',
            password: '',
        })
    }

  return (
    <article>
        <form onSubmit={handleSubmit(capturarDatos)}>
            <h2>Login User</h2>
            <div>
            <label>
                <span>Email</span>
                <input {...register('email')} type="email" />
            </label>
            <label>
                <span>Password</span>
                <input {...register('password')} type="password" />
            </label>
            </div>
            <button>Submit</button>
            </form>
    </article>
  )
}

export default LoginPage