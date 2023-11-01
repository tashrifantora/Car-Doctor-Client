import { useLoaderData } from "react-router-dom";
import Service from "../Service/Service";


const Services = () => {

    const products = useLoaderData();
    console.log(products)

    return (
        <div>
            <div>
                <h3 className="text-2xl text-red-400 font-bold text-center mb-3">Service</h3>
                <h1 className="text-5xl font-bold text-center mb-4">Our Service Area</h1>
                <p className="text-lg text-center leading-9 max-w-3xl mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
                {
                    products.map(product => <Service
                        key={product._id}
                        product={product}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;