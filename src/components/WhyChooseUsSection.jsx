import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const WhyChooseUsSection = () => {
    return (
        <section className="w-full py-20 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">


                    <div className="order-2 lg:order-1">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 uppercase tracking-wide">
                            WE ARE KNOW FOR
                        </h2>

                        <div className="space-y-6">
                            <FeatureItem text="99.9% Uptime with web acceleration. Caching and compression enabled High-Traffic Websites & Apps development service to scale up sales and support hundreds of thousands of users in a fast, reliable manner." />

                            <FeatureItem text="Clear terms and conditions, Robust data security to protect your customers' information. Providing Complete Ownership and Control your project. No Fake Commitment, Delivery on time" />

                            <FeatureItem text="Free Website Audit, Quick Review, 24x7 tech support. Easy to use complete Website Application end-to-end Analytics With Accelerated Mobile Pages (AMP)" />

                            <FeatureItem text="Use of Latest technologies like React Web Development, Vue JS Web Development, NodeJS Web Developers for web development & Website design service in India." />

                            <FeatureItem text="Website UX Ui Design, Wireframing, Prototyping in figma before actually developing the webpages to make sure we're heading towards the right direction." />
                        </div>

                        <button className="mt-10 bg-primary hover:bg-dark-blue text-white px-8 py-3 text-sm font-medium shadow-sm transition-all flex items-center gap-2 rounded-sm focus:ring-2 focus:ring-primary focus:outline-none">
                            CALL NOW <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>


                    <div className="order-1 lg:order-2 relative flex justify-center items-center h-full min-h-[400px]">

                        {/* <div className="absolute inset-0 flex items-center justify-center -z-10 text-gray-200">
                            <img src="/images/Vector.png" alt="blob" />
                        </div> */}


                        <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full overflow-hidden border-8 border-white  relative z-10 bg-gray-100 flex items-end justify-center">

                            <img src="/images/Vector.png" alt="blob" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const FeatureItem = ({ text }) => {
    return (
        <div className="flex items-start gap-4">
            <div className="mt-1 shrink-0">
                <CheckCircle2 className="w-5 h-5 text-green-500 fill-green-50" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
                {text}
            </p>
        </div>
    );
};

export default WhyChooseUsSection;
