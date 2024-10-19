import { Link } from "react-router-dom";
import "./login.scss";
const Login = () => {
    return(
        <div className="login">
        <div className="card">
            <div className="left">
                <h1>Hello World</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit sit debitis repellendus. Corrupti quos cumque ipsa officia, assumenda iste vitae. Dolor vitae ipsam repudiandae voluptatibus maiores doloremque magni ab incidunt?
                </p>
                <span>Don't have an account?</span>
                <Link to="/register">
                <button>Register</button>
                </Link>
            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
        </div>
    )   
}

export default Login;