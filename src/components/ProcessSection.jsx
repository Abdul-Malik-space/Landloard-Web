import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  ShieldCheck,
} from "lucide-react"
import { motion } from "motion/react"

const processSteps = [
  {
    number: "01",
    icon: CalendarClock,
    title: "Schedule an inspection with a certified engineer.",
    description: (
      <>
        Landlords provide property details, required certificates and preferred
        dates, and receive clear quotations and confirmed appointment windows.
        Coordinated scheduling allows multiple inspections to occur in a single
        visit, reducing disruption to occupants.
      </>
    ),
  },
  {
    number: "02",
    icon: CheckCircle2,
    title: "Conduct on-site compliance checks.",
    description: (
      <>
        Accredited engineers attend the property, perform{" "}
        <strong className="font-extrabold text-brand-orange">
          statutory tests
        </strong>{" "}
        and visual inspections, and highlight any immediate safety issues before
        leaving. Where defects are identified, landlords receive clear
        explanations and options.
      </>
    ),
  },
  {
    number: "03",
    icon: FileText,
    title: "Submit required documentation",
    description: (
      <>
        Following successful inspections, relevant{" "}
        <strong className="font-extrabold text-brand-orange">
          Building Regulations
        </strong>{" "}
        notifications and compliance records are prepared, and reports are
        formatted for easy sharing with agents, councils and insurers. All
        documents are stored digitally to support future renewals and audits.
      </>
    ),
  },
  {
    number: "04",
    icon: BadgeCheck,
    title: "Receive an official certificate",
    description: (
      <>
        Landlords receive official{" "}
        <strong className="font-extrabold text-brand-orange">
          landlord certificates
        </strong>{" "}
        electronically within agreed timescales, enabling immediate marketing,
        tenancy progression or licence submission. Documents can be reissued and
        reviewed on request.
      </>
    ),
  },
]

function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#f8fafc_48%,#ffffff_100%)]" />
      <div className="absolute -left-28 top-12 h-80 w-80 rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="absolute -right-32 bottom-12 h-96 w-96 rounded-full bg-brand-navy/8 blur-3xl" />

      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-[900px] text-center"
        >
          <p className="font-nav text-sm font-black uppercase tracking-[0.18em] text-brand-orange">
            Simple 4 Step Process
          </p>

          <h2 className="mt-3 font-display text-[30px] font-black uppercase leading-[1.12] tracking-[-0.03em] text-brand-navy sm:text-[38px] lg:text-[44px]">
            Our process for landlord{" "}
            <span className="text-brand-orange">certificates</span> in London
          </h2>

          <p className="mx-auto mt-3 max-w-[720px] text-[15.5px] font-medium leading-7 text-slate-600">
            You can get a{" "}
            <strong className="font-extrabold text-brand-navy">
              landlord certificate in London
            </strong>{" "}
            with these 4 steps through{" "}
            <strong className="font-extrabold text-brand-navy">
              Landlords Property Checks
            </strong>
            .
          </p>
        </motion.div>

        <div className="relative mt-12">
          <div className="absolute left-0 right-0 top-[74px] hidden h-[2px] bg-gradient-to-r from-transparent via-brand-orange/35 to-transparent xl:block" />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  className="group relative flex h-full min-h-[370px] flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-white p-6 text-center shadow-[0_18px_55px_rgba(7,28,61,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-brand-orange/25 hover:shadow-[0_30px_85px_rgba(7,28,61,0.14)]"
                >
                  <div className="absolute right-5 top-5 font-display text-[44px] font-black leading-none text-brand-navy/5 transition group-hover:text-brand-orange/10">
                    {step.number}
                  </div>

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand-orange bg-orange-50 text-brand-orange shadow-[0_12px_30px_rgba(255,138,0,0.16)] transition-all duration-300 group-hover:bg-brand-orange group-hover:text-white">
                    <Icon size={30} strokeWidth={2.3} />
                  </div>

                  <h3 className="mx-auto mt-6 max-w-[230px] font-display text-[18px] font-black uppercase leading-[1.22] tracking-[-0.02em] text-brand-navy">
                    {step.title}
                  </h3>

                  <p className="mt-5 text-[14px] font-medium leading-7 text-slate-650">
                    {step.description}
                  </p>

                  <div className="mt-auto pt-5">
                    <span className="inline-flex items-center gap-2 rounded-full bg-brand-light px-4 py-2 font-nav text-xs font-black uppercase tracking-[0.12em] text-brand-navy">
                      <span className="h-2 w-2 rounded-full bg-brand-orange" />
                      Step {step.number}
                    </span>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="/book-service"
            className="group inline-flex items-center gap-2 rounded-sm bg-brand-orange px-10 py-4 font-nav text-sm font-black uppercase text-white shadow-[0_16px_38px_rgba(255,138,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
          >
            Book Now
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto mt-20 max-w-[920px] overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_24px_75px_rgba(7,28,61,0.09)]"
        >
          <div className="relative p-7 text-center sm:p-10 lg:p-12">
            <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-brand-orange/10 blur-3xl" />
            <div className="absolute -right-20 bottom-0 h-48 w-48 rounded-full bg-brand-navy/8 blur-3xl" />

            <div className="relative">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-navy text-white shadow-[0_16px_38px_rgba(7,28,61,0.20)]">
                <ShieldCheck size={30} />
              </div>

              <h3 className="font-display text-[28px] font-black leading-[1.15] tracking-[-0.03em] text-brand-navy sm:text-[36px]">
                What Is a{" "}
                <span className="text-brand-orange">
                  Landlord Certificate?
                </span>
              </h3>

              <p className="mx-auto mt-5 max-w-[720px] text-[15.5px] font-medium leading-8 text-slate-600">
                A{" "}
                <strong className="font-extrabold text-brand-navy">
                  landlord certificate
                </strong>{" "}
                is a legally recognised compliance document which confirms that
                a rental property in London meets mandatory UK safety standards
                and covers{" "}
                <strong className="font-extrabold text-brand-orange">
                  gas installations
                </strong>
                ,{" "}
                <strong className="font-extrabold text-brand-orange">
                  electrical systems
                </strong>
                ,{" "}
                <strong className="font-extrabold text-brand-orange">
                  energy performance
                </strong>
                , and{" "}
                <strong className="font-extrabold text-brand-orange">
                  fire safety
                </strong>
                . UK laws data shows that over{" "}
                <strong className="font-extrabold text-brand-orange">
                  1.3 million private rental properties
                </strong>{" "}
                are inspected annually, with local authorities issuing{" "}
                <strong className="font-extrabold text-brand-orange">
                  £70+ million in penalties
                </strong>{" "}
                each year for missing or invalid landlord certificates.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-3">
                {[
                  "Gas Safety",
                  "EICR",
                  "EPC",
                  "Fire Safety",
                  "London Landlords",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full bg-brand-light px-4 py-2 font-nav text-xs font-black uppercase tracking-[0.1em] text-brand-navy"
                  >
                    <CheckCircle2 size={15} className="text-brand-orange" />
                    {item}
                  </span>
                ))}
              </div>

              <a
                href="/services"
                className="group mt-8 inline-flex items-center gap-2 rounded-sm bg-brand-orange px-7 py-3.5 font-nav text-xs font-black uppercase text-white shadow-[0_14px_32px_rgba(255,138,0,0.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
              >
                Read More
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessSection