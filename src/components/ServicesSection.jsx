const ServicesSection = () => {
    return (
        <section className="w-full py-16 px-4 sm:px-6 lg:px-12 relative overflow-hidden bg-white">

            <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-100 rounded-full opacity-60" />

            <div className="max-w-7xl mx-auto relative">

                <div className="text-center mb-12">
                    <p className="text-[22px] sm:text-[22px] tracking-widest text-dark font-semibold mb-2">
                        OUR SERVICES
                    </p>
                    <h2 className="text-sm sm:text-md  text-gray-900">
                        We are expert in
                    </h2>
                </div>


                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <ServiceCard
                        image="/images/coding.png"
                        title="UI/UX DESIGN"
                        desc="In today's digital-driven domain, user interface (UI) and user experience (UX) is why we live. Not just because of visual design, user interface and user experience play an important part of any digital marketing strategy and online enterprise."
                    />

                    <ServiceCard
                        image="/images/codingone.png"
                        title="E-COMMERCE DEVELOPMENT"
                        desc="The growth of any business depends on the user experience and customer engagement. Everything is now easy to reach and remotely. Our innovative e-commerce solutions help you scale your business."
                    />

                    <ServiceCard
                        image="/images/codingthree.png"
                        title="WEBSITE & APP DEVELOPMENT"
                        desc="Our team of experts works to develop the ideal website in accordance with your needs and expectations. Hiring a website for your business increases your visibility and encourages customer engagement."
                    />
                </div>


                <div className="flex justify-center mt-12">
                    <button className="bg-secondary hover:bg-dark-blue text-white px-8 py-3 rounded-md text-sm font-medium shadow-sm transition-all focus:ring-2 focus:ring-secondary focus:outline-none">
                        Get Started →
                    </button>
                </div>
            </div>
        </section>
    );
};

const ServiceCard = ({ image, title, desc }) => {
    return (
        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-primary/50 transition-all h-full flex flex-col group ">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 p-2 bg-gray-bg rounded-md flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <img src={image} alt={title} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-sm font-semibold text-dark-blue group-hover:text-primary transition-colors tracking-wide">
                    {title}
                </h3>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                {desc}
            </p>

            <button className="mt-6 text-xs font-semibold text-primary flex items-center gap-2 hover:gap-3 transition-all">
                LEARN MORE
                <span className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center text-[10px] group-hover:bg-primary group-hover:text-white transition-colors">
                    ›
                </span>
            </button>
        </div>
    );
};

export default ServicesSection;
