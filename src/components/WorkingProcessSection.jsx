import React from "react";
import { FileCheck, SearchCode, PenTool, LayoutPanelLeft, ClipboardCheck, Phone } from "lucide-react";

const WorkingProcessSection = () => {
    return (
        <section className="w-full py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-widest mb-24 text-center uppercase">
                    OUR WORKING PROCESS
                </h2>

                <div className="relative mb-20">

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-16 lg:gap-4 relative z-10">

                        <ProcessStep
                            step="01"
                            label="We Get Your Requirements"
                            icon={<FileCheck className="w-10 h-10 text-white" />}
                            color="#0A2540"
                            isTop={true}
                        />


                        <ProcessStep
                            step="02"
                            label="Market Research & Feasibility Analysis"
                            icon={<SearchCode className="w-10 h-10 text-white" />}
                            color="#EA820B"
                            isTop={false}
                        />


                        <ProcessStep
                            step="03"
                            label="Designing & Get Conformation"
                            icon={<PenTool className="w-10 h-10 text-white" />}
                            color="#FF5714"
                            isTop={true}
                        />


                        <ProcessStep
                            step="04"
                            label="Coding & Development"
                            icon={<LayoutPanelLeft className="w-10 h-10 text-white" />}
                            color="#15828D"
                            isTop={false}
                        />


                        <ProcessStep
                            step="05"
                            label="Testing & Maintenance"
                            icon={<ClipboardCheck className="w-10 h-10 text-white" />}
                            color="#0E4FFF"
                            isTop={true}
                        />
                    </div>
                </div>


                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-36">
                    <button className="bg-[#2d3a4b] text-white px-10 py-4 rounded-sm font-bold text-xs tracking-[0.2em] hover:bg-[#1a2533] transition-all shadow-lg flex items-center justify-center min-w-[200px]">
                        QUICK ENQUIRY
                    </button>

                    <button className="flex items-center justify-center gap-3 bg-[#4a90e2] text-white px-10 py-3 rounded-sm font-bold text-lg tracking-wide hover:bg-[#357abd] transition-all shadow-lg min-w-[220px]">
                        <Phone size={22} fill="currentColor" />
                        9045301702
                    </button>
                </div>
            </div>
        </section>
    );
};

const ProcessStep = ({ step, label, icon, color, isTop }) => {
    return (
        <div className="flex flex-col items-center text-center relative group">

            {isTop && (
                <div className="absolute -top-16 w-full flex flex-col items-center">
                    <p className="text-xs sm:text-[13px] font-bold text-gray-700 mb-0.5 whitespace-nowrap">{label}</p>
                    <p className="text-xl font-black mb-1" style={{ color }}>Step {step}</p>
                    <div className="w-[1.5px] h-6" style={{ backgroundColor: color }}></div>
                    <div className="w-2 h-2 rounded-full -mt-0.5" style={{ backgroundColor: color }}></div>
                </div>
            )}


            <div className="relative inline-flex items-center justify-center">

                <div
                    className="absolute w-[130px] h-[130px] rounded-full border-2 border-transparent border-t-inherit border-b-inherit opacity-30"
                    style={{ borderColor: color, borderTopColor: color, borderBottomColor: color }}
                />
                <div
                    className="absolute w-[150px] h-[150px] rounded-full border border-transparent border-l-inherit border-r-inherit opacity-20"
                    style={{ borderColor: color, borderLeftColor: color, borderRightColor: color }}
                />

                <div
                    className="w-[100px] h-[100px] rounded-full flex items-center justify-center shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundColor: color, boxShadow: `0 15px 35px -10px ${color}88` }}
                >
                    {icon}
                </div>
            </div>


            {!isTop && (
                <div className="absolute -bottom-24 w-full flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full mb-0" style={{ backgroundColor: color }}></div>
                    <div className="w-[1.5px] h-6 mb-1" style={{ backgroundColor: color }}></div>
                    <p className="text-xl font-black mb-0.5" style={{ color }}>Step {step}</p>
                    <p className="text-xs sm:text-[13px] font-bold text-gray-700 leading-tight whitespace-nowrap">{label}</p>
                </div>
            )}
        </div>
    );
};

export default WorkingProcessSection;
