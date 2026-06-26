import { ArrowRight, Phone, Star, ChevronDown } from "lucide-react"
import { motion } from "motion/react"

const serviceOptions = [
  "Multiple Services",
  "Gas Safety Certificate",
  "Electrical Certificate EICR",
  "Domestic EPC",
  "PAT Testing",
  "Fire Risk Assessment",
  "Fire Alarm Certificate",
  "Emergency Lighting Certificate",
  "Boiler Service",
  "Boiler Installation",
  "Commercial Electrical Certificate",
  "Commercial EPC",
  "Plumbing Services",
]

function RequestCallbackForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-[980px] border border-slate-200 bg-white px-4 py-6 shadow-[0_22px_70px_rgba(7,28,61,0.16)] sm:px-8 sm:py-7 lg:px-10"
    >
      <div className="mb-6 flex items-center gap-3 sm:mb-7 sm:gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[4px] bg-brand-orange text-white shadow-[0_14px_30px_rgba(255,138,0,0.28)] sm:h-12 sm:w-12">
          <Phone size={23} />
        </div>

        <h2 className="font-display text-[22px] font-black uppercase tracking-[-0.03em] text-[#3c3c3c] sm:text-[30px]">
          Request Call Back
        </h2>
      </div>

      <form className="grid gap-4 lg:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="NAME"
          className="h-11 w-full border border-slate-500 bg-white px-4 font-nav text-sm font-semibold text-brand-navy outline-none transition placeholder:text-slate-500 focus:border-brand-orange"
        />

        <input
          type="tel"
          name="phone"
          placeholder="PHONE"
          className="h-11 w-full border border-slate-500 bg-white px-4 font-nav text-sm font-semibold text-brand-navy outline-none transition placeholder:text-slate-500 focus:border-brand-orange"
        />

        <input
          type="text"
          name="postcode"
          placeholder="POSTCODE"
          className="h-11 w-full border border-slate-500 bg-white px-4 font-nav text-sm font-semibold text-brand-navy outline-none transition placeholder:text-slate-500 focus:border-brand-orange"
        />

        <div className="relative">
          <select
            name="service"
            defaultValue=""
            className="h-11 w-full appearance-none border border-slate-500 bg-white px-4 pr-10 font-nav text-sm font-semibold text-brand-navy outline-none transition focus:border-brand-orange"
          >
            <option value="" disabled>
              --Select Service--
            </option>

            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>

          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-brand-navy"
          />
        </div>

        <button
          type="submit"
          className="group flex h-11 items-center justify-center gap-2 bg-brand-orange font-nav text-sm font-black uppercase text-white shadow-[0_14px_30px_rgba(255,138,0,0.25)] transition-all duration-300 hover:bg-orange-500 lg:col-span-1"
        >
          Submit
          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </form>
    </motion.div>
  )
}

function HeroSlider() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-[92px]">
      <div className="relative min-h-[560px] w-full overflow-hidden bg-brand-navy sm:min-h-[620px] lg:min-h-[650px]">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat md:bg-fixed"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundPosition: "0% 36%",
          }}
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,28,61,0.14)_0%,rgba(7,28,61,0.05)_50%,rgba(7,28,61,0.18)_100%)]" />

        <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,rgba(7,28,61,0.97)_0%,rgba(7,28,61,0.93)_44%,rgba(7,28,61,0.68)_62%,rgba(7,28,61,0.08)_100%)] lg:w-[68%] lg:[clip-path:polygon(0_0,68%_0,86%_100%,0_100%)]" />

        <div className="absolute left-0 top-0 h-full w-[50%] bg-[radial-gradient(circle_at_18%_28%,rgba(255,138,0,0.15),transparent_36%)]" />

        <div className="absolute right-0 top-0 h-full w-[20%] bg-[linear-gradient(270deg,rgba(7,28,61,0.12)_0%,rgba(7,28,61,0)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[560px] w-full max-w-[1380px] items-center px-5 pb-24 pt-12 sm:min-h-[620px] sm:px-8 lg:min-h-[650px] lg:px-10 xl:px-12">
          <div className="max-w-[720px]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 font-nav text-[11px] font-black uppercase tracking-[0.18em] text-white/90 backdrop-blur-md"
            >
              Fast, Reliable & Certified
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="max-w-[720px] font-display text-[34px] font-black uppercase leading-[1.08] tracking-[-0.035em] text-white drop-shadow-[0_12px_34px_rgba(0,0,0,0.30)] sm:text-[48px] lg:text-[52px] xl:text-[58px]"
            >
              Landlord{" "}
              <span className="text-brand-orange">Certificates</span> Made
              Simple
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.16 }}
              className="mt-6 max-w-[650px] text-[16px] font-semibold leading-7 text-white/90 drop-shadow sm:text-[18px] sm:leading-8"
            >
              Book EICR, Gas Safety, Fire Risk Assessment, EPC and compliance
              services with a fast, reliable and professional team across London
              and M25 areas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.24 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="tel:02038352087"
                className="group inline-flex items-center gap-3 rounded-sm bg-brand-orange px-7 py-4 font-nav text-sm font-black text-white shadow-[0_18px_42px_rgba(255,138,0,0.36)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 sm:px-8"
              >
                <Phone
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
                Call Now
              </a>

              <a
                href="/services"
                className="group inline-flex items-center gap-2 rounded-sm border border-white/55 bg-black/20 px-7 py-4 font-nav text-sm font-black text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-brand-navy sm:px-8"
              >
                Our Services
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <div className="flex items-center gap-3 px-1">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <div className="leading-none">
                  <p className="font-display text-3xl font-black leading-none tracking-[-0.08em]">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#DB4437]">o</span>
                    <span className="text-[#F4B400]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#0F9D58]">l</span>
                    <span className="text-[#DB4437]">e</span>
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white/85">
                    Reviews
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative z-30 mx-auto -mt-20 px-4 pb-12 sm:-mt-24 sm:px-5 lg:-mt-24">
        <RequestCallbackForm />
      </div>
    </section>
  )
}

export default HeroSlider