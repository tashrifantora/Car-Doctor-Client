import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from '../../Provider/AuthProvider'
const CheckOut = () => {
    const service = useLoaderData()
    const { _id, title, price, img } = service;
    const { user } = useContext(AuthContext)

    const handleBookService = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;

        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking)

        fetch('https://car-doctor-server-six-sable.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }

    return (
        <div>
            <h1 className="text-4xl text-center mb-5">{title}</h1>

            <div>

                <form onSubmit={handleBookService}>
                    <div className="grid gird-col-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" defaultValue={user?.displayName} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" name="amount" defaultValue={'$' + price} className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-block bg-red-400 text-white" type="submit" value="Order Confirm" />
                        </div>
                    </div>
                </form>
            </div>
        </div>


    );
};

export default CheckOut;