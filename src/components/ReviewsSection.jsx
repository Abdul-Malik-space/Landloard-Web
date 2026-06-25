import { motion } from "motion/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
  UsersRound,
} from "lucide-react"

import "swiper/css"
import "swiper/css/navigation"

const introText =
  "Landlords Property Checks is a reliable and affordable property services company that helps landlords and homeowners keep their properties safe and compliant. We provide landlord certificates, boiler repair and installation, plumbing, electrician and refurbishment services for your home or rental property."

const keywords = [
  "Landlords Property Checks",
  "property services",
  "landlords",
  "homeowners",
  "landlord certificates",
  "boiler repair",
  "installation",
  "plumbing",
  "electrician",
  "refurbishment services",
  "home",
  "rental property",
  "EICR",
  "Gas Safety Certificate",
  "Electrical Safety Certificates",
  "London",
]

const reviews = [
  {
    name: "Jawa Zoe",
    date: "2022-10-24",
    rating: 5,
    text: "I booked landlord property certificates online recently for EICR certificate in Camden. The engineer arrived well within time and the process was smooth.",
    avatar: "J",
    color: "bg-pink-600",
  },
  {
    name: "Nana John Ameyaw",
    date: "2022-10-21",
    rating: 5,
    text: "Thanks for the great job you did. Professional service and very helpful throughout the process.",
    avatar: "NJ",
    color: "bg-slate-700",
  },
  {
    name: "Kristen Charnley",
    date: "2023-03-21",
    rating: 5,
    text: "Reasonable pricing. Helpful and very prompt professional service from start to finish.",
    avatar: "K",
    color: "bg-orange-700",
  },
  {
    name: "P L",
    date: "2023-03-18",
    rating: 5,
    text: "Great communication, fast and competent delivery of services.",
    avatar: "P",
    color: "bg-stone-600",
  },
  {
    name: "Esraa Jasim",
    date: "2023-05-29",
    rating: 5,
    text: "Very efficient and convenient service. I booked an EICR and Gas Safety Certificate and the process was handled professionally.",
    avatar: "E",
    color: "bg-green-700",
  },
  {
    name: "Tarek Chaib",
    date: "2023-05-02",
    rating: 5,
    text: "Reliable, fast and value for money service. Gas and Electrical Safety Certificates were required and handled professionally.",
    avatar: "T",
    color: "bg-amber-700",
  },
]

function highlightKeywords(text) {
  const escaped = keywords
    .sort((a, b) => b.length - a.length)
    .map((item) => item.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))

  const regex = new RegExp(`(${escaped.join("|")})`, "gi")
  const parts = text.split(regex)

  return parts.map((part, index) => {
    const matched = keywords.some(
      (item) => item.toLowerCase() === part.toLowerCase()
    )

    if (!matched) return <span key={index}>{part}</span>

    return (
      <strong key={index} className="font-extrabold text-brand-orange">
        {part}
      </strong>
    )
  })
}

function ReviewCard({ review }) {
  return (
    <article className="flex h-full min-h-[158px] flex-col rounded-[9px] bg-white p-4 text-brand-navy shadow-[0_18px_45px_rgba(0,0,0,0.22)]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-black text-white ${review.color}`}
          >
            {review.avatar}
          </div>

          <div>
            <h4 className="font-display text-[13px] font-black leading-tight text-brand-navy">
              {review.name}
            </h4>
            <p className="mt-0.5 text-[11px] font-medium text-slate-500">
              {review.date}
            </p>
          </div>
        </div>

        <span className="font-display text-lg font-black leading-none text-[#4285F4]">
          G
        </span>
      </div>

      <div className="mt-3 flex gap-0.5">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star
            key={i}
            size={15}
            className="fill-brand-orange text-brand-orange"
          />
        ))}
      </div>

      <p className="mt-3 line-clamp-4 text-[13px] font-medium leading-5 text-slate-700">
        {highlightKeywords(review.text)}
      </p>
    </article>
  )
}

function ReviewsSlider() {
  return (
    <div className="relative">
      <button
        className="reviews-ref-prev absolute -left-5 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-brand-navy shadow-lg transition hover:bg-brand-orange hover:text-white"
        aria-label="Previous review"
      >
        <ChevronLeft size={19} />
      </button>

      <button
        className="reviews-ref-next absolute -right-5 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-brand-navy shadow-lg transition hover:bg-brand-orange hover:text-white"
        aria-label="Next review"
      >
        <ChevronRight size={19} />
      </button>

      <Swiper
        modules={[Autoplay, Navigation]}
        navigation={{
          prevEl: ".reviews-ref-prev",
          nextEl: ".reviews-ref-next",
        }}
        autoplay={{
          delay: 3300,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        grabCursor={true}
        spaceBetween={14}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 14,
          },
        }}
        className="reviews-reference-slider"
      >
        {reviews.map((review) => (
          <SwiperSlide key={`${review.name}-${review.date}`} className="!h-auto">
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

function ReviewsSection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-20 text-white sm:py-24 lg:py-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: "url('/reviews-bg.jpg')" }}
      />

      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.70)_0%,rgba(7,28,61,0.78)_48%,rgba(0,0,0,0.70)_100%)]" />

      <div className="relative mx-auto max-w-[1080px] px-5 sm:px-6 lg:px-8">
        {/* Desktop layout */}
        <div className="relative hidden min-h-[470px] lg:block">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="absolute left-0 top-[58px] z-10"
          >
            <div className="pointer-events-none absolute -left-4 -top-[62px] font-display text-[90px] font-black uppercase leading-none tracking-[-0.06em] text-brand-orange/28">
              Clients
            </div>

            <span className="relative z-10 inline-flex items-center gap-2 rounded-full bg-brand-orange px-4 py-2 font-nav text-[11px] font-black uppercase tracking-[0.13em] text-white">
              <UsersRound size={13} />
              Testimonials
            </span>

            <h2 className="relative z-10 mt-3 max-w-[560px] font-display text-[30px] font-black leading-[1.04] tracking-[-0.035em] text-white">
              Excellence in Service
              <span className="block">
                <span className="text-brand-orange">Quality</span> You Can Trust
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="absolute right-[48px] top-[66px] z-20 w-[455px]"
          >
            <ReviewsSlider />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="absolute bottom-[74px] left-0 z-10 max-w-[610px] text-[15px] font-semibold leading-7 text-white/92"
          >
            {highlightKeywords(introText)}
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.16 }}
            href="/book-service"
            className="group absolute bottom-[95px] right-[96px] z-10 inline-flex items-center gap-2 rounded-sm bg-brand-orange px-9 py-3.5 font-nav text-sm font-black uppercase text-white shadow-[0_16px_38px_rgba(255,138,0,0.30)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
          >
            Get A Quote
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.a>
        </div>

        {/* Mobile / tablet layout */}
        <div className="grid gap-9 lg:hidden">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-4 py-2 font-nav text-[11px] font-black uppercase tracking-[0.13em] text-white">
              <UsersRound size={13} />
              Testimonials
            </span>

            <h2 className="mt-4 font-display text-[34px] font-black leading-[1.04] tracking-[-0.035em] text-white sm:text-[42px]">
              Excellence in Service
              <span className="block">
                <span className="text-brand-orange">Quality</span> You Can Trust
              </span>
            </h2>
          </div>

          <ReviewsSlider />

          <p className="text-[15px] font-semibold leading-7 text-white/92">
            {highlightKeywords(introText)}
          </p>

          <a
            href="/book-service"
            className="group inline-flex w-fit items-center gap-2 rounded-sm bg-brand-orange px-8 py-3.5 font-nav text-sm font-black uppercase text-white shadow-[0_16px_38px_rgba(255,138,0,0.30)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
          >
            Get A Quote
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection