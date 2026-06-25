import { motion } from "motion/react"
import { ArrowRight, CalendarCheck } from "lucide-react"

const keywords = [
  "certified",
  "tenants protected",
  "certificate is overdue",
  "risk",
  "liability",
  "certification strategy",
  "legal obligations",
  "managed process",
  "landlordspropertychecks",
  "uncertainty",
  "full documentation",
  "tenants",
  "investment value",
]

const paragraphs = [
  "Every day a certificate is overdue, the risk and potential liability increase. A structured certification strategy converts legal obligations into a predictable, managed process instead of a recurring emergency.",
  "landlordspropertychecks enable owners to move quickly from uncertainty to full documentation, which protects both tenants and long-term investment value.",
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

function TenantProtectedSection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-14 text-white sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="grid overflow-hidden bg-brand-navy shadow-[0_28px_90px_rgba(7,28,61,0.24)] lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative min-h-[360px] overflow-hidden sm:min-h-[460px] lg:min-h-[500px]"
          >
            <img
              src="/tenant-protected.jpg"
              alt="Certified landlord certificate and tenant protection"
              className="h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/25 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex items-center px-6 py-12 sm:px-10 lg:px-12 xl:px-14"
          >
            <div className="max-w-[620px]">
              <h2 className="font-display text-[30px] font-black uppercase leading-[1.18] tracking-[-0.035em] text-white sm:text-[38px] lg:text-[44px]">
                Get <span className="text-brand-orange">certified</span> and keep
                your tenants protected
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
                    className="text-[16px] font-semibold leading-8 text-white/90"
                  >
                    {highlightText(paragraph)}
                  </motion.p>
                ))}
              </div>

              <motion.a
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.22, ease: "easeOut" }}
                href="/book-service"
                className="group mt-10 inline-flex items-center gap-2 rounded-sm bg-brand-orange px-9 py-4 font-nav text-sm font-black uppercase text-white shadow-[0_16px_38px_rgba(255,138,0,0.30)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
              >
                Book Now
                <CalendarCheck size={17} />
                <ArrowRight
                  size={17}
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

export default TenantProtectedSection