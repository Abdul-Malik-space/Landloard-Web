import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "motion/react"
import { ChevronDown, Menu, ShieldCheck, X } from "lucide-react"
import { menuItems } from "../data/menuItems"

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null)
  const location = useLocation()

  const isParentActive = (item) => {
    if (location.pathname === item.path) return true
    return item.children?.some((child) => location.pathname === child.path)
  }

  const toggleMobileDropdown = (label) => {
    setOpenMobileDropdown((current) => (current === label ? null : label))
  }

  const closeMobileMenu = () => {
    setMobileOpen(false)
    setOpenMobileDropdown(null)
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white shadow-[0_12px_45px_rgba(7,28,61,0.10)]">
      <div className="mx-auto flex h-[88px] w-full max-w-[1440px] items-center justify-between px-5 lg:px-8 xl:px-10">
        <NavLink to="/" className="flex shrink-0 items-center">
          <img
            src="/logo.png"
            alt="Landlords Property Checks"
            className="h-[54px] w-[170px] object-contain object-left"
          />
        </NavLink>

        <nav className="hidden items-center gap-1.5 font-nav lg:flex">
          {menuItems.map((item) => {
            const active = isParentActive(item)

            return (
              <div key={item.label} className="group relative">
                <NavLink
                  to={item.path}
                  className={`relative flex items-center gap-1.5 rounded-full px-3.5 py-3 text-[13.5px] font-extrabold leading-none transition-all duration-300 xl:px-4 ${
                    active
                      ? "bg-orange-50 text-brand-orange"
                      : "text-brand-navy hover:bg-orange-50 hover:text-brand-orange"
                  }`}
                >
                  <span className="whitespace-nowrap">{item.label}</span>

                  {item.children && (
                    <ChevronDown
                      size={14}
                      strokeWidth={3}
                      className="mt-0.5 transition-transform duration-300 group-hover:rotate-180"
                    />
                  )}

                  {active && (
                    <span className="absolute -bottom-1 left-1/2 h-[3px] w-7 -translate-x-1/2 rounded-full bg-brand-orange" />
                  )}
                </NavLink>

                {item.children && (
                  <div className="invisible absolute left-1/2 top-[calc(100%+12px)] w-[315px] -translate-x-1/2 translate-y-4 rounded-[22px] border border-slate-100 bg-white p-2 opacity-0 shadow-[0_25px_70px_rgba(7,28,61,0.16)] transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-slate-100 bg-white" />

                    <div className="relative space-y-1">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.label}
                          to={child.path}
                          className={({ isActive }) =>
                            `group/item flex items-center justify-between rounded-2xl px-4 py-3.5 text-[14px] font-extrabold transition-all duration-300 ${
                              isActive
                                ? "bg-brand-orange text-white shadow-lg shadow-orange-500/20"
                                : "text-slate-700 hover:bg-brand-light hover:text-brand-orange"
                            }`
                          }
                        >
                          <span>{child.label}</span>

                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-sm text-brand-navy transition-all duration-300 group-hover/item:bg-brand-orange group-hover/item:text-white">
                            →
                          </span>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        <div className="hidden shrink-0 items-center lg:flex">
          <NavLink
            to="/book-service"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-3.5 font-nav text-[13.5px] font-black leading-none text-white shadow-[0_15px_35px_rgba(255,138,0,0.32)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:shadow-[0_20px_45px_rgba(255,138,0,0.42)] xl:px-6"
          >
            <ShieldCheck size={17} strokeWidth={3} />
            <span className="whitespace-nowrap">Book Now</span>
          </NavLink>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy text-white shadow-lg lg:hidden"
          aria-label="Open menu"
        >
          <Menu />
        </button>
      </div>

      <div className="h-[4px] w-full bg-gradient-to-r from-brand-navy via-brand-orange to-brand-navy" />

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 z-50 bg-brand-navy/70 backdrop-blur-sm lg:hidden"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="fixed right-0 top-0 z-50 h-full w-[90%] max-w-[390px] overflow-y-auto bg-white p-6 shadow-2xl lg:hidden"
            >
              <div className="mb-7 flex items-center justify-between">
                <img
                  src="/logo.png"
                  alt="Landlords Property Checks"
                  className="h-14 w-44 object-contain object-left"
                />

                <button
                  onClick={closeMobileMenu}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-navy text-white"
                  aria-label="Close menu"
                >
                  <X />
                </button>
              </div>

              <div className="space-y-3 font-nav">
                {menuItems.map((item) => {
                  const hasChildren = Boolean(item.children?.length)
                  const dropdownOpen = openMobileDropdown === item.label
                  const active = isParentActive(item)

                  return (
                    <div
                      key={item.label}
                      className={`overflow-hidden rounded-3xl p-2 transition-all duration-300 ${
                        active ? "bg-orange-50" : "bg-brand-light"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <NavLink
                          to={item.path}
                          onClick={() => {
                            if (!hasChildren) closeMobileMenu()
                          }}
                          className={({ isActive }) =>
                            `flex min-h-[52px] flex-1 items-center rounded-2xl px-4 font-black transition ${
                              isActive || active
                                ? "text-brand-orange"
                                : "text-brand-navy"
                            }`
                          }
                        >
                          {item.label}
                        </NavLink>

                        {hasChildren && (
                          <button
                            type="button"
                            onClick={() => toggleMobileDropdown(item.label)}
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${
                              dropdownOpen
                                ? "bg-brand-orange text-white"
                                : "bg-white text-brand-navy"
                            }`}
                            aria-label={`Toggle ${item.label} submenu`}
                          >
                            <ChevronDown
                              size={18}
                              strokeWidth={3}
                              className={`transition-transform duration-300 ${
                                dropdownOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      <AnimatePresence initial={false}>
                        {hasChildren && dropdownOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <div className="mt-2 space-y-1 border-t border-slate-200 px-2 pt-2">
                              {item.children.map((child) => (
                                <NavLink
                                  key={child.label}
                                  to={child.path}
                                  onClick={closeMobileMenu}
                                  className={({ isActive }) =>
                                    `block rounded-2xl px-4 py-3 text-sm font-extrabold transition ${
                                      isActive
                                        ? "bg-brand-orange text-white"
                                        : "text-slate-600 hover:bg-white hover:text-brand-orange"
                                    }`
                                  }
                                >
                                  {child.label}
                                </NavLink>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>

              <NavLink
                to="/book-service"
                onClick={closeMobileMenu}
                className="mt-7 flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-4 font-nav font-black text-white shadow-lg shadow-orange-500/30"
              >
                <ShieldCheck size={18} />
                Book Service
              </NavLink>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar