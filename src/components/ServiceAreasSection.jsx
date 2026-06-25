import { MapPin } from "lucide-react"
import { motion } from "motion/react"

const serviceAreas = [
  "Central London",
  "Newham",
  "Kensington and Chelsea",
  "Bexley",

  "Camden",
  "Lambeth",
  "Hounslow",
  "Waltham Forest",

  "Islington",
  "Hammersmith",
  "Southwark",
  "Sutton",

  "Westminster",
  "Fulham",
  "Hillingdon",
  "Merton",

  "Barnet",
  "Hackney",
  "Greenwich",
  "Wandsworth",

  "Brent",
  "Barking and Dagenham",
  "Ealing",
  "Kingston upon Thames",

  "Harrow",
  "Redbridge",
  "Richmond upon Thames",
  "Bromley",

  "Haringey",
  "Havering",
  "Lewisham",
  "Croydon",

  "Enfield",
  "Tower Hamlet",
]

function ServiceAreasSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.08]"
        style={{ backgroundImage: "url('/areas-map.jpg')" }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.96)_0%,rgba(245,248,252,0.92)_48%,rgba(255,255,255,0.96)_100%)]" />
      <div className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1180px] px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-[760px] text-center"
        >
          <p className="font-nav text-sm font-black uppercase tracking-[0.18em] text-brand-orange">
            London Coverage
          </p>

          <h2 className="mt-3 font-display text-[30px] font-black leading-[1.15] tracking-[-0.03em] text-brand-navy sm:text-[38px] lg:text-[44px]">
            We are available in the following{" "}
            <span className="text-brand-orange">areas</span>:
          </h2>

          <div className="mx-auto mt-5 h-[3px] w-32 rounded-full bg-brand-orange" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
          className="mt-12 rounded-[32px] border border-slate-200/80 bg-white/80 p-5 shadow-[0_24px_80px_rgba(7,28,61,0.08)] backdrop-blur-md sm:p-7 lg:p-8"
        >
          <div className="grid gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-4">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={`${area}-${index}`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.42,
                  delay: index * 0.015,
                  ease: "easeOut",
                }}
                className="group flex items-center gap-3 border-b border-dashed border-brand-orange/35 px-2 py-4 transition-all duration-300 hover:border-brand-orange"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-50 text-brand-orange transition-all duration-300 group-hover:bg-brand-orange group-hover:text-white">
                  <MapPin size={17} strokeWidth={3} />
                </span>

                <span className="font-nav text-[14px] font-extrabold text-brand-navy transition group-hover:text-brand-orange">
                  {area}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceAreasSection