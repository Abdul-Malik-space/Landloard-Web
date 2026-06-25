import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"

const keywords = [
  "London property owners",
  "legal requirements",
  "London landlords",
  "national legislation",
  "local licensing schemes",
  "HMOs",
  "fire precautions",
  "amenity provision",
  "landlordspropertychecks",
  "property-specific requirements",
  "certificates",
  "inspections",
  "mixed portfolios",
  "single lets",
  "blocks with communal areas",
  "inspection regimes",
  "enforcement bodies",
]

const paragraphs = [
  "London landlords must navigate a layered framework that includes national legislation, local licensing schemes and, for HMOs, additional standards on fire precautions and amenity provision.",
  "landlordspropertychecks distils these obligations into clear, property-specific requirements, so owners understand precisely which certificates and inspections apply to each asset type.",
  "This clarity is particularly valuable for mixed portfolios, where single lets, HMOs and blocks with communal areas may fall under different inspection regimes and enforcement bodies.",
]

function highlightText(text) {
  const escapedKeywords = keywords
    .sort((a, b) => b.length - a.length)
    .map((keyword) => keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))

  const regex = new RegExp(`(${escapedKeywords.join("|")})`, "gi")
  const parts = text.split(regex)

  return parts.map((part, index) => {
    const matched = keywords.some(
      (keyword) => keyword.toLowerCase() === part.toLowerCase()
    )

    if (!matched) return <span key={index}>{part}</span>

    return (
      <strong key={index} className="font-extrabold text-brand-orange">
        {part}
      </strong>
    )
  })
}

function LegalRequirementsSection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-14 text-white sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="grid overflow-hidden rounded-[2px] bg-brand-navy shadow-[0_28px_90px_rgba(7,28,61,0.22)] lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative min-h-[430px] overflow-hidden sm:min-h-[560px] lg:min-h-[650px]"
          >
            <img
              src="/why-choose-main.jpg"
              alt="London property owner compliance inspection"
              className="h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/25 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex items-center px-6 py-12 sm:px-10 lg:px-12 xl:px-14"
          >
            <div className="max-w-[610px]">
              <h2 className="font-display text-[30px] font-black uppercase leading-[1.22] tracking-[-0.035em] text-white sm:text-[38px] lg:text-[42px] xl:text-[46px]">
                Helping{" "}
                <span className="text-brand-orange">
                  London property owners
                </span>{" "}
                meet legal requirements
              </h2>

              <div className="mt-7 space-y-6">
                {paragraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                    className="text-[16px] font-semibold leading-8 text-white/88 sm:text-[17px]"
                  >
                    {highlightText(paragraph)}
                  </motion.p>
                ))}
              </div>

              <motion.a
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
                href="/book-service"
                className="group mt-9 inline-flex items-center gap-2 rounded-sm bg-brand-orange px-9 py-4 font-nav text-sm font-black uppercase text-white shadow-[0_16px_38px_rgba(255,138,0,0.30)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
              >
                Get A Quote
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LegalRequirementsSection