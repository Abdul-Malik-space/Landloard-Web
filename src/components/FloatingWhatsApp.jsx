import { Phone } from "lucide-react"

function FloatingWhatsApp() {
  const whatsappNumber = "447723810869"
  const message =
    "Hello, I would like to book a property certificate service."

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#1ebe5d] sm:bottom-7 sm:right-7"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />

      <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366]">
        <svg
          viewBox="0 0 32 32"
          className="h-8 w-8 fill-white"
          aria-hidden="true"
        >
          <path d="M16.02 3C8.87 3 3.05 8.82 3.05 15.97c0 2.29.6 4.52 1.74 6.49L3 29l6.7-1.76a12.9 12.9 0 0 0 6.32 1.62h.01c7.15 0 12.97-5.82 12.97-12.97C29 8.82 23.18 3 16.02 3Zm0 23.67h-.01c-1.9 0-3.76-.51-5.38-1.47l-.39-.23-3.98 1.04 1.06-3.88-.25-.4a10.66 10.66 0 0 1-1.64-5.76c0-5.86 4.77-10.63 10.64-10.63 2.84 0 5.51 1.11 7.52 3.12a10.56 10.56 0 0 1 3.11 7.51c0 5.87-4.77 10.64-10.68 10.64Zm5.84-7.96c-.32-.16-1.88-.93-2.17-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1.01 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.35-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.65s1.14 3.08 1.3 3.29c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.15-1.51.26-.74.26-1.38.18-1.51-.08-.13-.29-.21-.61-.37Z" />
        </svg>
      </span>
    </a>
  )
}

export default FloatingWhatsApp