import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'


const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full rounded " />
                    <div className="absolute h-full p-8 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%] flex items-center rounded">
                        <div className=''>
                            <h2 className='text-7xl font-bold text-white leading-12 mb-5'>Affordable
                                <br />
                                Price For Car <br /> Servicing</h2>
                            <p className='max-w-2xl   mx-auto text-white text-xl mb-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                            <div>
                                <button className="btn btn-active bg-red-400  text-white border-none mr-5">Discover More</button>
                                <button className="btn btn-outline text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-6 transform -translate-y-1/2 right-5 bottom-14">
                        <a href="#slide4" className="btn btn-circle bg-transparent ">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-red-400">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />

                    <div className="absolute h-full p-8 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%] flex items-center rounded">
                        <div className=''>
                            <h2 className='text-7xl font-bold text-white leading-12 mb-5'>Affordable
                                <br />
                                Price For Car <br /> Servicing</h2>
                            <p className='max-w-2xl   mx-auto text-white text-xl mb-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                            <div>
                                <button className="btn btn-active bg-red-400  text-white border-none mr-5">Discover More</button>
                                <button className="btn btn-outline text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex gap-6 transform -translate-y-1/2 right-5 bottom-14">
                        <a href="#slide1" className="btn btn-circle bg-transparent ">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-red-400">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />

                    <div className="absolute h-full p-8 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%] flex items-center rounded">
                        <div className=''>
                            <h2 className='text-7xl font-bold text-white leading-12 mb-5'>Affordable
                                <br />
                                Price For Car <br /> Servicing</h2>
                            <p className='max-w-2xl   mx-auto text-white text-xl mb-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                            <div>
                                <button className="btn btn-active bg-red-400  text-white border-none mr-5">Discover More</button>
                                <button className="btn btn-outline text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex gap-6 transform -translate-y-1/2 right-5 bottom-14">
                        <a href="#slide2" className="btn btn-circle bg-transparent ">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-red-400">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" />

                    <div className="absolute h-full p-8 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%] flex items-center rounded">
                        <div className=''>
                            <h2 className='text-7xl font-bold text-white leading-12 mb-5'>Affordable
                                <br />
                                Price For Car <br /> Servicing</h2>
                            <p className='max-w-2xl   mx-auto text-white text-xl mb-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                            <div>
                                <button className="btn btn-active bg-red-400  text-white border-none mr-5">Discover More</button>
                                <button className="btn btn-outline text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex gap-6 transform -translate-y-1/2 right-5 bottom-14">
                        <a href="#slide3" className="btn btn-circle bg-transparent ">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-red-400">❯</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;