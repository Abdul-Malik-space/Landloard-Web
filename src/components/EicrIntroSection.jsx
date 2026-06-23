import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react"
import { motion } from "motion/react"

const sectionData = {
  eyebrow: "London Property Compliance",
  title: "Professional EICR Testing & Electrical Safety Reports",
  description:
    "We provide professional electrical installation condition reports for landlords, letting agents, homeowners and commercial properties across London. Our certified engineers make the process simple, fast and reliable.",
  image: "/eicr-main.jpg",
}

const highlights = [
  "Certified electrical engineers",
  "Clear report with practical guidance",
  "Residential and commercial inspections",
  "Fast booking and professional support",
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const fadeLeft = {
  hidden: { opacity: 0, x: 34 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

const fadeRight = {
  hidden: { opacity: 0, x: -34 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

const staggerWrap = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

function EicrIntroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#f5f8fc_52%,#ffffff_100%)]" />
      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.96fr_1.04fr] xl:gap-14">
          <motion.div
            variants={staggerWrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-[650px]"
          >
            <motion.div
              variants={fadeUp}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-orange/15 bg-orange-50 px-4 py-2 font-nav text-sm font-extrabold text-brand-orange"
            >
              <Sparkles size={15} />
              {sectionData.eyebrow}
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-display text-[30px] font-black leading-[1.16] tracking-[-0.025em] text-brand-navy sm:text-[36px] lg:text-[42px] xl:text-[46px]"
            >
              {sectionData.title}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-[620px] text-[16px] font-medium leading-8 text-slate-600"
            >
              {sectionData.description}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-7 grid gap-3 sm:grid-cols-2"
            >
              {highlights.map((item) => (
                <div
                  key={item}
                  className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3.5 shadow-[0_12px_35px_rgba(7,28,61,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(7,28,61,0.09)]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                    <CheckCircle2 size={18} />
                  </span>

                  <span className="font-nav text-sm font-extrabold leading-5 text-brand-navy">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-4 font-nav text-sm font-black text-white shadow-[0_16px_38px_rgba(255,138,0,0.32)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
              >
                Book EICR Inspection
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 font-nav text-sm font-black text-brand-navy shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange hover:text-brand-orange"
              >
                <BadgeCheck size={18} />
                View Certificate Details
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-[620px]">
              <div className="absolute -right-4 -top-4 hidden h-32 w-32 rounded-[32px] bg-brand-orange/15 lg:block" />
              <div className="absolute -bottom-5 -left-5 hidden h-40 w-40 rounded-[34px] bg-brand-navy/10 lg:block" />

              <div className="relative overflow-hidden rounded-[36px] border border-white bg-white p-3 shadow-[0_28px_90px_rgba(7,28,61,0.16)]">
                <div className="relative overflow-hidden rounded-[28px]">
                  <img
                    src={sectionData.image}
                    alt="EICR testing and electrical safety inspection"
                    className="h-[360px] w-full object-cover sm:h-[430px] lg:h-[470px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-brand-navy/10 to-transparent" />

                  <motion.div
                    variants={fadeRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 font-nav text-xs font-black uppercase tracking-[0.15em] text-white backdrop-blur-md"
                  >
                    <Zap size={15} className="text-brand-orange" />
                    Professional EICR
                  </motion.div>

                  <div className="absolute bottom-5 left-5 max-w-[310px] rounded-[24px] border border-white/20 bg-white/15 p-4 text-white shadow-2xl backdrop-blur-md">
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-orange text-white shadow-lg shadow-orange-500/30">
                        <ShieldCheck size={22} />
                      </div>

                      <div>
                        <h3 className="font-display text-xl font-black tracking-[-0.02em]">
                          Safe. Certified.
                        </h3>
                        <p className="mt-1 text-sm font-medium leading-6 text-white/80">
                          Trusted electrical safety checks for London properties.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="absolute -left-2 top-1/2 hidden -translate-y-1/2 rounded-[26px] border border-slate-100 bg-white px-5 py-4 shadow-[0_22px_55px_rgba(7,28,61,0.14)] lg:block"
              >
                <p className="font-display text-3xl font-black text-brand-navy">
                  15+
                </p>
                <p className="mt-1 font-nav text-xs font-extrabold uppercase tracking-[0.14em] text-slate-500">
                  Years Experience
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default EicrIntroSection