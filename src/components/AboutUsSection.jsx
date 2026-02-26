import { LayoutGrid, Search, Code2, Smartphone } from "lucide-react";

const AboutUsSection = () => {
    return (
        <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-12">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

                <div className="relative z-10">

                    <div className="absolute -top-14 left-0 text-[60px] sm:text-[80px] md:text-[110px] font-black text-gray-100 uppercase tracking-tight -z-10 select-none leading-none">
                        ABOUT US
                    </div>

                    <h2 className="text-lg sm:text-xl font-medium text-dark mb-1 pt-6 sm:pt-14 relative z-10">
                        Hire Top Website
                    </h2>
                    <h3 className="text-xl sm:text-2xl font-bold text-dark-blue mb-4 relative z-10">
                        Designers & Developers
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base max-w-xl">
                        If you're looking to hire expert website designers and developers,
                        you've come to the right place to construct a website that stands
                        out in aesthetics and functionality. We have the ability to offer a
                        wide range of services. As we have a comprehensive understanding of
                        website design and exposure across sectors all over the world, we
                        also build websites that provide customers with the best first
                        impression on digital platforms. Here's what we look for when hiring
                        web designers to revitalize your company's online presence.
                    </p>

                    <button className="mt-8 bg-secondary hover:bg-dark-blue text-white px-6 py-3 rounded-md text-sm font-medium shadow-sm transition-all focus:ring-2 focus:ring-secondary focus:outline-none">
                        QUICK ENQUIRY
                    </button>
                </div>


                <div className="grid sm:grid-cols-2 gap-6">
                    <FeatureCard
                        icon={<LayoutGrid className="w-6 h-6 text-primary" />}
                        title="Great UI / UX"
                        desc="Our designs have great UI which results in great UX as well."
                    />

                    <FeatureCard
                        icon={<Search className="w-6 h-6 text-primary" />}
                        title="SEO Friendly"
                        desc="Our websites are built with features to help your website rank higher."
                    />

                    <FeatureCard
                        icon={<Code2 className="w-6 h-6 text-primary" />}
                        title="Clean Coding"
                        desc="Coding is kept clean and optimised as per industry standard."
                    />

                    <FeatureCard
                        icon={<Smartphone className="w-6 h-6 text-primary" />}
                        title="Responsive Design"
                        desc="Our Designs are device friendly across all platforms and screen sizes."
                    />
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ icon, title, desc }) => {
    return (
        <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md hover:border-primary/50 transition-all group">
            <div className="flex items-start gap-4">
                <div className="mt-1 group-hover:scale-110 transition-transform duration-300">{icon}</div>
                <div>
                    <h4 className="text-base font-semibold text-dark-blue mb-1 group-hover:text-primary transition-colors">
                        {title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;
