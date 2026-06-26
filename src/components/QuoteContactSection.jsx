import { Mail, Phone, MessageCircle, ChevronDown, Send } from "lucide-react"
import { motion } from "motion/react"

const serviceOptions = [
  "Multiple Services",
  "Gas Safety Certificate",
  "Electrical Certificate EICR",
  "Domestic EPC",
  "PAT Testing",
  "Fire Risk Assessment",
  "Fire Alarm Certificate",
  "Emergency Lighting Certificate",
  "Boiler Service",
  "Boiler Installation",
  "Commercial Electrical Certificate",
  "Commercial EPC",
  "Plumbing Services",
]

const keywords = [
  "landlord certificates",
  "landlord safety inspection",
  "property compliance obligations",
  "EICR",
  "Gas Safety Check",
  "EPC",
  "boiler servicing",
  "plumbing repairs",
  "fuse box upgrades",
  "landlords",
  "letting agents",
  "property managers",
  "London",
  "regulatory standards",
  "landlordspropertychecks",
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

function QuoteContactSection() {
  const description =
    "Need to schedule a landlord safety inspection or have questions about your property compliance obligations? Get in touch with landlordspropertychecks for expert advice and fast, certified services. Whether you’re booking an EICR, Gas Safety Check, EPC, or need support with boiler servicing, plumbing repairs, or fuse box upgrades, our team is ready to assist. We help landlords, letting agents, and property managers across London stay legally compliant and inspection-ready. Call now, request a quote, or book an inspection online we’re here to ensure your property meets all regulatory standards."

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#f8fafc_50%,#ffffff_100%)]" />
      <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-brand-blue/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1160px] px-4 sm:px-5 lg:px-8">
        <div className="grid min-w-0 items-start gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="min-w-0 pt-1"
          >
            <h2 className="max-w-[560px] font-display text-[25px] font-black uppercase leading-[1.25] tracking-[-0.03em] text-brand-navy sm:text-[34px] lg:text-[42px]">
              Contact us to schedule your landlord{" "}
              <span className="text-brand-orange">certificates</span> in London
            </h2>

            <p className="mt-5 max-w-[560px] text-[14.5px] font-medium leading-7 text-slate-700 sm:mt-7 sm:text-[15.5px]">
              {highlightText(description)}
            </p>

            <div className="mt-8 space-y-4 sm:mt-9">
              <a
                href="mailto:info@landlordspropertychecks.co.uk"
                className="group flex min-w-0 max-w-[520px] items-center gap-4 sm:gap-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[4px] border-l-[5px] border-brand-orange bg-white text-brand-navy shadow-[0_10px_28px_rgba(7,28,61,0.08)] transition-all duration-300 group-hover:bg-brand-orange group-hover:text-white sm:h-14 sm:w-14 sm:border-l-[6px]">
                  <Mail size={22} />
                </span>

                <span className="min-w-0 break-all text-[14px] font-semibold text-brand-navy sm:text-[18px]">
                  info@landlordspropertychecks.co.uk
                </span>
              </a>

              <a
                href="tel:02081239487"
                className="group flex min-w-0 max-w-[520px] items-center gap-4 sm:gap-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[4px] border-l-[5px] border-brand-orange bg-white text-brand-navy shadow-[0_10px_28px_rgba(7,28,61,0.08)] transition-all duration-300 group-hover:bg-brand-orange group-hover:text-white sm:h-14 sm:w-14 sm:border-l-[6px]">
                  <Phone size={22} />
                </span>

                <span className="text-[15px] font-semibold text-brand-navy sm:text-[18px]">
                  020 8123 9487
                </span>
              </a>

              <a
                href="https://wa.me/447723810869"
                target="_blank"
                rel="noreferrer"
                className="group flex min-w-0 max-w-[520px] items-center gap-4 sm:gap-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[4px] border-l-[5px] border-brand-orange bg-white text-brand-navy shadow-[0_10px_28px_rgba(7,28,61,0.08)] transition-all duration-300 group-hover:bg-brand-orange group-hover:text-white sm:h-14 sm:w-14 sm:border-l-[6px]">
                  <MessageCircle size={22} />
                </span>

                <span className="text-[15px] font-semibold text-brand-navy sm:text-[18px]">
                  07723 810869
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full min-w-0 rounded-[16px] bg-[#f7f7f7] p-4 shadow-[0_22px_70px_rgba(7,28,61,0.08)] sm:p-6 lg:p-8"
          >
            <div className="mb-6 sm:mb-8">
              <p className="font-nav text-[10px] font-black uppercase tracking-[0.18em] text-slate-400 sm:text-[11px]">
                Estimate Form
              </p>

              <h3 className="mt-2 border-l-[3px] border-brand-orange pl-3 font-display text-[26px] font-black tracking-[-0.035em] text-brand-navy sm:text-[34px]">
                Get Free Quote
              </h3>
            </div>

            <form className="space-y-3.5 sm:space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="h-12 w-full rounded-none border border-slate-200 bg-white px-4 text-sm font-medium text-brand-navy outline-none transition placeholder:text-slate-400 focus:border-brand-orange"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="h-12 w-full rounded-none border border-slate-200 bg-white px-4 text-sm font-medium text-brand-navy outline-none transition placeholder:text-slate-400 focus:border-brand-orange"
              />

              <div className="grid gap-3.5 sm:grid-cols-2 sm:gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="h-12 w-full rounded-none border border-slate-200 bg-white px-4 text-sm font-medium text-brand-navy outline-none transition placeholder:text-slate-400 focus:border-brand-orange"
                />

                <input
                  type="text"
                  name="postcode"
                  placeholder="Postcode"
                  className="h-12 w-full rounded-none border border-slate-200 bg-white px-4 text-sm font-medium text-brand-navy outline-none transition placeholder:text-slate-400 focus:border-brand-orange"
                />
              </div>

              <div className="relative">
                <select
                  name="service"
                  defaultValue=""
                  className="h-12 w-full appearance-none rounded-none border border-slate-200 bg-white px-4 pr-10 text-sm font-medium text-brand-navy outline-none transition focus:border-brand-orange"
                >
                  <option value="" disabled>
                    -- Select Service --
                  </option>

                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={18}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-brand-navy"
                />
              </div>

              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                className="w-full resize-none rounded-none border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-brand-navy outline-none transition placeholder:text-slate-400 focus:border-brand-orange"
              />

              <div className="flex h-[58px] w-full max-w-[260px] items-center gap-3 border border-slate-300 bg-white px-3 sm:w-[260px]">
                <span className="h-6 w-6 shrink-0 border border-slate-500 bg-white" />

                <span className="text-xs font-medium text-slate-700">
                  I'm not a robot
                </span>

                <span className="ml-auto text-[9px] leading-tight text-slate-400">
                  reCAPTCHA
                </span>
              </div>

              <button
                type="submit"
                className="group flex h-12 w-full items-center justify-center gap-2 border border-brand-navy bg-brand-orange font-nav text-sm font-black uppercase text-brand-navy transition-all duration-300 hover:bg-brand-navy hover:text-white"
              >
                Submit
                <Send
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default QuoteContactSection