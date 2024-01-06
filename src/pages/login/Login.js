import  {Link}  from "react-router-dom"
import "./login.scss"

const login = () => {
  return (
    <div className="login">
       <div className="box">
        <div className="left">
            <h1>Welcome to iamsocial !</h1> 
     
             <Link to="/register"><button>SignUp</button></Link>
            
             
        </div>
        <div className="right">
            <h1>Login Form</h1>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
           
            <button>Login</button>
            
            
        </div>
       </div>
    </div>
  )
}

export default login
