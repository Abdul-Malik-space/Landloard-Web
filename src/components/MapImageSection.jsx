import { motion } from "motion/react"
import { MapPin } from "lucide-react"

function MapImageSection() {
  return (
    <section className="relative w-full overflow-hidden bg-brand-navy py-10 sm:py-12 lg:py-14">
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-[0_28px_90px_rgba(0,0,0,0.25)]"
        >
          <div className="absolute left-5 top-5 z-10 inline-flex items-center gap-2 rounded-full bg-brand-orange px-4 py-2 font-nav text-xs font-black uppercase tracking-[0.14em] text-white shadow-lg">
            <MapPin size={15} />
            Location Map
          </div>

          <img
            src="/map.jpeg"
            alt="Landlords Property Checks location map"
            className="h-[420px] w-full object-cover object-center sm:h-[520px] lg:h-[650px] xl:h-[720px]"
          />

          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(7,28,61,0.10)_0%,rgba(7,28,61,0)_45%,rgba(7,28,61,0.12)_100%)]" />
        </motion.div>
      </div>
    </section>
  )
}

export default MapImageSection