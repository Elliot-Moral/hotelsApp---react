import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import './styles/LoginPage.css'


const LoginPage = () => {

    const {register, handleSubmit, reset} = useForm();
    const [createUser, loginUser, success, erros] = useAuth()

    function capturarDatos(data){
        loginUser(data)
        reset({
            email: '',
            password: '',
        })
    }

    console.log(success)

  return (
    <article className="container__login">

        {
            erros ? <div className="login__mensaje"><p>{erros}</p></div>
            : ''
        }

        {
            success === true || localStorage.getItem('token') ? <div className="login__mensaje login__true"><p>You have logged</p></div> 
            : ''
        }

        <form className="login__form" onSubmit={handleSubmit(capturarDatos)}>
            <h2 className="login__title">Login User</h2>
            <div className="login__content">
                <label>
                    <span>Email</span>
                    <input {...register('email')} type="email" />
                </label>
                <label>
                    <span>Password</span>
                    <input {...register('password')} type="password" />
                </label>
            </div>
            <button className="login__btn">Submit</button>
        </form>
    </article>
  )
}

export default LoginPage