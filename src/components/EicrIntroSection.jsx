import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"

const sectionData = {
  image: "/eicr-main.jpg",
  eyebrow: "London Property Compliance",
  titleBefore: "Top-Rated Landlord",
  highlightedTitle: "Certificate",
  titleAfter: "Provider in London",
  paragraphs: [
    <>
      <strong className="font-extrabold text-brand-navy">
        Landlords Property Checks
      </strong>{" "}
      provides a complete suite of legal{" "}
      <strong className="font-extrabold text-brand-navy">
        landlord certificates
      </strong>{" "}
      and{" "}
      <strong className="font-extrabold text-brand-navy">
        property compliance services
      </strong>{" "}
      for landlords across Greater London. London landlords can arrange{" "}
      <span className="font-extrabold text-brand-orange">
        Gas Safety Certificate
      </span>
      ,{" "}
      <span className="font-extrabold text-brand-orange">
        EICR Electrical Safety Report
      </span>
      ,{" "}
      <span className="font-extrabold text-brand-orange">EPC Certificate</span>{" "}
      and fire-related documentation from one trusted provider.
    </>,
    <>
      Our services support rental properties, HMOs, letting agents, homeowners
      and commercial premises. Every report is designed to help landlords meet
      safety obligations, reduce compliance delays and keep properties ready for
      tenants, agents, local authorities and insurers.
    </>,
    <>
      Whether you need an{" "}
      <strong className="font-extrabold text-brand-navy">
        EICR Certificate in London
      </strong>
      ,{" "}
      <strong className="font-extrabold text-brand-navy">
        Gas Safety Check
      </strong>
      ,{" "}
      <strong className="font-extrabold text-brand-navy">
        Fire Risk Assessment
      </strong>
      ,{" "}
      <strong className="font-extrabold text-brand-navy">PAT Testing</strong>{" "}
      or{" "}
      <strong className="font-extrabold text-brand-navy">
        Energy Performance Certificate
      </strong>
      , our team makes the process simple, clear and professional.
    </>,
  ],
}

const fadeLeft = {
  hidden: { opacity: 0, x: -36 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

const fadeRight = {
  hidden: { opacity: 0, x: 36 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
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

function EicrIntroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#f7f9fc_52%,#ffffff_100%)]" />
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:gap-12 xl:gap-14">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[6px] bg-white shadow-[0_20px_65px_rgba(7,28,61,0.10)]">
              <img
                src={sectionData.image}
                alt="Landlord certificates including gas safety, EICR, EPC, PAT testing and fire risk assessment"
                className="h-[330px] w-full object-cover sm:h-[430px] lg:h-[520px]"
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-[620px] lg:ml-auto"
          >
            <motion.p
              variants={fadeUp}
              className="font-nav text-sm font-black uppercase tracking-[0.18em] text-brand-orange"
            >
              {sectionData.eyebrow}
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-3 font-display text-[30px] font-black uppercase leading-[1.14] tracking-[-0.03em] text-brand-navy sm:text-[38px] lg:text-[42px]"
            >
              {sectionData.titleBefore}{" "}
              <span className="text-brand-orange">
                {sectionData.highlightedTitle}
              </span>{" "}
              {sectionData.titleAfter}
            </motion.h2>

            <div className="mt-6 space-y-5">
              {sectionData.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={fadeUp}
                  className="text-[16px] font-medium leading-8 text-slate-700"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div variants={fadeUp} className="mt-8">
              <a
                href="/book-service"
                className="group inline-flex items-center gap-2 rounded-sm bg-brand-orange px-8 py-4 font-nav text-sm font-black uppercase tracking-[0.02em] text-white shadow-[0_16px_38px_rgba(255,138,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
              >
                Get A Quote
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default EicrIntroSection