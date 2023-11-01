import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { data } from "autoprefixer";
import BookingRow from "../BookingRow/BookingRow";
import axios from "axios";

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    const uri = `https://car-doctor-server-six-sable.vercel.app/bookings?email=${user?.email}`

    useEffect(() => {

        axios.get(uri, { withCredentials: true })
            .then(res => {
                setBookings(res.data)
            })
        // fetch(uri)
        //     .then(res => res.json())
        //     .then(data => {
        //         setBookings(data)
        //     })

    }, [])


    const handleDelete = (id) => {
        const prossid = confirm("Are you sure !!")
        if (prossid) {
            fetch(`https://car-doctor-server-six-sable.vercel.app/bookings/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted succesfull ')
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining)
                    }
                })
        }
    }


    const handleBookingConfirm = (id) => {
        fetch(`https://car-doctor-server-six-sable.vercel.app/bookings/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: "Confirm" })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id);

                    const updated = bookings.find(booking => booking._id === id)

                    updated.status = "confirm";
                    const newBooking = [updated, ...remaining]
                    setBookings(newBooking)
                }
            })
    }

    return (
        <div>
            <h1 className="text-4xl">Booking:- {bookings.length}</h1>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </thead>
                    </table>
                    <div>
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            ></BookingRow>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Bookings;