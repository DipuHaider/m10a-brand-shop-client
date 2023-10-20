import Marquee from "react-fast-marquee";

const OurPartners = () => {
    return (
        <div className="max-w-6xl mx-auto my-20" data-aos="fade-up"data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
            <div className="flex flex-col items-center text-center">
                <h2 className="text-4xl text-theme-light font-extralight mb-6">Our Partners</h2>
            </div>
            <Marquee pauseOnHover speed="100">
                <img className="px-12" src="https://i.ibb.co/k68FVLk/boeing-3037b0a6.png" alt="" />
                <img className="px-12" src="https://i.ibb.co/TcYMNWF/dell-09332c44.png" alt="" />
                <img className="px-12" src="https://i.ibb.co/p215MFB/download.png" alt="" />
                <img className="px-12" src="https://i.ibb.co/TmHjL3Y/ibm-bcec6b9a.png" alt="" />
                <img className="px-12" src="https://i.ibb.co/TRgyWyS/microsoft-4a9a93f0.png" alt="" />
                <img className="px-12" src="https://i.ibb.co/47JBJfB/mit-1af911d7.png" alt="" />
            </Marquee> 
        </div>
    );
};

export default OurPartners;