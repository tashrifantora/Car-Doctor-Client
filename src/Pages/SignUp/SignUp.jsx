import { Link } from "react-router-dom";
import loginImg from '../../assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const SignUp = () => {
    const { createUser } = useContext(AuthContext)

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
            .then(result => {
                alart(result.user)
            })
            .catch(error => {
                alert(error)
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
                        <h1 className="text-5xl font-bold text-center">Please Sign Up</h1>


                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
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
                                <input className="btn bg-red-400 text-white" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <div>
                            <p className='my-3 text-center'>Already have an account ?
                                <Link className='text-red-400 font-semibold' to='/login'> Login</Link> </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;