import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  CreditCard,
  ShieldCheck,
  Star,
} from "lucide-react"
import { motion } from "motion/react"

const points = [
  {
    icon: BadgeCheck,
    title: "Fully accredited",
  },
  {
    icon: CalendarCheck,
    title: "Next day appointments",
  },
  {
    icon: CreditCard,
    title: "Pay on completion",
  },
  {
    icon: Star,
    title: "Rated excellent by customers",
  },
]

function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#f7f9fc_55%,#ffffff_100%)]" />
      <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="absolute -right-28 bottom-10 h-80 w-80 rounded-full bg-brand-blue/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1320px] px-5 lg:px-8 xl:px-10">
        <div className="overflow-hidden rounded-[34px] border border-slate-100 bg-white shadow-[0_24px_80px_rgba(7,28,61,0.08)]">
          <div className="px-6 pt-10 text-center sm:px-10 lg:px-14 lg:pt-12">
            <p className="font-nav text-sm font-black uppercase tracking-[0.18em] text-brand-orange">
              Why Choose Us
            </p>

            <h2 className="mx-auto mt-4 max-w-[760px] font-display text-[30px] font-black leading-[1.14] tracking-[-0.025em] text-brand-navy sm:text-[38px] lg:text-[44px]">
              A smoother way to book property certificates.
            </h2>
          </div>

          <div className="grid items-center gap-0 lg:grid-cols-[1.08fr_0.92fr]">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative min-h-[430px] overflow-hidden bg-brand-light p-5 sm:min-h-[520px] sm:p-8"
            >
              <div className="absolute left-8 top-8 h-32 w-32 rounded-full bg-brand-orange/15 blur-2xl" />
              <div className="absolute bottom-8 right-8 h-40 w-40 rounded-full bg-brand-navy/10 blur-2xl" />

              <div className="relative h-full min-h-[390px] sm:min-h-[460px]">
                <div className="absolute left-0 top-0 h-[82%] w-[62%] overflow-hidden rounded-[28px] shadow-[0_24px_70px_rgba(7,28,61,0.16)]">
                  <img
                    src="/why-choose-main.jpg"
                    alt="Customer booking property compliance service"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="absolute bottom-0 right-0 h-[72%] w-[58%] overflow-hidden rounded-[28px] border-[10px] border-white shadow-[0_28px_80px_rgba(7,28,61,0.18)]">
                  <img
                    src="/why-choose-small.jpg"
                    alt="Engineer completing property inspection"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="absolute bottom-6 left-6 hidden rounded-2xl bg-white/92 px-4 py-3 shadow-[0_18px_45px_rgba(7,28,61,0.12)] backdrop-blur sm:block">
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50 text-green-600">
                      <ShieldCheck size={18} />
                    </div>

                    <div>
                      <p className="font-nav text-xs font-black uppercase tracking-[0.12em] text-slate-400">
                        Certified
                      </p>
                      <p className="font-display text-sm font-black text-brand-navy">
                        Trusted property checks
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="px-6 py-10 sm:px-10 lg:px-12 xl:px-14"
            >
              <p className="max-w-[520px] text-[16px] font-medium leading-8 text-slate-600">
                From booking to inspection and report delivery, we keep the
                process simple, clear and stress-free for landlords, agents and
                property owners.
              </p>

              <div className="mt-7 space-y-4">
                {points.map((item, index) => {
                  const Icon = item.icon

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.07,
                        ease: "easeOut",
                      }}
                      className="flex items-center gap-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-orange shadow-sm">
                        <Icon size={20} />
                      </div>

                      <p className="font-nav text-[16px] font-extrabold text-brand-navy">
                        {item.title}
                      </p>
                    </motion.div>
                  )
                })}
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-navy px-7 py-4 font-nav text-sm font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand-orange"
                >
                  Learn more
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <div className="inline-flex items-center gap-2 rounded-full bg-brand-light px-5 py-3 font-nav text-sm font-black text-brand-navy">
                  <CheckCircle2 size={17} className="text-green-600" />
                  Hassle-free inspections
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs