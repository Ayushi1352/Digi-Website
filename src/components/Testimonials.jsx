import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { Play, ArrowLeft, ArrowRight } from "lucide-react";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
    {
        id: 1,
        name: "Harriet Mitchell",
        role: "Director of inbrew",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "Lorem ipsum is simply dummy text of the printing & Typesetting industry. lorem ipsum has been the industry’s standard dummy text ever since the 1500s, an unknown printer took a gallery.",
        videoImage: "https://images.unsplash.com/photo-1600880210119-75ee99bb4823?auto=format&fit=crop&q=80&w=800",
        isVideo: true
    },
    {
        id: 2,
        name: "John Carter",
        role: "CEO of Techify",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "Kushel Digi transformed our digital presence. Their attention to detail and innovative approach helped us scale our operations. We've seen a 40% increase in user engagement since the launch.",
        videoImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800",
        isVideo: true
    },
    {
        id: 3,
        name: "Sarah Jenkins",
        role: "Marketing Manager at FlowState",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        text: "The team at Kushel Digi is exceptional. They don't just build websites; they build experiences. Professional, timely, and always ready with creative solutions to complex problems.",
        videoImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
        isVideo: false
    },
    {
        id: 4,
        name: "David Chen",
        role: "Founder of CloudNine",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        text: "Working with Kushel Digi was the best decision for our startup. Their technical expertise and strategic insights provided us with a competitive edge that far exceeded our expectations.",
        videoImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
        isVideo: false
    }
];

export default function Testimonials() {
    return (
        <section className="bg-[#eef6fb] py-20 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">

                <div className="text-center mb-16">
                    <p className="tracking-[0.3em] text-sm font-bold text-[#4a90e2] uppercase mb-4">TESTIMONIALS</p>
                    <h2 className="text-4xl md:text-4xl font-black text-[#1e2a3b] uppercase">
                        OUR HAPPY <span className="text-[#4a90e2]">CLIENT SAY</span>
                    </h2>
                    <div className="w-24 h-1 bg-[#4a90e2] mx-auto mt-4 rounded"></div>
                </div>


                <div className="relative group">
                    <Swiper
                        modules={[Navigation, Autoplay, Pagination]}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{
                            clickable: true,
                            el: '.custom-pagination',
                            bulletClass: 'swiper-pagination-bullet !w-3 !h-3 !bg-gray-300 transition-all duration-300',
                            bulletActiveClass: '!bg-[#4a90e2] !w-8 rounded-full'
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        className="testimonial-swiper pb-20"
                    >
                        {testimonials.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="grid lg:grid-cols-2 gap-16 items-center">

                                    <div className="space-y-8">
                                        <div className="flex items-center gap-6">
                                            <div className="relative">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl"
                                                />
                                                <div className="absolute -bottom-2 -right-2 bg-[#4a90e2] p-2 rounded-full text-white shadow-lg">
                                                    <Play size={12} fill="currentColor" />
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-2xl font-bold text-[#1e2a3b]">{item.name}</h4>
                                                <p className="text-[#4a90e2] font-semibold">{item.role}</p>
                                            </div>
                                        </div>

                                        <div className="relative">
                                            <svg className="absolute -top-6 -left-8 w-16 h-16 text-blue-100/50 -z-10" fill="currentColor" viewBox="0 0 32 32">
                                                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H7.1c.5-2.2 2.6-3.9 4.9-3.9V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6.9c.5-2.2 2.6-3.9 4.9-3.9V8z" />
                                            </svg>
                                            <p className="text-gray-600 text-xl leading-relaxed italic">
                                                "{item.text}"
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-4 pt-4">
                                            <button className="swiper-button-prev-custom w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#4a90e2] hover:border-[#4a90e2] transition-all cursor-pointer">
                                                <ArrowLeft size={20} />
                                            </button>
                                            <button className="swiper-button-next-custom w-12 h-12 rounded-full bg-[#4a90e2] flex items-center justify-center text-white hover:bg-[#357abd] transition-all shadow-lg cursor-pointer">
                                                <ArrowRight size={20} />
                                            </button>
                                        </div>
                                    </div>


                                    <div className="relative overflow-hidden  group/video">
                                        <img
                                            src={item.videoImage}
                                            alt="testimonial video"
                                            className="w-full h-[450px] object-cover transition-transform duration-700 group-hover/video:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover/video:bg-black/40 transition-colors"></div>


                                        <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                                            <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover/video:scale-110">
                                                <div className="w-0 h-0 border-l-[20px] border-l-[#4a90e2] border-y-[15px] border-y-transparent ml-2"></div>
                                            </div>
                                        </div>


                                        {item.isVideo && (
                                            <div className="absolute top-6 left-6 bg-[#4a90e2] text-white text-[10px] font-bold tracking-widest px-4 py-1.5 rounded-full uppercase shadow-lg">
                                                Video Review
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="custom-pagination !absolute bottom-0 left-0 flex gap-3 justify-start !w-auto"></div>
                </div>
            </div>


            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/30 -skew-x-12 translate-x-1/2 -z-0"></div>
        </section>
    );
}
