const UpcomingEvents = () => {
    return (
        <div className="my-10 bg-slate-900" data-aos="fade-up"data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
            <div className="max-w-6xl mx-auto p-10 text-white">
                
                
                <div className="lg:flex items-center justify-between">
                    <div className="lg:w-1/2 w-full">
                        <h2 className="text-4xl text-slate-900 font-extralight mb-6">Our Foot Steps</h2>
                        <h1 role="heading" className="md:text-5xl text-3xl font-bold leading-10 mt-3 text-theme-light">Overview</h1>
                        <p role="contentinfo" className="text-base leading-5 mt-5 text-slate-200">The automotive industry is a dynamic and multifaceted sector that plays a pivotal role in modern society. It encompasses the design, manufacturing, and distribution of motor vehicles, ranging from cars and trucks to motorcycles and buses. Automotive engineering and technology have evolved significantly over the years, introducing innovations in safety, efficiency, and sustainability.</p>

                        <p role="contentinfo" className="text-base leading-5 mt-5 text-slate-200">In recent years, the automotive industry has been at the forefront of innovation. Technological advancements have led to the development of electric and autonomous vehicles, reshaping the future of transportation. Electric cars, powered by batteries and renewable energy sources, aim to reduce greenhouse gas emissions and combat climate change. Meanwhile, autonomous vehicles equipped with artificial intelligence.</p>

                        <p role="contentinfo" className="text-base leading-5 mt-5 text-slate-200">The automotive sector is a significant contributor to the global economy, generating employment, revenue, and fostering innovation. It plays a vital role in various regions, supporting numerous jobs in manufacturing, sales, and maintenance.</p>
                    </div>
                    <div className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8" role="list">
                        <img src="https://i.ibb.co/0n6DSS3/bgimg.png" className="absolute w-full -ml-12 mt-24" alt="background circle images" />
                        <div role="listitem" className="bg-theme-primary cursor-pointer shadow rounded-lg p-8 relative z-30">
                            <div className="md:flex items-center justify-between">
                                <h2 className="text-2xl font-semibold leading-6 text-slate-200">Innovation and Advancements</h2>
                                <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-slate-200"><span className="font-normal text-base">Explore AI, IoT</span></p>
                            </div>
                            <p className="md:w-80 text-base leading-6 mt-4 text-slate-300">This industry is characterized by a diverse range of companies, from global giants like Toyota and General Motors to niche manufacturers specializing in electric vehicles and luxury cars.</p>
                        </div>
                        <div role="listitem" className="bg-theme-primary cursor-pointer shadow rounded-lg mt-3 flex relative z-30">
                            <div className="w-2.5 h-auto bg-theme-light rounded-tl-md rounded-bl-md"></div>
                            <div className="w-full p-8">
                                <div className="md:flex items-center justify-between">
                                    <h2 className="text-2xl font-semibold leading-6 text-slate-200">Economic Impact</h2>
                                    <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-slate-200"><span className="font-normal text-base">The Future of Mobility</span></p>
                                </div>
                                <p className="md:w-80 text-base leading-6 mt-4 text-slate-300">The automotive industry's continual evolution and adaptability to new trends and challenges make it a dynamic and essential component of the global economy</p>
                            </div>
                        </div>
                        <div role="listitem" className="bg-theme-primary cursor-pointer shadow rounded-lg p-8 relative z-30 mt-7">
                            <div className="md:flex items-center justify-between">
                                <h2 className="text-2xl font-semibold leading-6 text-slate-200">Environmental Responsibility</h2>
                                <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-slate-200"><span className="font-normal text-base">Global Impact</span></p>
                            </div>
                            <p className="md:w-80 text-base leading-6 mt-4 text-slate-300">Sustainability practices, including recycling and reducing waste, have become integral to the manufacturing process, as the industry aims to minimize its carbon footprint and conserve natural resources.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvents;