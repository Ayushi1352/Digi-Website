import React from "react";
import { FileCheck, SearchCode, PenTool, LayoutPanelLeft, ClipboardCheck, Phone } from "lucide-react";

const WorkingProcessSection = () => {
    return (
        <section className="w-full py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-[0.2em] mb-20 text-center uppercase">
                    OUR WORKING PROCESS
                </h2>

                <div className="relative mb-0 lg:mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-16 gap-x-8 lg:gap-4 relative z-10">

                        <ProcessStep
                            step="01"
                            label="We Get Your Requirements"
                            icon={<FileCheck className="w-10 h-10 text-white" />}
                            color="#0A2540"
                        />


                        <ProcessStep
                            step="02"
                            label="Market Research & Feasibility Analysis"
                            icon={<SearchCode className="w-10 h-10 text-white" />}
                            color="#EA820B"
                        />


                        <ProcessStep
                            step="03"
                            label="Designing & Get Conformation"
                            icon={<PenTool className="w-10 h-10 text-white" />}
                            color="#FF5714"
                        />


                        <ProcessStep
                            step="04"
                            label="Coding & Development"
                            icon={<LayoutPanelLeft className="w-10 h-10 text-white" />}
                            color="#15828D"
                        />


                        <ProcessStep
                            step="05"
                            label="Testing & Maintenance"
                            icon={<ClipboardCheck className="w-10 h-10 text-white" />}
                            color="#0E4FFF"
                        />
                    </div>
                </div>


                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-20 lg:mt-36">
                    <button className="bg-[#2d3a4b] text-white px-10 py-4 rounded-sm font-bold text-xs tracking-[0.2em] hover:bg-[#1a2533] transition-all shadow-lg flex items-center justify-center min-w-[200px] w-full sm:w-auto">
                        QUICK ENQUIRY
                    </button>

                    <button className="flex items-center justify-center gap-3 bg-[#4a90e2] text-white px-10 py-3 rounded-sm font-bold text-lg tracking-wide hover:bg-[#357abd] transition-all shadow-lg min-w-[220px] w-full sm:w-auto">
                        <Phone size={22} fill="currentColor" />
                        9045301702
                    </button>
                </div>
            </div>
        </section>
    );
};

const ProcessStep = ({ step, label, icon, color }) => {
    return (
        <div className="flex flex-col items-center text-center group">
            <div className="flex flex-col items-center mb-6 w-full px-2">
                <p className="text-sm font-black mb-1 opacity-80" style={{ color }}>Step {step}</p>
                <p className="text-sm sm:text-base font-bold text-gray-800 leading-tight min-h-[40px] flex items-center justify-center">{label}</p>

                <div className="flex flex-col items-center mt-4">
                    <div className="w-[2px] h-8" style={{ backgroundColor: `${color}44` }}></div>
                    <div className="w-2 h-2 rounded-full -mt-1" style={{ backgroundColor: color }}></div>
                </div>
            </div>

            <div className="relative inline-flex items-center justify-center">
                <div
                    className="absolute w-[120px] h-[120px] rounded-full border-2 border-dashed opacity-20 animate-spin-slow"
                    style={{ borderColor: color }}
                />
                <div
                    className="absolute w-[140px] h-[140px] rounded-full border border-dotted opacity-10"
                    style={{ borderColor: color }}
                />

                <div
                    className="w-[90px] h-[90px] rounded-full flex items-center justify-center shadow-xl relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{ backgroundColor: color, boxShadow: `0 10px 25px -5px ${color}66` }}
                >
                    {icon}
                </div>
            </div>
        </div>
    );
};

export default WorkingProcessSection;
