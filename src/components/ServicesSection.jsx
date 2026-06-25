import { motion } from "motion/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { ArrowRight, CalendarCheck, ChevronLeft, ChevronRight } from "lucide-react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const seoKeywords = [
  "CP12 gas safety certificates in London",
  "Gas Safety Certificates",
  "Gas Safe",
  "Electrical Installation Condition Reports",
  "EICR certificate in London",
  "EPC certificates in London",
  "Energy Performance Certificates",
  "PAT Testing",
  "fire risk assessment in London",
  "fire alarm certificate in London",
  "boiler installation in London",
  "Boiler repair in London",
  "landlords",
  "HMO",
  "HMOs",
  "London",
  "EICR",
  "EPC",
  "CP12",
]

const services = [
  {
    title: "Gas Safety Certificate",
    price: "$89",
    image: "/services/gas-safety.jpg",
    description:
      "Arrange annual Gas Safety Certificates (CP12) for every property with gas appliances to meet statutory duties under the Gas Safety (Installation and Use) Regulations 1998. Regular inspections by Gas Safe registered engineers verify that boilers, cookers and flues operate safely and do not present undue risk of leaks or carbon monoxide exposure. Maintaining valid CP12 gas safety certificates in London is essential for lawful letting, for upholding insurance terms, and for avoiding significant fines or, in extreme cases, prosecution.",
  },
  {
    title: "Electrical Certificate EICR",
    price: "$99",
    image: "/services/eicr.jpg",
    description:
      "Commission Electrical Installation Condition Reports (EICR) at the intervals required by the Electrical Safety Standards in the Private Rented Sector Regulations, typically every five years or on change of tenancy for certain scenarios. EICRs identify defective wiring, insufficient earthing, overloaded circuits and outdated equipment that could result in fire or electric shock. A satisfactory EICR certificate in London allows landlords to demonstrate compliance to councils, tenants and insurers, and may be a precondition of HMO licensing or mortgage approvals.",
  },
  {
    title: "EPC Certificate",
    price: "$79",
    image: "/services/epc.jpg",
    description:
      "Secure Energy Performance Certificates (EPC) for all let properties and ensure that ratings meet or exceed the minimum MEES threshold, currently set at band E for most private rented homes. EPCs quantify typical energy use and potential costs, and they are mandatory when marketing a property to new tenants or buyers. Higher ratings can support stronger marketing narratives, may justify premium rents, and EPC certificates in London can future-proof assets against possible moves toward C-rating requirements in the coming years.",
  },
  {
    title: "PAT Testing",
    price: "$59",
    image: "/services/pat.jpg",
    description:
      "Arrange routine Portable Appliance Testing to ensure electrical equipment within your property or workplace remains safe and compliant with legal safety responsibilities. Regular inspections carried out by qualified professionals help identify faults, wear, or deterioration that could lead to electric shock, fire, or operational failure. Ongoing PAT Testing supports a safe working environment, demonstrates a clear duty of care, and provides documented evidence of compliance. Keeping valid PAT records in place is essential for meeting insurance conditions, reducing risk, and avoiding potential penalties, enforcement action, or legal claims.",
  },
  {
    title: "Fire Risk Assessment Report",
    price: "$149",
    image: "/services/fire-risk.jpg",
    description:
      "Arrange Fire Risk Assessments for HMOs, buildings with communal areas and relevant non-domestic premises, as required by the Fire Safety Order and supporting guidance. Assessments identify ignition sources, fuel loads, weaknesses in escape routes, fire-door issues and gaps in alarm or emergency-lighting provision. A written, structured fire risk assessment in London allows landlords to prioritise remedial measures, demonstrate responsible-person duties, and show inspectors that risk is being managed systematically rather than reactively.",
  },
  {
    title: "Fire Alarm Certificate",
    price: "$129",
    image: "/services/fire-alarm.jpg",
    description:
      "Obtain Fire Alarm Certificates confirming that detection systems, sounders, call points and control panels have been inspected, tested and found to perform as required. Many HMOs and properties with communal areas must evidence regular alarm maintenance to satisfy the Regulatory Reform (Fire Safety) Order and local licensing conditions. A current fire alarm certificate in London shows that alarms are not merely installed but are operational, which can be decisive in regulatory investigations following a fire and essential for maintaining valid building insurance coverage across your portfolio.",
  },
  {
    title: "Boiler Installation",
    price: "$499",
    image: "/services/boiler-installation.jpg",
    description:
      "Install modern, high-efficiency boilers to provide reliable heating and improved energy performance. A new boiler installation in London can help reduce energy costs, minimise breakdowns, and protect property value. All work should be carried out by Gas Safe-registered engineers with appropriate Building Regulations notification to ensure safety, legal compliance, and insurance validity.",
  },
  {
    title: "Boiler Repair",
    price: "$89",
    image: "/services/boiler-service.jpg",
    description:
      "Engage Gas Safe engineers for Boiler repair in London for timely boiler fault diagnosis and repair, rather than waiting for complete failure or tenant complaints. Prompt attention to performance issues, leaks or pressure faults reduces the probability of extended outages, emergency callouts and tenant dissatisfaction. Keeping boilers in good working order also supports passing annual gas safety checks without costly repeat visits.",
  },
  {
    title: "Plumbing Service",
    price: "$79",
    image: "/services/plumbing.jpg",
    description:
      "Use professional plumbing services to resolve leaks, blockages, low pressure and appliance connections that could otherwise cause structural damage or hygiene issues. Proactive plumbing maintenance protects the building fabric, minimises insurance claims and prevents disputes regarding property condition. Integrated plumbing support is especially valuable in HMOs and multi-unit buildings where a single issue can affect multiple households.",
  },
]

function highlightKeywords(text) {
  const escapedKeywords = seoKeywords
    .sort((a, b) => b.length - a.length)
    .map((keyword) => keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))

  const regex = new RegExp(`(${escapedKeywords.join("|")})`, "gi")
  const parts = text.split(regex)

  return parts.map((part, index) => {
    const matched = seoKeywords.some(
      (keyword) => keyword.toLowerCase() === part.toLowerCase()
    )

    if (!matched) return <span key={index}>{part}</span>

    return (
      <strong key={index} className="font-extrabold text-brand-orange">
        {part}
      </strong>
    )
  })
}

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
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          grabCursor={true}
          spaceBetween={22}
          slidesPerView={1.08}
          breakpoints={{
            640: {
              slidesPerView: 1.45,
              spaceBetween: 22,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 26,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
          }}
          className="services-slider !pb-2"
        >
          {services.map((service, index) => (
            <SwiperSlide key={service.title} className="!h-auto">
              <motion.article
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.035,
                  ease: "easeOut",
                }}
                className="group flex h-full min-h-[675px] flex-col overflow-hidden rounded-[26px] border border-slate-200/80 bg-white shadow-[0_18px_55px_rgba(7,28,61,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_85px_rgba(7,28,61,0.13)]"
              >
                <div className="relative h-[175px] shrink-0 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/55 via-transparent to-transparent" />

                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 font-nav text-xs font-extrabold text-brand-navy shadow-sm backdrop-blur">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="absolute bottom-4 right-4 rounded-full bg-brand-orange px-4 py-2 font-nav text-sm font-black text-white shadow-[0_12px_25px_rgba(255,138,0,0.35)]">
                    From {service.price}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 text-center">
                  <h3 className="font-display text-[22px] font-extrabold leading-[1.16] tracking-[-0.03em] text-brand-navy">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-[14.2px] font-medium leading-7 text-slate-700">
                    {highlightKeywords(service.description)}
                  </p>

                  <div className="mt-auto flex gap-3 pt-5">
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