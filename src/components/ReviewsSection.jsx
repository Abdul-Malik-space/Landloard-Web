import { motion } from "motion/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import {
  ArrowRight,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Quote,
  ShieldCheck,
  Star,
  UsersRound,
} from "lucide-react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const reviews = [
  {
    name: "James Wilson",
    role: "Landlord",
    service: "EICR Certificate",
    rating: 5,
    text: "Very smooth service from booking to certificate. The engineer arrived on time, explained everything clearly and sent the report quickly.",
  },
  {
    name: "Sarah Thompson",
    role: "Property Manager",
    service: "Gas Safety Check",
    rating: 5,
    text: "Professional and reliable. We manage multiple rental properties and the booking process was simple, fast and well organised.",
  },
  {
    name: "Mohammed Khan",
    role: "Homeowner",
    service: "EPC Certificate",
    rating: 5,
    text: "Great communication and a clear report. The assessor was polite, professional and completed everything without any hassle.",
  },
  {
    name: "Emily Carter",
    role: "Letting Agent",
    service: "Fire Risk Assessment",
    rating: 5,
    text: "Excellent service for landlord compliance. The team helped us understand what was needed and provided a detailed fire safety report.",
  },
  {
    name: "Daniel Brooks",
    role: "Commercial Client",
    service: "PAT Testing",
    rating: 5,
    text: "Fast appointment, fair price and professional inspection. We will definitely use Landlords Property Checks again.",
  },
]

function getInitials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
}

function ReviewsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#f7f9fc_52%,#ffffff_100%)]" />
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="absolute -right-32 bottom-16 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1380px] px-5 lg:px-8 xl:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="max-w-[570px]"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/15 bg-orange-50 px-4 py-2 font-nav text-sm font-extrabold text-brand-orange">
              <UsersRound size={16} />
              Customer Reviews
            </div>

            <h2 className="mt-5 font-display text-[34px] font-black leading-[1.1] tracking-[-0.035em] text-brand-navy sm:text-[44px] lg:text-[52px]">
              Trusted by landlords, agents and property owners.
            </h2>

            <p className="mt-5 text-[16px] font-medium leading-8 text-slate-600">
              Real feedback from customers who booked property compliance
              services including EICR, Gas Safety, EPC, Fire Safety and PAT
              Testing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="grid gap-4 sm:grid-cols-3"
          >
            <div className="rounded-[26px] border border-slate-100 bg-white p-5 shadow-[0_18px_50px_rgba(7,28,61,0.07)]">
              <p className="font-display text-4xl font-black text-brand-navy">
                5.0
              </p>
              <div className="mt-2 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={17}
                    className="fill-brand-orange text-brand-orange"
                  />
                ))}
              </div>
              <p className="mt-3 font-nav text-sm font-bold text-slate-500">
                Average Rating
              </p>
            </div>

            <div className="rounded-[26px] border border-slate-100 bg-white p-5 shadow-[0_18px_50px_rgba(7,28,61,0.07)]">
              <p className="font-display text-4xl font-black text-brand-navy">
                250+
              </p>
              <p className="mt-3 font-nav text-sm font-bold text-slate-500">
                Happy Customers
              </p>
            </div>

            <div className="rounded-[26px] border border-slate-100 bg-white p-5 shadow-[0_18px_50px_rgba(7,28,61,0.07)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                <ShieldCheck size={24} />
              </div>
              <p className="mt-3 font-nav text-sm font-bold text-slate-500">
                Certified Compliance Service
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 rounded-[36px] bg-brand-navy p-5 shadow-[0_30px_90px_rgba(7,28,61,0.22)] sm:p-7 lg:p-8">
          <div className="mb-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-nav text-sm font-black uppercase tracking-[0.16em] text-brand-orange">
                What customers say
              </p>
              <h3 className="mt-2 font-display text-[28px] font-black tracking-[-0.03em] text-white sm:text-[34px]">
                Reviews from recent bookings
              </h3>
            </div>

            <div className="hidden items-center gap-3 sm:flex">
              <button
                className="reviews-prev flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all duration-300 hover:bg-white hover:text-brand-navy"
                aria-label="Previous review"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                className="reviews-next flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange text-white shadow-[0_14px_30px_rgba(255,138,0,0.28)] transition-all duration-300 hover:bg-orange-500"
                aria-label="Next review"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            navigation={{
              prevEl: ".reviews-prev",
              nextEl: ".reviews-next",
            }}
            pagination={{
              clickable: true,
              el: ".reviews-pagination",
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            grabCursor={true}
            spaceBetween={22}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1180: {
                slidesPerView: 3,
                spaceBetween: 26,
              },
            }}
            className="reviews-slider !overflow-visible"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={review.name} className="!h-auto">
                <motion.article
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  className="group flex h-full min-h-[330px] flex-col rounded-[30px] border border-white/10 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-13 w-13 h-[52px] w-[52px] items-center justify-center rounded-full bg-brand-navy font-display text-sm font-black text-white">
                        {getInitials(review.name)}
                      </div>

                      <div>
                        <h4 className="font-display text-lg font-black tracking-[-0.02em] text-brand-navy">
                          {review.name}
                        </h4>
                        <p className="font-nav text-sm font-bold text-slate-500">
                          {review.role}
                        </p>
                      </div>
                    </div>

                    <Quote
                      size={34}
                      className="text-brand-orange/30 transition group-hover:text-brand-orange"
                    />
                  </div>

                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: review.rating }).map((_, star) => (
                      <Star
                        key={star}
                        size={18}
                        className="fill-brand-orange text-brand-orange"
                      />
                    ))}
                  </div>

                  <p className="text-[15.5px] font-medium leading-8 text-slate-600">
                    “{review.text}”
                  </p>

                  <div className="mt-auto pt-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-brand-light px-4 py-2 font-nav text-xs font-black uppercase tracking-[0.12em] text-brand-navy">
                      <BadgeCheck size={15} className="text-brand-orange" />
                      {review.service}
                    </div>
                  </div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="reviews-pagination mt-8 flex justify-center" />

          <div className="mt-7 flex justify-center gap-3 sm:hidden">
            <button className="reviews-prev flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white">
              <ChevronLeft size={21} />
            </button>

            <button className="reviews-next flex h-11 w-11 items-center justify-center rounded-full bg-brand-orange text-white">
              <ChevronRight size={21} />
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-[28px] border border-slate-200/70 bg-white px-6 py-6 text-center shadow-[0_18px_55px_rgba(7,28,61,0.07)] sm:flex-row sm:text-left">
          <div>
            <h3 className="font-display text-[24px] font-black tracking-[-0.025em] text-brand-navy">
              Want to book a trusted property check?
            </h3>
            <p className="mt-2 text-sm font-medium leading-6 text-slate-500">
              Choose the right certificate and book your inspection online.
            </p>
          </div>

          <a
            href="#"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-orange px-6 py-3.5 font-nav text-sm font-black text-white shadow-[0_14px_30px_rgba(255,138,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
          >
            Book Service
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