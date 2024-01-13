import './login.css'

export default function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">TrueSocial</h3>
                <span className="loginDesc">Connect with your loved ones from aynwhere in th universe.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button className="loginButton">Sign In</button>
                    <span className="forgotLogin">Forgot you password?</span>
                    <button className="loginRegisterButton">Sign Up</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}
