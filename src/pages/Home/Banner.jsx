const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full scroll-smooth">
                <img src="https://i.ibb.co/yQSSmF3/home-banner-1.jpg" className="w-full" />
                <div className="bg-black bg-opacity-50 absolute w-full h-full p-6">
                    <div className="flex flex-col h-full items-center mx-auto pb-6 space-y-10 justify-center">
                        <h3 className="text-3xl  lg:text-7xl font-semibold leading-5 lg:leading-6 text-theme-primary">LET'S GO PLACES!
</h3>
                        <p className="text-2xl lg:text-3xl font-semibold leading-5 lg:leading-6 text-white">Kicking off our new partnership.</p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle overflow-hidden">❮</a> 
                    <a href="#slide2" className="btn btn-circle overflow-hidden">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/SPdWZxv/home-banner-2.jpg" className="w-full" />
                <div className="bg-black bg-opacity-50 absolute w-full h-full p-6">
                    <div className="flex flex-col h-full items-center mx-auto pb-6 space-y-10 justify-center">
                        <h3 className="text-3xl  lg:text-7xl font-semibold leading-5 lg:leading-6 text-theme-primary">2024 UPCOMING</h3>
                        <p className="text-2xl lg:text-3xl font-semibold leading-5 lg:leading-6 text-white">Extra turbo to punch up your life.</p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle overflow-hidden">❮</a> 
                    <a href="#slide3" className="btn btn-circle overflow-hidden">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/syZTv4C/home-banner-3.jpg" className="w-full" />
                <div className="bg-black bg-opacity-50 absolute w-full h-full p-6">
                    <div className="flex flex-col h-full items-center mx-auto pb-6 space-y-10 justify-center">
                        <h3 className="text-3xl  lg:text-7xl font-semibold leading-5 lg:leading-6 text-theme-primary">OUR BEYOND ZERO VISION</h3>
                        <p className="text-2xl lg:text-3xl font-semibold leading-5 lg:leading-6 text-white">Drive change your way.</p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle overflow-hidden">❮</a> 
                    <a href="#slide1" className="btn btn-circle overflow-hidden">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
