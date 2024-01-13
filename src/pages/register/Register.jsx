import './register.css'

export default function Register() {
  return (
    <div className='login'>
         <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">TrueSocial</h3>
                <span className="loginDesc">Connect with your loved ones from aynwhere in th universe.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                <input placeholder="Username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <input placeholder="Confirm password" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Sign In</button>
                </div>
            </div>
        </div>
    </div>
  )
}
