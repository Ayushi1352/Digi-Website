import React, { useState } from 'react';
import { MapPin, Mail, Smartphone, ArrowRight, RotateCw } from 'lucide-react';

export default function ContactSection() {
    const [activeTab, setActiveTab] = useState('address');

    return (
        <section className="bg-white py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">


                <div className="animate-fadeIn">
                    <h2 className="text-3xl font-bold text-[#1e2a3b] mb-2">
                        Contact Us
                    </h2>
                    <p className="text-gray-500 mb-10 text-lg">
                        Please Complete The Below Form. We Will Get In Touch With You
                    </p>

                    <form className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Name*"
                                className="w-full bg-[#fcfcfc] border border-gray-100 rounded-sm px-5 py-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all placeholder:text-gray-400"
                            />
                            <input
                                type="text"
                                placeholder="Phone Number*"
                                className="w-full bg-[#fcfcfc] border border-gray-100 rounded-sm px-5 py-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all placeholder:text-gray-400"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                type="email"
                                placeholder="Email Address*"
                                className="w-full bg-[#fcfcfc] border border-gray-100 rounded-sm px-5 py-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all placeholder:text-gray-400"
                            />
                            <input
                                type="text"
                                placeholder="Location"
                                className="w-full bg-[#fcfcfc] border border-gray-100 rounded-sm px-5 py-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all placeholder:text-gray-400"
                            />
                        </div>

                        <input
                            type="text"
                            placeholder="Business Name"
                            className="w-full bg-[#fcfcfc] border border-gray-100 rounded-sm px-5 py-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all placeholder:text-gray-400"
                        />

                        <textarea
                            rows="4"
                            placeholder="Message"
                            className="w-full bg-[#fcfcfc] border border-gray-100 rounded-sm px-5 py-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all placeholder:text-gray-400 resize-none"
                        ></textarea>


                        <div className="flex items-center justify-between bg-white border border-gray-100 rounded-md p-3 w-full sm:w-72 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-7 h-7 border-2 border-gray-200 rounded-sm cursor-pointer hover:border-gray-300 transition-colors"></div>
                                <span className="text-sm font-medium text-gray-700">I'm Not A Robot</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <RotateCw className="text-blue-500 w-8 h-8 opacity-80" />
                                <span className="text-[10px] text-gray-400 uppercase tracking-tighter mt-1 font-bold">reCAPTCHA</span>
                            </div>
                        </div>

                        <button className="bg-[#4a90e2] hover:bg-[#357abd] text-white px-12 py-4 rounded-sm font-bold text-sm tracking-widest transition-all shadow-md hover:shadow-lg flex items-center gap-2 uppercase">
                            Submit <ArrowRight size={18} />
                        </button>
                    </form>
                </div>

                <div className="lg:pl-8">

                    <div className="flex gap-10 border-b border-gray-100 mb-12 relative">
                        <button
                            onClick={() => setActiveTab('address')}
                            className={`pb-4 text-xl font-bold transition-all ${activeTab === 'address' ? 'text-[#4a90e2]' : 'text-gray-700'}`}
                        >
                            Address
                        </button>
                        <button
                            onClick={() => setActiveTab('google')}
                            className={`pb-4 text-xl font-bold transition-all ${activeTab === 'google' ? 'text-[#4a90e2]' : 'text-gray-700'}`}
                        >
                            Google Maps
                        </button>

                        <div className={`absolute bottom-0 h-1 bg-[#4a90e2] transition-all duration-300 ease-in-out ${activeTab === 'address' ? 'w-[80px] left-0' : 'w-[140px] left-[120px]'}`}></div>
                    </div>

                    {activeTab === 'address' ? (
                        <div className="space-y-12 animate-slideUp">
                            <div className="flex gap-10 items-center group">
                                <TeardropIcon icon={<MapPin className="text-blue-600" size={24} />} />
                                <div>
                                    <h4 className="font-extrabold text-[#1e2a3b] text-sm tracking-widest mb-2">
                                        OUR LOCATION
                                    </h4>
                                    <p className="text-gray-500 font-medium">
                                        G-9, First Floor, Sector 63, Noida
                                    </p>
                                </div>
                            </div>


                            <div className="flex gap-10 items-center group">
                                <TeardropIcon icon={<Mail className="text-blue-600" size={24} />} />
                                <div>
                                    <h4 className="font-extrabold text-[#1e2a3b] text-sm tracking-widest mb-2">
                                        SEND US MAIL
                                    </h4>
                                    <p className="text-gray-500 font-medium uppercase">
                                        Info@Kusheldigi.Com
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-10 items-center group">
                                <TeardropIcon icon={<Smartphone className="text-blue-600" size={24} />} />
                                <div>
                                    <h4 className="font-extrabold text-[#1e2a3b] text-sm tracking-widest mb-2">
                                        CALL US
                                    </h4>
                                    <p className="text-gray-500 font-medium">
                                        +91 9045301702
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="w-full h-80 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center animate-fadeIn border border-gray-200">
                            <p className="text-gray-400 font-bold tracking-widest uppercase">Google Maps View</p>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}


function TeardropIcon({ icon }) {
    return (
        <div className="relative shrink-0 flex items-center justify-center w-20 h-20 shadow-xl overflow-hidden"
            style={{
                borderRadius: '50% 50% 0 50%',
                background: 'white',
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.08)'
            }}
        >
            <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                {icon}
            </div>
        </div>
    );
}
