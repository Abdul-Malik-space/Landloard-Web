import { motion } from "motion/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { ChevronLeft, ChevronRight } from "lucide-react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const blogs = [
  {
    title:
      "Plumbing: Definition, Uses, History, Plumbing System, and its maintenance",
    image: "/plumbing.jpg",
  },
  {
    title:
      "EPC (Energy Performance Certificate): Definition, and How to Obtain EPC in UK",
    image: "/epc-certificate.jpg",
  },
  {
    title: "8 Steps New Boiler Installation Process in the UK",
    image: "/boiler-installation.jpg",
  },
]

// Same data repeated only to make slider movement visible
const sliderBlogs = [...blogs, ...blogs, ...blogs]

function BlogSection() {
  return (
    <section className="relative overflow-hidden bg-[#f6f6f6] py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-[1160px] px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <p className="font-nav text-[24px] font-medium uppercase tracking-[0.35em] text-brand-orange">
            Blog
          </p>

          <h2 className="mt-1 font-display text-[32px] font-black leading-tight tracking-[-0.03em] text-[#343434] sm:text-[40px]">
            Our News and Update
          </h2>
        </motion.div>

        <div className="relative mt-14">
          <button
            className="blog-prev absolute -left-8 top-[36%] z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#333333] text-white shadow-lg transition-all duration-300 hover:bg-brand-orange lg:flex"
            aria-label="Previous blog"
          >
            <ChevronLeft size={25} />
          </button>

          <button
            className="blog-next absolute -right-8 top-[36%] z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#333333] text-white shadow-lg transition-all duration-300 hover:bg-brand-orange lg:flex"
            aria-label="Next blog"
          >
            <ChevronRight size={25} />
          </button>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            navigation={{
              prevEl: ".blog-prev",
              nextEl: ".blog-next",
            }}
            pagination={{
              clickable: true,
              el: ".blog-pagination",
            }}
            autoplay={{
              delay: 2400,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={850}
            grabCursor={true}
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1.3,
                spaceBetween: 35,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            className="blog-simple-slider"
          >
            {sliderBlogs.map((blog, index) => (
              <SwiperSlide key={`${blog.title}-${index}`} className="!h-auto">
                <motion.article
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: (index % 3) * 0.06,
                    ease: "easeOut",
                  }}
                  className="group"
                >
                  <div className="h-[160px] overflow-hidden bg-white sm:h-[170px]">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="mt-6 font-display text-[20px] font-black leading-[1.25] tracking-[-0.02em] text-[#3f3f3f] transition-colors duration-300 group-hover:text-brand-orange sm:text-[22px]">
                    {blog.title}
                  </h3>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="blog-pagination mt-16 flex justify-center" />

          <div className="mt-8 flex justify-center gap-3 lg:hidden">
            <button className="blog-prev flex h-11 w-11 items-center justify-center rounded-full bg-[#333333] text-white shadow-lg">
              <ChevronLeft size={24} />
            </button>

            <button className="blog-next flex h-11 w-11 items-center justify-center rounded-full bg-[#333333] text-white shadow-lg">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogSection