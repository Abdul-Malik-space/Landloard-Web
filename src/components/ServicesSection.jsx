import { motion } from "motion/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { ArrowRight, CalendarCheck, ChevronLeft, ChevronRight } from "lucide-react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const services = [
  {
    title: "Electrical Services",
    price: "$79",
    image: "/services/electrical.jpg",
    description:
      "Professional electrical repair, fault finding, rewiring and safety support for homes and offices.",
  },
  {
    title: "EICR Electrical Certificate",
    price: "$99",
    image: "/services/eicr.jpg",
    description:
      "Certified Electrical Installation Condition Reports for landlord safety and legal compliance.",
  },
  {
    title: "PAT Testing",
    price: "$59",
    image: "/services/pat.jpg",
    description:
      "Portable appliance testing for landlords, furnished homes, offices and commercial properties.",
  },
  {
    title: "Boiler Installation",
    price: "$499",
    image: "/services/boiler-installation.jpg",
    description:
      "Safe and efficient boiler installation by qualified professionals for long-lasting performance.",
  },
  {
    title: "Boiler Services",
    price: "$89",
    image: "/services/boiler-service.jpg",
    description:
      "Routine boiler servicing to keep your heating system safe, reliable and energy efficient.",
  },
  {
    title: "Gas Safety Check",
    price: "$89",
    image: "/services/gas-safety.jpg",
    description:
      "Official gas safety checks and certificates for landlords, agents and property owners.",
  },
  {
    title: "Emergency Lighting Certificate",
    price: "$119",
    image: "/services/emergency-lighting.jpg",
    description:
      "Inspection and certification of emergency lighting systems for safe building evacuation.",
  },
  {
    title: "Fire Risk Assessment",
    price: "$149",
    image: "/services/fire-risk.jpg",
    description:
      "Identify fire hazards and receive clear guidance to keep your property safe and compliant.",
  },
  {
    title: "Fire Alarm Certificate",
    price: "$129",
    image: "/services/fire-alarm.jpg",
    description:
      "Testing, inspection and certification of fire alarm systems for fire safety compliance.",
  },
  {
    title: "Fire Extinguisher Services",
    price: "$99",
    image: "/services/fire-extinguisher.jpg",
    description:
      "Professional inspection and servicing of fire extinguishers to protect your property.",
  },
  {
    title: "Fire Door Survey",
    price: "$139",
    image: "/services/fire-door.jpg",
    description:
      "Detailed fire door checks covering gaps, seals, smoke protection and compliance condition.",
  },
  {
    title: "Energy Performance Certificate",
    price: "$79",
    image: "/services/epc.jpg",
    description:
      "Certified EPC assessments to rate property energy efficiency and compliance status.",
  },
  {
    title: "Asbestos Surveys",
    price: "$159",
    image: "/services/asbestos.jpg",
    description:
      "Professional asbestos surveys to identify hazards and support health and safety compliance.",
  },
]

function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8fb] py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#f7f8fb_48%,#eef3f8_100%)]" />
      <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="absolute -right-28 bottom-20 h-80 w-80 rounded-full bg-brand-blue/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1380px] px-5 lg:px-8 xl:px-10">
        <div className="mb-10 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="font-display text-[42px] font-extrabold leading-none tracking-[-0.035em] text-brand-navy sm:text-[54px] lg:text-[62px]">
              Services
            </h2>

            <p className="mt-4 max-w-[620px] text-[17px] font-semibold leading-7 text-slate-600 sm:text-[19px]">
              Get an up-front, online price with next day appointment!
            </p>
          </motion.div>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              className="services-prev flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-navy shadow-sm transition-all duration-300 hover:bg-brand-navy hover:text-white"
              aria-label="Previous service"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              className="services-next flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange text-white shadow-[0_14px_30px_rgba(255,138,0,0.28)] transition-all duration-300 hover:bg-orange-500"
              aria-label="Next service"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          navigation={{
            prevEl: ".services-prev",
            nextEl: ".services-next",
          }}
          pagination={{
            clickable: true,
            el: ".services-pagination",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          grabCursor={true}
          spaceBetween={22}
          slidesPerView={1.08}
          breakpoints={{
            640: {
              slidesPerView: 1.6,
              spaceBetween: 22,
            },
            768: {
              slidesPerView: 2.15,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 26,
            },
            1280: {
              slidesPerView: 3.35,
              spaceBetween: 28,
            },
          }}
          className="services-slider !pb-2"
        >
          {services.map((service, index) => (
            <SwiperSlide key={service.title}>
              <motion.article
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.035,
                  ease: "easeOut",
                }}
                className="group flex h-full min-h-[420px] flex-col overflow-hidden rounded-[26px] border border-slate-200/80 bg-white shadow-[0_18px_55px_rgba(7,28,61,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_85px_rgba(7,28,61,0.13)]"
              >
                <div className="relative h-[180px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 via-transparent to-transparent" />

                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 font-nav text-xs font-extrabold text-brand-navy shadow-sm backdrop-blur">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="absolute bottom-4 right-4 rounded-full bg-brand-orange px-4 py-2 font-nav text-sm font-black text-white shadow-[0_12px_25px_rgba(255,138,0,0.35)]">
                    From {service.price}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-[22px] font-extrabold leading-[1.16] tracking-[-0.03em] text-brand-navy">
                    {service.title}
                  </h3>

                  <p className="mt-2 font-nav text-[15px] font-black text-brand-orange">
                    Starting from {service.price}
                  </p>

                  <p className="mt-3 text-[14.5px] font-medium leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-auto flex gap-3 pt-6">
                    <a
                      href="#"
                      className="group/btn inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-navy px-4 py-3 font-nav text-sm font-extrabold text-white transition-all duration-300 hover:bg-brand-orange"
                    >
                      Learn More
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                      />
                    </a>

                    <a
                      href="#"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-orange px-4 py-3 font-nav text-sm font-extrabold text-white shadow-[0_12px_25px_rgba(255,138,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-500"
                    >
                      <CalendarCheck size={15} />
                      Book Now
                    </a>
                  </div>
                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="services-pagination mt-8 flex justify-center" />

        <div className="mt-8 flex justify-center gap-3 lg:hidden">
          <button className="services-prev flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-navy shadow-sm">
            <ChevronLeft size={21} />
          </button>

          <button className="services-next flex h-11 w-11 items-center justify-center rounded-full bg-brand-orange text-white shadow-[0_12px_25px_rgba(255,138,0,0.25)]">
            <ChevronRight size={21} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection