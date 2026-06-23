import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react"
import { motion } from "motion/react"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { heroSlides } from "../data/services"

import "swiper/css"
import "swiper/css/pagination"

const trustItems = ["Certified Engineers", "Fast Booking", "London Service"]

function HeroSlider() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-[92px]">
      <div className="relative w-full overflow-hidden bg-brand-navy">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,28,61,0.90)_0%,rgba(7,28,61,0.72)_42%,rgba(7,28,61,0.28)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,28,61,0.12)_0%,rgba(7,28,61,0.08)_48%,rgba(7,28,61,0.62)_100%)]" />

        <div className="absolute left-0 top-0 h-full w-[55%] bg-[radial-gradient(circle_at_18%_28%,rgba(255,138,0,0.20),transparent_38%)]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5200, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="relative z-10 min-h-[calc(100svh-92px)] sm:min-h-[620px] lg:min-h-[680px]"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="mx-auto flex min-h-[calc(100svh-92px)] w-full max-w-[1380px] items-center px-5 py-14 sm:min-h-[620px] sm:px-8 lg:min-h-[680px] lg:px-10 xl:px-12">
                <div className="max-w-[790px]">
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/22 bg-white/12 px-4 py-2 font-nav text-[11px] font-black uppercase tracking-[0.14em] text-white shadow-lg backdrop-blur-md sm:text-xs"
                  >
                    <Sparkles size={14} className="text-brand-orange" />
                    {slide.eyebrow}
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.08 }}
                    className="mt-6 max-w-[820px] font-display text-[36px] font-black leading-[1.08] tracking-[-0.035em] text-white drop-shadow-[0_12px_34px_rgba(0,0,0,0.28)] sm:text-[52px] lg:text-[66px] xl:text-[74px]"
                  >
                    {slide.title}
                    <span className="mt-1 block max-w-[720px] text-brand-orange">
                      {slide.accent}
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.16 }}
                    className="mt-5 max-w-[650px] text-[16px] font-semibold leading-8 text-white/88 drop-shadow sm:text-[18px]"
                  >
                    {slide.text}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.24 }}
                    className="mt-8 flex flex-wrap items-center gap-4"
                  >
                    <a
                      href="#"
                      className="group inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-4 font-nav text-sm font-black text-white shadow-[0_18px_42px_rgba(255,138,0,0.36)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 sm:px-8"
                    >
                      {slide.primaryBtn}
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </a>

                    <a
                      href="#"
                      className="inline-flex items-center rounded-full border border-white/28 bg-white/12 px-7 py-4 font-nav text-sm font-black text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-brand-navy sm:px-8"
                    >
                      {slide.secondaryBtn}
                    </a>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.32 }}
                    className="mt-8 flex flex-wrap gap-3"
                  >
                    {trustItems.map((item) => (
                      <div
                        key={item}
                        className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2.5 font-nav text-xs font-extrabold text-white/90 backdrop-blur-md sm:text-sm"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-brand-orange"
                        />
                        {item}
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default HeroSlider