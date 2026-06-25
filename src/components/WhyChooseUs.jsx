import {
  ArrowRight,
  Building2,
  CheckCircle2,
  MapPin,
  ShieldCheck,
} from "lucide-react"
import { motion } from "motion/react"

const reasons = [
  <>
    Consolidated, landlord-only compliance service covering{" "}
    <strong className="font-extrabold text-brand-orange">gas</strong>,{" "}
    <strong className="font-extrabold text-brand-orange">electrical</strong>,{" "}
    <strong className="font-extrabold text-brand-orange">fire</strong>,{" "}
    <strong className="font-extrabold text-brand-orange">EPC</strong> and
    ancillary safety checks.
  </>,
  <>
    Rapid response and short lead times, including provision for{" "}
    <strong className="font-extrabold text-brand-orange">same-day</strong> or{" "}
    <strong className="font-extrabold text-brand-orange">
      next-day appointments
    </strong>{" "}
    where capacity permits.
  </>,
  <>
    Deep familiarity with{" "}
    <strong className="font-extrabold text-brand-orange">
      London rental stock
    </strong>
    ,{" "}
    <strong className="font-extrabold text-brand-orange">HMO licensing</strong>{" "}
    regimes and local enforcement practices.
  </>,
  <>
    Systematic{" "}
    <strong className="font-extrabold text-brand-orange">
      renewal-reminder
    </strong>{" "}
    and tracking capability that reduces the likelihood of accidental
    non-compliance.
  </>,
  <>
    Structured discounts for{" "}
    <strong className="font-extrabold text-brand-orange">
      multi-certificate visits
    </strong>{" "}
    and portfolio-wide agreements, improving the predictability of annual
    compliance costs.
  </>,
]

const infoCards = [
  {
    icon: Building2,
    text: (
      <>
        This geographic reach allows landlords with dispersed portfolios to
        standardise{" "}
        <strong className="font-extrabold text-brand-navy">
          compliance practices
        </strong>{" "}
        under one provider, rather than coordinating multiple local contractors.
      </>
    ),
  },
  {
    icon: MapPin,
    text: (
      <>
        Properties in{" "}
        <strong className="font-extrabold text-brand-navy">
          Camden, Lambeth, Brent, Croydon, Hackney, Barnet and Wandsworth
        </strong>{" "}
        receive the same inspection standards and reporting formats, simplifying
        internal governance and due diligence files.
      </>
    ),
  },
]

function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-16 text-white sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(7,28,61,0.98)_0%,rgba(7,28,61,0.94)_48%,rgba(7,28,61,0.98)_100%)]" />
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-brand-orange/15 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_20%_20%,#ffffff_0,transparent_24%),radial-gradient(circle_at_80%_80%,#ff8a00_0,transparent_24%)]" />

      <div className="relative mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="font-nav text-sm font-black uppercase tracking-[0.18em] text-brand-orange">
              Why Choose Us
            </p>

            <h2 className="mt-4 max-w-[560px] font-display text-[30px] font-black uppercase leading-[1.12] tracking-[-0.03em] sm:text-[38px] lg:text-[42px]">
              Why choose{" "}
              <span className="text-brand-orange">
                Landlords Property Checks
              </span>
            </h2>

            <p className="mt-5 max-w-[560px] text-[15.5px] font-semibold leading-7 text-white/84">
              <strong className="text-white">Landlords Property Checks</strong>{" "}
              is the best choice for{" "}
              <strong className="text-brand-orange">landlord certificates</strong>{" "}
              because of the following reasons:
            </p>

            <div className="mt-8 space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                    ease: "easeOut",
                  }}
                  className="flex gap-4"
                >
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-brand-orange text-brand-orange">
                    <ArrowRight size={17} strokeWidth={3} />
                  </div>

                  <p className="text-[15px] font-semibold leading-7 text-white/90">
                    {reason}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="max-w-[560px] font-display text-[28px] font-black uppercase leading-[1.15] tracking-[-0.03em] sm:text-[34px]">
                Get{" "}
                <span className="text-brand-orange">
                  landlord certificates
                </span>{" "}
                everywhere in London
              </h3>

              <p className="mt-5 max-w-[560px] text-[15.5px] font-semibold leading-7 text-white/84">
                Coverage includes{" "}
                <strong className="text-brand-orange">
                  Central, North, South, East and West London
                </strong>
                , from prime central districts to outer boroughs.
              </p>

              <a
                href="/book-service"
                className="group mt-8 inline-flex items-center gap-2 rounded-sm bg-brand-orange px-8 py-4 font-nav text-sm font-black uppercase text-white shadow-[0_16px_38px_rgba(255,138,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
              >
                Get A Quote
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-3 shadow-[0_28px_90px_rgba(0,0,0,0.24)]">
              <div className="relative overflow-hidden rounded-[22px]">
                <img
                  src="/why-choose-small.jpg"
                  alt="Landlords Property Checks certified engineer"
                  className="h-[340px] w-full object-cover object-center sm:h-[430px] lg:h-[470px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 font-nav text-xs font-black uppercase tracking-[0.14em] text-white backdrop-blur-md">
                  <ShieldCheck size={15} className="text-brand-orange" />
                  London Compliance Experts
                </div>
              </div>
            </div>

            <div className="mt-7 grid gap-4">
              {infoCards.map((card, index) => {
                const Icon = card.icon

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.12,
                      ease: "easeOut",
                    }}
                    className="rounded-[22px] border border-slate-100 bg-white p-5 text-brand-navy shadow-[0_18px_55px_rgba(0,0,0,0.18)]"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-brand-orange">
                        <Icon size={22} />
                      </div>

                      <p className="text-[14.5px] font-medium leading-7 text-slate-700">
                        {card.text}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                "London Coverage",
                "HMO Support",
                "Fast Certificates",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-3 font-nav text-sm font-black text-white/90 backdrop-blur"
                >
                  <CheckCircle2 size={16} className="text-brand-orange" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs