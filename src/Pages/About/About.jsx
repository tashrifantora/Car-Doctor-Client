import img1 from '../../assets/images/about_us/parts.jpg'
import img2 from '../../assets/images/about_us/person.jpg'


const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 my-16">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative'>
                        <img src={img2} className=' w-3/4
                             rounded-lg shadow-2xl' alt="" />
                        <img src={img1} className='w-1/2 rounded-lg shadow-2xl absolute -bottom-24 right-4 border-8 border-white' alt="" />
                    </div>
                    <div className='lg:w-1/2 mt-8'>
                        <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                        <p className="py-8">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                        <p className='mb-5'>
                            the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.
                        </p>
                        <button className="btn bg-red-400 text-white">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;