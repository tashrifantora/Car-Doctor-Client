import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Service = ({ product }) => {
    const { _id, title, price, img } = product
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={img} alt="services" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions justify-end">
                        <p className="text-xl"><span className="text-xl text-red-400 font-bold">Price:</span> ${price}</p> <BsArrowRight className="text-2xl text-red-400"></BsArrowRight>
                    </div>
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn bg-red-400 text-white">Book Now</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Service;