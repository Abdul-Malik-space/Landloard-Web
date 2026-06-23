import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import {
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  Flame,
  HelpCircle,
  Home,
  Leaf,
  SearchCheck,
  ShieldCheck,
  Zap,
} from "lucide-react"

const categories = [
  {
    label: "General FAQs",
    value: "General",
    icon: HelpCircle,
  },
  {
    label: "Gas",
    value: "Gas",
    icon: Flame,
  },
  {
    label: "EICR",
    value: "EICR",
    icon: Zap,
  },
  {
    label: "EPC",
    value: "EPC",
    icon: Leaf,
  },
  {
    label: "Fire Safety",
    value: "Fire",
    icon: ShieldCheck,
  },
  {
    label: "Property Types",
    value: "Property",
    icon: Home,
  },
]

const seoKeywords = [
  "Landlords Property Checks",
  "landlord certificates",
  "Gas Safety Certificate",
  "Gas Safety Check",
  "EICR",
  "Electrical Certificate",
  "PAT Testing",
  "EPC",
  "Domestic EPC",
  "Commercial EPC",
  "Fire Risk Assessment",
  "Fire Alarm Certificate",
  "Emergency Lighting Certificate",
  "Fire Door Survey",
  "Fire Extinguisher Services",
  "Asbestos Surveys",
  "London",
  "M25",
  "landlords",
  "letting agents",
  "commercial properties",
  "domestic rental properties",
  "HMO landlords",
]

const faqs = [
  {
    category: "General",
    question:
      "Which services are available from Landlords Property Checks?",
    answer:
      "Landlords Property Checks provides landlord certificates and property compliance services including Gas Safety Certificate, Electrical Certificate EICR, PAT Testing, EPC, Fire Risk Assessment, Fire Alarm Certificate, Emergency Lighting Certificate, Fire Door Survey, Fire Extinguisher Services, Asbestos Surveys, Boiler Service and Boiler Installation for domestic and commercial properties across London and M25 areas.",
  },
  {
    category: "General",
    question:
      "Can I book landlord certificates and repair services from the same page?",
    answer:
      "Yes. Landlords Property Checks allows landlords, letting agents and property owners to book multiple compliance services from one place, including Gas Safety Certificate, EICR, EPC, PAT Testing, Fire Risk Assessment, Fire Alarm Certificate, Emergency Lighting Certificate, Boiler Service and Boiler Installation.",
  },
  {
    category: "General",
    question:
      "Does Landlords Property Checks cover both London and M25 areas?",
    answer:
      "Yes. Landlords Property Checks provides landlord certificates, electrical reports, gas safety checks, EPC assessments, fire safety inspections and property compliance services across London and M25 areas for rental, domestic and commercial properties.",
  },
  {
    category: "Property",
    question:
      "Which services are available for domestic rental properties?",
    answer:
      "Domestic rental property services include Gas Safety Certificate, EICR, PAT Testing, Domestic EPC, Fire Risk Assessment where applicable, Fire Alarm Certificate, Emergency Lighting Certificate, Boiler Service, Boiler Installation and other landlord compliance services.",
  },
  {
    category: "Property",
    question:
      "Which services are available for commercial properties?",
    answer:
      "Commercial property services include Commercial Electrical Certificate, Commercial EPC, Fire Risk Assessment, Fire Alarm Certificate, Emergency Lighting Certificate, PAT Testing, Boiler Service, Boiler Installation and electrical safety support for commercial landlord premises.",
  },
  {
    category: "Property",
    question:
      "Can HMO landlords use Landlords Property Checks?",
    answer:
      "Yes. HMO landlords can use Landlords Property Checks for Gas Safety Certificate, EICR, Fire Risk Assessment, Fire Alarm Certificate, Emergency Lighting Certificate, PAT Testing, EPC and other compliance services. Fire Risk Assessment reports are often important for HMO licence applications.",
  },
  {
    category: "Property",
    question:
      "Can letting agents arrange certificates for multiple properties?",
    answer:
      "Yes. Letting agents and property managers can use Landlords Property Checks to arrange recurring landlord certificates, safety inspections, EPCs, fire safety reports, boiler services and compliance support across multiple managed properties in London and M25 areas.",
  },
  {
    category: "General",
    question:
      "What accreditations support Landlords Property Checks services?",
    answer:
      "Landlords Property Checks works with qualified and accredited engineers for gas safety, electrical inspections, energy assessment and property compliance services. This supports safer reporting for landlords, agents, homeowners and commercial property owners.",
  },
  {
    category: "Gas",
    question:
      "Can I book a Gas Safety Certificate through Landlords Property Checks?",
    answer:
      "Yes. Landlords Property Checks provides Gas Safety Certificate services in London and M25 areas. Gas safety engineers check gas appliances and provide documentation for landlords, rental properties, HMOs, flats, houses and managed properties.",
  },
  {
    category: "EICR",
    question:
      "Can I book an Electrical Certificate EICR through Landlords Property Checks?",
    answer:
      "Yes. Landlords Property Checks provides Electrical Certificate EICR services for landlords, letting agents, rental homes, HMOs, commercial premises and managed buildings. EICR reports help identify electrical safety issues and support landlord compliance.",
  },
  {
    category: "EICR",
    question:
      "Does Landlords Property Checks provide PAT Testing?",
    answer:
      "Yes. Landlords Property Checks provides PAT Testing for portable electrical equipment. This service is useful for furnished rentals, offices, HMOs, shops and landlord-supplied appliances that need safety checks.",
  },
  {
    category: "EPC",
    question:
      "Does Landlords Property Checks provide Domestic EPC services?",
    answer:
      "Yes. Landlords Property Checks provides Domestic EPC services. A qualified energy assessor checks the property energy efficiency and provides an EPC rating. This is useful for rental homes, flats, landlords, sellers and property managers.",
  },
  {
    category: "EPC",
    question:
      "Does Landlords Property Checks provide Commercial EPC services?",
    answer:
      "Yes. Landlords Property Checks provides Commercial EPC services for commercial properties in London and M25 areas. The report helps landlords, investors, occupiers and property managers understand building energy performance.",
  },
  {
    category: "Fire",
    question:
      "Does Landlords Property Checks provide Fire Risk Assessment reports?",
    answer:
      "Yes. Landlords Property Checks provides Fire Risk Assessment reports. The service identifies fire hazards and gives recommendations to reduce risk. It is relevant for HMOs, commercial premises, apartment blocks, communal areas and managed properties.",
  },
  {
    category: "Fire",
    question:
      "Does Landlords Property Checks provide Fire Alarm Certificates?",
    answer:
      "Yes. Landlords Property Checks provides Fire Alarm Certificate services. The team inspects and tests fire alarm systems, helping landlords, offices, shops, HMOs and apartment blocks meet fire safety requirements.",
  },
  {
    category: "Fire",
    question:
      "Does Landlords Property Checks provide Emergency Lighting Certificates?",
    answer:
      "Yes. Landlords Property Checks provides Emergency Lighting Certificate services for properties that require emergency lighting inspection and testing. This helps support safe evacuation and fire safety compliance.",
  },
  {
    category: "Fire",
    question:
      "Does Landlords Property Checks provide Fire Door Survey services?",
    answer:
      "Yes. Landlords Property Checks provides Fire Door Survey services. Fire door inspections check the condition of doors, seals, gaps, frames and smoke protection to help improve fire safety compliance.",
  },
  {
    category: "Fire",
    question:
      "Does Landlords Property Checks provide Fire Extinguisher Services?",
    answer:
      "Yes. Landlords Property Checks provides Fire Extinguisher Services including inspection and servicing of extinguishers for landlords, commercial properties, offices, shops, communal areas and managed buildings.",
  },
]

function highlightKeywords(text) {
  const escapedKeywords = seoKeywords
    .sort((a, b) => b.length - a.length)
    .map((keyword) => keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))

  const regex = new RegExp(`(${escapedKeywords.join("|")})`, "gi")
  const parts = text.split(regex)

  return parts.map((part, index) => {
    const matched = seoKeywords.some(
      (keyword) => keyword.toLowerCase() === part.toLowerCase()
    )

    if (!matched) return <span key={index}>{part}</span>

    return (
      <strong
        key={index}
        className="font-extrabold text-brand-navy"
      >
        {part}
      </strong>
    )
  })
}

function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("General")
  const [openIndex, setOpenIndex] = useState(0)

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => faq.category === activeCategory)
  }, [activeCategory])

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setOpenIndex(0)
  }

  return (
    <section className="relative overflow-hidden bg-[#f6f8fb] py-16 sm:py-20 lg:py-24">
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#f6f8fb_50%,#eef4fb_100%)]" />
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-8 xl:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/15 bg-orange-50 px-4 py-2 font-nav text-sm font-extrabold text-brand-orange">
              <SearchCheck size={16} />
              Help Center
            </div>

            <h2 className="mt-5 max-w-[620px] font-display text-[34px] font-black leading-[1.1] tracking-[-0.035em] text-brand-navy sm:text-[44px] lg:text-[52px]">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 max-w-[620px] text-[16px] font-medium leading-8 text-slate-600">
              Helpful answers about <strong className="text-brand-navy">landlord certificates</strong>,
              <strong className="text-brand-navy"> EICR</strong>,
              <strong className="text-brand-navy"> gas safety</strong>,
              <strong className="text-brand-navy"> EPC</strong> and property compliance services by
              <strong className="text-brand-navy"> Landlords Property Checks</strong>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="flex flex-wrap gap-3 lg:justify-end"
          >
            {categories.map((category) => {
              const Icon = category.icon
              const active = activeCategory === category.value

              return (
                <button
                  key={category.value}
                  onClick={() => handleCategoryChange(category.value)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-3 font-nav text-sm font-black transition-all duration-300 ${
                    active
                      ? "bg-brand-navy text-white shadow-[0_16px_36px_rgba(7,28,61,0.20)]"
                      : "bg-white text-brand-navy shadow-sm ring-1 ring-slate-200 hover:-translate-y-0.5 hover:text-brand-orange"
                  }`}
                >
                  <Icon size={16} />
                  {category.label}
                </button>
              )
            })}
          </motion.div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <motion.aside
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-fit rounded-[32px] bg-brand-navy p-6 text-white shadow-[0_28px_80px_rgba(7,28,61,0.22)]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange text-white shadow-lg shadow-orange-500/30">
              <BadgeCheck size={27} />
            </div>

            <h3 className="mt-5 font-display text-[28px] font-black leading-[1.12] tracking-[-0.03em]">
              Need the right certificate quickly?
            </h3>

            <p className="mt-4 text-[15px] font-medium leading-7 text-white/75">
              Book professional property checks for London and M25 areas. Our team can help with electrical, gas, fire safety, EPC and landlord compliance services.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Fast booking support",
                "Domestic & commercial properties",
                "Certified compliance services",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-brand-orange" />
                  <span className="font-nav text-sm font-extrabold text-white/90">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-brand-orange px-6 py-4 font-nav text-sm font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
            >
              Book Service
            </a>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[32px] border border-slate-200/70 bg-white p-3 shadow-[0_24px_70px_rgba(7,28,61,0.08)] sm:p-4"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.28 }}
                className="space-y-3"
              >
                {filteredFaqs.map((faq, index) => {
                  const open = openIndex === index

                  return (
                    <div
                      key={faq.question}
                      className={`overflow-hidden rounded-[24px] border transition-all duration-300 ${
                        open
                          ? "border-brand-orange/20 bg-orange-50/40"
                          : "border-slate-100 bg-white hover:bg-brand-light"
                      }`}
                    >
                      <button
                        onClick={() => setOpenIndex(open ? -1 : index)}
                        className="flex w-full items-start justify-between gap-5 px-5 py-5 text-left sm:px-6"
                      >
                        <span className="font-display text-[18px] font-black leading-7 tracking-[-0.02em] text-brand-navy sm:text-[21px]">
                          {faq.question}
                        </span>

                        <span
                          className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                            open
                              ? "bg-brand-orange text-white"
                              : "bg-brand-light text-brand-navy"
                          }`}
                        >
                          <ChevronDown
                            size={19}
                            className={`transition-transform duration-300 ${
                              open ? "rotate-180" : ""
                            }`}
                          />
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: "easeOut" }}
                          >
                            <div className="px-5 pb-5 sm:px-6">
                              <p className="max-w-[900px] text-[15.5px] font-medium leading-8 text-slate-600">
                                {highlightKeywords(faq.answer)}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection