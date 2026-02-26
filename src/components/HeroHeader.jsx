import { Phone, User, Mail, ChevronDown } from "lucide-react";

export default function HeroHeader() {
    return (
        <section className="w-full bg-[#f0f5f9] py-16 px-4 md:px-8 lg:px-24">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">


                <div>
                    <p className="text-[#1a1a1a] mb-4 text-lg font-medium">
                        Welcome to Kushel Digi
                    </p>

                    <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold text-[#1a1a1a] leading-tight mb-6">
                        Revolutionising your business through Technology.
                    </h1>

                    <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-lg">
                        We are a leading company, which has been offering technology solutions across the globe for almost 5 years.
                    </p>


                    <div className="flex flex-col sm:flex-row gap-5 mb-10">
                        <button className="bg-[#2d3a4b] text-white px-8 py-4  font-bold text-sm tracking-wider hover:bg-[#1a2533] transition shadow-lg">
                            QUICK ENQUIRY
                        </button>

                        <button className="flex items-center justify-center gap-3 bg-[#4a90e2] text-white px-8 py-4  font-bold text-sm tracking-wider hover:bg-[#357abd] transition shadow-lg">
                            <Phone size={18} />
                            9045301702
                        </button>
                    </div>


                    <div className="text-sm font-semibold text-gray-700 flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <span className="text-gray-800">• UI/UX DESIGN</span>
                            <span className="text-gray-800">• WEBSITE & APP DEVELOPMENT</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-800">• E-COMMERCE DEVELOPMENT</span>
                        </div>
                    </div>
                </div>


                <div className="relative">

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100 rounded-full blur-3xl opacity-40 -z-10"></div>

                    <div className="bg-[#2d2f31] text-white  shadow-2xl overflow-hidden">
                        <div className="p-8">
                            <h3 className="text-xl font-bold text-center mb-2 px-4">
                                Hire A Top Global Talent To Grow Your Business !
                            </h3>
                            <p className="text-center text-gray-400 text-sm mb-8">
                                Get Free Quote
                            </p>

                            <form className="space-y-4">

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <FormInput placeholder="Your Name*" icon={<User size={18} className="text-gray-400" />} />
                                    <FormInput placeholder="Phone Number*" icon={<Phone size={18} className="text-gray-400" />} />
                                </div>


                                <div className="grid sm:grid-cols-2 gap-4">
                                    <FormInput placeholder="Email Address" icon={<Mail size={18} className="text-gray-400" />} />
                                    <div className="relative">
                                        <select className="w-full bg-white text-gray-800 px-4 py-3  appearance-none outline-none text-sm font-medium">
                                            <option>Services</option>
                                            <option>Web Development</option>
                                            <option>App Development</option>
                                            <option>UI/UX Design</option>
                                        </select>
                                        <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>

                                <p className="text-sm font-semibold text-gray-100 pt-2">
                                    Additional Details
                                </p>


                                <div className="grid sm:grid-cols-2 gap-4">
                                    <FormInput placeholder="Select Budget" />
                                    <FormInput placeholder="Best Start Date" />
                                </div>

                                <button type="submit" className="w-full bg-[#4a90e2] hover:bg-[#357abd] transition-colors py-4  font-bold text-white mt-4 shadow-lg">
                                    Send a Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FormInput({ placeholder, icon }) {
    return (
        <div className="relative">
            <input
                type="text"
                placeholder={placeholder}
                className="w-full bg-white text-gray-800 px-4 py-3 rounded-md outline-none text-sm font-medium placeholder:text-gray-400"
            />
            {icon && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    {icon}
                </div>
            )}
        </div>
    );
}
