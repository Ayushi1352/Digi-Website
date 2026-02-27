import React from "react";

const PlatformIcon = ({ children }) => (
    <div className="w-24 h-24 sm:w-28 sm:h-28 bg-white shadow-sm flex items-center justify-center shrink-0 hover:shadow-md transition-shadow rounded-lg">
        {children}
    </div>
);

const PlatformsSection = () => {
    return (
        <section className="w-full py-16 bg-gray-50 flex flex-col items-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-700 tracking-wider mb-10 text-center uppercase">
                We Use This Platform
            </h2>

            <div className="w-full max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">


                    <PlatformIcon>
                        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-10 h-10 text-[#61dafb]">
                            <circle cx="0" cy="0" r="2.05" fill="currentColor" />
                            <g stroke="currentColor" strokeWidth="1" fill="none">
                                <ellipse rx="11" ry="4.2" />
                                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                            </g>
                        </svg>
                    </PlatformIcon>


                    <PlatformIcon>
                        <svg viewBox="0 0 54 64" className="w-10 h-10">
                            <path d="M37.95 24.64l-14.07 14.1 14.07 14.1L54 38.74 37.95 24.64z" fill="#02569B" />
                            <path d="M54 24.64l-16.05-16.1-9.92 9.93L44.08 34.57 54 24.64z" fill="#0175C2" />
                            <path d="M16.05 46.54L0 62.64h16.05l9.92-9.93-9.92-6.17z" fill="#39CEFD" />
                            <path d="M16.05 0h-16.05l37.95 37.96 16.05-16.05L16.05 0z" fill="#54C5F8" />
                        </svg>
                    </PlatformIcon>


                    <PlatformIcon>
                        <svg viewBox="0 0 100 100" className="w-10 h-10">
                            <path d="M100 100L0 0v100h100z" fill="#F88909" />
                            <path d="M0 0l50 50L0 100V0z" fill="#7F52FF" />
                        </svg>
                    </PlatformIcon>


                    <PlatformIcon>
                        <div className="w-12 h-12 bg-[#21759b] rounded-full flex items-center justify-center text-white font-serif text-3xl pb-1">W</div>
                    </PlatformIcon>


                    <PlatformIcon>
                        <div className="w-14 h-10 bg-[#777bb4] rounded-full flex items-center justify-center text-white font-bold text-sm">php</div>
                    </PlatformIcon>


                    <PlatformIcon>
                        <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#FF2D20]">
                            <path fill="currentColor" d="M15.42 16.63L12 18.57V12.91L15.42 16.63ZM12 9.89L7.26 7.21L12 4.51L16.74 7.21L12 9.89ZM7.26 8.71L10.37 10.48V16L7.26 14.22V8.71ZM13.63 10.48L16.74 8.71V14.22L13.63 16V10.48ZM12 0L0 6.8V17.2L12 24L24 17.2V6.8L12 0Z" />
                        </svg>
                    </PlatformIcon>


                    <PlatformIcon>
                        <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#3DDC84]">
                            <path fill="currentColor" d="M17.65 6.09L19.46 2.96L18.42 2.36L16.54 5.6C15.17 4.96 13.63 4.6 12 4.6C10.37 4.6 8.83 4.96 7.46 5.6L5.58 2.36L4.54 2.96L6.35 6.09C4.16 7.37 2.44 9.33 1.5 11.75H22.5C21.56 9.33 19.84 7.37 17.65 6.09ZM8.25 9.75C7.63 9.75 7.12 9.24 7.12 8.62C7.12 8 7.63 7.5 8.25 7.5C8.87 7.5 9.38 8 9.38 8.62C9.38 9.24 8.87 9.75 8.25 9.75ZM15.75 9.75C15.13 9.75 14.62 9.24 14.62 8.62C14.62 8 15.13 7.5 15.75 7.5C16.37 7.5 16.88 8 16.88 8.62C16.88 9.24 16.37 9.75 15.75 9.75ZM22.5 12.5H1.5V19.5C1.5 20.6 2.4 21.5 3.5 21.5H20.5C21.6 21.5 22.5 20.6 22.5 19.5V12.5Z" />
                        </svg>
                    </PlatformIcon>




                    <PlatformIcon>
                        <svg viewBox="0 0 24 24" className="w-10 h-10 text-black">
                            <path fill="currentColor" d="M12 2C13.29 2 14.65 0 16 0C16 1.45 14 2 12.8 2C11.51 2 10.22 4.15 10.22 5.51C11.66 5.51 13.2 4 14.15 2.87C13.5 2 12.8 2 12 2ZM13.82 6.65C13.62 6.65 13.4 6.68 13.16 6.74C11.37 7.24 9.24 5.9 7.42 5.9C5.51 5.9 3 7.13 3 10.8C3 14.28 4.75 18 6.4 20.52 7.78 22.69 9.68 22.75 10.63 22.75C11.62 22.75 12.42 22.15 13.9 22.15C15.4 22.15 16.1 22.75 17.15 22.75C18.15 22.75 20 20.9 21.3 18.9 22.5 17 22.82 16.16 22.82 16.16C22.82 16.16 20.08 15 20.08 12.02C20.08 9.33 22.38 8 22.38 8C20.18 5 18 6.1 17.06 6.22C15.82 6.36 14.62 6.65 13.82 6.65Z" />
                        </svg>
                    </PlatformIcon>

                </div>
            </div>
        </section>
    );
};

export default PlatformsSection;
