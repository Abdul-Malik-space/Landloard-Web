import { motion } from "motion/react"
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react"

const aboutLinks = [
  { label: "Home", href: "/" },
  { label: "Contact Us", href: "/contact" },
  { label: "Services", href: "/services" },
  { label: "Health and Safety", href: "/health-and-safety" },
  { label: "Fire Management", href: "/fire-services" },
]

const serviceLinks = [
  { label: "Electrical Services", href: "/electrical-services" },
  { label: "Gas Services", href: "/gas-services" },
  { label: "Fire Services", href: "/fire-services" },
  { label: "Book Services", href: "/book-service" },
  { label: "Gas Safety Check", href: "/gas-safety-check" },
]

const socialLinks = [
  { label: "Facebook", text: "f", href: "#" },
  { label: "Twitter / X", text: "X", href: "#" },
  { label: "YouTube", text: "▶", href: "#" },
  { label: "Instagram", text: "◎", href: "#" },
]

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#062f45] text-white">
      <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-white/5" />
      <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_30%)]" />

      <div className="relative mx-auto max-w-[1320px] px-5 py-14 lg:px-8 lg:py-16 xl:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <a href="/" className="inline-flex">
              <img
                src="/logo.png"
                alt="Landlords Property Checks"
                className="h-16 w-auto object-contain"
              />
            </a>

            <p className="mt-5 max-w-[360px] text-[15.5px] font-medium leading-8 text-white/78">
              Landlords Property Checks is a dynamic and innovative inspection
              company dedicated to providing reliable property compliance
              solutions.
            </p>

            <form className="mt-8 max-w-[360px]">
              <label className="sr-only" htmlFor="footer-email">
                Your email address
              </label>

              <div className="flex items-center border-b border-white/20 pb-3">
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-transparent text-sm font-semibold text-white outline-none placeholder:text-white/75"
                />

                <button
                  type="submit"
                  className="ml-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white transition hover:bg-orange-500"
                  aria-label="Subscribe"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand-orange"
                >
                  <span className="font-nav text-sm font-black">
                    {item.text}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <h3 className="font-display text-2xl font-black tracking-[-0.025em]">
              About Company
            </h3>
            <div className="mt-4 h-[2px] w-16 bg-white/35" />

            <ul className="mt-8 space-y-4">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-3 text-[15px] font-semibold text-white/82 transition hover:text-brand-orange"
                  >
                    <span className="h-[2px] w-3 bg-white/70 transition group-hover:w-5 group-hover:bg-brand-orange" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.16 }}
          >
            <h3 className="font-display text-2xl font-black tracking-[-0.025em]">
              Our Service
            </h3>
            <div className="mt-4 h-[2px] w-16 bg-white/35" />

            <ul className="mt-8 space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-3 text-[15px] font-semibold text-white/82 transition hover:text-brand-orange"
                  >
                    <span className="h-[2px] w-3 bg-white/70 transition group-hover:w-5 group-hover:bg-brand-orange" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.24 }}
          >
            <h3 className="font-display text-2xl font-black tracking-[-0.025em]">
              Contact
            </h3>
            <div className="mt-4 h-[2px] w-16 bg-white/35" />

            <div className="mt-8 space-y-6">
              <a href="tel:02038352087" className="group flex gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-orange transition group-hover:bg-brand-orange group-hover:text-white">
                  <Phone size={22} />
                </div>

                <div>
                  <p className="font-nav text-xs font-black uppercase tracking-[0.15em] text-white/75">
                    Contact Us
                  </p>
                  <p className="mt-1 text-lg font-extrabold text-white">
                    020 3835 2087
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@landlordspropertychecks.co.uk"
                className="group flex gap-4"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-orange transition group-hover:bg-brand-orange group-hover:text-white">
                  <Mail size={22} />
                </div>

                <div>
                  <p className="font-nav text-xs font-black uppercase tracking-[0.15em] text-white/75">
                    Email
                  </p>
                  <p className="mt-1 break-all text-[16px] font-extrabold text-white">
                    info@landlordspropertychecks.co.uk
                  </p>
                </div>
              </a>

              <div className="flex gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-orange">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="font-nav text-xs font-black uppercase tracking-[0.15em] text-white/75">
                    Office Location
                  </p>
                  <p className="mt-1 text-[16px] font-extrabold leading-7 text-white">
                    12 Montpelier Place, London, E1 0DB, United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="flex items-center gap-2 text-sm font-medium text-white/75">
              <ShieldCheck size={17} className="text-brand-orange" />
              © Copyright 2026. Designed by{" "}
              <span className="font-extrabold text-white">Abdul Malik</span>
            </p>

            <div className="flex flex-wrap items-center gap-5">
              {[
                { label: "Terms & Condition", href: "/terms-and-conditions" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-white/75 transition hover:text-brand-orange"
                >
                  {item.label}
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer