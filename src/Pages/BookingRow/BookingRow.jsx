

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {

    const { _id, img, service, customerName, email, price, status } = booking;



    return (
        <div>
            <tr>
                <th>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>

                <div className="avatar">
                    <div className="rounded w-12 h-12">
                        <img src={img} />
                    </div>
                </div>

                <td>
                    {service}
                </td>
                <td>${price}</td>
                <td>{email}</td>
                <td>Purple</td>
                <th>
                    {
                        status === "confirm" ? <button className="btn btn-sm text-red-500">Confirmed</button>
                            :
                            <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                    }


                </th>
            </tr>

        </div>
    );
};

export default BookingRow;