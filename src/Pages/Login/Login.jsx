import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';

const Login = () => {
    const { logIn, user, loading } = useContext(AuthContext);
    const location = useLocation();
    const nevigate = useNavigate()




    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        // LogIn
        logIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                const user = { email };
                console.log(loggedInUser)

                // Get access token
                /* axios.post(`https://car-doctor-server-six-sable.vercel.app/jwt`, user)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {
                            nevigate(location?.state ? location?.state : "/")
                        }
                    }) */

            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left w-1/2 mr-12">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl font-bold text-center">Login</h1>


                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-red-400 text-white" type="submit" value="Login" />
                            </div>
                        </form>
                        <div>
                            <p className='my-3 text-center'>New here ?
                                <Link className='text-red-400 font-semibold' to='/signup'> Sign Up</Link> </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;