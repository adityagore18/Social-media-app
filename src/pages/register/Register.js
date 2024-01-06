import  {Link}  from "react-router-dom"
import  "./register.scss"

const register = () => {
  return (
    <div className="register">
      <div className="box">
        <div className="left">
            <h1>Welcome to iamsocial !</h1>
            <Link to="/login">
               <button>Login</button>
           </Link>
        </div>
        <div className="right">
            <h1>Signup Form</h1>
            <input type="text" placeholder="Username"/>
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button>Signup</button>
        </div>
       </div>
    </div>
  )
}

export default register
