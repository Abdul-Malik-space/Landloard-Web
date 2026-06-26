import { motion } from "motion/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react"

import "swiper/css"
import "swiper/css/navigation"

const accreditations = [
  {
    name: "City & Guilds",
    image: "/city-guide.png",
  },
  {
    name: "EAI Recognised",
    image: "/eai.png",
  },
  {
    name: "Gas Safe",
    image: "/gas-safe.png",
  },
  {
    name: "IFSM Member",
    image: "/ifsm.png",
  },
  {
    name: "Landlords Property Checks",
    image: "/logo.png",
  },
  {
    name: "Verified Contractor",
    image: "/verify.jpg",
  },
  {
    name: "Trustmark",
    image: "/trust.jpg",
  },
]

function AccreditationsSection() {
  return (
    <section className="relative overflow-hidden bg-brand-light py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#f5f8fc_0%,#ffffff_48%,#f5f8fc_100%)]" />
      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1240px] px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-[850px] text-center"
        >
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange text-white shadow-[0_16px_35px_rgba(255,138,0,0.25)]">
            <ShieldCheck size={28} />
          </div>

          <p className="font-nav text-sm font-black uppercase tracking-[0.18em] text-brand-orange">
            Trusted & Certified
          </p>

          <h2 className="mt-3 font-display text-[32px] font-black leading-[1.14] tracking-[-0.03em] text-brand-navy sm:text-[42px]">
            Accreditations
          </h2>

          <p className="mx-auto mt-5 max-w-[850px] text-[16px] font-medium leading-8 text-slate-700 sm:text-[17px]">
            All our contractors are fully registered with leading industry
            bodies, including{" "}
            <strong className="font-extrabold text-brand-orange">NAPIT</strong>,{" "}
            <strong className="font-extrabold text-brand-orange">
              Elmhurst
            </strong>
            ,{" "}
            <strong className="font-extrabold text-brand-orange">IFSM</strong>,{" "}
            <strong className="font-extrabold text-brand-orange">NEBOSH</strong>,{" "}
            and{" "}
            <strong className="font-extrabold text-brand-orange">
              Gas Safe
            </strong>
            , ensuring certified, safe, and compliant work every time.
          </p>
        </motion.div>

        <div className="relative mt-12">
          <button
            className="accreditation-prev absolute -left-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-brand-navy text-white shadow-[0_16px_35px_rgba(7,28,61,0.22)] transition-all duration-300 hover:bg-brand-orange lg:flex"
            aria-label="Previous accreditation"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className="accreditation-next absolute -right-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-brand-navy text-white shadow-[0_16px_35px_rgba(7,28,61,0.22)] transition-all duration-300 hover:bg-brand-orange lg:flex"
            aria-label="Next accreditation"
          >
            <ChevronRight size={24} />
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            navigation={{
              prevEl: ".accreditation-prev",
              nextEl: ".accreditation-next",
            }}
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={850}
            grabCursor={true}
            spaceBetween={22}
            slidesPerView={1.3}
            breakpoints={{
              520: {
                slidesPerView: 2,
                spaceBetween: 22,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 28,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            className="accreditation-slider"
          >
            {accreditations.map((item, index) => (
              <SwiperSlide key={`${item.name}-${index}`} className="!h-auto">
                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                    ease: "easeOut",
                  }}
                  className="group flex h-[150px] items-center justify-center rounded-[18px] border border-slate-200/80 bg-white p-6 shadow-[0_18px_55px_rgba(7,28,61,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-brand-orange/30 hover:shadow-[0_30px_80px_rgba(7,28,61,0.14)]"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-[85px] max-w-[170px] object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-8 flex justify-center gap-3 lg:hidden">
            <button className="accreditation-prev flex h-11 w-11 items-center justify-center rounded-full bg-brand-navy text-white shadow-lg">
              <ChevronLeft size={22} />
            </button>

            <button className="accreditation-next flex h-11 w-11 items-center justify-center rounded-full bg-brand-orange text-white shadow-lg">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AccreditationsSection