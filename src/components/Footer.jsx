import {
    MapPin,
    Mail,
    Phone,
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    Youtube,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#021E3A] text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/world-map.png')] bg-cover bg-center opacity-10"></div>

            <div className="relative max-w-7xl mx-auto px-6 py-14">
                <div className="grid lg:grid-cols-3 gap-10 items-center">
                    <div className="flex items-center gap-4">
                        <img
                            src="/logo/logo.png"
                            alt="Kushel Digi Logo"
                            className="w-48 h-14 object-contain brightness-0 invert"
                        />
                    </div>

                    <div className="flex items-center gap-4 justify-start lg:justify-center">
                        <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
                            <MapPin size={18} />
                        </div>
                        <p className="text-sm text-gray-200">
                            G-9, First Floor, Sector 63, Noida
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start lg:items-center justify-end">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
                                <Mail size={18} />
                            </div>
                            <p className="text-sm text-gray-200">
                                Shubham@Kusheldigi.Com
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
                                <Phone size={18} />
                            </div>
                            <p className="text-sm text-gray-200">9045301702</p>
                        </div>
                    </div>
                </div>

                <div className="mt-14 grid lg:grid-cols-2 gap-8 items-center">
                    <div className="text-sm text-gray-300">
                        © 2023 Kusheldigi. All Rights Reserved.
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-6">
                        <div className="text-sm text-gray-300">
                            About Us | Insights | Blog | Privacy Policy | Sitemap
                        </div>

                        <div className="flex items-center gap-4">
                            <Facebook size={18} />
                            <Instagram size={18} />
                            <Linkedin size={18} />
                            <Twitter size={18} />
                            <Youtube size={18} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}