import { motion } from "motion/react"
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from "lucide-react"

const keywords = [
  "EICR Certificate",
  "Electrical Safety Report",
  "Landlord Certificate",
  "London",
]

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
}

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
}

function EicrSafetySection() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#f7f9fc_54%,#ffffff_100%)]" />
      <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="absolute -right-28 bottom-10 h-80 w-80 rounded-full bg-brand-blue/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-[590px]"
          >
            <motion.div
              variants={fadeUp}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-orange/15 bg-orange-50 px-4 py-2 font-nav text-sm font-extrabold text-brand-orange"
            >
              <BadgeCheck size={16} />
              Landlord Compliance
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-display text-[30px] font-black leading-[1.14] tracking-[-0.03em] text-brand-navy sm:text-[38px] lg:text-[42px]"
            >
              Landlord Electrical Safety Certificate
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-[16px] font-medium leading-8 text-slate-600"
            >
              An{" "}
              <strong className="font-extrabold text-brand-navy">
                EICR Electrical Installation Condition Report
              </strong>{" "}
              is a professional{" "}
              <strong className="font-extrabold text-brand-navy">
                electrical safety assessment
              </strong>{" "}
              of a property’s wiring, circuits and installation condition. It
              helps identify potential hazards and supports{" "}
              <strong className="font-extrabold text-brand-navy">
                landlord compliance
              </strong>{" "}
              for rental properties.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-[16px] font-medium leading-8 text-slate-600"
            >
              For many rental properties, landlords are expected to arrange an{" "}
              <strong className="font-extrabold text-brand-navy">
                EICR certificate
              </strong>{" "}
              at least every{" "}
              <span className="font-extrabold text-brand-orange">
                five years
              </span>
              , helping keep tenants safe and ensuring the property meets
              electrical safety standards.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
              {keywords.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-light px-4 py-2 font-nav text-sm font-extrabold text-brand-navy"
                >
                  <CheckCircle2 size={16} className="text-green-600" />
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-4 font-nav text-sm font-black text-white shadow-[0_16px_38px_rgba(255,138,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
              >
                Book EICR Certificate
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 font-nav text-sm font-black text-brand-navy shadow-sm">
                <CalendarCheck size={17} className="text-brand-orange" />
                Fast appointment available
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[28px] bg-white p-3 shadow-[0_24px_75px_rgba(7,28,61,0.12)]">
              <div className="relative overflow-hidden rounded-[22px]">
                <img
                  src="/services/eicr.jpg"
                  alt="Landlord electrical safety certificate EICR inspection"
                  className="h-[300px] w-full object-cover sm:h-[360px] lg:h-[390px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/55 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 font-nav text-xs font-black uppercase tracking-[0.12em] text-brand-navy shadow-sm backdrop-blur">
                  <Zap size={15} className="text-brand-orange" />
                  Electrical Safety
                </div>

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/15 p-4 text-white backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-orange text-white">
                      <ShieldCheck size={22} />
                    </div>

                    <div>
                      <h3 className="font-display text-lg font-black">
                        Certified EICR Inspection
                      </h3>
                      <p className="mt-1 text-sm font-medium text-white/80">
                        Clear reporting for landlords and rental properties.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default EicrSafetySection