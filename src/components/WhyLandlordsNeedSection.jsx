import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  ShieldCheck,
  Sparkles,
} from "lucide-react"
import { motion } from "motion/react"

const benefitCards = [
  {
    icon: BadgeCheck,
    title: "Optimise compliance cost",
    text: (
      <>
        Optimise total{" "}
        <strong className="font-extrabold text-brand-orange">
          compliance cost
        </strong>{" "}
        through bundled visits and portfolio pricing, instead of fragmented,
        ad-hoc contractor appointments.
      </>
    ),
  },
  {
    icon: ClipboardCheck,
    title: "Streamline administration",
    text: (
      <>
        Streamline administration with{" "}
        <strong className="font-extrabold text-brand-orange">
          consolidated booking
        </strong>
        , one point of contact and coordinated reporting across{" "}
        <strong className="font-extrabold text-brand-orange">gas</strong>,{" "}
        <strong className="font-extrabold text-brand-orange">electrical</strong>
        , <strong className="font-extrabold text-brand-orange">fire</strong>{" "}
        and <strong className="font-extrabold text-brand-orange">EPC</strong>{" "}
        requirements.
      </>
    ),
  },
  {
    icon: FileText,
    title: "Strengthen legal defensibility",
    text: (
      <>
        Strengthen{" "}
        <strong className="font-extrabold text-brand-orange">
          legal defensibility
        </strong>{" "}
        because every certificate is issued by an accredited engineer or assessor
        in accordance with current{" "}
        <strong className="font-extrabold text-brand-orange">
          UK standards
        </strong>
        .
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: "Increase tenant confidence",
    text: (
      <>
        Increase{" "}
        <strong className="font-extrabold text-brand-orange">
          tenant confidence
        </strong>{" "}
        and retention by evidencing regular{" "}
        <strong className="font-extrabold text-brand-orange">
          safety checks
        </strong>{" "}
        and prompt remedial action when issues are identified.
      </>
    ),
  },
]

function WhyLandlordsNeedSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#f7f9fc_48%,#ffffff_100%)]" />
      <div className="absolute -left-32 top-12 h-80 w-80 rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-[610px]"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/15 bg-orange-50 px-4 py-2 font-nav text-xs font-black uppercase tracking-[0.14em] text-brand-orange">
              <Sparkles size={15} />
              London Landlord Compliance
            </div>

            <h2 className="mt-5 font-display text-[30px] font-black uppercase leading-[1.16] tracking-[-0.03em] text-brand-navy sm:text-[38px] lg:text-[44px]">
              Why do landlords have to get landlord{" "}
              <span className="text-brand-orange">certificates</span> in London?
            </h2>

            <div className="mt-6 space-y-5 text-[15.8px] font-medium leading-8 text-slate-700">
              <p>
                Landlords are legally required to prove that their properties
                are{" "}
                <strong className="font-extrabold text-brand-orange">
                  safe for occupation
                </strong>{" "}
                through documented checks on{" "}
                <strong className="font-extrabold text-brand-navy">
                  gas installations
                </strong>
                ,{" "}
                <strong className="font-extrabold text-brand-navy">
                  fixed electrical systems
                </strong>
                ,{" "}
                <strong className="font-extrabold text-brand-navy">
                  fire precautions
                </strong>{" "}
                and{" "}
                <strong className="font-extrabold text-brand-navy">
                  energy performance
                </strong>{" "}
                before marketing or granting a tenancy.
              </p>

              <p>
                Failure to obtain and maintain these{" "}
                <strong className="font-extrabold text-brand-orange">
                  landlord certificates
                </strong>{" "}
                can lead to civil penalties, invalidation of{" "}
                <strong className="font-extrabold text-brand-navy">
                  Section 21 notices
                </strong>
                , licence refusals, financial losses and, in serious
                circumstances, criminal prosecution.
              </p>

              <p>
                With{" "}
                <strong className="font-extrabold text-brand-orange">
                  landlordspropertychecks
                </strong>
                , landlords can manage essential{" "}
                <strong className="font-extrabold text-brand-navy">
                  London property compliance
                </strong>{" "}
                in one organised and professional process.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/book-service"
                className="group inline-flex items-center gap-2 rounded-sm bg-brand-orange px-8 py-4 font-nav text-sm font-black uppercase text-white shadow-[0_16px_38px_rgba(255,138,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
              >
                Get A Quote
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <div className="inline-flex items-center gap-2 rounded-full bg-brand-light px-5 py-3 font-nav text-sm font-black text-brand-navy">
                <CheckCircle2 size={17} className="text-brand-orange" />
                Legal safety documentation
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -left-5 top-8 hidden h-[86%] w-[3px] rounded-full bg-gradient-to-b from-brand-orange via-brand-navy/20 to-brand-orange lg:block" />

            <div className="grid gap-5">
              {benefitCards.map((card, index) => {
                const Icon = card.icon

                return (
                  <motion.article
                    key={card.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                    className="group relative overflow-hidden rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-[0_18px_55px_rgba(7,28,61,0.09)] transition-all duration-500 hover:-translate-y-1 hover:border-brand-orange/30 hover:shadow-[0_28px_75px_rgba(7,28,61,0.14)] sm:p-6"
                  >
                    <div className="absolute right-5 top-4 font-display text-[44px] font-black leading-none text-brand-navy/5 transition group-hover:text-brand-orange/10">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-13 w-13 h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-brand-orange transition-all duration-300 group-hover:bg-brand-orange group-hover:text-white">
                        <Icon size={24} />
                      </div>

                      <div>
                        <h3 className="font-display text-[19px] font-black tracking-[-0.025em] text-brand-navy">
                          {card.title}
                        </h3>

                        <p className="mt-2 text-[14.5px] font-medium leading-7 text-slate-700">
                          {card.text}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyLandlordsNeedSection