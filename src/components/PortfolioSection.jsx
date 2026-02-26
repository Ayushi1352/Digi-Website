import React from 'react';
import { ArrowLeft, ArrowRight, ArrowRight as ArrowRightIcon } from 'lucide-react';

const PortfolioSection = () => {
    return (
        <section className="w-full py-2 bg-gray-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">


                <div className="text-center relative mb-4 z-10">
                    <div className="w-full font-bold text-[40px] sm:text-[60px] md:text-[90px] font-black text-gray-200/60 uppercase tracking-widest -z-10 select-none whitespace-nowrap">
                        OUR PORTFOLIO
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-dark-blue mb-4 tracking-wider uppercase bg-gray-50/80 inline-block px-4">
                        OUR PORTFOLIO
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                        We design project designed with passion on time, within budget of full value
                    </p>
                </div>


                <div className="flex items-center justify-between gap-4">

                    <button className="hidden sm:flex w-10 h-10 rounded-full border border-gray-300 items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-colors shrink-0 bg-white shadow-sm z-20">
                        <ArrowLeft className="w-4 h-4" />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">

                        <div className="bg-white rounded-lg shadow-md overflow-hidden group relative">

                            <div className="w-full h-80 relative overflow-hidden">
                                <img
                                    src="/images/rectangle.png"
                                    alt="Project 1 Portfolio"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                            </div>


                            <div className="p-6 relative">
                                <h4 className="text-xl font-bold text-gray-800 mb-2 underline whitespace-nowrap overflow-hidden text-ellipsis">www.2ndAmendment.com</h4>
                                <p className="text-gray-500 text-sm">Lorem Ipsum is simply dummy</p>


                                <button className="absolute -top-6 right-6 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:bg-blue-600 hover:scale-110 transition-all border-4 border-white">
                                    <ArrowRightIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>


                        <div className="bg-white rounded-lg shadow-md overflow-hidden group relative">

                            <div className="w-full h-80 relative overflow-hidden">
                                <img
                                    src="/images/rectone.png"
                                    alt="Project 2 Portfolio"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                            </div>


                            <div className="p-6 relative">
                                <h4 className="text-xl font-bold text-gray-800 mb-2 underline whitespace-nowrap overflow-hidden text-ellipsis">www.kickeez.com</h4>
                                <p className="text-gray-500 text-sm">Lorem Ipsum is simply dummy</p>


                                <button className="absolute -top-6 right-6 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:bg-blue-600 hover:scale-110 transition-all border-4 border-white">
                                    <ArrowRightIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>


                    <button className="hidden sm:flex w-10 h-10 rounded-full border border-gray-300 items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-colors shrink-0 bg-white shadow-sm z-20">
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>


                <div className="flex justify-center mt-10 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full border border-blue-400 bg-transparent"></div>
                    <div className="w-2.5 h-2.5 rounded-full border border-blue-400 bg-transparent"></div>
                    <div className="w-2.5 h-2.5 rounded-full border border-blue-400 bg-transparent"></div>
                </div>


                <div className="flex justify-center mt-8 mb-8">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-sm font-medium shadow-sm transition-all flex items-center gap-2">
                        Let's Get Together <ArrowRightIcon className="w-4 h-4" />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default PortfolioSection;
