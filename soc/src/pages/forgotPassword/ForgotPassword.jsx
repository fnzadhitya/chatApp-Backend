// import axios from "axios";
import { useRef, useState } from "react";
import "./forgotPassword.css";
// import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
      e.preventDefault()

      try{
          setMessage("")
          setError("")
          setLoading(true)
          await resetPassword(emailRef.current.value)
          setMessage("Check your email inbox for further instructions")
      } catch {
          setError("Failed to reset password")
      }

      setLoading(false)
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">nanasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on <b>nanasocial</b>.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" >
                    <h2 className="text-center mb-4">Password Reset</h2>
                   
                    
                    <div className="w-100 text-center mt-3">
                        <Link to="/login">Login</Link>
                    </div>

            <div className="w-100 text-center mt-2">
                Need account? <Link to="/">Sign Up</Link>
            </div>
          </form>  
      </div>
    </div>
   </div> 
  )
}
